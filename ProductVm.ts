export class ProductVm implements IProductVm {
    id!: number;
    productType!: ProductType;
    productName?: string | undefined;
    description?: string | undefined;
    price!: number;
    taxAmount?: number | undefined;
    isTaxteble!: boolean;
    currencyCode?: string | undefined;
    discount!: number;
    discountType!: DiscountType;
    openSum!: boolean;
    mostPopular!: boolean;
    bestDeal!: boolean;
    moduleType!: ModuleType;
    pictureVms?: PictureVm[] | undefined;
    mainPictureId?: number | undefined;
    enabled!: boolean;
    operatioLenth!: number;
    operationPeriod!: OperationPeriod;
    quantity!: number;
    minQuantity!: number;
    maxQuantity!: number;
    quantityInterval!: number;
    inStockCount!: number;
    isStockActive!: boolean;
    sku?: string | undefined;
    stockTrasholdAlert!: number;
    trailStart!: string;

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
            this.productType = _data["productType"];
            this.productName = _data["productName"];
            this.description = _data["description"];
            this.price = _data["price"];
            this.taxAmount = _data["taxAmount"];
            this.isTaxteble = _data["isTaxteble"];
            this.currencyCode = _data["currencyCode"];
            this.discount = _data["discount"];
            this.discountType = _data["discountType"];
            this.openSum = _data["openSum"];
            this.mostPopular = _data["mostPopular"];
            this.bestDeal = _data["bestDeal"];
            this.moduleType = _data["moduleType"];
            if (Array.isArray(_data["pictureVms"])) {
                this.pictureVms = [] as any;
                for (let item of _data["pictureVms"])
                    this.pictureVms!.push(PictureVm.fromJS(item));
            }
            this.mainPictureId = _data["mainPictureId"];
            this.enabled = _data["enabled"];
            this.operatioLenth = _data["operatioLenth"];
            this.operationPeriod = _data["operationPeriod"];
            this.quantity = _data["quantity"];
            this.minQuantity = _data["minQuantity"];
            this.maxQuantity = _data["maxQuantity"];
            this.quantityInterval = _data["quantityInterval"];
            this.inStockCount = _data["inStockCount"];
            this.isStockActive = _data["isStockActive"];
            this.sku = _data["sku"];
            this.stockTrasholdAlert = _data["stockTrasholdAlert"];
            this.trailStart = _data["trailStart"];
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
        data["openSum"] = this.openSum;
        data["mostPopular"] = this.mostPopular;
        data["bestDeal"] = this.bestDeal;
        data["moduleType"] = this.moduleType;
        if (Array.isArray(this.pictureVms)) {
            data["pictureVms"] = [];
            for (let item of this.pictureVms)
                data["pictureVms"].push(item.toJSON());
        }
        data["mainPictureId"] = this.mainPictureId;
        data["enabled"] = this.enabled;
        data["operatioLenth"] = this.operatioLenth;
        data["operationPeriod"] = this.operationPeriod;
        data["quantity"] = this.quantity;
        data["minQuantity"] = this.minQuantity;
        data["maxQuantity"] = this.maxQuantity;
        data["quantityInterval"] = this.quantityInterval;
        data["inStockCount"] = this.inStockCount;
        data["isStockActive"] = this.isStockActive;
        data["sku"] = this.sku;
        data["stockTrasholdAlert"] = this.stockTrasholdAlert;
        data["trailStart"] = this.trailStart;
        return data; 
    }
}
