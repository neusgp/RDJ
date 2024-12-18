import React, { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

export const AutenticationForm = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  return (
    <>
      {isRegister ? (
        <RegisterForm setIsRegister={setIsRegister} />
      ) : (
        <LoginForm setIsRegister={setIsRegister} />
      )}
    </>
  );
};
