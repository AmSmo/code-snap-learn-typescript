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
    price: 8.00,
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
    availableBalance: 5,
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
    availableBalance: 12,
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
    itemsInBasket: [donut, donut]
    
}

const makePayment = (paymentMethod: PaymentMethod, amount: number)=>{
    if (paymentMethod.availableBalance < amount){
        throw new Error ("Not enough money")
    }
    paymentMethod.availableBalance -= amount
    console.log("Payment was taken successfully", paymentMethod.availableBalance)
        
}   

const payForItemsInBasket = (customer: Customer) => {
    let totalValue: number = 0
    customer.itemsInBasket.forEach(item => {
        return totalValue += item.price
    })
    try {
        makePayment(customer.primaryPaymentMethod, totalValue)
        customer.itemsInBasket.map(item=> {
            item.numberInStock -=1
            console.log(`${item.name}s, there are only ${item.numberInStock} left.`)
        })
    } catch (e){
        console.log(e.message)
     }
}

payForItemsInBasket(customerOne)