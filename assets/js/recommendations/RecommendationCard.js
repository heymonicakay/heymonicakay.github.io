import { LinkedInLink } from "./LinkedInLink.js"

export const RecommendationCard = ( recObj ) => {

  const linkedIn =  recObj.linkedIn !== ""
    ? `https://www.linkedin.com/in/${ recObj.linkedIn }`
    : null

  const image = recObj.cardImage !== ""
    ? `assets/images/recommendations/${ recObj.cardImage }.jpeg`
    : null

  return `
    <div class="col s12 m7">
      <div class="rec card">
        <div class="rec card-content">
          <p class="pre-heading font-weight-bolder text-center animate__animated animate__fadeInUp animate__delay-2s">${ recObj.text }</p>
        </div>
        <div class="rec card-body">
            <div class="rec-who">
                <div class="text-right pre-heading">${ recObj.whoSaidIt }</div>
                <div class="text-right author job">${ recObj.whoAreThey }</div>
                <div class="text-right author">${ recObj.company }</div>
            </div>
          ${LinkedInLink(linkedIn, image)}
        </div>
      </div>
    </div>
    `
}
