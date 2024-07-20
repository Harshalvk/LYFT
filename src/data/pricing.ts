type PricePlanType = {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular: boolean
}[]

export const pricingPlan: PricePlanType = [
  {
    title: "Free Plan",
    price: 0,
    description: "For individuals and hobbyists",
    features: [
      "Up to 3 forms per month",
      "Basic AI form builder",
      "Basic form customization",
      "Data export in CSV format",
    ],
    isPopular: false,
  },
  {
    title: "Hobby Plan",
    price: 15,
    description: "Perfect for growing businesses needing advanced features.",
    features: [
      "Up to 100 forms per month",
      "Data export in CSV format and Excel formates",
      "Conditional logic and brancing",
      "Basic analytics and reporting",
    ],
    isPopular: true,
  },
  {
    title: "Pro Plan",
    price: 89,
    description: "For large businesses and enterprises with custome needs.",
    features: [
      "Unlimited forms per month",
      "Premium AI form suggestions",
      "Advanced conditional logic and branching",
      "API access for custom integrations",
    ],
    isPopular: false,
  },
];
