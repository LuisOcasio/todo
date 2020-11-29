import { Dropdown } from "semantic-ui-react";
import { exclude } from "../../data/index.js";

const excludeList = Object.values(exclude);

const Remove = (props) => {
  return (
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
      options={excludeList[props.slot]}
    />
  );
};

export default Remove;
