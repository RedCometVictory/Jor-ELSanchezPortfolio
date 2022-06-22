import Express from '../../components/svgs/icons/Express';
import Gulp from '../../components/svgs/icons/Gulp';
import JavaScript from '../../components/svgs/icons/JavaScript';
import Laravel from '../../components/svgs/icons/Laravel';
import Markdown from '../../components/svgs/icons/Markdown';
import MongoDB from '../../components/svgs/icons/MongoDB';
import MySQL from '../../components/svgs/icons/MySQL';
import NextJS from '../../components/svgs/icons/NextJS';
import PHP from '../../components/svgs/icons/PHP';
import PostgreSQL from '../../components/svgs/icons/PostgreSQL';
import ReactJS from '../../components/svgs/icons/ReactJS';
import Redux from '../../components/svgs/icons/Redux';
import SASS from '../../components/svgs/icons/SASS';
import TypeScript from '../../components/svgs/icons/TypeScript';
import Webpack from '../../components/svgs/icons/Webpack';

const Skills = ({skillsRef}) => {
  return (
    <section className="skills" ref={skillsRef}>
      <div className="skills__content">
        <h2 className="skills__header">Core Skills</h2>
        <div className="skills__desc">
          <p>Skilled in the following tech, as well as - JSON, Cloudinary, public APIs, Stripe, Axios and I&apos;m also a pro at Googling!</p>
        </div>
        <div className="skills__icon-container">
          <Express/>
          <MongoDB/>
          <JavaScript/>
          <Markdown/>
          <MySQL/>
          <NextJS/>
          <PostgreSQL/>
          <ReactJS/>
          <Redux/>
          <SASS/>
        </div>
      </div>
      <div className="skills__content">
        <h2 className="skills__header">Familiar / Diving Into</h2>
        <div className="skills__desc">
          <p>Currently learning or somewhat familiar with the following tech (including Photoshop):</p>
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
  )
}
export default Skills;