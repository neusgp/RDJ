export type AuthorisationResult = { success: true } | { error: string };
export type AuthenticationResult = AuthorisationResult;

//type checks
export const isSuccess = (result: AuthenticationResult) => "success" in result;
export const isError = (result: AuthenticationResult) => "error" in result;
