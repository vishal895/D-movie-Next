import Link from "next/link";
import React from "react";
import sty from "@/app/globals.css"

const Herosection = ({ title, image }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">
            From award-winning dramas to blockbuster action movies.we've got you
            covered Browser our selection of the latesh and greatest movies, and
            find your new favorite today.
          </p>
          <div className="flex justify-center">
            <Link href={"/movie"}>
              <button className="inline-flex  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg rounded-full">
                Explore Movie
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
      </div>
      <div className={sty['custom-shape-divider-bottom-1709038220']}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={sty['shape-fill']}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Herosection;
