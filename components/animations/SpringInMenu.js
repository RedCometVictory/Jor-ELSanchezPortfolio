import { useSpring, animated as a } from 'react-spring';

const SpringInMenu = ({ children, isVisible }) => {
  const animatedProps = useSpring({
    // from: {marginRight: -100, opacity: 0},
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -400,
    config: {mass: 1, tension: 150, friction: 10}
  });

  return (
    // Use props with useSpring
    <a.div className="spring-in-menu" style={{ ...animatedProps }}>
      {children}
    </a.div>
  );
};

export default SpringInMenu;