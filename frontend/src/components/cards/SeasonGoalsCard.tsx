import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { GoalsProps } from "../../@types";

//on pencil click, open season goals modal.

const SeasonGoalsCardComponent = ({ goals }: { goals?: GoalsProps }) => {
  return (
    <div className="px-5 py-4 bg-[#F5F3FF] w-max rounded-lg flex flex-col gap-5 goals-card">
      <div className="flex justify-between ">
        <p className="text-lg text-purple-500 text-xl font-semibold">
          My Season Goals
        </p>
        <button type="button">
          <FontAwesomeIcon icon={faPen} className="text-purple-500" />
        </button>
      </div>
      {goals ? (
        <div className="flex flex-col gap-3">
          {goals.map(({ goal }) => (
            <p key={goal}>
              <FontAwesomeIcon icon={faStar} className="text-purple-500" />{" "}
              {goal}
            </p>
          ))}
        </div>
      ) : (
        <p>You haven't set any goal yet</p>
      )}
    </div>
  );
};

export const SeasonGoalsCard = React.memo(SeasonGoalsCardComponent);
