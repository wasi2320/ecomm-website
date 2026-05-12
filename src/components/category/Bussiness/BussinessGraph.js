import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  FaChartLine,
  FaDollarSign,
  FaBoxOpen,
  FaUsers,
} from "react-icons/fa";

////////////////////////////////////////////////////////////
// COUNTER
////////////////////////////////////////////////////////////

const Counter = ({ value, start }) => {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!start) return;

    let startTimestamp = null;

    const duration = 2200;

    const endValue = parseFloat(
      value.replace(/[^0-9.]/g, "")
    );

    const hasDecimal = value.includes(".");

    const step = (timestamp) => {
      if (!startTimestamp)
        startTimestamp = timestamp;

      const progress = Math.min(
        (timestamp - startTimestamp) /
          duration,
        1
      );

      const ease =
        1 - Math.pow(1 - progress, 4);

      const current = endValue * ease;

      setDisplay(
        hasDecimal
          ? current.toFixed(1)
          : Math.floor(current).toString()
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, start]);

  return (
    <span>
      {value.replace(/[0-9.]+/, display)}
    </span>
  );
};

////////////////////////////////////////////////////////////
// MOBILE CARD
////////////////////////////////////////////////////////////

const MobileStatCard = ({
  stat,
  inView,
  index,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#111111]
        p-6
      "
    >
      {/* GLOW */}
      <div className="absolute inset-0 bg-yellow-400/5" />

      {/* CONTENT */}
      <div className="relative z-10 text-center">

        {/* ICON */}
        <div
          className="
            mx-auto
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            text-2xl
            text-yellow-400
            border
            border-yellow-400/20
            bg-yellow-400/5
          "
        >
          {stat.icon}
        </div>

        {/* NUMBER */}
        <div
          className="
            mt-6
            text-4xl
            font-bold
            text-white
            break-words
          "
        >
          <Counter
            value={stat.value}
            start={inView}
          />
        </div>

        {/* LABEL */}
        <p
          className="
            mt-3
            text-gray-400
            text-sm
            leading-relaxed
          "
        >
          {stat.label}
        </p>

        {/* LINE */}
        <div className="mx-auto mt-5 h-[2px] w-12 bg-yellow-400/30" />
      </div>
    </motion.div>
  );
};

////////////////////////////////////////////////////////////
// DESKTOP CARD
////////////////////////////////////////////////////////////

const DesktopStatCard = ({
  stat,
  inView,
  index,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
        group
        relative
        transform-gpu
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          rounded-[32px]
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-yellow-400/10
          blur-2xl
        "
      />

      {/* CARD */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-[#111111]
          p-8
          transition
          duration-500
          group-hover:border-yellow-400/20
        "
      >
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* SHIMMER */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              top-0
              -left-[120%]
              h-full
              w-[40%]
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
              group-hover:animate-shimmer
            "
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 text-center">

          {/* ICON */}
          <div
            className="
              mx-auto
              w-20
              h-20
              rounded-2xl
              flex
              items-center
              justify-center
              text-3xl
              text-yellow-400
              border
              border-yellow-400/20
              bg-yellow-400/5
            "
          >
            {stat.icon}
          </div>

          {/* NUMBER */}
          <div
            className="
              mt-8
              text-5xl
              xl:text-6xl
              font-bold
              tracking-tight
              text-white
            "
          >
            <Counter
              value={stat.value}
              start={inView}
            />
          </div>

          {/* LABEL */}
          <p
            className="
              mt-4
              text-gray-400
              text-sm
              xl:text-base
            "
          >
            {stat.label}
          </p>

          {/* LINE */}
          <div
            className="
              mx-auto
              mt-6
              h-[2px]
              w-10
              bg-yellow-400/30
              transition-all
              duration-500
              group-hover:w-24
            "
          />
        </div>
      </div>
    </motion.div>
  );
};

////////////////////////////////////////////////////////////
// MAIN COMPONENT
////////////////////////////////////////////////////////////

export default function BusinessGraph() {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  ////////////////////////////////////////////////////////////
  // PARALLAX
  ////////////////////////////////////////////////////////////

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -60]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 60]
  );

  ////////////////////////////////////////////////////////////
  // DATA
  ////////////////////////////////////////////////////////////

  const stats = [
    {
      value: "$2M+",
      label: "Total Revenue",
      icon: <FaDollarSign />,
    },

    {
      value: "86%",
      label: "Growth Rate",
      icon: <FaChartLine />,
    },

    {
      value: "12000+",
      label: "Products Sold",
      icon: <FaBoxOpen />,
    },

    {
      value: "25K+",
      label: "Happy Customers",
      icon: <FaUsers />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#050505]
        py-16
        sm:py-24
        text-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* LIGHTS */}
        <motion.div
          style={{ y: y1 }}
          className="
            absolute
            top-0
            left-0
            w-[250px]
            h-[250px]
            sm:w-[350px]
            sm:h-[350px]
            rounded-full
            bg-yellow-400/10
            blur-3xl
          "
        />

        <motion.div
          style={{ y: y2 }}
          className="
            absolute
            bottom-0
            right-0
            w-[250px]
            h-[250px]
            sm:w-[350px]
            sm:h-[350px]
            rounded-full
            bg-yellow-400/10
            blur-3xl
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
        "
      >
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-14 sm:mb-20"
        >
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/5
              mb-6
            "
          >
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />

            <span
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.25em]
                text-yellow-300
              "
            >
              Business Insights
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              text-3xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Performance That

            <span
              className="
                block
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-white
                to-yellow-400
              "
            >
              Speaks For Itself
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-gray-400
              text-sm
              sm:text-base
              leading-relaxed
              px-2
            "
          >
            Trusted by thousands of customers
            worldwide with premium quality,
            fast growth, and exceptional
            service.
          </p>
        </motion.div>

        {/* MOBILE */}
        <div className="flex flex-col gap-4 md:hidden">
          {stats.map((stat, index) => (
            <MobileStatCard
              key={index}
              stat={stat}
              inView={isInView}
              index={index}
            />
          ))}
        </div>

        {/* DESKTOP */}
        <div
          className="
            hidden
            md:grid
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
          "
        >
          {stats.map((stat, index) => (
            <DesktopStatCard
              key={index}
              stat={stat}
              inView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}