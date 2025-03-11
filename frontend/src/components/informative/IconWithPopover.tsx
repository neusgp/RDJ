import React, { useState } from "react";

import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconWithPopover = ({ children }: { children: string }) => {
  const [showPopover, setShowPopover] = useState<boolean>(false);
  return (
    <div>
      <button>
        <FontAwesomeIcon
          icon={faInfoCircle}
          onClick={() => setShowPopover(!showPopover)}
        />
      </button>
      {showPopover && (
        <div className="text-white text-sm font-semibold bg-slate-700 py-2 px-6 rounded-tl-lg border rounded-br-lg rounded-bl-lg w-[250px]">
          {children}
        </div>
      )}
    </div>
  );
};
