import { Container, Content } from "./styles";

export function Section({ title, elem, children }) {
  return(
    <Container>
      <div className="header">
        <h2>{title}</h2>
        {elem}
      </div>
      <Content>
        {children}
      </Content>
    </Container>
  );
}