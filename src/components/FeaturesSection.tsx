import { features } from "../data/features";
import TagLine from "./TagLine";

const FeaturesSection = () => {
  return (
    <div className="flex items-center p-10 justify-center flex-col">
      <TagLine>Features</TagLine>
      <h2 className="font-extrabold font-display text-3xl mb-8 pt-3">
        Intelligent Form Building
      </h2>
      <div className="my-10 grid items-center grid-cols-1 gap-3 md:grid-cols-3 max-w-screen-xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg border border-indigo-400/30 h-full flex space-x-4 font-display "
          >
            <div>
              <h3 className="font-semibold text-xl">{feature.title}</h3>
              <p className="text-gray-500">{feature.decription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
