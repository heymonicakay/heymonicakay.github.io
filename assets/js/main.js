import { nav } from "./nav.js"
import { err, scrollFunction } from "./util.js"
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

window.onscroll = scrollFunction();

let bodyElement = $(`body`);

bodyElement.prepend(nav);

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// get quotes
$.ajax({
    url: "assets/data/quotes.json"
})
.done(
    () => {

    let message = "";
    $("#sendMessage")
        .on(
            "click",
            (e) => {
                e.preventDefault()

                message = $("#contactForm")
                    .serializeArray()
                    .map(i => i.value)
                $("#inputName").val("");
                $("#inputEmail").val("");
                $("#Message").val("");
                $("#get-in-touch").val("Thanks for your message!")

                console.log(message, "this is the message")

                $.post(
                    "//formspree.io/f/xdoppolo",
                    { message: message },
                    "json"
                )

            return false;
            });
    }
)
.fail(err);

renderExperiences()
renderRecommendations()
renderProjects()
renderSocials()
renderQuote()
