import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "pickles", text: "Pickles", value: "pickles" },
  { key: "tomatoes", text: "Tomatoes", value: "tomatoes" },
  { key: "onions", text: "Onions", value: "onions" },
  { key: "mayo", text: "Mayo", value: "mayo" },
  { key: "ketchup", text: "Ketchup", value: "ketchup" },
];

const Extras = () => (
  <Dropdown
    style={{
      textAlign: "center",
      background: "#1E3453",
      color: "#C82D35",
      width: "100%",
    }}
    placeholder="REMOVE FROM SANDWHICH"
    fluid
    multiple
    selection
    options={options}
  />
);

export default Extras;
