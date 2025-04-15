const TodoItems = ({selector, editBtnHandler, deleteItem}) => {
  return (
    <div className="border my-4">
      {selector.map((item, index) => {
        return (
          <div
            className="flex items-center gap-10 p-6 border justify-between"
            key={index}
          >
            <div className="flex-grow">{item}</div>
            <button
              className="bg-amber-300 py-2 px-4 cursor-pointer"
              onClick={() => editBtnHandler(index)}
            >
              Edit
            </button>
            <button
              className="bg-amber-300 py-2 px-4 cursor-pointer"
              onClick={() => deleteItem(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItems;
