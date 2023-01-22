import React from "react";

import { problemsData } from "../../images/data";

const RecentProblems = () => {

  const fixProblem = () => {
    alert('Fixing the problem...');
  }

  const seeMoreErrors = () => {
    alert('Loading more errors...');
  }

  return (
    <div className="problemsWrap">
      <div className="problemsTitle">Recent Problems & Errors</div>
      <div className="problems">
        {problemsData.map((problem, index) => {
          return (
            <div key={index} className="singleProblem">
              <div className="problemIcon">
                <img src={problem.icon} alt='icon' />
              </div>
              <div className="ptoblemText">{problem.text}</div>
              <div className="fixItBtnWrap" >
                <button className="fixItBtn" onClick={fixProblem}>Fix it</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="moreProblems" onClick={seeMoreErrors}>See more</div>
    </div>
  );
};

export default RecentProblems;
