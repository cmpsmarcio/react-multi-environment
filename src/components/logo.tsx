'use client';
import styled from "styled-components";

const image = process.env.PROGRAM_LOGO;

export const Logo = styled.img.attrs({
  src: `${image}`
})`
  width: 200px;
  height: 150px;
`;
