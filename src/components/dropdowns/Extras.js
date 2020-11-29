import { Dropdown } from "semantic-ui-react";
import { options } from "../../data/index.js";

const list = Object.values(options).map((e) => {
  return e;
});

const Extras = (props) => {
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
      options={list[props.slot]}
    />
  );
};

export default Extras;
