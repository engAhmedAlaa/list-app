import { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { v4 as uuidV4 } from 'uuid';

// function App() {
//   const myName = 'Ahmed';

//   const handleNameChange = () => {
//     const names = ['Ahmed', 'Alaa', 'Mohamed'];
//     const int = Math.floor(Math.random() * 3);
//     return names[int];
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         {/* <p>HTML</p>
//         <p>{5}</p>
//         <p>{[1, 2, 3]}</p>
//         <p>[1, 2, 3]</p>
//         <p>{true}</p>
//         <p>true</p>
//         <p>{true && 'Ahmed'}</p>
//         <p>{false && 'Ahmed'}</p> */}
//         {/* <p>Alaa</p> */}
//         {/* <p>Hello World</p> */}
//         {/* <p>Hello {myName}</p> */}
//         <p>Hello {handleNameChange()}</p>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Header logoImg={logo} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <Content></Content>
//       <Footer></Footer>
//     </div>
//   );
// }

// console.log(<Content />);

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  );

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  function handleAddItem(newItemContent) {
    setItems([
      {
        id: uuidV4(),
        checked: false,
        content: newItemContent,
      },
      ...items,
    ]);
  }

  function handleChangeItem(itemId) {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleDeleteItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <Content
        items={items}
        handleChangeItem={handleChangeItem}
        handleDeleteItem={handleDeleteItem}
        handleAddItem={handleAddItem}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
