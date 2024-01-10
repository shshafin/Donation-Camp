import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DonationCard = ({ donate }) => {
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
  } = donate || {};
  
  return (
    <div>
      <Card
        style={{
          background: `${card_bg}`,
        }}
        className="w-full max-w-[48rem] flex-row"
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={picture}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography className="mb-4 ">
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
          </Typography>
          <Typography variant="h4" className="mb-2">
            <h1
              style={{
                color: `${text_button_bg}`,
              }}
              className="font-bold "
            >
              {title}
            </h1>
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            <h1
              style={{
                color: `${text_button_bg}`,
              }}
              className="font-bold "
            >
              ${price}
            </h1>
          </Typography>

          <Link to={`/Cards/${id}`}>
            <Button
              style={{
                background: `${text_button_bg}`,
              }}
              className="flex items-center gap-2 "
            >
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default DonationCard;
