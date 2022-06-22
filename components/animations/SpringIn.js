import { useSpring, animated as a } from 'react-spring';

const SpringIn = ({ children, isVisible }) => {
  const animatedProps = useSpring({
    opacity: isVisible ? 1 : 0,
    x: isVisible ? -20 : 400,
    // marginRight: 0,
    config: {mass: 1, tension: 150, friction: 10}
  });

  return (
    // Use props with useSpring
    <a.div className="spring-in" style={{ ...animatedProps }}>
      {children}
    </a.div>
  );
};

export default SpringIn;
