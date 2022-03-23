import { shuffle } from "../util.js"
import { RecommendationCard } from "./RecommendationCard";

export const RecommendationList = ( recData ) => {
  const twoRandomRecommendations = shuffle( recData ).slice( 0, 2 )
  const recommendationsHTML = twoRandomRecommendations.map( rec => RecommendationCard(rec)).join("");
  return recommendationsHTML
};

export const RenderRecommendationList = (recData) => {
  const target = document.querySelector( ".recommendations-section" )
  target.innerHTML = RecommendationList(recData)
}
