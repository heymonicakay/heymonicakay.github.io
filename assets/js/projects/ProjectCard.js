import { ProjectGitHubIcon } from "./ProjectGitHubIcon.js"
import { ProjectPreviewLink } from "./ProjectPreviewLink.js"

export const ProjectCard = ({image, repo, previewLink, title, desc}) => {
  return `
    <div
      class="card"
      style="
        background-image: url(assets/images/project-page/${ image });"
      >
      <div class="content">
        ${ProjectTitle(title)}
        ${ProjectDescription(desc)}
      <div class="menu-content">
        ${ProjectPreviewLink( previewLink ) }
        ${ProjectGitHubIcon( repo )}
      </div>
    </div>
  </div>`

}




