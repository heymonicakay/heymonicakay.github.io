import { fetchProjects } from "./FetchProjects.js";
import { ProjectCard } from "./ProjectCard.js";

const ProjectList = ( projectData ) => {
  const projectsHTML = projectData.map( project => ProjectCard( project ) ).join( "" );
  return projectsHTML
}

export const renderProjects = ( ) => {
  fetchProjects()
  .then(
    (data)=>{
      const target = document.getElementById( "projectsSection" )
      target.innerHTML = ProjectList( data.projects )
    }
  )
};
