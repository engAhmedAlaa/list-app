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

  return items.length ? <ul>{itemsEle}</ul> : <p>Your list is empty.</p>;
}

export default List;
