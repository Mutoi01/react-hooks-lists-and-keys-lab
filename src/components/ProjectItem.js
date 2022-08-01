import React from "react";
import user from "../data/user";

function ProjectItem({ name, about, technologies }) {
  const newTech = technologies.map(technology => {
    return <span key={technology}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {newTech}
      </div>
    </div>
  );
}

export default ProjectItem;
