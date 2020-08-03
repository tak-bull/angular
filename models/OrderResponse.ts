export class OrderResponse implements IOrderResponse {
    orderId!: number;
    internalCode!: number;
    orderUniqId?: string | undefined;
    order_reference?: string | undefined;
    internalDescription?: string | undefined;
    providerCode!: number;
    providerDescription?: string | undefined;
    providerJsonResponse?: string | undefined;
    transactionId?: string | undefined;
    invoiceResponseCode!: number;
    invoiceResponseDescription?: string | undefined;
    transactioninternalId!: number;
    doNotRetry!: boolean;    
    redirectAddress?: string | undefined;
    clearer?: string | undefined;
    cardtype?: string | undefined;
    companytype?: string | undefined;
    confirmationcode?: string | undefined;
    provider?: string | undefined;
    isSubscriptionPayment!: boolean;
    token?: string | undefined;
    tokenExpirationMonth?: string | undefined;
    tokenExpirationYear?: string | undefined;
    last4Digits?: string | undefined;
    documentId!: number;

    constructor(data?: IOrderResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.orderId = _data["orderId"];
            this.internalCode = _data["internalCode"];
            this.orderUniqId = _data["orderUniqId"];
            this.order_reference = _data["order_reference"];
            this.internalDescription = _data["internalDescription"];
            this.providerCode = _data["providerCode"];
            this.providerDescription = _data["providerDescription"];
            this.providerJsonResponse = _data["providerJsonResponse"];
            this.transactionId = _data["transactionId"];
            this.invoiceResponseCode = _data["invoiceResponseCode"];
            this.invoiceResponseDescription = _data["invoiceResponseDescription"];
            this.transactioninternalId = _data["transactioninternalId"];
            this.doNotRetry = _data["doNotRetry"];            
            this.redirectAddress = _data["redirectAddress"];
            this.clearer = _data["clearer"];
            this.cardtype = _data["cardtype"];
            this.companytype = _data["companytype"];
            this.confirmationcode = _data["confirmationcode"];
            this.provider = _data["provider"];
            this.isSubscriptionPayment = _data["isSubscriptionPayment"];
            this.token = _data["token"];
            this.tokenExpirationMonth = _data["tokenExpirationMonth"];
            this.tokenExpirationYear = _data["tokenExpirationYear"];
            this.last4Digits = _data["last4Digits"];
            this.documentId = _data["documentId"];
        }
    }

    static fromJS(data: any): OrderResponse {
        data = typeof data === 'object' ? data : {};
        let result = new OrderResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["orderId"] = this.orderId;
        data["internalCode"] = this.internalCode;
        data["orderUniqId"] = this.orderUniqId;
        data["order_reference"] = this.order_reference;
        data["internalDescription"] = this.internalDescription;
        data["providerCode"] = this.providerCode;
        data["providerDescription"] = this.providerDescription;
        data["providerJsonResponse"] = this.providerJsonResponse;
        data["transactionId"] = this.transactionId;
        data["invoiceResponseCode"] = this.invoiceResponseCode;
        data["invoiceResponseDescription"] = this.invoiceResponseDescription;
        data["transactioninternalId"] = this.transactioninternalId;
        data["doNotRetry"] = this.doNotRetry;       
        data["redirectAddress"] = this.redirectAddress;
        data["clearer"] = this.clearer;
        data["cardtype"] = this.cardtype;
        data["companytype"] = this.companytype;
        data["confirmationcode"] = this.confirmationcode;
        data["provider"] = this.provider;
        data["isSubscriptionPayment"] = this.isSubscriptionPayment;
        data["token"] = this.token;
        data["tokenExpirationMonth"] = this.tokenExpirationMonth;
        data["tokenExpirationYear"] = this.tokenExpirationYear;
        data["last4Digits"] = this.last4Digits;
        data["documentId"] = this.documentId;
        return data; 
    }
}

export interface IOrderResponse {
    orderId: number;
    internalCode: number;
    orderUniqId?: string | undefined;
    order_reference?: string | undefined;
    internalDescription?: string | undefined;
    providerCode: number;
    providerDescription?: string | undefined;
    providerJsonResponse?: string | undefined;
    transactionId?: string | undefined;
    invoiceResponseCode: number;
    invoiceResponseDescription?: string | undefined;
    transactioninternalId: number;
    doNotRetry: boolean;   
    redirectAddress?: string | undefined;
    clearer?: string | undefined;
    cardtype?: string | undefined;
    companytype?: string | undefined;
    confirmationcode?: string | undefined;
    provider?: string | undefined;
    isSubscriptionPayment: boolean;
    token?: string | undefined;
    tokenExpirationMonth?: string | undefined;
    tokenExpirationYear?: string | undefined;
    last4Digits?: string | undefined;
    documentId: number;
}
