export const getFormValues = <T>(e: React.FormEvent<HTMLFormElement>): T => {
  const formData = new FormData(e.currentTarget);

  let formValues = {};

  for (let [key, value] of formData.entries()) {
    formValues = { ...formValues, [key]: value };
  }

  return formValues as T;
};
