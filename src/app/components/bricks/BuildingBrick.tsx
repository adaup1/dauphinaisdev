import React from "react";
import { styled } from "next-yak";
import hslColors from "./hslColors";
import { HSLColor, color } from "./types.d";

const getHslShades = (hslColor: HSLColor) => {
  const shade1 = `hsl(${hslColor.h}, ${hslColor.s}%, ${
    hslColor.l - 20 >= 30 ? hslColor.l - 20 : hslColor.l - 8
  }%)`;
  const shade2 = `hsl(${hslColor.h}, ${
    hslColor.s - 7 >= 43 ? hslColor.s - 7 : hslColor.s
  }%, ${hslColor.l + 22 <= 72 ? hslColor.l + 22 : 72}%)`;
  const shade3 = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`;
  const shade4 = `hsl(${hslColor.h}, ${
    hslColor.s - 7 >= 43 ? hslColor.s - 7 : hslColor.s
  }%, ${hslColor.l + 35 <= 85 ? hslColor.l + 35 : 85}%)`;
  const shade5 = `hsl(${hslColor.h}, ${hslColor.s}%, ${
    hslColor.l - 14 >= 36 ? hslColor.l - 14 : hslColor.l - 4
  }%)`;

  return { shade1, shade2, shade3, shade4, shade5 };
};

export const BuildingBrick = ({ color }: { color: color }) => {
  return (
    <StyledContainer>
      <StyledStudsContainer>
        <StyledStud hslColor={hslColors[color]} />
        <StyledStud hslColor={hslColors[color]} />
        <StyledStud hslColor={hslColors[color]} />
        <StyledStud hslColor={hslColors[color]} />
      </StyledStudsContainer>
      <StyledBrick hslColor={hslColors[color]} />
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

interface StyleProps {
  hslColor: HSLColor;
}

const StyledStudsContainer = styled.div`
  display: flex;
`;

const StyledStud = styled.div<StyleProps>`
  width: 4.8rem;
  height: 1.6rem;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top: ${({ hslColor }) =>
    `hsl(${hslColor.h}, ${hslColor.s}%, calc(${hslColor.l}% - 20%)) solid 1px`};
  margin-right: 0.8rem;
  margin-left: 0.8rem;
  background-image: ${({ hslColor }) => {
    const { shade1, shade2, shade3, shade4, shade5 } = getHslShades(hslColor);
    return `linear-gradient(
      90deg,
      ${shade1} 0%,
      ${shade1} 10%,
      ${shade2} 25%,
      ${shade3} 35%,
      ${shade3} 50%,
      ${shade3} 55%,
      ${shade4} 70%,
      ${shade5} 85%,
      ${shade5} 100%
    )`;
  }};
`;

const StyledBrick = styled.div<StyleProps>`
  height: 9.6rem;
  width: 27.2rem;
  background: ${({ hslColor }) => `linear-gradient(
    90deg,
    hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%) 40%,
    hsl(${hslColor.h}, ${hslColor.s}%, calc(${hslColor.l}% - 2%)) 67%
  )`};
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;
