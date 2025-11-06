const HeroSection = () => {
  return (
    <div className="flex bg-[#fff7cc] h-[calc(100vh-56px)] justify-center items-center font-inter">
      <div className=" flex flex-col-reverse lg:flex-row w-7/8 justify-center lg:justify-around items-center h-full ">
        <div className=" max-w-xl lg:max-w-full lg:w-1/2">
          <h1 className=" text-3xl md:text-4xl xl:text-5xl font-semibold 2xl:text-6xl font-[manrope] m-5 leading-12 xl:leading-15 2xl:leading-22">
            Transform your financial future with smart credit scoring
          </h1>
          <p className=" text-md xl:text-xl 2xl:text-3xl m-5 leading-8 xl:leading-10 2xl:leading-12">
            Finbridge turns everyday transactions into powerful credit insights.
            We help you build a stronger financial profile using data that
            traditional systems ignore.
          </p>
          <button className="bg-gray-300 px-4 py-2 rounded-sm m-1">
            Get started
          </button>
          <button className="text-white px-4 py-2 rounded-sm bg-blue-700  m-1">
            Learn more
          </button>
        </div>
        <div className=" h-fit lg:w-1/2 flex justify-center items-center lg:h-full">
          <img className="w-7/8" src="Placeholder Image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
