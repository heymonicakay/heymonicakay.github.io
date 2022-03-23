import { fetchExperiences } from "./FetchExperiences.js"
import { VolunteerCard } from "./VolunteerCard.js"
import { WorkCard } from "./WorkCard.js"

const sortExperiences = (expData) => ({
  volunteer: expData.experience.filter( exp => exp.volunteer ),
  work: expData.experience.filter( exp => !exp.volunteer )
})

const VolunteerList = (volData) => volData.map( vol => VolunteerCard(vol)).join("")
const WorkList = ( workData ) => workData.map( work => WorkCard(work)).join("")

export const renderExperiences = () => {
  fetchExperiences()
  .then(
    (data)=>{
      const { vol, work } = sortExperiences( data.experience )
      const workTarget = document.querySelector( ".experience-cards" )
      const volTarget = document.querySelector( ".volunteership" );

      volTarget.innerHTML = VolunteerList(vol)
      workTarget.innerHTML = WorkList(work)

    }
  )

}
