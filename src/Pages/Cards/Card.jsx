import { Button } from "@material-tailwind/react";
import swal from "sweetalert";

const Card = ({ card }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    description,
    price,
  } = card;

  const handleAddDonation = () => {
    const addToDonation = [];
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (!donationItems) {
      addToDonation.push(card);
      localStorage.setItem("donation", JSON.stringify(addToDonation));
      swal("Good job!", "You donated this item!", "success");
    } else {
      const isExist = donationItems.find((item) => item.id === id);
      if (!isExist) {
        addToDonation.push(...donationItems, card);
        localStorage.setItem("donation", JSON.stringify(addToDonation));
        swal("Good job!", "You donated this item!", "success");
      } else {
        swal("Error!", "You cannot donate again!", "error");
      }
    }
  };

  return (
    <div className="py-10">
      <div className="relative">
        <img className=" w-full h-[60vh]" src={picture} alt="" />

        <div className=" absolute bottom-0 left-0 bg-black opacity-70 w-full h-28">
          <Button
            onClick={handleAddDonation}
            className="static m-8 text-base"
            style={{ background: `${text_button_bg}` }}
          >
            Donate ${price}
          </Button>
        </div>
      </div>

      <div className="space-y-4 py-7">
        <h1 className="text-3xl font-bold ">{title}</h1>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
