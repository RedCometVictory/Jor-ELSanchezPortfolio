const DotsCircle01 = () => {
  return (
    <div className="decor__item--02">
      <svg id="10015.io"
      viewBox="0 0 400 400"
      // viewBox="0 0 1200 630"
      xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pattern"
            // id="header-shape-gradient"
            x="0" y="0"
            // width="26"
            // height="26" patternUnits="userSpaceOnUse"
            // width="10"
            // height="10" patternUnits="userSpaceOnUse"
            // width="36"
            // height="36" patternUnits="userSpaceOnUse"
            // patternTransform="translate(16, 16) rotate(0) skewX(0)" 
            patternTransform="translate(3, 3) rotate(0) skewX(0)" 
            gradientTransform="rotate(115)"
          >
            <svg width="10" height="10" viewBox="0 0 100 100">
              <g fill="url(#header-shape-gradient)" opacity="1">
                <circle cx="50" cy="50" r="50" gra></circle>
              </g>
            </svg>
          </pattern>
        </defs>
        {/* <rect x="0" y="0" width="100%" height="100%" fill="none"></rect> */}
        {/* <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"></rect> */}
        <circle
          cx="50%"
          cy="50%"
          r="180"
          // width="300"
          // height="100%"
        // width="100%" height="100%"
        fill="url(#pattern)"></circle>
      </svg>
    </div>
  )
}
export default DotsCircle01;