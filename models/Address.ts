export class Address implements IAddress {
    id!: number;
    address1?: string | undefined;
    address2?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    countryCode!: number;
    zip?: string | undefined;

    constructor(data?: IAddress) {
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
            this.address1 = _data["address1"];
            this.address2 = _data["address2"];
            this.city = _data["city"];
            this.country = _data["country"];
            this.countryCode = _data["countryCode"];
            this.zip = _data["zip"];
        }
    }

    static fromJS(data: any): Address {
        data = typeof data === 'object' ? data : {};
        let result = new Address();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["address1"] = this.address1;
        data["address2"] = this.address2;
        data["city"] = this.city;
        data["country"] = this.country;
        data["countryCode"] = this.countryCode;
        data["zip"] = this.zip;
        return data; 
    }
}

export interface IAddress {
    id: number;
    address1?: string | undefined;
    address2?: string | undefined;
    city?: string | undefined;
    country?: string | undefined;
    countryCode: number;
    zip?: string | undefined;
}
