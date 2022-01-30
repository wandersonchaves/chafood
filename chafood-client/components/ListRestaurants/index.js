import { Row } from "react-bootstrap";
import Restaurant from "./Restaurant";

const ListRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "example 1",
      description: "Javascript Ipsum, Javascript Ipsum e Javascript Ipsum",
      delivery_tax: "5",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha japonesa",
    },
    {
      id: 2,
      name: "example 2",
      description: "Javascript Ipsum, Javascript Ipsum e Javascript Ipsum",
      delivery_tax: "10",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha mineira",
    },
    {
      id: 3,
      name: "example 3",
      description: "Javascript Ipsum, Javascript Ipsum e Javascript Ipsum",
      delivery_tax: "15",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha vegana",
    },
    {
      id: 4,
      name: "example 4",
      description: "Javascript Ipsum, Javascript Ipsum e Javascript Ipsum",
      delivery_tax: "20",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha vegana",
    },
  ];

  return (
    <div className="mt-5">
      <h3 className="fw-bold">Restaurantes</h3>
      <Row>
        {restaurants.map((restaurant, i) => {
          return <Restaurant {...restaurant} key={i} />;
        })}
      </Row>
    </div>
  );
};

export default ListRestaurants;
