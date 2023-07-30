import { useNavigate } from "react-router-dom";
import { ModalErrorProps } from "../../interfaces";
import { Modal } from "../../pages/Modal";

export const ModalError = ({ toggleModal }: ModalErrorProps) => {
  const navigate = useNavigate();

  const handleCloseAndRedirect = () => {
    toggleModal();
    navigate("/");
  };

  return (
    <Modal toggleModal={toggleModal} blockClosing>
      Você não está autenticado
      <button onClick={handleCloseAndRedirect}>Fazer login</button>
    </Modal>
  );
};
