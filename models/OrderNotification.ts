export class OrderNotification implements IOrderNotification {
    id!: number;
    uniqId?: string | undefined;
    orderNumber!: number;
    order_reference?: string | undefined;
    dealType!: DealType;
    customerFullName?: string | undefined;
    customerEmail?: string | undefined;
    customerPhone?: string | undefined;
    orderStatus!: OrderStatus;
    invoiceStatusCode!: number;
    invoiceStatusDescription?: string | undefined;
    statusDescription?: string | undefined;
    statusCode!: number;
    initialRecuringPaymentStatusCode!: number;
    initialRecuringPaymentDescription?: string | undefined;
    subscriptionStatusCode!: number;
    subscriptionStatusDescription?: string | undefined;
    isSubscriptionPayment!: boolean;
    transactionId!: number;

    constructor(data?: IOrderNotification) {
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
            this.orderNumber = _data["orderNumber"];
            this.order_reference = _data["order_reference"];
            this.dealType = _data["dealType"];
            this.customerFullName = _data["customerFullName"];
            this.customerEmail = _data["customerEmail"];
            this.customerPhone = _data["customerPhone"];
            this.orderStatus = _data["orderStatus"];
            this.invoiceStatusCode = _data["invoiceStatusCode"];
            this.invoiceStatusDescription = _data["invoiceStatusDescription"];
            this.statusDescription = _data["statusDescription"];
            this.statusCode = _data["statusCode"];
            this.initialRecuringPaymentStatusCode = _data["initialRecuringPaymentStatusCode"];
            this.initialRecuringPaymentDescription = _data["initialRecuringPaymentDescription"];
            this.subscriptionStatusCode = _data["subscriptionStatusCode"];
            this.subscriptionStatusDescription = _data["subscriptionStatusDescription"];
            this.isSubscriptionPayment = _data["isSubscriptionPayment"];
            this.transactionId = _data["transactionId"];
        }
    }

    static fromJS(data: any): OrderNotification {
        data = typeof data === 'object' ? data : {};
        let result = new OrderNotification();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["uniqId"] = this.uniqId;
        data["orderNumber"] = this.orderNumber;
        data["order_reference"] = this.order_reference;
        data["dealType"] = this.dealType;
        data["customerFullName"] = this.customerFullName;
        data["customerEmail"] = this.customerEmail;
        data["customerPhone"] = this.customerPhone;
        data["orderStatus"] = this.orderStatus;
        data["invoiceStatusCode"] = this.invoiceStatusCode;
        data["invoiceStatusDescription"] = this.invoiceStatusDescription;
        data["statusDescription"] = this.statusDescription;
        data["statusCode"] = this.statusCode;
        data["initialRecuringPaymentStatusCode"] = this.initialRecuringPaymentStatusCode;
        data["initialRecuringPaymentDescription"] = this.initialRecuringPaymentDescription;
        data["subscriptionStatusCode"] = this.subscriptionStatusCode;
        data["subscriptionStatusDescription"] = this.subscriptionStatusDescription;
        data["isSubscriptionPayment"] = this.isSubscriptionPayment;
        data["transactionId"] = this.transactionId;
        return data; 
    }
}

export interface IOrderNotification {
    id: number;
    uniqId?: string | undefined;
    orderNumber: number;
    order_reference?: string | undefined;
    dealType: DealType;
    customerFullName?: string | undefined;
    customerEmail?: string | undefined;
    customerPhone?: string | undefined;
    orderStatus: OrderStatus;
    invoiceStatusCode: number;
    invoiceStatusDescription?: string | undefined;
    statusDescription?: string | undefined;
    statusCode: number;
    initialRecuringPaymentStatusCode: number;
    initialRecuringPaymentDescription?: string | undefined;
    subscriptionStatusCode: number;
    subscriptionStatusDescription?: string | undefined;
    isSubscriptionPayment: boolean;
    transactionId: number;
}
