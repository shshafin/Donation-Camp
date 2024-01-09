import DonationCard from "./DonationCard";

const DonationCards = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-20">
      
      {cards.map((card) => (
        <DonationCard key={card.id} card={card}></DonationCard>
      ))}
      </div>
   
  );
};

export default DonationCards;
