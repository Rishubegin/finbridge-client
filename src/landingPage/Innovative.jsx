const Card1 = () => {
  return (
    <div className="flex flex-col xl:flex-row w-2/5 xl:w-2/3 m-5">
      <div className="w-full xl:w-1/2">
        <img
          src="innovative_image_2.png"
          className="rounded-t-4xl xl:rounded-l-4xl xl:rounded-tr-none  w-full"
          alt=""
        />
      </div>
      <div className="bg-black w-full xl:w-1/2 text-white rounded-b-4xl xl:rounded-r-4xl xl:rounded-bl-none flex flex-col justify-center p-5">
        <p className="text-md 2xl:text-xl">Credit</p>
        <h3 className="text-3xl 2xl:text-4xl py-4">
          Alternative Data Credit Scoring
        </h3>
        <p className="text-md 2xl:text-xl">
          Generate Credit Scores from rent and utility bill payments
        </p>
      </div>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="w-3/5 xl:w-1/3 m-5 flex flex-col">
      <div className="w-full">
        <img
          className="w-full rounded-t-4xl"
          src="innovative_image_1.png"
          alt=""
        />
      </div>
      <div className="flex-1 bg-black h-fit text-white rounded-b-4xl w-full p-5 flex flex-col justify-center">
        <p className="text-md 2xl:text-xl">Secure</p>
        <h3 className="text-3xl 2xl:text-4xl py-4">
          Document Storage Solution
        </h3>
        <p className="text-md 2xl:text-xl">
          Safely Store and manage all loan application documents
        </p>
      </div>
    </div>
  );
};
const Innovative = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#ccdaee]">
      <div className="w-7/8">
        <div className="text-center">
          <p className="text-xl">Innovative</p>
          <h2 className="text-5xl font-semibold p-5">
            Powerful financial tools
          </h2>
          <p className="text-xl">
            Advanced algorithm analyze your financial behaviour precisely
          </p>
        </div>

        <div className="flex">
          <Card1 />
          <Card2 />
        </div>
      </div>
    </div>
  );
};

export default Innovative;
