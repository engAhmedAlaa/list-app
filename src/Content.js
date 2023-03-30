import AddItem from './AddItem';
import SearchItem from './SearchItem';
import List from './List';
import HTMLComment from 'react-html-comment';
import { useEffect, useState } from 'react';

// import { useEffect, useState } from 'react';

// function Button({ onClick, children }) {
//   console.log(children);
//   return <button onClick={onClick}>{children}</button>;
// }

// console.log(<Button>Ahmed</Button>);

// console.log(<h1 className="title">Ahmed</h1>);

// function DraggableBox() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [lastCoordinates, setLastCoordinates] = useState(null);

//   function handlePointerDown(e) {
//     e.target.setPointerCapture(e.pointerId);
//     setLastCoordinates({
//       x: e.clientX,
//       y: e.clientY,
//     });
//   }

//   function handlePointerMove(e) {
//     if (lastCoordinates) {
//       setLastCoordinates({
//         x: e.clientX,
//         y: e.clientY,
//       });
//       const dx = e.clientX - lastCoordinates.x;
//       const dy = e.clientY - lastCoordinates.y;
//       setPosition({
//         x: position.x + dx,
//         y: position.y + dy,
//       });
//     }
//   }

//   function handlePointerUp(e) {
//     setLastCoordinates(null);
//   }

//   const styles = {
//     position: 'absolute',
//     transform: `translate(${position.x}px, ${position.y}px)`,
//     cursor: 'grab',
//     backgroundColor: 'blue',
//   };

//   return (
//     <div
//       style={styles}
//       onPointerDown={handlePointerDown}
//       onPointerMove={handlePointerMove}
//       onPointerUp={handlePointerUp}
//     >
//       Drag Me
//     </div>
//   );
// }

// function Content() {
//   const [name, setName] = useState(handleNameChange());
//   const [count, setCount] = useState(0);

//   // const [content, setContent] = useState('Hi');

//   // console.log(useState(0));
//   // console.log(setCount);
//   // Infinite loop
//   // console.log(setCount());

//   function handleNameChange() {
//     const names = ['Ahmed', 'Alaa', 'Mohamed'];
//     const int = Math.floor(Math.random() * 3);
//     return names[int];
//   }

//   // function handleClick() {
//   //   console.log('Clicked');
//   // }

//   // function handleClickS(name) {
//   //   console.log(`${name} clicks`);
//   // }

//   // function handleClickSS(event, name) {
//   //   console.log(event);
//   //   console.log(event instanceof Event);
//   //   console.log(event.constructor);
//   //   console.log(event.target);
//   //   console.log(`${name} clicks`);
//   // }

//   function handleClick() {
//     setName(handleNameChange());
//   }

//   // console.log('Render');

//   // function handleCount() {
//   //   setCount(count + 1);
//   // }

//   function handleCount() {
//     setCount((oldValue) => oldValue + 1);
//   }

//   // function handleCount() {
//   //   setCount(count + 1);
//   //   console.log('set');
//   //   setCount(count + 1);
//   //   console.log('log');
//   //   console.log(count);
//   //   console.log('End');
//   // }

//   // function handleChange(event) {
//   //   setContent(event.target.innerText);
//   // }

//   return (
//     <main>
//       {/* <p>Hello {handleNameChange()}!</p> */}
//       <p>Hello {name}!</p>
//       <p>{count}</p>
//       {/* <button onClick={handleClickS}>Click It</button> */}
//       {/* <button onClick={() => handleClickS(handleNameChange())}>Click It</button> */}
//       {/* <button onClick={(event) => handleClickSS(event, handleNameChange())}> */}
//       {/* <button data-type="increase">Change Count</button> */}
//       {/* <button>{null}</button>
//       <button>{undefined}</button> */}
//       {/* <Button>Ahmed</Button> */}
//       {/* <p
//         suppressContentEditableWarning="true"
//         contentEditable="true"
//         onKeyUp={handleChange}
//       >
//         {content}
//       </p> */}
//       {/* <div /> */}
//       {/* <div
//         onClickCapture={() => {
//           console.log('Hi');
//         }}
//       >
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             console.log(e.target);
//           }}
//         >
//           Click
//         </button>
//       </div> */}
//       {/* <select onChange={(e) => console.log(e.target.value)}>
//         <option value="Alice">Alice</option>
//         <option value="Bob">Bob</option>
//       </select> */}
//       {/* <DraggableBox /> */}
//       <button onClick={() => handleClick()}>Change Name</button>
//       <button onClick={handleCount}>Change Count</button>
//     </main>
//   );
// }

// function Timer() {
//   const [count, setCount] = useState(0);

//   console.log('Ahmed');

//   useEffect(() => {
//     console.log(count);
//     let intervalId = setInterval(() => {
//       if (count === 5) clearInterval(intervalId);
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []);

//   return <div onClick={handleClick}>{count}</div>;
// }

// console.log(crypto.randomUUID());
// console.log(crypto.randomUUID());
// console.log(crypto.randomUUID());

// console.log(new Date().toLocaleTimeString());

// function Clock() {
//   const [count, setCount] = useState(0);
//   const time = new Date().toLocaleTimeString();
//   let intervalId;

//   useEffect(() => {
//     setInterval(() => {
//       console.log('A');
//       setCount((count) => count + 1);
//     }, 500);
//     return () => {
//       clearTimeout(intervalId);
//     };
//   }, []);

//   // let intervalId;

//   // useEffect(() => {
//   //   intervalId = setTimeout(() => {
//   //     console.log('A');
//   //     setCount((count) => count + 1);
//   //   }, 100);
//   //   return () => {
//   //     clearTimeout(intervalId);
//   //   };
//   // }, []);

//   return <div>{count}</div>;
// }

// import Clock from 'react-clock';
// import 'react-clock/dist/Clock.css';

// function ClockContainer() {
//   const [value, setValue] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => setValue(new Date()), 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return <Clock value={new Date()} />;
// }

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
}

function Content(props) {
  const [searchValue, setSearchValue] = useState('');
  const { items, ...otherProps } = props;
  const newItems = !searchValue
    ? items
    : items.filter((item) =>
        item.content.toLowerCase().includes(searchValue.trim().toLowerCase())
      );

  function handleSearchItem(event) {
    setSearchValue(event.target.value);
  }

  return (
    <main className={items.length === 0 ? 'jc-c' : ''}>
      <AddItem handleAddItem={props.handleAddItem} />
      <SearchItem
        handleSearchItem={handleSearchItem}
        searchValue={searchValue}
      />
      <HTMLComment text="This is my list" />
      <List {...otherProps} items={newItems} />
      <Clock />
    </main>
  );
}

export default Content;
