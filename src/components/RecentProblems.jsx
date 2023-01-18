import React from "react";

const RecentProblems = () => {
  const problemsData = [
    { text: "Mass of disableding account" },
    { text: "Mass of disableding account" },
    { text: "Mass of disableding account" },
    { text: "Mass of disableding account" },
  ];

  return (
    <div className="problemsWrap">
      <div className="problemsTitle">Recent Problems & Errors</div>
      <div className="problems">
        {problemsData.map((problem, index) => {
          return (
          <div key={index} className="singleProblem">
            <div className="problemIcon">ic</div>
            <div className="ptoblemText">{problem.text}</div>
            <button>Fix it</button>
          </div>)
        })}
      </div>
    </div>
  );
};

export default RecentProblems;
