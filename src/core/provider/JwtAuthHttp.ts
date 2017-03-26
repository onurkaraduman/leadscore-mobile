import {AuthHttp, AuthConfig} from "angular2-jwt";
import {Http} from "@angular/http";

/**
 * Custom jwt http
 */
export class JwtAuthHttp extends AuthHttp {

  constructor(options: AuthConfig,
              http: Http) {
    super(options, http);
  }
}
