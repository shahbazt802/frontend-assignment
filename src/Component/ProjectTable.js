// src/components/ProjectTable.js
import React from "react";
import { formatCurrency, formatPercentage } from "./Formatter/formate";

const ProjectTable = ({ projects = [], startingIndex = 0 }) => {
  if (projects.length === 0) {
    return <p>No projects available</p>;
  }

  return (
    <table className="project-table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged($)</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={project.id}>
            <td>{startingIndex + index}</td>
            <td>
              {project["percentage.funded"]
                ? formatPercentage(project["percentage.funded"])
                : "N/A"}
            </td>
            <td>{project["amt.pledged"] ? formatCurrency(project["amt.pledged"]) : "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
