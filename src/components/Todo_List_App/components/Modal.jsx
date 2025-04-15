const Modal = ({isModalOpen, closeModal, yesBtnHandler}) => {
  return (
    <>
      {isModalOpen === true ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border w-md bg-gray-100">
          <div className="bg-blue-600 flex flex-row-reverse">
            <button
              className="bg-red-700 text-white px-3 py-1 cursor-pointer active:border border-black m-1 active:bg-red-900"
              onClick={closeModal}
            >
              X
            </button>
          </div>
          <p className="text-center m-2">Do you want to clear the List?</p>
          <div className="mt-4 flex justify-center gap-2 m-4">
            <button
              className="bg-black text-white px-4 py-2 rounded-2xl active:bg-gray-400 cursor-pointer"
              onClick={yesBtnHandler}
            >
              Yes
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-2xl active:bg-gray-400 cursor-pointer"
              onClick={closeModal}
            >
              No
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
