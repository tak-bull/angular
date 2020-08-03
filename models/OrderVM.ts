export class OrderVM implements IOrderVM {
    id!: number;
    uniqId?: string | undefined;
    mid?: string | undefined;
    dealType!: DealType;
    orderStatus!: OrderStatus;
    createDate!: string;
    language?: string | undefined;
    trackingID!: string;
    customerId?: number | undefined;
    customerFullName?: string | undefined;
    customerFirstName?: string | undefined;
    customerLastName?: string | undefined;
    customerPhoneNumber?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    customer?: CustomerVM | undefined;
    createDocument!: boolean;
    documentType!: DocumentType;
    orderTotalSum!: number;
    currency?: string | undefined;
    orderTotalSumWithoutTax!: number;
    taxAmount!: number;
    taxtable!: boolean;
    discountType!: DiscountType;
    discount!: number;
    paymentMethodType!: PaymentMethodType;
    voucher?: string | undefined;
    shippingAmount!: number;
    shippingTaxAmount!: number;
    shippingAddress1?: string | undefined;
    shippingAddress2?: string | undefined;
    shippingZipCode?: string | undefined;
    shippingCity?: string | undefined;
    shippingCountry?: string | undefined;
    order_reference?: string | undefined;
    redirectAddress?: string | undefined;
    cancelReturnAddress?: string | undefined;
    ipnAddress?: string | undefined;
    displayType?: string | undefined;
    recuringDueDate!: string;
    lastChargeDate!: string;
    recuringInterval!: RecuringInterval;
    initialAmount!: number;
    initiaTaxAmount!: number;
    initiaTaxFreelAmount!: number;
    paymentsCharged!: number;
    numberOfPayments!: number;
    minNumberOfPayments!: number;
    maxNumberOfPayments!: number;
    isPaymentsEnabled!: boolean;
    firstPaymentamount!: number;
    folowedPaymentamount!: number;
    comments?: string | undefined;
   
    products?: ProductVm[] | undefined;
    creditCard?: CreditCardVm | undefined;
    
    constructor(data?: IOrderVM) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.uniqId = _data["uniqId"];
            this.mid = _data["mid"];
            this.dealType = _data["dealType"];
            this.orderStatus = _data["orderStatus"];
            this.createDate = _data["createDate"];
            this.language = _data["language"];
            this.trackingID = _data["trackingID"];
            this.customerId = _data["customerId"];
            this.customerFullName = _data["customerFullName"];
            this.customerFirstName = _data["customerFirstName"];
            this.customerLastName = _data["customerLastName"];
            this.customerPhoneNumber = _data["customerPhoneNumber"];
            this.city = _data["city"];
            this.country = _data["country"];
            this.customer = _data["customer"] ? CustomerVM.fromJS(_data["customer"]) : <any>undefined;
            this.createDocument = _data["createDocument"];
            this.documentType = _data["documentType"];
            this.orderTotalSum = _data["orderTotalSum"];
            this.currency = _data["currency"];
            this.orderTotalSumWithoutTax = _data["orderTotalSumWithoutTax"];
            this.taxAmount = _data["taxAmount"];
            this.taxtable = _data["taxtable"];
            this.discountType = _data["discountType"];
            this.discount = _data["discount"];
            this.paymentMethodType = _data["paymentMethodType"];
            this.voucher = _data["voucher"];
            this.shippingAmount = _data["shippingAmount"];
            this.shippingTaxAmount = _data["shippingTaxAmount"];
            this.shippingAddress1 = _data["shippingAddress1"];
            this.shippingAddress2 = _data["shippingAddress2"];
            this.shippingZipCode = _data["shippingZipCode"];
            this.shippingCity = _data["shippingCity"];
            this.shippingCountry = _data["shippingCountry"];
            this.order_reference = _data["order_reference"];
            this.redirectAddress = _data["redirectAddress"];
            this.cancelReturnAddress = _data["cancelReturnAddress"];
            this.ipnAddress = _data["ipnAddress"];
            this.displayType = _data["displayType"];
            this.recuringDueDate = _data["recuringDueDate"];
            this.lastChargeDate = _data["lastChargeDate"];
            this.recuringInterval = _data["recuringInterval"];
            this.initialAmount = _data["initialAmount"];
            this.initiaTaxAmount = _data["initiaTaxAmount"];
            this.initiaTaxFreelAmount = _data["initiaTaxFreelAmount"];
            this.paymentsCharged = _data["paymentsCharged"];
            this.numberOfPayments = _data["numberOfPayments"];
            this.minNumberOfPayments = _data["minNumberOfPayments"];
            this.maxNumberOfPayments = _data["maxNumberOfPayments"];
            this.isPaymentsEnabled = _data["isPaymentsEnabled"];
            this.firstPaymentamount = _data["firstPaymentamount"];
            this.folowedPaymentamount = _data["folowedPaymentamount"];
            this.comments = _data["comments"];
          
            if (Array.isArray(_data["products"])) {
                this.products = [] as any;
                for (let item of _data["products"])
                    this.products!.push(ProductVm.fromJS(item));
            }
            this.creditCard = _data["creditCard"] ? CreditCardVm.fromJS(_data["creditCard"]) : <any>undefined;
           
        }
    }

    static fromJS(data: any): OrderVM {
        data = typeof data === 'object' ? data : {};
        let result = new OrderVM();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["uniqId"] = this.uniqId;
        data["mid"] = this.mid;
        data["dealType"] = this.dealType;
        data["orderStatus"] = this.orderStatus;
        data["createDate"] = this.createDate;
        data["language"] = this.language;
        data["trackingID"] = this.trackingID;
        data["customerId"] = this.customerId;
        data["customerFullName"] = this.customerFullName;
        data["customerFirstName"] = this.customerFirstName;
        data["customerLastName"] = this.customerLastName;
        data["customerPhoneNumber"] = this.customerPhoneNumber;
        data["city"] = this.city;
        data["country"] = this.country;
        data["customer"] = this.customer ? this.customer.toJSON() : <any>undefined;
        data["createDocument"] = this.createDocument;
        data["documentType"] = this.documentType;
        data["orderTotalSum"] = this.orderTotalSum;
        data["currency"] = this.currency;
        data["orderTotalSumWithoutTax"] = this.orderTotalSumWithoutTax;
        data["taxAmount"] = this.taxAmount;
        data["taxtable"] = this.taxtable;
        data["discountType"] = this.discountType;
        data["discount"] = this.discount;
        data["paymentMethodType"] = this.paymentMethodType;
        data["voucher"] = this.voucher;
        data["shippingAmount"] = this.shippingAmount;
        data["shippingTaxAmount"] = this.shippingTaxAmount;
        data["shippingAddress1"] = this.shippingAddress1;
        data["shippingAddress2"] = this.shippingAddress2;
        data["shippingZipCode"] = this.shippingZipCode;
        data["shippingCity"] = this.shippingCity;
        data["shippingCountry"] = this.shippingCountry;
        data["order_reference"] = this.order_reference;
        data["redirectAddress"] = this.redirectAddress;
        data["cancelReturnAddress"] = this.cancelReturnAddress;
        data["ipnAddress"] = this.ipnAddress;
        data["displayType"] = this.displayType;
        data["recuringDueDate"] = this.recuringDueDate;
        data["lastChargeDate"] = this.lastChargeDate;
        data["recuringInterval"] = this.recuringInterval;
        data["initialAmount"] = this.initialAmount;
        data["initiaTaxAmount"] = this.initiaTaxAmount;
        data["initiaTaxFreelAmount"] = this.initiaTaxFreelAmount;
        data["paymentsCharged"] = this.paymentsCharged;
        data["numberOfPayments"] = this.numberOfPayments;
        data["minNumberOfPayments"] = this.minNumberOfPayments;
        data["maxNumberOfPayments"] = this.maxNumberOfPayments;
        data["isPaymentsEnabled"] = this.isPaymentsEnabled;
        data["firstPaymentamount"] = this.firstPaymentamount;
        data["folowedPaymentamount"] = this.folowedPaymentamount;
        data["comments"] = this.comments;
       
        if (Array.isArray(this.products)) {
            data["products"] = [];
            for (let item of this.products)
                data["products"].push(item.toJSON());
        }
        data["creditCard"] = this.creditCard ? this.creditCard.toJSON() : <any>undefined;
       
        return data; 
    }
}

export interface IOrderVM {
    id: number;
    uniqId?: string | undefined;
    mid?: string | undefined;
    dealType: DealType;
    orderStatus: OrderStatus;
    createDate: string;
    language?: string | undefined;
    trackingID: string;
    customerId?: number | undefined;
    customerFullName?: string | undefined;
    customerFirstName?: string | undefined;
    customerLastName?: string | undefined;
    customerPhoneNumber?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    customer?: CustomerVM | undefined;
    createDocument: boolean;
    documentType: DocumentType;
    orderTotalSum: number;
    currency?: string | undefined;
    orderTotalSumWithoutTax: number;
    taxAmount: number;
    taxtable: boolean;
    discountType: DiscountType;
    discount: number;
    paymentMethodType: PaymentMethodType;
    voucher?: string | undefined;
    shippingAmount: number;
    shippingTaxAmount: number;
    shippingAddress1?: string | undefined;
    shippingAddress2?: string | undefined;
    shippingZipCode?: string | undefined;
    shippingCity?: string | undefined;
    shippingCountry?: string | undefined;
    order_reference?: string | undefined;
    redirectAddress?: string | undefined;
    cancelReturnAddress?: string | undefined;
    ipnAddress?: string | undefined;
    displayType?: string | undefined;
    recuringDueDate: string;
    lastChargeDate: string;
    recuringInterval: RecuringInterval;
    initialAmount: number;
    initiaTaxAmount: number;
    initiaTaxFreelAmount: number;
    paymentsCharged: number;
    numberOfPayments: number;
    minNumberOfPayments: number;
    maxNumberOfPayments: number;
    isPaymentsEnabled: boolean;
    firstPaymentamount: number;
    folowedPaymentamount: number;
    comments?: string | undefined;    
    products?: ProductVm[] | undefined;
    creditCard?: CreditCardVm | undefined;    
}
