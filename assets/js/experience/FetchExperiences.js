import { err } from "../util.js";

export const fetchExperiences = () =>
  $.ajax( { url: "assets/data/experience.json" })
  .done( res => res )
  .fail( err );
