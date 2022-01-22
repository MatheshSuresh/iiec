import PDFDocument from "pdfkit";
import fs from "fs";

// function generateInvoiceTable(doc, invoice) {
//   let i,
//     invoiceTableTop = 330;

//   for (i = 0; i < invoice.items.length; i++) {
//     const item = invoice.items[i];
//     const position = invoiceTableTop + (i + 1) * 30;
//     generateTableRow(
//       doc,
//       position,
//       item.item,
//       item.description,
//       item.amount / item.quantity,
//       item.quantity,
//       item.amount
//     );
//   }
// }
// function generateTableRow(doc, y, c1, c2, c3, c4, c5) {
//   doc
//     .fontSize(10)
//     .text(c1, 50, y)
//     .text(c2, 150, y)
//     .text(c3, 280, y, { width: 90, align: "right" })
//     .text(c4, 370, y, { width: 90, align: "right" })
//     .text(c5, 0, y, { align: "right" });
// }
function generateCustomerInformation(doc, invoice) {
  const shipping = invoice.shipping;

  //   Current Date
  //   let d = new Date(date),
  //     month = "" + (d.getMonth() + 1),
  //     day = "" + d.getDate(),
  //     year = d.getFullYear();

  //   if (month.length < 2) month = "0" + month;
  //   if (day.length < 2) day = "0" + day;

  //   const dat = `${year}- ${month}  - ${day}`;
  //   console.log(dat);

  doc
    .text(`Invoice Number:`, 50, 200)
    .text(`${invoice.invoice_nr}`, 150, 200)
    .text(`Invoice Date:      `, 50, 215)
    .text(`${new Date().toLocaleDateString("en-US")}`, 150, 215)
    .text(`Balance Due:      `, 50, 230)
    .text(`${invoice.subtotal - invoice.paid}`, 150, 230)

    .text(shipping.name, 300, 200)
    .text(shipping.address, 300, 215)
    .text(`${shipping.city}, ${shipping.state}, ${shipping.country}`, 300, 230)
    .moveDown();
}
function generateHeader(doc) {
  doc
    .font("Helvetica-Bold")
    .fillColor("#444444")
    .fontSize(28)
    .text("IIEC", 50, 57)
    .fontSize(10)
    .text("123 Main Street", 200, 65, { align: "right" })
    .text("New York, NY, 10025", 200, 80, { align: "right" })
    .moveDown();
}

function generateFooter(doc) {
  doc
    .fontSize(10)
    .text(
      "Payment is due within 15 days. Thank you for your business.",
      50,
      780,
      { align: "center", width: 500 }
    );
}

// save the pdf file in the directory
export const pdf = (invoice, path) => {
  let doc = new PDFDocument({ margin: 50 });

  generateHeader(doc);
  generateCustomerInformation(doc, invoice);

  doc.fillColor("#444444").fontSize(20).text("Invoice", 50, 145);
  doc
    .fillColor("#444444")
    .moveTo(50, 260) // this is your starting position of the line, from the left side of the screen 200 and from top 200
    .lineTo(570, 260) // this is the end point the line
    .dash(5, { space: 10 }) // here we are formatting it to dash
    .stroke();
  doc
    .fillColor("#444444")
    .moveTo(50, 180) // this is your starting position of the line, from the left side of the screen 200 and from top 200
    .lineTo(570, 180) // this is the end point the line
    .dash(5, { space: 10 }) // here we are formatting it to dash
    .stroke();

  // .dash(5, { space: 10 }) //adding dash
  //   generateInvoiceTable(doc, invoice);
  //   generateFooter(doc);

  doc.end();
  doc.pipe(fs.createWriteStream(path));
};
//   const doc = new pdfDocument({ marin: 50 });
//   doc.pipe(fs.createWriteStream("output.pdf"));

//   doc.end();
//   doc
//     .fillColor("#444444")
//     .fontSize(20)
//     .text("IIEC", 110, 57)
//     .fontSize(10)
//     .text("123 Main Street", 200, 65, { align: "right" })
//     .text("New York, NY, 10025", 200, 80, { align: "right" })
//     .moveDown();

//   //   doc.fontSize(25).text("Some text with an embedded font!", 100, 100);

//   const shipping = invoice.shipping;

//   doc
//     .fontSize(10)
//     .text(`Invoice Number: ${invoice.invoice_nr}`, 50, 200)
//     .text(`Invoice Date: ${new Date()}`, 50, 215)
//     .text(`Balance Due: ${invoice.subtotal - invoice.paid}`, 50, 130)

//     .text(shipping.name, 300, 200)
//     .text(shipping.address, 300, 215)
//     .text(`${shipping.city}, ${shipping.state}, ${shipping.country}`, 300, 130)
//     .moveDown();

//   doc
//     .fontSize(10)
//     .text(
//       "Payment is due within 15 days. Thank you for your business.",
//       50,
//       780,
//       { align: "center", width: 500 }
//     );
