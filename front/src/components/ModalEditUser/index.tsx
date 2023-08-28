import { useForm } from "react-hook-form";
import { ModalEditUserProps, User } from "../../interfaces";
import { Modal } from "../../pages/Modal";
import {
  UserUpdateData,
  userUpdateSchema,
} from "../../validators/validator.modal";
import { ModalForm, FormButtons } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export const ModalEditUser = ({
  toggleUserModal,
  user,
  setUser,
}: ModalEditUserProps) => {
  const { register, handleSubmit } = useForm<UserUpdateData>({
    resolver: zodResolver(userUpdateSchema),
  });

  const navigate = useNavigate();

  const updateUser = async (data: UserUpdateData) => {
    if (!data.password) {
      const { name, email, phone } = data;

      const userDataToUpdate = { name, email, phone };

      const response = await api.patch(`/users/${user.id}`, userDataToUpdate);

      setUser(response.data);
    }

    const response = await api.patch<User>(`/users/${user.id}`, data);
    setUser(response.data);

    toggleUserModal();
  };

  const deleteUser = async () => {
    await api.delete(`/users/${user.id}`);

    navigate("/");
  };

  return (
    <Modal toggleModal={toggleUserModal} blockClosing>
      <ModalForm onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="text">Nome</label>
        <input
          type="text"
          id="name"
          defaultValue={user.name}
          {...register("name")}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          defaultValue={user.email}
          {...register("email")}
        />

        <label htmlFor="text">Telefone</label>
        <input
          type="text"
          id="phone"
          defaultValue={user.phone}
          {...register("phone")}
        />

        <label htmlFor="text">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="******"
          {...register("password")}
        ></input>
        <FormButtons>
          <button type="submit">Salvar</button>
          <button type="button" onClick={toggleUserModal}>
            Cancelar
          </button>
        </FormButtons>
        <button
          onClick={() => {
            deleteUser();
          }}
        >
          Excluir
        </button>
      </ModalForm>
    </Modal>
  );
};
