import React from "react";

const COLORS = new Map([
  ["training", "bg-orange-500"],
  ["bout", "bg-blue-400"],
  ["bootcamp", "bg-purple-500"],
  ["skill", "bg-amber-400"],
  ["rule", "bg-green-600"],
]);

type BadgeType = "training" | "bout" | "bootcamp" | "skill" | "rule";

export const TypeBadge = ({ type }: { type: BadgeType }) => {
  return (
    <div
      className={`${COLORS.get(
        type
      )} text-xs font-semibold w-min text-white py-1 px-2 rounded-full`}>
      {type}
    </div>
  );
};
