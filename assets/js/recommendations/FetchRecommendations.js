import { err } from "../util.js";

export const fetchRecommendations = () =>
  $.ajax( { url: "assets/data/recommendations.json" })
  .done( res => res )
  .fail( err );
