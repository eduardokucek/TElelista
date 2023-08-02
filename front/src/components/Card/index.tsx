import { CardProps } from "../../interfaces";
import { Actions, ContactData, ContactInfo, Container, Data } from "./style";

export const Card = ({ contact }: CardProps) => {
  return (
    <Container>
      <Data>
        <ContactInfo>
          <span>Nome:</span>
          <span>E-mail:</span>
          <span>Telefone: </span>
          <span>Adicionado em:</span>
        </ContactInfo>
        <ContactData>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <span>{contact.createdAt}</span>
        </ContactData>
      </Data>
      <Actions>
        <button>Editar</button>
        <button>Excluir</button>
      </Actions>
    </Container>
  );
};
