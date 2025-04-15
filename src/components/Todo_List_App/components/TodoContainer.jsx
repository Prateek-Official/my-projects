import {
  addItems,
  clearItems,
  removeItems,
  editItems,
} from "../../Movie App/utils/itemsSlice(TODO_SLICE)";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import TodoItems from "./TodoItems";
import AddItemsContainer from "./AddItemsContainer";
import { Link } from 'react-router-dom';

const TodoContainer = () => {
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTextIndex, setEditTextIndex] = useState(null);

  const selector = useSelector((store) => store.items.itemsList);
  const dispatch = useDispatch();

  const insertTodo = () => {
    if (text) {
      if (editTextIndex !== null) {
        dispatch(editItems({ index: editTextIndex, newText: text }));
        setEditTextIndex(null);
      } else {
        dispatch(addItems(text));
      }
      setText("");
    }
  };

  const clearList = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteItem = (index) => {
    dispatch(removeItems(index));
  };

  const yesBtnHandler = () => {
    dispatch(clearItems());
    closeModal();
  };

  const editBtnHandler = (index) => {
    setText(selector[index]);
    setEditTextIndex(index);
    insertTodo();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex mt-4 justify-between w-full px-4">
        <h1 className="font-bold text-3xl">TODO LIST APP</h1>
        <button className="home-btn">
          <Link to="/">Home</Link>
        </button>
      </div>

      <AddItemsContainer
        setText={setText}
        insertTodo={insertTodo}
        clearList={clearList}
        selector={selector}
        editTextIndex={editTextIndex}
        text={text}
      />

      <TodoItems
        selector={selector}
        editBtnHandler={editBtnHandler}
        deleteItem={deleteItem}
      />

      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        yesBtnHandler={yesBtnHandler}
      />
    </div>
  );
};

export default TodoContainer;
