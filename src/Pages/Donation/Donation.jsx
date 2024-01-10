import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { Button } from "@material-tailwind/react";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [isNothing, setIsNothing] = useState(false);
  console.log(donation);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);

      const total = donationItems.reduce(
        (preValue, currentValue) => preValue + currentValue.price,
        0
      );
      setTotalPrice(total);
    } else {
      setDonation("No donation found");
    }
  }, []);

  return (
    <div>
      <div>
        {donation.length > 0 && (
          <h1 className="text-3xl font-bold text-center py-4 underline underline-offset-8 text-gray-800">
            Total Donation: ${totalPrice}
          </h1>
        )}
      </div>
      <div>
        {show ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
            {donation.map((donate) => (
              <DonationCard key={donate.id} donate={donate}></DonationCard>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
            {donation.slice(0, 4).map((donate) => (
              <DonationCard key={donate.id} donate={donate}></DonationCard>
            ))}
          </div>
        )}
      </div>
      <div>
        {donation.length > 4 && (
          <div className="text-center  mb-10 mt-2">
            <Button className="bg-[#FF444A]" onClick={() => setShow(!show)}>
              {show ? "See Less" : "See More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donation;
