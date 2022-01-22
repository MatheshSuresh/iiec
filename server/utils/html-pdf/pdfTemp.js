export const pdfTemp = ({
  shippingAddress,
  createdAt,
  paymentMethod,
  _id,
  orderItems,
  taxPrice,
  shippingPrice,
  paymentCharge,
  totalPrice,
}) => {
  // const { _id, paymentMethod, shippingAddress, createdAt } = body;

  // console.log(paymentMethod, _id, shippingAddress);

  return `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />
    <title>Invoice</title>
  </head>
  <style>
    body {
      margin-top: 20px;
      background: #eee;
    }
    .main_title {
      text-align: center;
      font-weight: 700;
      font-size: 36px;
      color: #000;
    }
    .invoice {
      padding: 30px;
    }

    .invoice h2 {
      margin-top: 0px;
      line-height: 0.8em;
      color: #000;
    }

    .invoice .small {
      font-weight: 300;
    }

    .invoice hr {
      margin-top: 10px;
      border-color: #ddd;
    }

    .invoice .table tr.line {
      border-bottom: 1px solid #ccc;
    }

    .invoice .table td {
      border: none;
    }

    .invoice .identity {
      margin-top: 10px;
      font-size: 1.1em;
      font-weight: 300;
    }

    .invoice .identity strong {
      font-weight: 600;
    }

    .grid {
      position: relative;
      width: 100%;
      background: #fff;
      color: #000;
      border-radius: 2px;
      margin-bottom: 25px;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }
    .bold {
      font-size: 18px;
      font-weight: 600;
    }
     .table-striped > tbody > tr:nth-of-type(odd) {
      --bs-table-accent-bg: #fff;
      color: #000;
    }
  </style>
  <body>
    <div class="container">
      <div class="row">
        <!-- BEGIN INVOICE -->
        <div class="col-xs-12">
          <div class="grid invoice">
            <div class="grid-body">
              <div class="invoice-title">
                <div class="row">
                  <div class="col-xs-12 main_title">IIEC</div>
                </div>
                <br />
                <div class="row">
                  <div class="col-xs-12">
                    <h2>
                      invoice<br />
                      <span class="small">order #${_id}</span>
                    </h2>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xs-6 text-right">
                  <address>
                    <strong>Shipped To:</strong><br />
                    ${shippingAddress.firstName} ${
    shippingAddress.lastName
  }<br />
                    ${shippingAddress.address}<br />
                    ${shippingAddress.city}-${shippingAddress.zip}<br />
                    ${shippingAddress.phone}"
                  </address>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-6">
                  <address>
                    <strong>Payment Method:</strong><br />
                    ${paymentMethod}<br />
                   
                  </address>
                </div>
                <div class="col-xs-6 text-right">
                  <address>
                    <strong>Order Date:</strong><br />
                    ${createdAt.slice(0, 10)}
                  </address>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <h3>ORDER SUMMARY</h3>
                  <table class="table table-striped">
                    <thead>
                      <tr class="line">
                        
                        <td class="text-center"><strong>PRODUCT</strong></td>
                        <td class="text-center"><strong>QTY</strong></td>
                        <td colspan='2' class="text-center"><strong>PRICE</strong></td>
                        <td class="text-right"><strong>SUBTOTAL</strong></td>
                      </tr>
                    </thead>
                    <tbody>
                    ${orderItems.map(
                      (item) =>
                        `<tr class='flex'>
                        <td>
                          <strong>${item.name}</strong>
                        </td>
                        <td class='text-center bold'>${item.qty}</td>
                        <td colspan='2' class='text-center bold'>
                          ${item.price} x ${item.qty}
                        </td>
                        <td class='text-right bold'>
                         
                        ${item.qty * item.price}
                    
                        </td>
                      </tr>`
                    )}
                      
                    
                   
                        
                          
                        
                      <tr>
                        <td colspan="3"></td>
                        <td class="text-right"><strong>Taxes</strong></td>
                        <td class="text-right">৳ <strong> ${taxPrice}</strong></td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td style="width: 180px" class="text-right">
                          <strong>Payment Charge</strong>
                        </td>
                        <td class="text-right">৳ <strong> ${paymentCharge}</strong></td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td class="text-right">
                          <strong>Delivery Charge</strong>
                        </td>
                        <td class="text-right">৳ <strong> ${shippingPrice}</strong></td>
                      </tr>
                      <tr>
                        <td colspan="3"></td>
                        <td class="text-right"><strong>Total</strong></td>
                        <td class="text-right">৳ <strong> ${totalPrice}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-right identity">
                  <p>Author Signature <br /><strong>Fahim Arif</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END INVOICE -->
      </div>
    </div>
  </body>
</html>

`;
};
