function mergeProducts(products) {
  const product = products.reduce((acc, item) => {
    if (acc[item.productId]) {
      acc[item.productId].quantity += item.quantity;
      acc[item.productId].returnedQuantity += item.returnedQuantity;
      acc[item.productId].totalQuantity += item.totalQuantity;
    } else {
      acc[item.productId] = item;
    }
    return acc;
  }, {});
  return Object.values(product);
}

const productData = [
  { productId: 29, quantity: 0, returnedQuantity: 3, totalQuantity: 5 },
  { productId: 30, quantity: 0, returnedQuantity: 3, totalQuantity: 5 },
  { productId: 29, quantity: 0, returnedQuantity: 1, totalQuantity: 1 },
  { productId: 30, quantity: 0, returnedQuantity: 1, totalQuantity: 1 },
];

console.log(mergeProducts(productData));

// solve - 2
function getLowStockProducts(threshold, arr) {
  const finalResult = [];
  if (Array.isArray(arr)) {
    const result = arr.filter((item) => item?.quantity < threshold);
    result.map((item) => finalResult.push(item.name));
  }
  return finalResult;
}
const threshold = 3;
const products = [
  { name: "Apples", quantity: 5 },
  { name: "Bananas", quantity: 2 },
  { name: "Cherries", quantity: 15 },
  { name: "Dates", quantity: 1 },
];

console.log(getLowStockProducts(threshold, products));

// solve - 3
function validateUserInput(userInput) {
  const errorMessage = {
    isValid: true,
    errors: {
      name: "",
      email: "",
      password: "",
    },
  };
  const nameLength = userInput.name.length >= 3;
  const validEmail = userInput.email.includes("@");
  const validPassword = userInput.password.length >= 6;
  //   if(!userInput.email.includes)
  if (!validEmail) {
    errorMessage.isValid = false;
    errorMessage.errors.email = "Please enter a valid email address";
  }
  if (!validPassword) {
    errorMessage.isValid = false;
    errorMessage.errors.password =
      "Password must be at least 6 characters long";
  }
  if (!nameLength) {
    errorMessage.isValid = false;
    errorMessage.errors.name = "Name must be at least 3 characters long";
  }

  if (nameLength && validEmail && validPassword && errorMessage.isValid) {
    return {
      isValid: true,
      message: "User input is valid",
    };
  } else {
    return errorMessage;
  }
}

const userInput = {
  name: "Jo",
  email: "jo@example",
  password: "123",
};

console.log(validateUserInput(userInput));
