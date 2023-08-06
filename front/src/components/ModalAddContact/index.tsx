import { useForm } from "react-hook-form";
import { Contact, ModalAddContactProps } from "../../interfaces";
import { ContactData, contactSchema } from "../../validators/validator.modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../../pages/Modal";
import { api } from "../../services/api";
import { ModalForm } from "./style";

export const ModalAddContact = ({
  toggleModal,
  setContacts,
}: ModalAddContactProps) => {
  const { register, handleSubmit } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const createContact = async (data: ContactData) => {
    const response = await api.post<Contact>("/contacts", data);

    setContacts((previousContacts) => [response.data, ...previousContacts]);

    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <ModalForm onSubmit={handleSubmit(createContact)}>
        <label htmlFor="text">Nome</label>
        <input type="text" id="name" {...register("name")} />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="text">Telefone</label>
        <input type="text" id="phone" {...register("phone")} />

        <button type="submit">Salvar</button>
      </ModalForm>
    </Modal>
  );
};
