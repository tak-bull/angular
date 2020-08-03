export class ProductVm implements IProductVm {
    id!: number;   
    productName?: string | undefined;
    description?: string | undefined;
    price!: number;
    taxAmount?: number | undefined;
    isTaxteble!: boolean;
    currencyCode?: string | undefined;
    discount!: number;
    discountType!: DiscountType;    
    quantity!: number;
    sku?: string | undefined;
    constructor(data?: IProductVm) {
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
            this.productName = _data["productName"];
            this.description = _data["description"];
            this.price = _data["price"];
            this.taxAmount = _data["taxAmount"];
            this.isTaxteble = _data["isTaxteble"];
            this.currencyCode = _data["currencyCode"];
            this.discount = _data["discount"];
            this.discountType = _data["discountType"];            
            this.quantity = _data["quantity"];         
            this.sku = _data["sku"];         
        }
    }

    static fromJS(data: any): ProductVm {
        data = typeof data === 'object' ? data : {};
        let result = new ProductVm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["productType"] = this.productType;
        data["productName"] = this.productName;
        data["description"] = this.description;
        data["price"] = this.price;
        data["taxAmount"] = this.taxAmount;
        data["isTaxteble"] = this.isTaxteble;
        data["currencyCode"] = this.currencyCode;
        data["discount"] = this.discount;
        data["discountType"] = this.discountType;     
        data["quantity"] = this.quantity;        
        data["sku"] = this.sku;      
        return data; 
    }
}
