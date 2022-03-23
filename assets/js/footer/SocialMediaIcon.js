export const SocialMediaIcon = (linkToSocial, nameOfSocial ) => `
    <a
        href="${linkToSocial}"
        title="View my ${nameOfSocial}."
        class="social-icon"
        style="
            display: inline-flex;
            background-color: white;
            "
        target="_blank" >
            <div style="
                background: url(/assets/icons/${nameOfSocial.toLowerCase() }.svg) no-repeat;
                background-size: 60%;
                background-position: center;
                height: 50px;
                width: 50px;
                margin: auto;">
            </div>
    </a>
  `
