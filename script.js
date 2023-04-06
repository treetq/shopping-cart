var items = [
  {
    name: "Apple",
    quantity: 1,
    unitPrice: 550,
    totalPrice: 550,
  },
  {
    name: "Orange",
    quantity: 2,
    unitPrice: 200,
    totalPrice: 400,
  },
  {
    name: "Milk",
    quantity: 4,
    unitPrice: 25,
    totalPrice: 100,
  },
  {
    name: "Water",
    quantity: 6,
    unitPrice: 35,
    totalPrice: 35 * 6,
  },
];

function remove(index) {
  var yes = confirm("Are you sure you want to delete this item?");
  if (!yes) return;
  items.splice(index, 1);
  renderCart();
}

function updateQuantity(index, newQuantity) {
  if (newQuantity < 0) return;
  items[index].quantity = newQuantity;
  items[index].totalPrice = newQuantity * items[index].unitPrice;
  renderCart();
}

function addItem(name, quantity, unitPrice) {
  document.getElementById("addItem").style.display = "flex";

  //console.log(name, quantity, unitPrice);
  // var random = Math.trunc(Math.random() * 30000);
  // var newItem = {
  //   name: random.toString(36),
  //   quantity: 1,
  //   unitPrice: 200,
  //   totalPrice: 200,
  // };
  // items.push(newItem);
  // renderCart();
}

// function validate() {
//   var text = document.createElement("div");

//   text.style.backgroundColor = "red";
//   text.style.width = "100%";
//   text.style.padding = "10px";

//   if (isNaN(quantity)) {
//     text.innerHTML = "Input not valid";
//   } else {
//     text.innerHTML = "Input OK";
//   }
// }

function adding(name, quantity, unitPrice /*e*/) {
  //e.preventDefault();
  console.log(name, quantity, unitPrice);

  items.push({
    name,
    quantity,
    unitPrice,
    totalPrice: quantity * unitPrice,
  });

  renderCart();
  document.getElementById("addItem").style.display = "none";
}

function cancel() {
  document.getElementById("addItem").style.display = "none";
}

var tableBody = document.getElementById("table-body");
var totalCell = document.querySelector("#total");
function renderCart() {
  var html = "";
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var template = `
    <tr>
    <td>
      ${item.name}
    </td>
    <td>
      <div class="qnt-container">
        <button class="btn" onclick="updateQuantity(${i},${
      item.quantity - 1
    })">-</button>
        <input type="number" value="${
          item.quantity
        }" onchange="updateQuantity(${i}, this.value)" />
        <button class="btn" onclick="updateQuantity(${i},${
      item.quantity + 1
    })" >+</button>
      </div>
    </td>
    <td>
      ${item.unitPrice}
    </td>
    <td>
      ${item.totalPrice}
    </td>
    <td>
      <button class="btn remove" onclick="remove(${i})">Remove</button>
    </td>
  </tr>
  `;
    html += template;
    total += item.totalPrice;
  }
  tableBody.innerHTML = html;
  totalCell.innerHTML = total;
}

renderCart();
