import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Access to locker rooms and showers",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Access to all equipment and facilities",
        "Free group fitness classes",
        "Personalized workout plans",
        "Discounts on personal training sessions",
      ],
    },
    {
      id: 3,
      name: "Corporate Membership",
      price: 99.99,
      features: [
        "Access to all equipment and facilities",
        "Priority booking for group fitness classes",
        "Complimentary towel service",
        "Access to exclusive corporate events",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl my-4">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
