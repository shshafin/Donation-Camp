import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { Button } from "@material-tailwind/react";
import { FaSortAmountDownAlt } from "react-icons/fa";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [noFound, setIsNoFound] = useState(false);
  const [displayItem, setDisplayItem] = useState([]);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    console.log(donationItems);
    if (donationItems) {
      setDonation(donationItems);
      setDisplayItem(donationItems);

      const total = donationItems.reduce(
        (preValue, currentValue) => preValue + currentValue.price,
        0
      );
      setTotalPrice(total);
    } else {
      setIsNoFound("No donation found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setDonation([]);
    setShow("");
    setIsNoFound("No Donation Found");
  };

  // filter
  const handleFilter = (filter) => {
    if (filter === "All") {
      setDisplayItem(donation);
    } else if (filter === "Health") {
      const HealthItem = donation.filter((item) => item.category === "Health");
      setDisplayItem(HealthItem);
    } else if (filter === "Education") {
      const EducationItem = donation.filter(
        (item) => item.category === "Education"
      );
      setDisplayItem(EducationItem);
    } else if (filter === "Clothing") {
      const ClothingItem = donation.filter(
        (item) => item.category === "Clothing"
      );
      setDisplayItem(ClothingItem);
    } else if (filter === "Food") {
      const FoodItem = donation.filter((item) => item.category === "Food");
      setDisplayItem(FoodItem);
    }
  };
  // filter

  return (
    <div>
      <div>
        {donation.length > 0 && (
          <div>
            <h1 className="text-3xl font-bold text-center py-4 underline underline-offset-8 text-gray-800">
              Total Donation: ${totalPrice}
            </h1>
            <div className="flex justify-between">
              <Button className="bg-teal-700" onClick={handleRemove}>
                Delete All
              </Button>

              <Menu>
                <MenuHandler>
                  <Button className="bg-light-blue-400 px-3">
                    <span className="flex gap-2 items-center justify-center text-gray-800">
                      Filter<FaSortAmountDownAlt></FaSortAmountDownAlt>
                    </span>
                  </Button>
                </MenuHandler>
                <MenuList className="bg-gray-600 text-white">
                  <MenuItem onClick={() => handleFilter("All")}>All</MenuItem>
                  <MenuItem onClick={() => handleFilter("Health")}>
                    Health
                  </MenuItem>
                  <MenuItem onClick={() => handleFilter("Education")}>
                    Education
                  </MenuItem>
                  <MenuItem onClick={() => handleFilter("Food")}>Food</MenuItem>
                  <MenuItem onClick={() => handleFilter("Clothing")}>
                    Clothing
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        )}
      </div>
      {noFound ? (
        <p className="flex justify-center items-center h-[70vh] text-4xl font-bold">
          {noFound}
        </p>
      ) : (
        <div>
          {show ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
              {displayItem.map((donate) => (
                <DonationCard key={donate.id} donate={donate}></DonationCard>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
              {displayItem.slice(0, 4).map((donate) => (
                <DonationCard key={donate.id} donate={donate}></DonationCard>
              ))}
            </div>
          )}
        </div>
      )}
      <div>
        {displayItem.length > 4 && (
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
