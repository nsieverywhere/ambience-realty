import Styled from "styled-components";

export const Container = Styled.div.attrs(
  (props: { background: string, height: string }) => props
)`
    min-height: ${(props) => props.height};
    background-color:  ${(props) => props.background};

`;
