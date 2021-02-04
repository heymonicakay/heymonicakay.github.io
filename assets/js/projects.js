const projects = document.querySelector(".projectcards");

const projectCard = (p) => {
    let card = ""
    card += `
    <div class="card" style="background-image: url(assets/images/project-page/${p.image});background-repeat: no-repeat, repeat; background-size: cover; background-position: center; height: 300px; width: 300px;">
        <div class="content">
            <h2 class="volunteerTitle" style="margin-bottom: 0; padding-bottom: 0">${p.title}</h2>
            <p class="copy">${p.desc}</p>
            <div class="menu-content">`

    if(p.previewLink){
        card += `
                <a href="${p.previewLink}" title="View preview." class="social-icon" style="background-color: white;" ><div style="background: url(/assets/icons/preview.svg) no-repeat; background-size: cover; background-position: center; height: 50px; width: 50px; margin: auto;"></div></a>`
    }
    if(p.repo){
        card += `
        <a href="https://github.com/heymonicakay/${p.repo}" title="View code on GitHub." class="social-icon" style="background-color: white;" target="_blank" ><div style="background: url(/assets/icons/github.svg) no-repeat; background-size: cover; background-position: center; height: 50px; width: 50px; margin: auto;"></div></a>`
    }
    card += `
            </div>
        </div>
    </div>`

    return card
}

export const projList = (data) => {
    let projs = data.projects
    projs.forEach(p => {
        projects.innerHTML += projectCard(p);
    });
};
