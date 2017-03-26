export interface UserModel {
  user: UserDetails;
  integrations: Integrations;
  firebaseAuthToken: string;
  token: Token;
}

interface UserDetails {
  id: string;
  username: string;
  accountStatus: string;
  expirationDate: Date;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  timeZone: string;
  organizationId: string;
  organizationName: string;
  signupClient: string;
  dateCreated: Date;
  active: boolean;
  human: boolean;
  permissions: string[];
  teamIds: string[];
}

interface Integrations {
}

interface Token {
  expires: Date;
  authToken: string;
}


