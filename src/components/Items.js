import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import burger from "../images/burger.png";
import hotdog from "../images/hot-dog.png";
import fries from "../images/fries.png";
import cheeseFries from "../images/cheese-fries.png";

const Items = () => {
  return (
    <Wrapper>
      <Card>
        <Img src={burger} alt="hamburger" />
      </Card>

      <Card>
        <Img src={hotdog} alt="hotdog" />
      </Card>

      <Card>
        <Img src={fries} alt="french fries" />
      </Card>

      <Card>
        <Img src={cheeseFries} alt="cheese fries" />
      </Card>

      <Card>
        <Img src={burger} alt="hamburger" />
      </Card>

      <Card>
        <Img src={hotdog} alt="hotdog" />
      </Card>

      <Card>
        <Img src={fries} alt="french fries" />
      </Card>

      <Card>
        <Img src={cheeseFries} alt="cheese fries" />
      </Card>

      <Card>
        <Img src={burger} alt="hamburger" />
      </Card>

      <Card>
        <Img src={hotdog} alt="hotdog" />
      </Card>

      <Card>
        <Img src={fries} alt="french fries" />
      </Card>

      <Card>
        <Img src={cheeseFries} alt="cheese fries" />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #a0d8db;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;

export default Items;
