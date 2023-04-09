export interface ActiveUserData {
  /**
   * The "subject" of the JWT, which is the user's ID
   */
  sub: number;

  /**
   * The subject (user) email address
   */
  email: string;
}
