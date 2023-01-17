import React from "react";

const SecurityChecklist = () => {
  const tableData = [
    {
      task: "Pick a strong rassword",
      priority: "High",
      effort: "2 min",
      done: false,
    },
    {
      task: "Torn on two-factor autentication",
      priority: "Medium",
      effort: "2-10 min",
      done: false,
    },
    {
      task: "Download your data",
      priority: "Low",
      effort: "2 min",
      done: false,
    },
    {
      task: "Check Login activity",
      priority: "Low",
      effort: "5 min",
      done: false,
    },
    {
      task: "Change Message Controls",
      priority: "Medium",
      effort: "2 min",
      done: false,
    },
  ];

  return (
    <div className="securityWrap">
      <div className="securityTitle">Security Checklist</div>
      <table className="securityTable">
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Effort</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowValues, index) => {
            return (
              <tr key={index}>
                <td>{rowValues.task}</td>
                <td>{rowValues.priority}</td>
                <td>{rowValues.effort}</td>
                <td>{rowValues.done}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SecurityChecklist;
