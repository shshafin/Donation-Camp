import { Button } from "@material-tailwind/react";

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
  return (
    <div className="py-10">
      <div className="relative">
        <img className=" w-full h-[60vh]" src={picture} alt="" />

        <div className=" absolute bottom-0 left-0 bg-black opacity-45 w-full h-28"></div>
        <Button className="absolute bottom-9  mx-8 text-base" color="red">
          Donate ${price}
        </Button>
      </div>

      <div className="space-y-4 py-7">
        <h1 className="text-3xl font-bold ">{title}</h1>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
