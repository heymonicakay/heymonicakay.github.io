import { renderRecommendations } from "./recommendations/RecommendationList.js"
import { renderProjects } from "./projects/ProjectList.js"
import { expList } from "./experience.js"
import { nav } from "./nav.js"
import { err, pickOne, scrollFunction } from "./util.js"
import { renderSocials } from "./footer/SocialMediaIconList.js"
import { renderQuote } from "./quotes/QuoteCard.js"

$(document).ready(
    () => {
        $(".sidenav").sidenav();
    }
);

$.ajax({ url: "assets/data/recommendations.json" })
.done(data => renderRecommendations(data.recs))
.fail(err)

$.ajax({ url: "assets/data/projects.json" })
    .done( data => renderProjects(data.projects) )
.fail(err)

$.ajax({
    url: "assets/data/experience.json"
}).done(expList)
.fail(err);

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

renderSocials()
renderQuote()
