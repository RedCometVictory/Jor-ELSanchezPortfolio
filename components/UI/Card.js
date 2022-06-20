import { useState } from "react";
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from "next/image";
import Link from "next/link";
import { VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const Card = ({card}) => {
  const [read, setRead] = useState(false);
  
  return (
    <div className="card__outer">
      <article className="card">
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
            <div className="card__link-btn site-icon">
              <a href={card.url} target="_blank" rel="noopener noreferrer">
                <VscPreview />
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
        <div className="card__content">
          <div className="card__view">
            <div className={!read ? 'active' : ''} onClick={e => setRead(false)}>Tech</div>
            <div className={read ? 'active' : ''} onClick={e => setRead(true)}>Read</div>
          </div>
          <div className="card__desc">
            {read ? (
              <div className="card__description">
                {card.description}
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
        </div>
      </article>
    </div>
  )
}
export default Card;