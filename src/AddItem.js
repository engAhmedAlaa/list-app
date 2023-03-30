import { useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function AddItem({ handleAddItem }) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddItem(value);
    setValue('');
    inputRef.current.focus();
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem"></label>
      <input
        type="text"
        id="addItem"
        value={value}
        placeholder="Add Item"
        required
        autoFocus
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
