
import React from 'react';

const HeroSection = () => {
  return (
    <section className="dark:bg-gradient-to-r dark:from-background/80 dark:via-background/60 dark:to-biomindx-blue/10 bg-gradient-to-r from-white via-white to-biomindx-light-gray py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold dark:text-white text-biomindx-dark-gray leading-tight">
              Elevating Medical Processes with Transformative AI
            </h1>
            <p className="text-lg md:text-xl dark:text-gray-300 text-biomindx-medium-gray max-w-xl">
              We partner with healthcare organizations to implement AI solutions that enhance efficiency, 
              accuracy, and innovation in medical operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#solutions" className="btn-primary">
                Explore Our Solutions
              </a>
              <a href="#contact" className="btn-secondary">
                Request Consultation
              </a>
            </div>
          </div>
          <div className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-biomindx-blue/20 dark:to-biomindx-teal/10 bg-gradient-to-br from-biomindx-blue/10 to-biomindx-teal/20 z-10"></div>
            <div className="absolute w-full h-full flex items-center justify-center">
              <svg className="w-full h-full dark:text-biomindx-blue/10 text-biomindx-blue/5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M42.8,-68C53.9,-59.2,60.3,-44.3,63.8,-30.1C67.3,-15.8,67.9,-2.3,65.2,10.5C62.6,23.3,56.7,35.4,47.3,43.4C37.8,51.4,24.8,55.3,11.7,58.4C-1.4,61.6,-14.6,64,-26.5,61.2C-38.4,58.3,-49,50.1,-57.3,39.4C-65.6,28.7,-71.6,15.3,-71.9,1.8C-72.1,-11.8,-66.7,-23.8,-58.7,-34C-50.6,-44.3,-40,-52.8,-28.5,-61C-17,-69.2,-4.7,-77.1,7.9,-79.5C20.5,-81.8,31.8,-76.7,42.8,-68Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="relative z-20 p-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-16 w-16 dark:bg-white/10 dark:backdrop-blur-sm bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="h-8 w-8 bg-biomindx-blue/20 rounded-full"></div>
                </div>
                <div className="h-16 w-16 dark:bg-white/10 dark:backdrop-blur-sm bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="h-8 w-8 bg-biomindx-teal/20 rounded-full"></div>
                </div>
                <div className="h-16 w-16 dark:bg-white/10 dark:backdrop-blur-sm bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="h-8 w-8 bg-biomindx-blue/20 rounded-full"></div>
                </div>
                <div className="h-16 w-16 dark:bg-white/10 dark:backdrop-blur-sm bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="h-8 w-8 bg-biomindx-teal/20 rounded-full"></div>
                </div>
                <div className="h-16 w-16 bg-biomindx-blue rounded-lg shadow-lg flex items-center justify-center text-white">
                  AI
                </div>
                <div className="h-16 w-16 dark:bg-white/10 dark:backdrop-blur-sm bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="h-8 w-8 bg-biomindx-blue/20 rounded-full"></div>
                </div>
                <div className="h-16 w-16 dark:bg-white/10 dark:backdrop-blur-sm bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="h-8 w-8 bg-biomindx-teal/20 rounded-full"></div>
                </div>
                <div className="h-16 w-16 dark:bg-white/10 dark:backdrop-blur-sm bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="h-8 w-8 bg-biomindx-blue/20 rounded-full"></div>
                </div>
                <div className="h-16 w-16 dark:bg-white/10 dark:backdrop-blur-sm bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <div className="h-8 w-8 bg-biomindx-teal/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
