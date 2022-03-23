import { err } from "../util.js";

export const fetchQuotes = () =>
  $.ajax( { url: "assets/data/quotes.json" })
  .done( res => res.quotes)
  .fail( err );
