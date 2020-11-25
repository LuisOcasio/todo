import { Dropdown } from "semantic-ui-react";

const burgerOptions = [
  { key: "lettuce", text: "Lettuce", value: "lettuce" },
  { key: "tomatoes", text: "Tomatoes", value: "tomatoes" },
  { key: "bacon", text: "Bacon", value: "bacon" },
  { key: "mayo", text: "Mayo", value: "mayo" },
  { key: "cheese", text: "Cheese", value: "cheese" },
  { key: "pickles", text: "Pickles", value: "pickles" },
];

const Extras = () => (
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
    options={burgerOptions}
  />
);

export default Extras;
