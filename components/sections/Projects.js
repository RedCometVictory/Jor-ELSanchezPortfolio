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
import zuit_01 from "../../public/images/zuit-imgs/zuitblog-01.png";
import screenshot_04 from "../../public/images/sus-imgs/SquadUp-Social-01.png";
import screenshot_05 from "../../public/images/sus-imgs/SquadUp-Social-02.png";
import screenshot_06 from "../../public/images/sus-imgs/SquadUp-Social-03.png";
import screenshot_07 from "../../public/images/sus-imgs/SquadUp-Social-04.png";
import screenshot_08 from "../../public/images/sus-imgs/SquadUp-Social-05.png";

let cards = [
  {
    title: "Blazr Gear",
    type: "E-Commerce",
    // image: blazr_01,
    images: [blazr_01, blazr_02, blazr_03, blazr_04, blazr_05, blazr_06, blazr_07, blazr_08, blazr_09, blazr_10],
    // images: [blazr_01],
    tech: ["React", "Redux-Toolkit", "PostgreSQL", "ExpressJS", "JWT", "StripeAPI", "CloudinaryAPI", "MapboxAPI", "SendGrid", "NodeMailer"],
    description: "Blazr Gear allows users to pay with Stripe. Nodemailer and SendGrid is used to email a user of a successful purchase or when an order has been refunded. Additionally, this email service is used to reset a user's password. Users have the option to save cards they used in their purchases via the StripeAPI. Admins can review orders, create and update products, and edit admin permissions for other users."
  },
  // {
  //   title: "Newt - Simple Job Search",
  //   type: "Job Board via Public API",
  //   // image: newt_01,
  //   images: [newt_01],
  //   tech: ["NextJS" , "React Hooks", "FindworkAPI"],
  //   description: "Newt, a simple job board that fetches data from the Findwork public API. This is the first application I built using NextJS. This project was a means of learning some of the base features such as Server Side Rendering."
  // },
  // {
  //   title: "Zuit",
  //   type: "Blog",
  //   image: [zuit_01],
  //   tech: ["NextJS" , "React Hooks", "EditorJS", "MongoDB", "Mongoose"],
  //   description: "Zuit - a blog where users can share general thoughts, ideas and more importantly - code snippets with one another. React useReducer and useContext is used to keep track of state in the app. Users can change the color of the blog from an assortment of themes. Authentication is kept inside of a cookie.",
  // },
  // {
  //   title: "SquadUp Social",
  //   type: "Social Media",
  //   // image: screenshot_04,
  //   images: [screenshot_04],
  //   tech: ["React", "Redux", "PostgreSQL", "ExpressJS", "JWT", "CloudinaryAPI"],
  //   description: "My first attempt at breaking out of the dreaded 'Tutorial Hell'. For this full-stack project I limited my relience on tutorials and relied more on documentation. SquadUp is a small social media site that allows users to share images and send simple communications.",
  // },
  // {
  //   title: "The Den",
  //   type: "Restaurant",
  //   // image: screenshot_05,
  //   images: [screenshot_05],
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



/*
{props.posts.map((post) => (
  <div
    className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10"
    key={post.title}
  >
    <div className="overflow-hidden cursor-pointer lg:w-1/2">
      <Link href={`/blog/${post.slug}`}>
        <a>
          <Image
            src={post.image_cover}
            height={514}
            width={800}
            className="rounded-lg"
            alt="cover image"
            placeholder="blur"
            blurDataURL={post.image_cover}
          />
        </a>
      </Link>
    </div>
    {/* content /}
    <div className="flex flex-col space-y-4 lg:w-4/5 lg:space-x-20 lg:justify-center">
      {/* tags and date /}
      <div className="flex text-sm mt-4 space-x-5 lg:mx-20">
        <p className="font-bold dark:text-white">{post.tags}</p>
        <p className="font-normal text-gray-500 dark:text-gray-400">
          {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
        </p>
      </div>
      {/* title /}
      <Link href={`/blog/${post.slug}`}>
        <a className="cursor-pointer">
          <h2 className="text-3xl lg:text-4xl font-bold dark:text-gray-100">
            {post.title}
          </h2>
        </a>
      </Link>
      <Link href={`/blog/${post.slug}`}>
        <a className="cursor-pointer">
          <p className="text-gray-500 text-justify">{post.summary}</p>
        </a>
      </Link>
      <div className="flex items-center">
        <div className="h-12 w-12">
          <Image
            src="/img/avatar-banner-360x360.png"
            height="260"
            width="260"
            alt="avatar image"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col mx-4 space-y-1">
          <strong className="text-sm dark:text-gray-100">
            {post.author}
          </strong>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {post.designation}
          </p>
        </div>
      </div>
    </div>
  </div>
))}

*/