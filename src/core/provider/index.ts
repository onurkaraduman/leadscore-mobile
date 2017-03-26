import {AuthProvider} from "./auth/auth.provider";
import {ContactProvider} from "./contacts/contact.provider";

export function providers() {
  return [
    AuthProvider,
    ContactProvider
  ];
}
