import { motion, useScroll } from "framer-motion";

const style={
    position:'fixed',
    top:'0',
    left:'0px',
    backgroundColor:"#f3dd52",
    zIndex:'50',
    height:'100vh',
    width:'0.6vw'
}

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();


  return (
    <motion.div
      style={{ ...style as any,scaleY: scrollYProgress, transformOrigin: "left" }}
    />
  );
};

export default ProgressBar;
