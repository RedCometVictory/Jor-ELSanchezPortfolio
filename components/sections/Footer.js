import { useState, useRef } from 'react';
import emailjs from "emailjs-com";
import ReCAPTCHA from 'react-google-recaptcha';

const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const YOUR_USER_ID = process.env.NEXT_PUBLIC_USER_ID;
const CAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const Footer = ({contactRef}) => {
  const [validEmail, iSValidEmail] = useState(false);
  const formRef = useRef();
  const captchaRef = useRef();

  const captchaReset = () => {
    captchaRef.current.reset();
    iSValidEmail(false);
  };

  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm(
      YOUR_SERVICE_ID,
      YOUR_TEMPLATE_ID,
      formRef.current,
      YOUR_USER_ID
    )
      .then((result) => {
          // console.log(result.text);
          console.log("Form Submitted! Thank you!");
      }, (error) => {
          console.log(error.text);
      })
      formRef.current.reset()
      captchaRef.current.reset();
      formRef.current.reset();
      iSValidEmail(false);
  }
  return (
    <footer className="footer" ref={contactRef}>
      <div className="footer__container">
        <div className="footer__contact">
          <h3>Want to contact me?</h3>
          <br />
          <div className="">
            <h2>E-Mail:</h2>
            <div className="email-address">
              <p>acemiranda0093@att.net</p>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail} className="footer__form form" ref={formRef}>
          <div className="form__group subject">
            <input
              className='form__input'
              type="text"
              name='subject'
              placeholder='Subject'
              required
            />
            <span className="underline"></span>
          </div>
          <div className="form__group email">
            <input
              className='form__input'
              type="email"
              name='email'
              placeholder='Your E-mail'
              required
            />
            <span className="underline"></span>
          </div>
          <div className="form__group text">
            <textarea
              className='form__textarea'
              type="text"
              name='message'
              placeholder='Message'
              required
            />
          </div>
          <div className="form__ctrl">
            <label style={{ display: "none" }} htmlFor="g-recaptcha-response">
              ReCaptcha
            </label>
            <div className="form__recaptcha">
              <ReCAPTCHA
                className="recaptcha"
                sitekey={CAPTCHA_SITE_KEY}
                ref={captchaRef}
                onErrored={() => captchaReset}
                onExpired={() => iSValidEmail(false)}
                onChange={() => iSValidEmail(true)}
                size={"compact"}
              />
            </div>
            <div className="form__form-submit">
              <button type="submit" className="submit-btn" disabled={!validEmail}>{validEmail ? `Send` : `reCaptcha`}</button>
            </div>
          </div>
        </form>
      </div>
      <div className="footer__copyright">
        <h5>Jor-EL Sanchez &copy; 2022</h5>
        <a className="footer__attr" href="https://www.freepik.com/vectors/programmer-code">Programmer code vector created by freepik - www.freepik.com</a>
      </div>
    </footer>
  )
}
export default Footer;