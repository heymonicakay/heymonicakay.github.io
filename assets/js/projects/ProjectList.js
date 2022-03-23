import { ProjectCard } from "./ProjectCard.js";

const ProjectList = ( projectData ) => {
  const projectsHTML = projectData.map( project => ProjectCard( project ) ).join( "" );
  return projectsHTML
}

export const renderProjects = ( projData ) => {
  const target = document.getElementById( "projectsSection" )
  target.innerHTML = ProjectList( projData )
};
