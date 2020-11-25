import styled from "styled-components";

const Flag = () => {
  return (
    <FlagContainer>
      <div style={squareContainer}>
        <div style={square} />

        <div style={stripes}>
          <div style={red} />
          <div style={superLightBlue} />
          <div style={red} />
          <div style={superLightBlue} />
        </div>
      </div>
      <div style={stripes}>
        <div style={red} />
        <div style={superLightBlue} />
        <div style={red} />
        <div style={superLightBlue} />
      </div>
    </FlagContainer>
  );
};

export default Flag;

const FlagContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const stripes = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

const red = {
  height: "100px",
  width: "100%",
  backgroundColor: "#C82D35",
};

const superLightBlue = {
  height: "100px",
  width: "100%",
  backgroundColor: "#EAFFF9",
};

const square = {
  height: "400px",
  width: "67%",
  backgroundColor: "#1E3453",
};

const squareContainer = {
  display: "flex",
  flexDirection: "row",
};
