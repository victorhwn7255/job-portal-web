import React from "react";
import { HiOfficeBuilding } from "react-icons/hi";

export default function ColorIcon({ status }) {
  return (
    <div>
      {status === "In Progress" && (
        <div className="bg-lightBlue text-grayClassic50 rounded-lg w-[95px] h-[95px] flex justify-center items-center">
          <HiOfficeBuilding size={39} />
        </div>
      )}
      {status === "Accepted" && (
        <div className="bg-indigo-300 text-grayClassic50 rounded-lg w-[95px] h-[95px] flex justify-center items-center">
          <HiOfficeBuilding size={39} />
        </div>
      )}
      {status === "Rejected" && (
        <div className="bg-[#E1918E] text-grayClassic50 rounded-lg w-[95px] h-[95px] flex justify-center items-center">
          <HiOfficeBuilding size={39} />
        </div>
      )}
    </div>
  );
}
