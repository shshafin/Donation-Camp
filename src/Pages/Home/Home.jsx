import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import DonationCards from "../../Components/DonationCards/DonationCards";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const Home = () => {
  // load donation cards data
  const CardData = useLoaderData();

  return (
    <div>
      <Banner data={CardData}></Banner>
      <DonationCards cards={CardData}></DonationCards>

      {/* <form>
        <input className="bg-red-300" type="search" name="" id="" />
        <Link to={"/Donation"}>
          <Button>Click</Button>
        </Link>
      </form> */}
    </div>
  );
};

export default Home;
