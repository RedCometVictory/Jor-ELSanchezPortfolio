import { useState } from "react";
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from "next/image";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Card = ({card}) => {
  const [read, setRead] = useState(false);
  const [toggleDesc, isToggleDesc] = useState(false);

  const toggleDescriptionHandler = () => {
    isToggleDesc(!toggleDesc);
  };
  
  return (
    <div className="card__outer">
      <article className="card">
        <div className={`card__info-toggle ${toggleDesc ? 'active' : ''}`}>
          <div className="card__desc">
            {read ? (
              <div className="card__toggle-desc">
                <div className="card__description">
                  {card.description}
                </div>
              </div>
            ) : (
              <div className="card__tech">
                <div className="card__tech-list">
                  {card.tech.map((item, index) => (
                    <div className="card__tech-item" key={index}>
                      <div className="">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="card__toggle-btns">
            <div className="desc-btns">
              <button className={`tech desc-btn ${!read ? 'diag-cross' : ''}`} onClick={e => setRead(false)}>Tech</button>
              <button className={`read desc-btn ${read ? 'diag-cross' : ''}`} onClick={e => setRead(true)}>Read</button>
            </div>
            <button className="close-btn" onClick={() => toggleDescriptionHandler()}>X</button>
          </div>
        </div>
        <div className="card__viewport">
          <Swiper
            className='product-images-slider'
            slidesPerView={1}
            loop={true}
            modules={[Navigation, EffectFade]}
            navigation={true}
            effect
            speed={800}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <div className="card__img-container">
              {card.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    className="card__img"
                    alt="project screen"
                    layout="responsive"
                    height={170}
                    width={300}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        <div className="card__info">
          <div className="card__links">
            <div className="card__link-btn info-icon">
              <BsInfoCircleFill onClick={() => toggleDescriptionHandler()} />
            </div>
            <div className="card__link-btn site-icon">
              <a href={card.url} target="_blank" rel="noopener noreferrer">
                <div>LIVE</div>
              </a>
            </div>
            <div className="card__link-btn git-icon">
              <a href={card.repo} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
          <header className="card__header">
            <h3 className="card__title">{card.title}</h3>
            <h4>{card.type}</h4>
          </header>
        </div>
      </article>
    </div>
  )
}
export default Card;