import { Button, Modal } from "react-bootstrap";

const BootstrapModal = function ({ modalShow, setModalShow }) {
  return (
    <div>
      <Modal show={modalShow}>
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title>Resultado de la evaluación del Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body> Indice de rentabilidad: Response </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>

          <Button variant="primary" onClick={() => setModalShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BootstrapModal;
