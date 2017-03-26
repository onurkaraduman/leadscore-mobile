/**
 * Login request body
 */
export class LoginModel {
  username: string;
  password: string;
  client: string = process.env.CLIENT_ID;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.client = 'Android';
  }
}
