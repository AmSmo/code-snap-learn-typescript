"use strict";
var BakeryItemType;
(function (BakeryItemType) {
    BakeryItemType[BakeryItemType["Cake"] = 0] = "Cake";
    BakeryItemType[BakeryItemType["Bread"] = 1] = "Bread";
    BakeryItemType[BakeryItemType["Other"] = 2] = "Other";
})(BakeryItemType || (BakeryItemType = {}));
var donut = {
    name: "Donut",
    description: "Tasty treat cream filling",
    numberInStock: 10,
    price: 8.00,
    type: BakeryItemType.Other
};
var myPaymentMethod = {
    id: 'my-default-payment-method',
    currency: 'USD',
    availableBalance: 5,
    expiryDate: new Date(),
    type: "credit",
    cardValid: true
};
var myBackupPaymentMethod = {
    id: 'my-backup-payment-method',
    currency: 'USD',
    availableBalance: 12
};
var customerOne = {
    id: "Billy Bob",
    primaryPaymentMethod: myPaymentMethod,
    optionalPaymentMethod: myBackupPaymentMethod,
    itemsInBasket: [donut, donut]
};
var makePayment = function (paymentMethod, amount) {
    if (paymentMethod.availableBalance < amount) {
        throw new Error("Not enough money");
    }
    paymentMethod.availableBalance -= amount;
    console.log("Payment was taken successfully", paymentMethod.availableBalance);
};
var payForItemsInBasket = function (customer) {
    var totalValue = 0;
    customer.itemsInBasket.forEach(function (item) {
        return totalValue += item.price;
    });
    try {
        makePayment(customer.primaryPaymentMethod, totalValue);
        customer.itemsInBasket.map(function (item) {
            item.numberInStock -= 1;
            console.log(item.name + "s, there are only " + item.numberInStock + " left.");
        });
    }
    catch (e) {
        console.log(e.message);
    }
};
payForItemsInBasket(customerOne);
