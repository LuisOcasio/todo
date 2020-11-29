import { Dropdown } from "semantic-ui-react";

const options = {
  burger: [
    { key: "pickles", text: "Pickles", value: "pickles" },
    { key: "tomatoes", text: "Tomatoes", value: "tomatoes" },
    { key: "onions", text: "Onions", value: "onions" },
    { key: "mayo", text: "Mayo", value: "mayo" },
    { key: "ketchup", text: "Ketchup", value: "ketchup" },
  ],
  hotdog: [
    { key: "chilli", text: "Chilli", value: "chilli" },
    { key: "onions", text: "Onions", value: "onions" },
    { key: "sauerkraut", text: "Sauerkraut", value: "sauerkraut" },
    { key: "relish", text: "Relish", value: "relish" },
    { key: "ketchup", text: "Ketchup", value: "ketchup" },
    { key: "mustard", text: "Mustard", value: "mustard" },
  ],
  fries: [
    { key: "salt", text: "Salt", value: "salt" },
    { key: "pepper", text: "Pepper", value: "pepper" },
    { key: "ketchup", text: "Ketchup", value: "ketchup" },
  ],
  loadedFries: [
    { key: "jalapenos", text: "Jalapenos", value: "jalapenos" },
    { key: "chilli", text: "Chilli", value: "chilli" },
    { key: "bacon", text: "Bacon", value: "bacon" },
    { key: "nacho cheese", text: "Nacho Cheese", value: "nacho cheese" },
    { key: "ranch", text: "Ranch", value: "ranch" },
  ],
};

// const itemOptions = Object.values(options).map((selections) => {
//   return selections;
// });
// console.log(itemOptions);

const Extras = () => {
  return (
    <Dropdown
      style={{
        textAlign: "center",
        background: "#1E3453",
        color: "#C82D35",
        width: "100%",
      }}
      placeholder="ADD EXTRAS"
      fluid
      multiple
      selection
      options={options.burger}
    />
  );
};
export default Extras;
