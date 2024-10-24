import React from "react";
import { styled } from "next-yak";

export const BuildingBrick = () => {
  return (
    <StyledContainer>
      <StyledStudsContainer>
        <StyledStud />
        <StyledStud />
        <StyledStud />
        <StyledStud />
      </StyledStudsContainer>
      <StyledBrick />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const StyledStud = styled.div`
  width: 4.8rem;
  height: 1.6rem;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top: #970000 solid 1px;
  margin-right: 0.8rem;
  margin-left: 0.8rem;
  background-image: linear-gradient(
    90deg,
    #970000 0%,
    #970000 10%,
    #fa7575 25%,
    #ff0000 35%,
    #ff0000 50%,
    #ff0000 55%,
    #fdb4b4 70%,
    #b90000 85%,
    #b90000 100%
  );
`;

const StyledStudsContainer = styled.div`
  display: flex;
`;

const StyledBrick = styled.div`
  height: 9.6rem;
  width: 27.2rem;
  background: #ff0000;
  /* background: linear-gradient(0deg, #ff0000 95%, #eb0000 100%); */
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;
