import React from "react";
import { GoalsProps } from "../../@types";

export const SeasonGoals = ({ goals }: { goals: GoalsProps | undefined }) => {
  return (
    <div className="flex flex-col p-4">
      <p className="font-bold text-[28px] text-slate-500">Season Goals</p>
      <div>
        {goals ? (
          <>
            {goals.map(({ id, goal }) => (
              <div key={id}>{goal}</div>
            ))}
          </>
        ) : (
          <p>Add season goal +</p>
        )}
      </div>
    </div>
  );
};
