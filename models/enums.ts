export enum DealType {
    Regular = 1,
    Payments = 2,
    Recurring = 4,
    Upsell = 5,
    Token = 6,
    Suspend = 7,
}
export enum OrderStatus {
    Pending = 0,
    Failed = 1,
    Processing = 2,
    Completed = 3,
    OnHold = 4,
    Cancelled = 5,
    Refunded = 6,
}

export enum DocumentType {
    Unkonw = 0,
    Hazmana = 100,
    Heshbonit = 300,
    HeshbonitMas = 305,
    HeshbonitMasKabala = 320,
    HeshbonitMasZikui = 330,
    Kabala = 400,
    KabalaTruma = 405,
}

export enum DiscountType {
    None = 0,
    Amount = 1,
    Percentage = 2,
}

export enum RecuringInterval {
    Daily = 1,
    Weekly = 2,
    Monthly = 3,
    Annual = 4,
}

export enum PaymentMethodType {
    Unknown = 0,
    Cash = 1,
    Check = 2,
    CreditCard = 3,
    BankTranzaction = 4,
    Vouchers = 5,
    SwapVouchers = 6,
    Banknote = 7,
    DirectDebit = 8,
    Other = 9,
}
