var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100) + 1
 var obj = { itemName: item, itemPrice: price}
 cart.push(obj)
 return item + " has been added to your cart."
}

function viewCart() {
  // write your code here
  if (cart.length > 0) {
    var string = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      var object = cart[i]
      var itemName = object.itemName
      var itemPrice = object.itemPrice
      if (i < cart.length - 1) {
        string = string.concat(itemName + " at $" + itemPrice + ", ")
      } else {
        string = string.concat(itemName + " at $" + itemPrice + ".")
      }
    }
  } else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here
  var tot = 0
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i]
    var price = obj.itemPrice
    tot = tot + price
  }
  return tot
}

function removeFromCart(item) {
  // write your code here
  var initLength = cart.length
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i]
    var name = object.itemName
    if (name === item) {
      cart = [...cart.slice(0, i-1), ...cart.slice(i)]
    }
  }
  if (initLength === cart.length) {
    return "That item is not in your cart."
  } else {
    return cart
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (isNaN(cardNumber)) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var price = total()
    cart = [];
    return "Your total cost is $" + price + ", which will be charged to the card " + cardNumber + "."
  }
}
