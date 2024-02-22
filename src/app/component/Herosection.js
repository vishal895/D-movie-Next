import Link from "next/link";
import React from "react";

const Herosection = ({ title, image }) => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {title}
          </h1>
          <p class="mb-8 leading-relaxed">
            From award-winning dramas to blockbuster action movies.we've got you
            covered Browser our selection of the latesh and greatest movies, and
            find your new favorite today.
          </p>
          <div class="flex justify-center">
            <Link href={"/movie"}>
              <button class="inline-flex  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  text-lg rounded-full">
                Explore Movie
              </button>
            </Link>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={image}
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
