import { nav } from "./nav.js"
import { scrollFunction } from "./util.js"
import { renderQuote } from "./quotes/QuoteCard.js"
import { renderSocials } from "./footer/SocialMediaIconList.js"
import { renderProjects } from "./projects/ProjectList.js"
import { renderExperiences } from "./experience/ExperienceList.js"
import { renderRecommendations } from "./recommendations/RecommendationList.js"

$(document)
.ready(
    () => {
        $(".sidenav").sidenav();
    }
);

window.addEventListener(
  "scroll",
  scrollFunction
)

let bodyElement = $(`body`);

bodyElement.prepend(nav);


renderExperiences()
renderRecommendations()
renderProjects()
renderSocials()
renderQuote()
