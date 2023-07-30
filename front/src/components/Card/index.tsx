import { CardProps } from "../../interfaces";
import { Container } from "./style";

export const Card = ({ contact }: CardProps) => {
  return (
    <Container>
      {contact.name}
      {contact.email}
      {contact.phone}
    </Container>
  );
};
