import Counter from "./Counter";
const Metrics = () => {
  return (
    <div className="my-10 py-10">
      <h2 className="flex justify-center text-4xl font-medium">
        Numbers speaking for themselves
      </h2>
      <div className="grid grid-cols-3 text-center my-10">
        <div>
          <Counter value={75} suffix="%"/>
          <p className="text-2xl text-slate-500 font-extralight">
            Candidate match rate
          </p>
        </div>
        <div className="border-x-2 border-gray-200">
          <Counter value={4000} suffix="+"/>
          <p className="text-2xl text-slate-500 font-extralight">
            Candidate match rate
          </p>
        </div>
        <div>
          <Counter  value={50} suffix="+"/>
          <p className="text-2xl text-slate-500 font-extralight">
            Candidate match rate
          </p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
