import React from "react";
import { AutenticationForm } from "../components";

export const LandingPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-20">
      <div className="flex flex-col items-center gap-4">
        <h1>Your progress doesn't stop when you leave the track.</h1>
        <p className="w-[60%] text-center">
          Now you can keep your Roller Derby notes in one place. Roller Derby
          Journal will help you organize your thoughts, ambitions, hopes and
          dreams about your favourite sport, so that you can give your best in
          your next derby challenge!
        </p>
      </div>
      <AutenticationForm />
    </div>
  );
};
