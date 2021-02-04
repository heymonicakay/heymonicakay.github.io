const sectionList = ["Home", "About", "Projects", "Experience", "Volunteer", "Recommendations", "Contact"]

const listItem = i => `<li><a class="white-text" href="#section${i}">${i}</a></li>`

const resume = () => `<li><a class="white-text" href="assets/MonicaKayProvence_Resume.pdf" target="_blank"><button class="btn resume">Download Resume</button></a></li>`

const navigation = (sections) => {
    let list = `<ul class="right hide-on-med-and-down">`
    sections.forEach(s => list += listItem(s))
    list += resume()
    list += `</ul>`
    return list
}

const sideNav = (sections) => {
    let list = `<ul class="sidenav" id="mobile-demo">`
    sections.forEach(s => list += `<li><a href="section${s}">${s}</a></li>`)
    list += `<li><a href="assets/MonicaKayProvence_Resume.pdf" target="_blank" download="MonicaKayProvence_Resume">Download Resume</a></li>`
    list += `</ul>`
    return list
}

export const nav = () =>{
    return `
    <nav class="grey darken-2" >
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo">
                <img src="assets/images/monica-kay.PNG" style="transform: scale(.8, .8);">
            </a>
            <a href="#sectionHome" data-target="mobile-demo" class="white-text sidenav-trigger">
                <i class="material-icons">
                    menu
                </i>
            </a>
            ${navigation(sectionList)}
        </div>
    </nav>
    ${sideNav(sectionList)}
    `
}