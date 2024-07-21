import { Check } from "lucide-react";

type Props = {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular: boolean;
};

const PlanCard = ({
  title,
  price,
  description,
  features,
  isPopular,
}: Props) => {
  return (
    <div className={`font-display border p-6 flex flex-col justify-between bg-white/20 backdrop-blur-lg ${isPopular ? 'rounded-t-none rounded-b-lg': 'rounded-lg'} h-full hover:shadow-md text-left relative transition-shadow duration-500`}>
      {isPopular && (
        <div className="absolute -top-6 left-0 bg-indigo-500 text-white  w-full rounded-t-md text-center flex justify-center items-center">
          Popular
        </div>
      )}
      <div>
        <div className="inline-flex items-end">
          <h1 className="font-bold text-3xl">{price}</h1>
          <span className="ml-2 text-gray-500 align-bottom">/month</span>
        </div>
        <h2 className="font-bold text-xl my-2">{title}</h2>
        <p>{description}</p>
        <div className="border-t border-gray-400 opacity-25 flex-grow my-2"></div>
        <ul>
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex flex-row items-center text-gray-700 gap-2 my-2"
            >
              <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center">
                <Check className="inline-block text-white" size={10} />
              </div>
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="bg-indigo-500 w-full text-white p-2 rounded-md hover:bg-indigo-400 transition-colors duration-500">
          Select Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
