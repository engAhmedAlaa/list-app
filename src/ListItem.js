import { FaTrash } from 'react-icons/fa';

function ListItem({ item, handleChangeItem, handleDeleteItem }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChangeItem(item.id)}
      />
      <label onDoubleClick={() => handleChangeItem(item.id)}>
        {item.content}
      </label>
      <FaTrash
        onClick={() => handleDeleteItem(item.id)}
        role="{button}"
        tabIndex="0"
        aria-label={`Delete ${item.content}`}
      />
    </li>
  );
}

export default ListItem;
