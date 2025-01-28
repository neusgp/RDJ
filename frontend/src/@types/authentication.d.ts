type Success = { success: true };
type Error = { error: string };

//type checks
export const isSuccess = (result: Success | Error): boolean =>
  "success" in result;
export const isError = (result: Success | Error): boolean => "error" in result;
