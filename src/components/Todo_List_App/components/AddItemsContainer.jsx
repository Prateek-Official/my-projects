const AddItemsContainer = ({
  setText,
  insertTodo,
  clearList,
  selector,
  editTextIndex,
  text,
}) => {
  return (
    <div>
      <input
        type="text"
        className="border mt-8 py-2 px-2 rounded-lg mr-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button
        className="bg-gray-200 px-4 py-2 border rounded-xl cursor-pointer active:bg-gray-400"
        onClick={insertTodo}
      >
        {editTextIndex !== null ? "Update" : "Add"}
      </button>
      <button
        className="bg-gray-200 px-4 py-2 mx-2 border rounded-xl cursor-pointer active:bg-gray-400"
        disabled={selector.length === 0}
        onClick={clearList}
      >
        Clear
      </button>
    </div>
  );
};

export default AddItemsContainer;
