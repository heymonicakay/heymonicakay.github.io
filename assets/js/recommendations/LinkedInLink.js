import { RecImage } from "./RecImage.js"
export const LinkedInLink = ( linkedIn, img ) => {

  let html = !!linkedIn
    ? `<a href="${ linkedIn }" target="_blank" >`
    : ""

  html += RecImage( img )

  html += !!linkedIn
    ? `</a>`
    : ""

  return html
}
