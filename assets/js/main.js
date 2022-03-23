import { RenderRecommendationList } from "./recommendations/RecommendationList"
import { projList } from "./projects.js"
import { expList } from "./experience.js"
import { nav } from "./nav.js"
import { err, pickOne, scrollFunction } from "./util.js"

$(document).ready(
    () => {
        $(".sidenav").sidenav();
    }
);

$.ajax({
    url: "assets/data/recommendations.json"
} ).done( ( data ) => RenderRecommendationList(data.recs))
.fail(err)

$.ajax({
    url: "assets/data/projects.json"
}).done(projList)
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
.done((response) => {
    let data = response.quotes;
    const quote = pickOne(data)

    let footer = `
        <footer class="webintern-footer">
            <div class="webintern-footer-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-6 pt-3" >
                            <div class="col-sm-12 col-md-10 ml-lg-4">
                                <a class="webintern-footer-logo col-12 d-none d-md-inline-block" href="#home">
                                    <center>
                                        <img src="assets/images/monica-kay.PNG"style="width: 220px;"/>
                                    </center>
                                </a>
                                <div class="simple-text text-center dark padding-sm">
                                    <p>
                                        ${quote.text}
                                            <br />
                                                <span class="right" style="margin-right: 1rem;">
                                                    ${quote.whoSaidIt}
                                                        </span>
                                                            <br />
                                    </p>
                                    <div class="empty-space xs-25 sm-25"></div>
                                </div>
                            </div>
                            <!-- Social media icons for footer -->
                            <div class="social-icons-footer mx-lg-auto">
                                <a href="https://linkedin.com/in/heymonicakay/" title="View my LinkedIn." class="social-icon" style="display: inline-flex;background-color: white;" target="_blank" >
                                        <div style="background: url(/assets/icons/linkedin.svg) no-repeat; background-size: 60%; background-position: center; height: 50px; width: 50px; margin: auto;">
                                        </div>
                                    </a>
                                <a href="https://github.com/heymonicakay/" title="View my GitHub." class="social-icon" style="display: inline-flex;background-color: white;" target="_blank" >
                                    <div style="background: url(/assets/icons/github.svg) no-repeat; background-size: 75%; background-position: center; height: 50px; width: 50px; margin: auto;">
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-5 pt-3 footer-2 mx-auto">
                            <h4 class="webintern_footer_title h5">
                                <small id="get-in-touch">
                                    Get In Touch
                                </small>
                            </h4>
                            <div class="contact-form">
                                <form id="contactForm" name="input" method="POST">
                                    <input id="hiddenSubject" type="hidden" name="_subject" value="PORTFOLIO CONTACT FORM - New Message!" />
                                    <fieldset class="form-group text-center">
                                        <input type="text" class="form-control" id="inputName" name="Name" placeholder="Your name..." required>
                                    </fieldset>
                                    <fieldset class="form-group text-center">
                                        <input type="email" class="form-control" id="inputEmail" name="_replyto" placeholder="example@youremail.com" required>
                                    </fieldset>
                                    <fieldset class="form-group text-center">
                                        <textarea class="form-control" id="Message" name="message" placeholder="Your message..." required></textarea>
                                    </fieldset>
                                    <fieldset class="form-group text-xs-right text-center">
                                        <button id="sendMessage" class="send-btn btn btn-lg">
                                            Send
                                        </button>
                                    </fieldset>
                                </form>
                            </div>
                            <div class="empty-space marg-lg-b30"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>`;
    let bodyElement = $(`body`);
    bodyElement.append(footer)

    let message = "";
    $("#sendMessage").on("click", function(e) {
        e.preventDefault()
        message = $("#contactForm").serializeArray().map(i => {
            return i.value
        })
        $("#inputName").val("");
        $("#inputEmail").val("");
        $("#Message").val("");
        $("#get-in-touch").val("Thanks for your message!")

        console.log(message, "message")
        $.post("//formspree.io/f/xdoppolo", { message: message }, "json")

        return false;
    });
}).fail(err);
