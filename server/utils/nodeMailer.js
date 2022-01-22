import nodemailer from "nodemailer";
import path from "path";

const __dirname = path.resolve();
export const mailRegister = (name, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "frstorebd@gmail.com",
      pass: "sunlite.1245209", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: "frstorebd@gmail.com",
    to: email,
    subject: "User Registration",
    html: `<p>Hello ${name}, You have successfully created an account in IIEC. Stay Tuned. Thank you </p>`,
    attachments: [
      {
        filename: "invoice-614be88ec618391b6041289b.pdf",
        path: path.join(
          __dirname,
          "invoices",
          "invoice-614be88ec618391b6041289b.pdf"
        ),
        contentType: "application/pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const mailInvoice = (name, email) => {
  console.log(name);
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "frstorebd@gmail.com",
      pass: "sunlite.1245209", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: "frstorebd@gmail.com",
    to: email,
    subject: "Invoice",
    html: `<p>Your order has been successfully placed. Please download the invoice attached below. Thank you.</p>`,
    attachments: [
      {
        filename: "invoice-614be88ec618391b6041289b.pdf",
        path: path.join(
          __dirname,
          "invoices",
          "invoice-614be88ec618391b6041289b.pdf"
        ),
        contentType: "application/pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
