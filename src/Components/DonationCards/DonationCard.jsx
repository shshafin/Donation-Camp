import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg } =
    card;
  return (
    <div>
      <Link to={`/Cards/${id}`}>
        <div
          style={{
            background: `${card_bg}`,
          }}
          className="rounded-md"
        >
          <div>
            <img className="w-full h-40 " src={picture} alt="" />
          </div>
          <div className="p-3 ">
            <div
              className=" my-2 w-20 text-center rounded-md"
              style={{
                background: `${category_bg}`,
              }}
            >
              <span
                className="py-4 text-sm font-semibold  "
                style={{
                  color: `${text_button_bg}`,
                }}
              >
                {category}
              </span>
            </div>
            <h1
              style={{
                color: `${text_button_bg}`,
              }}
              className="font-bold text-lg"
            >
              {title}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
