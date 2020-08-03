
@Injectable()
export class ExtranalAPIClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "http://localhost:5001";
    }

    submitOrder(order: OrderVM): Observable<OrderResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/SubmitOrder";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(order);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSubmitOrder(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processSubmitOrder(<any>response_);
                } catch (e) {
                    return <Observable<OrderResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderResponse>><any>_observableThrow(response_);
        }));
    }

    protected processSubmitOrder(response: HttpResponseBase): Observable<OrderResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderResponse>(<any>null);
    }

    getTakbullPaymentPageRedirectUrl(order: OrderVM): Observable<ApiResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/GetTakbullPaymentPageRedirectUrl";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(order);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetTakbullPaymentPageRedirectUrl(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetTakbullPaymentPageRedirectUrl(<any>response_);
                } catch (e) {
                    return <Observable<ApiResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<ApiResponse>><any>_observableThrow(response_);
        }));
    }

    protected processGetTakbullPaymentPageRedirectUrl(response: HttpResponseBase): Observable<ApiResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = ApiResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<ApiResponse>(<any>null);
    }

    getOrder(orderUniqId: string | null | undefined): Observable<OrderVM> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/GetOrder?";
        if (orderUniqId !== undefined && orderUniqId !== null)
            url_ += "orderUniqId=" + encodeURIComponent("" + orderUniqId) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetOrder(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetOrder(<any>response_);
                } catch (e) {
                    return <Observable<OrderVM>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderVM>><any>_observableThrow(response_);
        }));
    }

    protected processGetOrder(response: HttpResponseBase): Observable<OrderVM> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderVM.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderVM>(<any>null);
    }

    createDocument(document: DocumentVM): Observable<DocumentResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/CreateDocument";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(document);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateDocument(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateDocument(<any>response_);
                } catch (e) {
                    return <Observable<DocumentResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<DocumentResponse>><any>_observableThrow(response_);
        }));
    }

    protected processCreateDocument(response: HttpResponseBase): Observable<DocumentResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = DocumentResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<DocumentResponse>(<any>null);
    }

    getSubscriptionInfo(id: number | undefined): Observable<OrderResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/GetSubscriptionInfo?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetSubscriptionInfo(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetSubscriptionInfo(<any>response_);
                } catch (e) {
                    return <Observable<OrderResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderResponse>><any>_observableThrow(response_);
        }));
    }

    protected processGetSubscriptionInfo(response: HttpResponseBase): Observable<OrderResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderResponse>(<any>null);
    }

    chargeSubscription(id: number | undefined): Observable<OrderResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/ChargeSubscription?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processChargeSubscription(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processChargeSubscription(<any>response_);
                } catch (e) {
                    return <Observable<OrderResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderResponse>><any>_observableThrow(response_);
        }));
    }

    protected processChargeSubscription(response: HttpResponseBase): Observable<OrderResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderResponse>(<any>null);
    }

    cancelSubscription(id: number | undefined): Observable<OrderResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/CancelSubscription?";
        if (id === null)
            throw new Error("The parameter 'id' cannot be null.");
        else if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCancelSubscription(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCancelSubscription(<any>response_);
                } catch (e) {
                    return <Observable<OrderResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderResponse>><any>_observableThrow(response_);
        }));
    }

    protected processCancelSubscription(response: HttpResponseBase): Observable<OrderResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderResponse>(<any>null);
    }

    validateNotification(orderNotification: OrderNotification): Observable<OrderResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/ValidateNotification";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(orderNotification);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processValidateNotification(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processValidateNotification(<any>response_);
                } catch (e) {
                    return <Observable<OrderResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderResponse>><any>_observableThrow(response_);
        }));
    }

    protected processValidateNotification(response: HttpResponseBase): Observable<OrderResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderResponse>(<any>null);
    }

    upsellProcess(orderVM: OrderVM): Observable<OrderResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/UpsellProcess";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(orderVM);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpsellProcess(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpsellProcess(<any>response_);
                } catch (e) {
                    return <Observable<OrderResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderResponse>><any>_observableThrow(response_);
        }));
    }

    protected processUpsellProcess(response: HttpResponseBase): Observable<OrderResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderResponse>(<any>null);
    }

    chargeToken(orderVM: OrderVM): Observable<OrderResponse> {
        let url_ = this.baseUrl + "/api/ExtranalAPI/ChargeToken";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(orderVM);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processChargeToken(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processChargeToken(<any>response_);
                } catch (e) {
                    return <Observable<OrderResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<OrderResponse>><any>_observableThrow(response_);
        }));
    }

    protected processChargeToken(response: HttpResponseBase): Observable<OrderResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = OrderResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<OrderResponse>(<any>null);
    }
}
