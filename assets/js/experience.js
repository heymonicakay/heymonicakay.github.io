const workExperience = document.querySelector(".experience-cards")
const volunteership = document.querySelector(".volunteership");

//  Work experience card
const experienceCard = (e) => {
    return `
            <div class="card card1" style="width: 85%; margin-left: auto; margin-right: auto;">
                <img src="${e.cardImage}" class="featured-image" style="transform: scale(.8,.8);"/>
                <article class="card-body" style="margin-left: 3rem;">
                    <header>
                        <div class="title">
                            <h3>${e.title}</h3>
                        </div>
                        <p class="meta">
                            <span class="pre-heading">${e.place}</span><br>
                            <span class="author">${e.time}</span>
                        </p>
                        <br />
                        <div style="max-width: 80%;">
                        ${e.desc}
                        </div>
                    </header>
                </article>
            </div>
        `
}

// Volunteer Experience Card
const volunteerCard = (e) => {
return `
    <div class="card volunteerCard" style="background-image: url(${e.cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
        <div class="content">
            <h2 class="volunteerTitle">${e.title}</h2>
            <p class="copy">${e.desc}</p>
        </div>
    </div>
`
}

// list of experience
export const expList = (data) => {
    let exp = data.experience
    let volList = "";
    let workList = "";
    exp.forEach(e => {
        if(e.volunteer){
            volList += volunteerCard(e)
        }
        else{
            workList += experienceCard(e)
        }
    });
    volunteership.innerHTML = volList;
    workExperience.innerHTML = workList;
};
