import { err } from "../util.js";

export const fetchInterests = () =>
  $.ajax( { url: "assets/data/interests.json" } )
    .done( res => res )
    .fail( err );
