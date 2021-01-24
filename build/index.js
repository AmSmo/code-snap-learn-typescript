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
    price: 2.00,
    type: BakeryItemType.Other
};
var myPaymentMethod = {
    id: 'my-default-payment-method',
    currency: 'USD',
    availableBalance: 50,
    expiryDate: new Date(),
    type: "credit",
    cardValid: true
};
var myBackupPaymentMethod = {
    id: 'my-backup-payment-method',
    currency: 'USD',
    availableBalance: 120
};
var customerOne = {
    id: "Billy Bob",
    primaryPaymentMethod: myPaymentMethod,
    optionalPaymentMethod: myBackupPaymentMethod,
    itemsInBasket: []
};
