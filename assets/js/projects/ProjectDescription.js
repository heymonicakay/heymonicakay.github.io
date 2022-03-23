export const ProjectDescription = ( desc ) => {

  return desc !== ""
  ? `
    <p class="copy">
      ${ desc }
    </p>
  `
  : ""
}
