const Dots = () => {
  return (
    <div className="decor__item--01">
      <svg id="10015.io" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pattern"
            // id="header-shape-gradient"
            x="0" y="0"
            width="60"
            height="60" patternUnits="userSpaceOnUse"
            // width="26"
            // height="26" patternUnits="userSpaceOnUse" 
            // patternTransform="translate(50, 50) rotate(0) skewX(0)"
            patternTransform="translate(30, 30) rotate(0) skewX(0)" //---
            // gradientTransform="rotate(115)"
          >
            <svg width="25" height="25" viewBox="0 0 100 100">
            {/* <svg width="12" height="12" viewBox="0 0 100 100"> */}
              <g fill="url(#header-shape-gradient)" opacity="0.7">
                <circle cx="50" cy="50" r="50" gra></circle>
              </g>
            </svg>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"></rect>
      </svg>
    </div>
  )
}
export default Dots;

/*
<svg id="10015.io" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="translate(50, 50) rotate(0) skewX(0)">
      <svg width="10" height="10" viewBox="0 0 100 100"><g fill="#47d3ff" opacity="0.7">
        <circle cx="50" cy="50" r="50"></circle>
          </g>
        </svg>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="#474bff"></rect>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"></rect>
  </svg>
*/











/*
ORIGINAKL
const Dots = () => {
  return (
    <div className="decor__item">
      <svg id="10015.io" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pattern" x="0" y="0" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="translate(16, 16) rotate(0) skewX(0)" gradientTransform="rotate(115)">
            <svg width="10" height="10" viewBox="0 0 100 100">
              {/* <g fill="#47d3ff" opacity="1"> /}
              <g className="theme__primary" fill="#47d3ff" opacity="1">
                <circle cx="50" cy="50" r="50" gra></circle>
              </g>
            </svg>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"></rect>
      </svg>
    </div>
  )
}
export default Dots;
*/