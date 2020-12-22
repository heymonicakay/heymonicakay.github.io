//common side navbar call
$(document).ready(function () {
  $(".sidenav").sidenav();
});
//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// clear the form
const handleClick = () => {

}
// picks random quote
const pickOne = (arr) => {
    var numberOutOfAHat = Math.floor(Math.random() * arr.length);
    const random = arr[numberOutOfAHat]
    console.log(random);
    return random
}
// get quotes
$.ajax({
    url: "assets/data/quotes.json"
}).done(function(response) {
    let data = response.quotes;
    const quote = pickOne(data)

    let footer = `
        <footer class="webintern-footer">
            <div class="webintern-footer-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-6 pt-3" >
                            <div class="col-sm-12 col-md-10 ml-lg-4">
                                <a class="webintern-footer-logo col-12 d-none d-md-inline-block" href="#">
                                    <center>
                                        <img src="assets/images/monica-kay.PNG"style="width: 220px;"/>
                                    </center>
                                </a>
                                <div id="quotesGoHere" class="simple-text text-center dark padding-sm">
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
                                <a class="social-icon-footer linkedin" style="visibility: hidden; pointer-events: none;" href=" " target="_blank" rel="author">
                                    <i class="fab fa-linkedin-in"></i>
                                        </a>
                                <a class="social-icon-footer linkedin" href="https://www.linkedin.com/in/heymonicakay/" target="_blank" rel="author">
                                    <i class="fab fa-linkedin-in"></i>
                                        </a>
                                <a class="social-icon-footer linkedin" style="visibility: hidden; pointer-events: none;" href=" " target="_blank" rel="author">
                                    <i class="fab fa-linkedin-in"></i>
                                        </a>
                                <a class="social-icon-footer github" href="https://github.com/heymonicakay" target="_blank" rel="author">
                                    <i class="fab fa-github"></i>
                                        </a>
                                <a class="social-icon-footer linkedin" style="visibility: hidden; pointer-events: none;" href=" " target="_blank" rel="author">
                                    <i class="fab fa-linkedin-in"></i>
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
}).fail(function(er) {
    console.log("error", er);
});

//Footer and Navbar

let header = $(`
    <nav class="grey darken-2">
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
                <img src="assets/images/monica-kay.PNG">
            </a>
            <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger">
                <i class="material-icons">
                    menu
                </i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li>
                    <a class="white-text" href="index.html">
                        Home
                    </a>
                </li>
                <li>
                    <a class="white-text" href="experience.html">
                        Experience
                    </a>
                </li>
                <li>
                    <a class="white-text" href="projects.html">
                        Projects
                    </a>
                </li>
                <li>
                    <a class="white-text" href="assets/MonicaProvence_Resume.pdf" target="_blank" download="MonicaKayProvence_Resume">
                        <button class="btn resume">
                            Download Resume
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    </nav>

<!--Side Nav Bar -->

    <ul class="sidenav" id="mobile-demo">
        <li>
            <a href="index.html">
                Home
            </a>
        </li>
        <li>
            <a href="experience.html">
                Experience
            </a>
        </li>
        <li>
            <a href="projects.html">
                Projects
            </a>
        </li>
        <li>
            <a href="assets/MonicaProvence_Resume.pdf" target="_blank" download="MonicaKayProvence_Resume">
                Download Resume
            </a>
        </li>
    </ul>
`);

let bodyElement = $(`body`);
bodyElement.prepend(header);

// success: function () {
//     $("#contact_form").html("<div id='message'></div>");
//     $("#message")
//       .html("<h2>Contact Form Submitted!</h2>")
//       .append("<p>We will be in touch soon.</p>")
//       .hide()
//       .fadeIn(1500, function () {
//         $("#message").append(
//           "<img id='checkmark' src='images/check.png' />"
//         );
//       });
//   }