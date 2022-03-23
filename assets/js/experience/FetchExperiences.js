import { err } from "../util.js";

export const fetchExperiences = () =>
  $.ajax( { url: "assets/data/experiences.json" })
  .done( res => res )
  .fail( err );
