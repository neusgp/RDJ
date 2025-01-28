export type AuthorisationResult = { success: true } | { error: string };
export type AuthenticationResult = AuthorisationResult;

//type guards
export const isSuccess = (result: AuthenticationResult) => "success" in result;
export const isError = (result: AuthenticationResult) => "error" in result;
