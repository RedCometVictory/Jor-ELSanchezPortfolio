import Card from '../../components/UI/Card';
import blazr_01 from "../../public/images/blazr-imgs/BlaZr-Gear-01.png";
import blazr_02 from "../../public/images/blazr-imgs/BlaZr-Gear-02.png";
import blazr_03 from "../../public/images/blazr-imgs/BlaZr-Gear-03.png";
import blazr_04 from "../../public/images/blazr-imgs/BlaZr-Gear-04.png";
import blazr_05 from "../../public/images/blazr-imgs/BlaZr-Gear-05.png";
import blazr_06 from "../../public/images/blazr-imgs/BlaZr-Gear-06.png";
import blazr_07 from "../../public/images/blazr-imgs/BlaZr-Gear-07.png";
import blazr_08 from "../../public/images/blazr-imgs/BlaZr-Gear-08.png";
import blazr_09 from "../../public/images/blazr-imgs/BlaZr-Gear-09.png";
import blazr_10 from "../../public/images/blazr-imgs/BlaZr-Gear-10.png";
import newt_01 from "../../public/images/newt-imgs/job-board-newt-01.png";
import newt_02 from "../../public/images/newt-imgs/job-board-newt-02.png";
import zuit_01 from "../../public/images/zuit-imgs/zuitblog-01.png";
import zuit_02 from "../../public/images/zuit-imgs/zuitblog-02.png";
import zuit_03 from "../../public/images/zuit-imgs/zuitblog-03.png";
import sus_01 from "../../public/images/sus-imgs/SquadUp-Social-01.png";
import sus_03 from "../../public/images/sus-imgs/SquadUp-Social-03.png";
import sus_05 from "../../public/images/sus-imgs/SquadUp-Social-05.png";
import sus_06 from "../../public/images/sus-imgs/SquadUp-Social-06.png";
import sus_07 from "../../public/images/sus-imgs/SquadUp-Social-07.png";
import sus_08 from "../../public/images/sus-imgs/SquadUp-Social-08.png";

let cards = [
  {
    url: "https://blazrgear.herokuapp.com",
    repo: "https://github.com/RedCometVictory/BlaZr-Gear-cra",
    title: "Blazr Gear",
    type: "E-Commerce",
    images: [blazr_01, blazr_02, blazr_03, blazr_04, blazr_05, blazr_06, blazr_07, blazr_08, blazr_09, blazr_10],
    tech: ["React", "Redux-Toolkit", "PostgreSQL", "ExpressJS", "JWT", "StripeAPI", "CloudinaryAPI", "MapboxAPI", "SendGrid", "NodeMailer"],
    description: "Blazr Gear allows users to pay with Stripe. Nodemailer and SendGrid is used to email a user of a successful purchase or when an order has been refunded. Additionally, this email service is used to reset a user's password. Users have the option to save cards they used in their purchases via the StripeAPI. Admins can review orders, create and update products, and edit admin permissions for other users."
  },
  {
    url: "https://job-board-newt.vercel.app",
    repo: "https://github.com/RedCometVictory/job-board-newt",
    title: "Newt - Simple Job Search",
    type: "Job Board via Public API",
    images: [newt_01, newt_02],
    tech: ["NextJS" , "React Hooks", "FindworkAPI"],
    description: "Newt, a simple job board that fetches data from the Findwork public API. This is the first application I built using NextJS. This project was a means of learning some of the base features such as Server Side Rendering."
  },
  {
    url: "https://zuitblog.herokuapp.com",
    repo: "https://github.com/RedCometVictory/blogger-app",
    title: "Zuit",
    type: "Blog",
    images: [zuit_01, zuit_02, zuit_03],
    tech: ["NextJS" , "React Hooks", "EditorJS", "MongoDB", "Mongoose"],
    description: "Zuit - a blog where users can share general thoughts, ideas and more importantly - code snippets with one another. React useReducer and useContext is used to keep track of state in the app. Users can change the color of the blog from an assortment of themes. Authentication is kept inside of a cookie.",
  },
  {
    url: "https://squadupsocial.herokuapp.com",
    repo: "https://github.com/RedCometVictory/SquadUpSocial-CRA",
    title: "SquadUp Social",
    type: "Social Media",
    images: [sus_01, sus_03, sus_05, sus_06, sus_07, sus_08],
    tech: ["React", "Redux", "PostgreSQL", "ExpressJS", "JWT", "CloudinaryAPI"],
    description: "My first attempt at breaking out of the dreaded 'Tutorial Hell'. For this full-stack project I limited my relience on tutorials and relied more on documentation. SquadUp is a small social media site that allows users to share images and send simple communications.",
  },
  // {
  //   url: "#",
  //   repo: "#",
  //   title: "The Den",
  //   type: "Restaurant",
  //   images: [sus_05, sus_06],
  //   tech: ["Gatsby", "Markdown", "JSON", "JamStack", "JWT", "CloudinaryAPI", "EmailJS"],
  //   description: "Designed for a restauraunt here in the heart of California. A redesign of a site that previously looked awful and could not work correctly in mobile browsers. At the time of rebuilding the site I was looking into static websites (JamStack). I chose to use GatsbyJS over NextJS, but I'd soon find out that I would not like the plugin system used by Gatsby all that much, but I did love the built in support for GraphQL which made fetching static data from JSON and Markdown files a breeze.",
  // }
];

const Projects = () => {

  return (
    <section className="projects">
      <h2 className="projects__header section-header">
        Portfolio Projects
      </h2>
      <div className="projects__list">
        {cards.map((card, index) => (
          <div className="projects__list-item" key={index}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Projects;