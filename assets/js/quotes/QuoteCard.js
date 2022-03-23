import { pickOne } from "../util.js";
import { fetchQuotes } from "./FetchQuotes";

const QuoteCard = (quoteObj) => {
    return `
    <p>
        ${ quoteObj.text }
        <br />
        <span
            class="right"
            style="margin-right: 1rem;"
            >
            ${ quoteObj.whoSaidIt }
        </span>
        <br />
    </p>
    <div class="empty-space xs-25 sm-25"></div>
    `
}

export const renderQuote = () => {
    const quoteData = fetchQuotes()

    console.log(quoteData)

    const target = document.getElementById("randomQuoteSection")
    const randomQuote = pickOne(quoteData)
    const quoteHTML = QuoteCard(randomQuote)
    target.innerHTML = quoteHTML
}
