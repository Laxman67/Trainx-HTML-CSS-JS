let obj1 = new Bank('Raj', '5959561000', 'raj45@gmail.com', 522000);
let Vinjay_Sindh = new Sindbank(
  'Vinay',
  '78965325641',
  'vinay@gmail.com',
  120000
);
console.log(Vinjay_Sindh.accountHolderName);

/**
 *
 *
 *
 * ====Shopping Cart System====
Create a sepeate Class  specific to Features


class Payment{}
 * checkoutForPayment(orderId)
 * getTotalAmount()


class Order{}

Product *Object* {
productId:
description:
price:
}

 * Array Of Objects
 * 1. Products* ( if product is added into cart then remove from here)
 * 2. CartItems* (add product here and remove from Products)
 * createCartProduct(arrayOfProducts or {...products})
 * getProductsDetails(productID)
 * makeOrder(products)
 * AddToCart(product)
 * RemoveFromCart(productId)


class Notification{}
 * Notification(type) on Order Successfull! and Order Cancelled
 * Create Template for Each
 * 1. Order Successfull!
 * 2. Order Cancelled!
 */
