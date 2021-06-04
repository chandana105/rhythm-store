const Modal = () => {
  return (
    <>
      <div id="modal-backDrop" className="modal-backdrop" ></div>
      <div id="modal" className=" modal modal-display">
        <header className="modal-header">
          {/* <img src={image} alt="" /> */}

          <div className="modal-text">
            <strong>Remove Item</strong>
            <p>Are you sure you want to remove this item?</p>
          </div>
          <i className="fas fa-times" id="modal-hide-icon" ></i>
        </header>
        <footer className="modal-footer">
          <button className="btn btn-primary" id="modal-save">
            MOVE TO WISHLIST
          </button>
          <button id="modal-hide" className="btn btn-secondary" id="modal-hide">
            REMOVE
          </button>
        </footer>
      </div>
    </>
  );
};

export default Modal;

// QUUANTITY ZERO TOH ISADDEDTOCART : FAKSE AND REMVE PR BHI
