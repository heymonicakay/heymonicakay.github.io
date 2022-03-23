export const ProjectPreviewLink = ( previewLink ) => {

  return previewLink !== ""
  ? `
    <a
      href="${ previewLink }"
      title="View preview."
      class="social-icon"
      style="
          background-color: white;"
      >
      <div
          style="
              background: url(/assets/icons/preview.svg) no-repeat;
              background-size: cover;
              background-position: center;
              height: 50px;
              width: 50px;
              margin: auto;"
              >
      </div>
  </a>
  `
  : ""
}
