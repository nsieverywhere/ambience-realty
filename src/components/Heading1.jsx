import Styled from "styled-components";

export const Heading1 = Styled.h1.attrs(
  (props: { color: string, size: string }) => props
)`
    font-size: ${(props) => props.size};
    color:  ${(props) => props.color};

`;
