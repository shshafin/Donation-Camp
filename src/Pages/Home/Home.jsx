import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import DonationCards from "../../Components/DonationCards/DonationCards";

const Home = () => {
  // load donation cards data
  const CardData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <DonationCards cards={CardData}></DonationCards>
    </div>
  );
};

export default Home;
