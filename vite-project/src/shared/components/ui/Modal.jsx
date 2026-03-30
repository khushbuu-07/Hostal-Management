const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-[400px]">
        <button onClick={onClose} className="float-right">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;