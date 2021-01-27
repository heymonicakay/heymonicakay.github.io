//  Work experience cards
const experiencecards = document.querySelector(".experience-cards");

const exp = [
  {
    title: "Full-Stack Software Developer",
    cardImage: "assets/images/experience-page/nsslogo.png",
    place: "Nashville Software School",
    time: "(July, 2020 - January 2021)",
    desc: "<i>Intensive six-month, full-time software development bootcamp with immersive, lab-based learning in Full-Stack Development, with a focus on HTML5, CSS3, JavaScript, React, SQL, and Python.</i><li>Experience with Scrum process and agile workflow</li><li>Used Git & GitHub for version control.</li><li>Experience in a full-time remote environment</li>",
  },
  {
    title: "Denials Specialist",
    cardImage: "assets/images/experience-page/kemby.jpeg",
    place: "Kemberton",
    time: "(2017 - 2020)",
    desc: "<i>Healthcare Company specializing in Patient and Provider advocacy through complex claims resolution.<li>Wrote legal appeals on behalf of healthcare Providers & Patients.</i></li><li>Identified repetitive tasks, and wrote macros to automate them.</li><li>Conducted daily research on current insurance policies.</li>",
  },
  {
    title: "Licensee/Artist",
    cardImage: "assets/images/experience-page/pn.jpeg",
    place: "Paint Nite - Nashville & Memphis",
    time: "(2014 - 2019)",
    desc:'<i>The premier "social painting" company in the U.S.<li>Started as a Teaching Artist and took over operations for Nashville in 2017.</i></li><li>Grew Private Event revenue for the Nashville Market from roughly $10,000 annually to over $70,000 in my first year.</li><li>Launched Paint Nite Memphis in 2018, and developed self-sustaining team remotely from home in Nashville, TN.</li>',
  },
];

const showCards2 = () => {
    let output = "";
    exp.forEach(e => {
        output += `
        <ul>
            <li class="card card1">
                <img src="${e.cardImage}" class="featured-image"/>
                <article class="card-body">
                <header>
                    <div class="title">
                        <h3>${e.title}</h3>
                    </div>
                    <p class="meta">
                        <span class="pre-heading">${e.place}</span><br>
                        <span class="author">${e.time}</span>
                    </p>
                    <ol>
                    ${desc}
                    </ol>
                </header>
                </article>
            </li>
        </ul>
        `
    });
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
    {
    title: "Tornado Relief Coordinator",
    cardImage: "assets/images/experience-page/hon.jpeg",
    description:
        "Worked closely with Hands On Nashville to dispatch teams to locations where volunteers were needed.",
    },
    {
      title: "COVID-19 Essentials Distributer",
      cardImage: "assets/images/experience-page/hon.jpeg",
      description:
        "Packaged and delivered essential products to elderly and immunocompromised Nashville Residents during pandemic.",
    },
    {
    title: "Volunteer Event Coordinator",
    cardImage: "assets/images/experience-page/kaf.jpeg",
    description:
      "Coordinated execution of a community mural, painted by hundreds of participants during the festival.",
    }
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

