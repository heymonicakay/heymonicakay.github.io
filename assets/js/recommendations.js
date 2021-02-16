import { shuffle } from "./util.js";

const recommendations = document.querySelector(".recommendations-section")

//  rec card
const recommendationCard = (r) => {
    return `
    <div class="col s12 m7">
      <div class="rec card">
        <div class="rec card-content">
          <p class="pre-heading font-weight-bolder text-center animate__animated animate__fadeInUp animate__delay-2s">${r.text}</p>
        </div>
        <div class="rec card-body">
            <div class="rec-who">
                <div class="text-right pre-heading">${r.whoSaidIt}</div>
                <div class="text-right author job">${r.whoAreThey}</div>
                <div class="text-right author">${r.company}</div>
            </div>
            <a href="https://www.linkedin.com/in/${r.linkedIn}/">
                <img src="assets/images/recommendations/${r.cardImage}.jpeg" class="rec-image circle" />
            </a>
        </div>
      </div>
    </div>
    `
}

// list of recommendations
export const recList = (data) => {
    let recs = shuffle(data.recs).slice(0, 2)
    recs.forEach(r => {
        recommendations.innerHTML += recommendationCard(r);
    });
};
