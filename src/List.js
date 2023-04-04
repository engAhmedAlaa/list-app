import ListItem from './ListItem';

function List({ items, handleChangeItem, handleDeleteItem }) {
  const itemsEle = items.map((item) => {
    return (
      <ListItem
        key={item.id}
        item={item}
        handleChangeItem={handleChangeItem}
        handleDeleteItem={handleDeleteItem}
      />
    );
  });

  return items.length ? (
    <ul className="list">{itemsEle}</ul>
  ) : (
    <p className="empty">Your list is empty.</p>
  );
}

export default List;
