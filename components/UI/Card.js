import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { VscPreview } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const Card = ({card}) => {
  const [read, setRead] = useState(false);
  const [index, setIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [emblaRef, setEmblaRef] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7
  });

  // enable scroll to selected dot
  const scrollTo = useCallback(
    (indx) => setEmblaRef && setEmblaRef.scrollTo(indx), [setEmblaRef]
  );

  const onSelect = useCallback(() => {
    if (!setEmblaRef) return;
    setIndex(setEmblaRef.selectedScrollSnap());
  }, [setEmblaRef, setIndex]);

  useEffect(() => {
    if (!setEmblaRef) return;
    onSelect();
    setScrollSnaps(setEmblaRef.scrollSnapList());
    setEmblaRef.on("select", onSelect);
  }, [setEmblaRef, setIndex, onSelect]);

  // const products = useSelector(state => state.product);
  // const slideShow = useSelector(state => state.slide);
  // const { loading, slides } = slideShow;
  // const { topProducts } = products;
  
  // const [hasMounted, setHasMounted] = useState(false);
  // let [showNotif, setShowNotif] = useState(true);
  // const length = slides.length;
  // const timeout = useRef(null);
  // let slideImgArr = [];
  // let slideTitleArr = [];
  // let slideDescArr = [];
  
  // if (slides) {
  //   for (let i = 0; i < slides.length; i++) {
  //     slideImgArr.push(slides[i].image_url);
  //     slideTitleArr.push(slides[i].title);
  //     slideDescArr.push(slides[i].description);
  //   }
  // }

  // const nextSlide = () => {
  //   if (timeout.current) {
  //     clearTimeout(timeout.current);
  //   }
  //   setIndex(index === length - 1 ? 0 : index + 1);
  // };

  // const prevSlide = () => {
  //   if (timeout.current) {
  //     clearTimeout(timeout.current);
  //   }
  //   setIndex(index === 0 ? length - 1 : index - 1);
  // };
  // const duration = 10000; // in ms ~ 10 secs
  // // const duration = 1000000; // in ms ~ 10 mins
  // useEffect(() => {
  //   const nextSlide = () => {
  //     setIndex(index => (index === length - 1 ? 0 : index + 1));
  //   };
  //   timeout.current = setTimeout(nextSlide, duration);
  //   return () => {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current);
  //     };
  //   };
  // }, [index]);


  
  {/* <Image
    src={card.image}
    className="card__img"
    alt="project screen"
    layout="responsive"
    height={170}
    width={300}
  /> */}
  // {/* <img src={card.images} alt="view of blazr gear site" className="card__img" /> */}

  console.log("card")
  console.log(card)
  return (
    <div className="card__outer">
      <article className="card">
        <div className="card__img-container">
          {card.images.map((image, index) => (
            <div className="card__rand_img" key={index}>
              <Image
                src={image}
                className="card__img"
                alt="project screen"
                layout="responsive"
                height={170}
                width={300}
              /> 
            </div>
          ))}
        </div>
        <div className="card__info">
          <div className="card__links">
            <div className="card__link-btn site-icon">
              <VscPreview />
            </div>
            <div className="card__link-btn git-icon">
              <FaGithub />
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