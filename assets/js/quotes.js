import { pickOne } from "./util.js";

//  quote card
const quote = (q) => {
    return `
    <div class="simple-text text-center dark padding-sm">
        <p>
            ${q.text}
            <br />
            <span class="right" style="margin-right: 1rem;">
                ${q.whoSaidIt}
                    </span>
            <br />
        </p>
        <div class="empty-space xs-25 sm-25"></div>
    </div>
    `
}
export const randomQuote = (data) => {
    let q = pickOne(data.quotes)
    return quote(q)
};
