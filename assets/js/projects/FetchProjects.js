import { err } from "../util.js";

export const fetchProjects = () =>
  $.ajax( { url: "assets/data/projects.json" })
  .done( res => res )
  .fail( err );
