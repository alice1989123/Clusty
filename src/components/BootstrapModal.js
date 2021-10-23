import { Button, Modal } from "react-bootstrap";

const BootstrapModal = function ({
  modalShow,
  setModalShow,
  result,
  setResult,
}) {
  return (
    <div>
      <Modal show={modalShow}>
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title>Resultado de la evaluación del Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body> {result} </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={() => setModalShow(false)}>
            Imprimir reporte
          </Button>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BootstrapModal;
