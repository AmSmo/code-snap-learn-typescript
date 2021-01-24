enum BakeryItemType{
    Cake,
    Bread,
    Other
}

interface BakeryItem {
    name: string;
    description?: string;
    imageUrl?: string;
    numberInStock: number;
    price: number;
    type: BakeryItemType
}

const donut: BakeryItem = {
    name : "Donut",
    description : "Tasty treat cream filling",
    numberInStock: 10,
    price: 2.00,
    type: BakeryItemType.Other
}

interface PaymentMethod {
    id: string;
    currency: 'USD' | 'GBP' | 'AUD' | 'EUR';
    availableBalance: number;
}

const myPaymentMethod: CreditCardPaymentMethod = {
    id: 'my-default-payment-method',
    currency: 'USD',
    availableBalance: 50,
    expiryDate: new Date(),
    type: "credit",
    cardValid: true
}

type CashPaymentMethod = PaymentMethod;

interface CreditCardPaymentMethod extends PaymentMethod {
    expiryDate: Date;
    type: 'credit' | 'debit';
    cardValid: boolean
}

const myBackupPaymentMethod: CashPaymentMethod = {
    id: 'my-backup-payment-method',
    currency: 'USD',
    availableBalance: 120,
}

interface Customer {
    id: string;
    primaryPaymentMethod: CashPaymentMethod | CreditCardPaymentMethod;
    optionalPaymentMethod?: CashPaymentMethod | CreditCardPaymentMethod;
    itemsInBasket: BakeryItem[]
}

const customerOne: Customer = {
    id: "Billy Bob",
    primaryPaymentMethod: myPaymentMethod,
    optionalPaymentMethod: myBackupPaymentMethod,
    itemsInBasket: []
    
}