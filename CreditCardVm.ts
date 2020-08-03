export class CreditCardVm implements ICreditCardVm {
    cardOwnerId?: string | undefined;
    cardOwnerName!: string;
    cardOwnerEmail?: string | undefined;
    cardOwnerPhone?: string | undefined;
    cardNumber!: string;
    cardExparationDate?: string | undefined;
    expirationYear!: number;
    expirationMonth!: number;
    cvv!: string;
    last4Digits?: string | undefined;
    cardInternalToken?: string | undefined;
    cardExternalToken?: string | undefined;

    constructor(data?: ICreditCardVm) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.cardOwnerId = _data["cardOwnerId"];
            this.cardOwnerName = _data["cardOwnerName"];
            this.cardOwnerEmail = _data["cardOwnerEmail"];
            this.cardOwnerPhone = _data["cardOwnerPhone"];
            this.cardNumber = _data["cardNumber"];
            this.cardExparationDate = _data["cardExparationDate"];
            this.expirationYear = _data["expirationYear"];
            this.expirationMonth = _data["expirationMonth"];
            this.cvv = _data["cvv"];
            this.last4Digits = _data["last4Digits"];
            this.cardInternalToken = _data["cardInternalToken"];
            this.cardExternalToken = _data["cardExternalToken"];
        }
    }

    static fromJS(data: any): CreditCardVm {
        data = typeof data === 'object' ? data : {};
        let result = new CreditCardVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["cardOwnerId"] = this.cardOwnerId;
        data["cardOwnerName"] = this.cardOwnerName;
        data["cardOwnerEmail"] = this.cardOwnerEmail;
        data["cardOwnerPhone"] = this.cardOwnerPhone;
        data["cardNumber"] = this.cardNumber;
        data["cardExparationDate"] = this.cardExparationDate;
        data["expirationYear"] = this.expirationYear;
        data["expirationMonth"] = this.expirationMonth;
        data["cvv"] = this.cvv;
        data["last4Digits"] = this.last4Digits;
        data["cardInternalToken"] = this.cardInternalToken;
        data["cardExternalToken"] = this.cardExternalToken;
        return data; 
    }
}

export interface ICreditCardVm {
    cardOwnerId?: string | undefined;
    cardOwnerName: string;
    cardOwnerEmail?: string | undefined;
    cardOwnerPhone?: string | undefined;
    cardNumber: string;
    cardExparationDate?: string | undefined;
    expirationYear: number;
    expirationMonth: number;
    cvv: string;
    last4Digits?: string | undefined;
    cardInternalToken?: string | undefined;
    cardExternalToken?: string | undefined;
}
