import React from "react";
import { useSelector } from "react-redux";

const SecurityChecklist = () => {
  
  const securityChecklist = useSelector((state) => state.app.securityChecklist);

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
          {securityChecklist.map((rowValues, index) => {
            return (
              <tr key={index}>
                <td><a href="#" style={{color: '#508ADF', fontSize: '16px'}}>{rowValues.task}</a></td>
                <td><div className={`priorityWrap ${rowValues.priority}`}>{rowValues.priority}</div></td>
                <td><div className="effortWrap">{rowValues.effort}</div></td>
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
