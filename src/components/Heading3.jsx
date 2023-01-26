import Styled from "styled-components";

export const Heading3 = Styled.h2.attrs(
  (props: { color: string, size: string }) => props
)`
    font-size: ${(props) => props.size};
    color:  ${(props) => props.color};
  font-family: 'Cormorant Garamond', serif;


`;
