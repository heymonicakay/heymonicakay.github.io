const contactForm = () =>{
    return `
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
    `
}
const sendIt = (e) => {
    e.preventDefault()
    let message;
    message = $("#contactForm").serializeArray().map(i => {
        return i.value
    })
    $("#inputName").val("");
    $("#inputEmail").val("");
    $("#Message").val("");

    $.post("//formspree.io/f/xdoppolo", { message: message }, "json")

    return false;
}

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
