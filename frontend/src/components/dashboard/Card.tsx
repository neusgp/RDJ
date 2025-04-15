import React from "react";

const CardComponent = () => {
  return (
    <div className="border border-slate-100 shadow-md h-[200px] rounded-lg"></div>
  );
};

export const Card = React.memo(CardComponent);
