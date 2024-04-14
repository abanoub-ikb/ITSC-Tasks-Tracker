export default function Modal({text='',onCancel,onConfirm}) {

  return (
    <div class="modal d-block bg-dark bg-opacity-50" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-danger">
            <h5 class="modal-title ">Warning &#128561;</h5>
            
          </div>
          <div class="modal-body">
            <p>Caution You Are About To Delete {text}</p>
          </div>
          <div class="modal-footer">
            <button
              onClick={onCancel}
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-danger" onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
