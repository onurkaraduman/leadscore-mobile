import {Observable} from "rxjs";

/**
 * Base provider class with error handling
 */
export class BaseProvider {
  constructor() {
  }

  protected handleError(error: any): Observable<any> {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
