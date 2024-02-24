const productNumberUpdate = (product, price, isSum) => {
  const productInputTag = document.getElementById(product + "-number");
  let productNumber = parseInt(productInputTag.value);

  if (isSum) {
    productNumber = productNumber + 1;
  } else if (productNumber > 0) {
    productNumber = productNumber - 1;
  }
  productInputTag.value = productNumber;

  //   update product
  const productTotalTag = document.getElementById(product + "-total");
  productTotalTag.innerText = productNumber * price;

  //   calculate product amount
  calculateProductAmount();
};

// calculate products amount

const productInput = (product) => {
  const productInputTags = document.getElementById(product + "-number");
  const productValue = parseInt(productInputTags.value);
  return productValue;
};

const calculateProductAmount = () => {
  const phoneTotal = productInput("phone") * 1219;
  const casingTotal = productInput("casing") * 59;
  const subTotal = phoneTotal + casingTotal;
  const taxAmount = subTotal / 10;
  const totalAmount = subTotal + taxAmount;

  //   set values on html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = taxAmount;
  document.getElementById("total-amount").innerText = totalAmount;
};

// casing all work
document.getElementById("casing-plus").addEventListener("click", () => {
  productNumberUpdate("casing", 59, true);
});

document.getElementById("casing-minus").addEventListener("click", () => {
  productNumberUpdate("casing", 59, false);
});

// phone all work
document.getElementById("phone-plus").addEventListener("click", () => {
  productNumberUpdate("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", () => {
  productNumberUpdate("phone", 1219, false);
});
