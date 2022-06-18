const Blob01 = () => {
  return (
    <div className="decor__blob--01">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="header-shape-gradient" gradientTransform="rotate(115)">
            <stop className='theme__primary-color' offset="0%" />
            <stop className='theme__secondary-color' offset="100%" />
          </linearGradient>
        </defs>
        <path fill="url(#header-shape-gradient)" d="M41.1,-66.3C50.4,-58,53.2,-41.7,61.5,-27C69.8,-12.3,83.8,0.9,87,16C90.2,31.1,82.6,48.1,70.2,58.9C57.8,69.8,40.6,74.6,26.8,68.1C13,61.7,2.6,44,-6.1,34.9C-14.8,25.9,-21.8,25.5,-36.3,23.3C-50.7,21.2,-72.5,17.4,-81.3,7C-90.1,-3.4,-85.8,-20.3,-74.3,-29.2C-62.8,-38,-44.1,-38.8,-30.5,-45.2C-17,-51.5,-8.5,-63.5,3.7,-69.3C15.9,-75,31.8,-74.6,41.1,-66.3Z" transform="translate(100 100)" />
      </svg>
    </div>
  )
}
export default Blob01;