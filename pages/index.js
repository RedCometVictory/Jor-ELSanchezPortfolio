import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import emailjs from "emailjs-com";
import ReCAPTCHA from 'react-google-recaptcha';
import NavBar from "../components/NavBar";
import Card from '../components/UI/Card';
// import DevIcon from "devicon-react-svg";

import CSS from '../components/svgs/icons/CSS';
import Express from '../components/svgs/icons/Express';
import Git from '../components/svgs/icons/Git';
import Gulp from '../components/svgs/icons/Gulp';
import Html from '../components/svgs/icons/Html';
import JavaScript from '../components/svgs/icons/JavaScript';
import Laravel from '../components/svgs/icons/Laravel';
import Markdown from '../components/svgs/icons/Markdown';
import MongoDB from '../components/svgs/icons/MongoDB';
import MySQL from '../components/svgs/icons/MySQL';
import NextJS from '../components/svgs/icons/NextJS';
import NodeJS from '../components/svgs/icons/NodeJS';
import PHP from '../components/svgs/icons/PHP';
import PostgreSQL from '../components/svgs/icons/PostgreSQL';
import ReactJS from '../components/svgs/icons/ReactJS';
import Redux from '../components/svgs/icons/Redux';
import SASS from '../components/svgs/icons/SASS';
import TypeScript from '../components/svgs/icons/TypeScript';
import Webpack from '../components/svgs/icons/Webpack';

import avatar from "../public/images/avatars/24633082.jpg";
import screenshot_01 from "../public/images/BlaZr-Gear-01.png";
import screenshot_02 from "../public/images/job-board-newt-01.png";
import screenshot_03 from "../public/images/zuitblog-01.png";
import screenshot_04 from "../public/images/SquadUp-Social-01.png";
import screenshot_05 from "../public/images/SquadUp-Social-02.png";
import screenshot_06 from "../public/images/SquadUp-Social-03.png";
import screenshot_07 from "../public/images/SquadUp-Social-04.png";
import screenshot_08 from "../public/images/SquadUp-Social-05.png";

const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const YOUR_USER_ID = process.env.NEXT_PUBLIC_USER_ID;
const CAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const initialState = {
  subject: '',
  email: '',
  message: '',
};

const Home = () => {
  const [formData, setFormData] = useState(initialState);
  // const [menu, setMenu] = useState(true);
  // const [buttonText, setButtonText] = useState("Sides");
  const [validEmail, iSValidEmail] = useState(false);
  const { subject, email, message } = formData;
  
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  // const params = {
  //   ...formData,
  //   'g-recaptcha-response': formData
  // }

  const handleContactForm = () => {
    console.log("Form submitted!")
  };
  function sendEmail(e) {
  e.preventDefault();
  // email service udes, id of template, formdata, 
  emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, YOUR_USER_ID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    // reset form upon submit
    e.target.reset();
  }
  let cards = [
    {
      title: "Blazr Gear",
      type: "E-Commerce",
      image: screenshot_01,
      tech: ["React", "Redux-Toolkit", "PostgreSQL", "ExpressJS", "JWT", "StripeAPI", "CloudinaryAPI", "MapboxAPI", "SendGrid", "NodeMailer"],
      description: "Blazr Gear allows users to pay with Stripe. JWTs are used for authenticating and setting authorization guards for admin access. Nodemailer and SendGrid is used to email a user of a successful purchase or when an order has been refunded. Additionally, this email service is used to reset a user's password. Users have the option to save cards they used in their purchases via the StripeAPI. Admins can review orders, create and update products, and edit admin permissions for other users."
    },
    {
      title: "Newt - Simple Job Search",
      type: "Job Board via Public API",
      image: screenshot_02,
      tech: ["NextJS" , "React Hooks", "FindworkAPI"],
      description: "Newt, a simple job board that fetches data from the Findwork public API. This is the first application I built using NextJS. This project was a means of learning some of the base features such as Server Side Rendering."
    },
    {
      title: "Zuit",
      type: "Blog",
      image: screenshot_03,
      tech: ["NextJS" , "React Hooks", "EditorJS", "MongoDB", "Mongoose"],
      description: "Zuit - a blog where users can share general thoughts, ideas and more importantly - code snippets with one another. React useReducer and useContext is used to keep track of state across all components in the app. Users can change the color of the blog from an assortment of themes. Authorization and authentication is kept inside of a cookie.",
    },
    {
      title: "SquadUp Social",
      type: "Social Media",
      image: screenshot_04,
      tech: ["React", "Redux", "PostgreSQL", "ExpressJS", "JWT", "CloudinaryAPI"],
      description: "First 'large' fullstack project I ever worked on without the aid of a video tutorial. This project allowed me to break out of the dreaded 'Tutorial Hell' once and for all. SquadUp is a social media site that allows users to share images and to send simple communications.",
    },
    {
      title: "The Den",
      type: "Restaurant",
      image: screenshot_05,
      tech: ["Gatsby", "Markdown", "JSON", "JamStack", "JWT", "CloudinaryAPI", "EmailJS"],
      description: "Designed for a restauraunt here in the heart of California. A redesign of a site that previously looked awful and could not work correctly in mobile browsers. At the time of rebuilding the site I was looking into static websites (JamStack). I chose to use GatsbyJS over NextJS, but I'd soon find out that I would not like the plugin system used by Gatsby all that much, but I did love the built in support for GraphQL which made fetching static data from JSON and Markdown files a breeze.",
    }
  ];
  return (
    <div className="container">
      <Head>
        <title>Jor-EL&apos;s Portfolio | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className="main">
        <div className="">
          <section className="hero">
            <h2 className='hero__jumbo-text'>A Front End developer with Back End experience</h2>
{/* image goes here */}
            <div className="hero__img-container">
              <Image
                src={avatar}
                className="hero__img"
                alt="project screen"
                layout="responsive"
                height={180}
                width={180}
              />
              {/* <span>JS</span> */}
            </div>
            <h1 className="hero__name">
              Jor-EL Sanchez
            </h1>
          </section>
          <section className="skills">
            <div className="skills__content">
              <h2 className="skills__header">Primary Skills</h2>
              <div className="skills__desc">
                <p>Skilled in the following tech, as well as - JSON, Cloudinary, public APIs, Stripe, Fetch, and Axios.</p>
              </div>
              <div className="skills__icon-container">
                {/* <CSS/> */}
                <Express/>
                {/* <Git/> */}
                {/* <Html/> */}
                <MongoDB/>
                <JavaScript/>
                <Markdown/>
                <MySQL/>
                <NextJS/>
                {/* <NodeJS/> */}
                <PostgreSQL/>
                <ReactJS/>
                <Redux/>
                <SASS/>
              </div>
            </div>
            <div className="skills__content">
              <h2 className="skills__header">Familiar / Diving Into</h2>
              <div className="skills__desc">
                <p>Currently learning or somewhat familiar with the following tech (such as Photoshop).</p>
              </div>
              <div className="skills__icon-container">
                <Laravel/>
                <PHP/>
                <TypeScript/>
              </div>
            </div>
            <div className="skills__content">
              <h2 className="skills__header">Other Stuff I Know</h2>
              <div className="skills__desc">
                <p>Other tech I&apos;ve worked with: SendGrid, EmailJS and more.</p>
              </div>
              <div className="skills__icon-container">
            <Gulp/>
            <Webpack/>
              </div>
            </div>
          </section>
          <section className="projects">
            <h2 className="projects__header">
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
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__contact">
            <h3>Want to contact me?</h3>
            <br />
            <div className="">
              <h2>E-Mail:</h2>
              <div className="email-address">
                <p>acemiranda13@att.net</p>
              </div>
            </div>
          </div>
          <form onSubmit={sendEmail} className="footer__form form">
            <div className="form__group email">
              <input className='form__input' type="email" name='email' value={email} onChange={e => onChange(e)} placeholder='Your E-mail' required/>
              <span className="underline"></span>
            </div>
            <div className="form__group subject">
              <input className='form__input' type="text" name='subject' value={subject} onChange={e => onChange(e)} placeholder='Subject' required/>
              <span className="underline"></span>
            </div>
            <div className="form__group text">
              <textarea className='form__textarea' type="text" name='message' value={message} onChange={e => onChange(e)} placeholder='Message' required/>
            </div>
            <div className="form__ctrl">
              <div className="form__recaptcha">
                <ReCAPTCHA
                  className="recaptcha"
                  // sitekey={'6Lctp18gAAAAAPthzNBd3b0tJTg3SoaCERxiIkUg'}
                  sitekey={'CAPTCHA_SITE_KEY'}
                  // sitekey={CAPTCHA_SITE_KEY}
                  // onChange={sendEmail}
                  // onChange={iSValidEmail(true)}
                />
              </div>
              <div className="form__form-submit">
                {/* <input type="submit" className="submit-btn" value="Send" /> */}
                <p>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</p>
                <button type="submit" className="submit-btn" disabled={validEmail ? true : false}>Send</button>
              </div>
            </div>
          </form>
        </div>
        <div className="footer__copyright">
          <h6>Jor-EL Sanchez &copy; 2022</h6>
        </div>
      </footer>
    </div>
  )
}
export default Home;
// TODO create a character limit of 400 or 300 characters.