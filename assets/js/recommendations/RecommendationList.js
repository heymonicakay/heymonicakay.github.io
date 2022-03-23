import { shuffle } from "../util.js"
import { fetchRecommendations } from "./FetchRecommendations.js";
import { RecommendationCard } from "./RecommendationCard.js";

const RecommendationList = ( recData ) => {
  const twoRandomRecommendations = shuffle( recData ).slice( 0, 2 )
  const recommendationsHTML = twoRandomRecommendations.map( rec => RecommendationCard(rec)).join("");
  return recommendationsHTML
};

export const renderRecommendations = () => {
  fetchRecommendations()
  .then(
    (data) => {
      const target = document.querySelector( ".recommendations-section" )
      target.innerHTML = RecommendationList(data.recs)
    })
}
