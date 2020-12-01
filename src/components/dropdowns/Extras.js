import { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { options } from "../../data/index.js";

const list = Object.values(options).map((e) => {
  return e;
});

const Extras = (props) => {
  const [selectedExtras, setSelectedExtras] = useState([]);

  const getExtras = (event, { value }) => {
    return setSelectedExtras(value);
    // console.log("extra item", value);
    // let extras = event.target.textContent;
    // console.log(extras);
  };

  let arr = selectedExtras;
  console.log(arr);

  useEffect(() => {
    const storage = localStorage.setItem(
      "Extras",
      JSON.stringify(selectedExtras)
    );
  }, [selectedExtras]);

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
      onChange={getExtras}
    />
  );
};

export default Extras;
