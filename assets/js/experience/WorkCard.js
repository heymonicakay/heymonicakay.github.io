export const WorkCard = ( {cardImage, title, place, desc} ) =>
`
    <div class="card card1" style="width: 85%; margin-left: auto; margin-right: auto;">
        <img src="${ cardImage }" class="featured-image" style="transform: scale(.8,.8);"/>
        <article class="card-body" style="margin-left: 3rem;">
            <header>
                <div class="title">
                    <h3>${ title }</h3>
                </div>
                <p class="meta">
                    <span class="pre-heading">${ place }</span><br>
                    <span class="author">${ time }</span>
                </p>
                <br />
                <div style="max-width: 80%;">
                ${ desc }
                </div>
            </header>
        </article>
    </div>
`
