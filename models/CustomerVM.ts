export class CustomerVM implements ICustomerVM {
    id?: number | undefined;
    identityNumber?: string | undefined;
    customerFullName?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    address?: Address | undefined;

    constructor(data?: ICustomerVM) {
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
            this.identityNumber = _data["identityNumber"];
            this.customerFullName = _data["customerFullName"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.email = _data["email"];
            this.phoneNumber = _data["phoneNumber"];
            this.address = _data["address"] ? Address.fromJS(_data["address"]) : <any>undefined;
        }
    }

    static fromJS(data: any): CustomerVM {
        data = typeof data === 'object' ? data : {};
        let result = new CustomerVM();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["identityNumber"] = this.identityNumber;
        data["customerFullName"] = this.customerFullName;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["email"] = this.email;
        data["phoneNumber"] = this.phoneNumber;
        data["address"] = this.address ? this.address.toJSON() : <any>undefined;
        return data; 
    }
}

export interface ICustomerVM {
    id?: number | undefined;
    identityNumber?: string | undefined;
    customerFullName?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
    phoneNumber?: string | undefined;
    address?: Address | undefined;
}
