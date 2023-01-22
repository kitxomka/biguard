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
            <th style={{width: '398px'}}>Task</th>
            <th className="priorityTh">Priority</th>
            <th className="effortTh">Effort</th>
            <th className="doneTh">Done</th>
          </tr>
        </thead>
        <tbody>
          {securityChecklist.map((rowValues, index) => {
            return (
              <tr key={index}>
                <td className="task">{rowValues.task}</td>
                <td className="priority"><div className={`priorityWrap ${rowValues.priority}`}>{rowValues.priority}</div></td>
                <td className="effort"><div className="effortWrap">{rowValues.effort}</div></td>
                <td className="done">
                  <input type="checkbox" id="checkbox-done" name="done" className="checkbox-done"/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SecurityChecklist;
