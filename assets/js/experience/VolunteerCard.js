export const VolunteerCard = ( volObj ) => {
  return `
    <div
      class="card volunteerCard"
      style="background-image: url(${ volObj.cardImage });
      background-repeat: no-repeat, repeat;
      background-size: cover;
      background-position: center;"
      >
        <div class="content">
            <h2 class="volunteerTitle">
              ${ volObj.title }
            </h2>
            <p class="copy">
              ${ volObj.desc }
            </p>
        </div>
    </div>
`
}
