import React, { useRef } from "react";
import { Link } from "react-router-dom";

import perfumeBanner1 from "../../../assets/images/banner/perfumeb.png";
import toolsBanner from "../../../assets/images/banner/toolsb.png";
import officeBanner from "../../../assets/images/banner/officeb.png";
import plumbingBanner from "../../../assets/images/banner/plumbingb.png";

const Sale = () => {
  const items = [
    {
      img: perfumeBanner1,
      link: "/category/perfumes",
      title: "Perfumes",
      glow: "rgba(168,85,247,0.35)",
    },
    {
      img: toolsBanner,
      link: "/category/tools",
      title: "Tools",
      glow: "rgba(249,115,22,0.35)",
    },
    {
      img: officeBanner,
      link: "/category/office",
      title: "Office Supplies",
      glow: "rgba(59,130,246,0.35)",
    },
    {
      img: plumbingBanner,
      link: "/category/plumbing",
      title: "Plumbing",
      glow: "rgba(16,185,129,0.35)",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-10">
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
          md:gap-6
        "
      >
        {items.map((item, index) => (
          <TiltCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Sale;

////////////////////////////////////////////////////
// RESPONSIVE TILT CARD
////////////////////////////////////////////////////

const TiltCard = ({ item }) => {
  const ref = useRef(null);

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    );
  };

  const handleMove = (e) => {
    if (isTouchDevice()) return;

    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  const reset = () => {
    if (isTouchDevice()) return;

    const card = ref.current;
    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <Link to={item.link} className="block w-full">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="
          relative
          w-full
          min-h-[220px]
          sm:min-h-[250px]
          md:h-[300px]
          lg:h-[340px]

          rounded-2xl
          overflow-hidden
          group
          transition-transform
          duration-300
        "
      >
        {/* IMAGE */}
        <img
          src={item.img}
          alt={item.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* GLOW */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
          "
          style={{
            boxShadow: `inset 0 0 100px ${item.glow}`,
          }}
        />

        {/* SHIMMER */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="
              absolute
              -left-[150%]
              top-0
              h-full
              w-[50%]
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              group-hover:animate-shimmer
            "
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 text-white">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
            {item.title}
          </h3>

          <div
            className="
              mt-2
              flex
              items-center
              gap-2
              text-sm
              sm:text-base
              text-gray-300
              group-hover:text-white
              transition
            "
          >
            <span>Explore</span>

            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>

        {/* BORDER */}
        <div
          className="
            absolute
            inset-0
            rounded-2xl
            border
            border-white/10
            opacity-50
            group-hover:opacity-100
            transition
          "
        />
      </div>
    </Link>
  );
};