/**
 * Authentication service constants
 */
export class AuthConst {
  public static get USER_KEY(): string {
    return 'user-key';
  }

  public static get TOKEN_KEY(): string {
    return 'authToken';
  }
}

/**
 * Rest api properties
 * TODO endpoint can be set in bash profile
 */
export class RestApiConst {

}

/**
 * Secure local storage constants
 */
export class SecureStorageConst {
  public static get STORAGE_NAME() {
    return 'session-storage';
  }
}
