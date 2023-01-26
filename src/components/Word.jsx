import Styled from "styled-components";

export const Word = Styled.p.attrs(
  (props: { color: string, size: string }) => props
)`
    font-size: ${(props) => props.size};
    color:  ${(props) => props.color};

`;
