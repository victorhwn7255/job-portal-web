import React from "react";

export default function StatusButton({ status }) {
  return (
    <div>
      {status === "In Progress" && (
        <div className="bg-orange-300 px-3 py-2 rounded-lg">
          <p className=" text-grayClassic50 text-sm">{status}</p>
        </div>
      )}
      {status === "Accepted" && (
        <div className="bg-emerald-400 px-3 py-2 rounded-lg">
          <p className=" text-grayClassic50 text-sm">{status}</p>
        </div>
      )}
      {status === "Rejected" && (
        <div className="bg-red-400 px-3 py-2 rounded-lg">
          <p className=" text-grayClassic50 text-sm">{status}</p>
        </div>
      )}
    </div>
  );
}
