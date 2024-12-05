import { motion, Variants } from "framer-motion";

export default function Animation({
  children,
  style,
  props,
  className,
  animate = true,
}: {
  children: any;
  props: { offsreen: any; onscreen: any };
  style?: any;
  className?: any;
  animate?: boolean;
}) {
  const cardVariants: Variants = {
    offscreen: {
      ...props?.offsreen,
    },
    onscreen: {
      ...props?.onscreen,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.5,
      },
    },
  };

  return animate ? (
    <motion.div
      className={className}
      style={style}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.7 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  ) : (
    <div className={className}>{children}</div>
  );
}
