import { SocialMediaIcon } from "./SocialMediaIcon.js"

const socials = [
  {
    "id": 1,
    "nameOfSocial": "GitHub",
    "linkToSocial": "https://github.com/heymonicakay/"
  },
  {
    "id": 2,
    "nameOfSocial": "LinkedIn",
    "linkToSocial": "https://linkedin.com/in/heymonicakay/"
  }
]

const SocialMediaIconList = (socialsArray) => {
  const socialsAsHTML = socialsArray.map(s => SocialMediaIcon(s.linkToSocial, s.nameOfSocial)).join("")
  return socialsAsHTML
}


export const renderSocials = () => {
  const socialsHTML = SocialMediaIconList(socials)
  const target = document.getElementById( "socialIconsList")
  target.innerHTML = socialsHTML
}
