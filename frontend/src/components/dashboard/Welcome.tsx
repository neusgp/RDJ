import React from "react";

const WelcomeComponent = ({ derbyName }: { derbyName?: string }) => (
  <p className="font-bold text-[38px] text-slate-600">
    Welcome
    {derbyName ? ` back, ${derbyName}!` : "!"}
  </p>
);

export const Welcome = React.memo(WelcomeComponent);
