export const ProjectTitle = ( title ) => {

  return title !== ""
  ? `
    <h2
      class="projectTitle"
      style="
        margin-bottom: 0;
        padding-bottom: 0"
      >
      ${ title }
    </h2>
  `
  : ""
}
