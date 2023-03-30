// import React from 'react';

// function Header(props) {
//   return (
//       <header className="App-header">
//         <img src={props.logoImg} className="App-logo" alt="logo" />
//       </header>
//   );
// }

// export default Header;

// function Header() {
//   const headerStyle = { backgroundColor: 'mediumblue', color: '#fff' };

//   return (
//     <header style={headerStyle}>
//       <h1>Groceries List</h1>
//     </header>
//   );
// }

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   );
// }

// function Header({ title }) {
//   return (
//     <header>
//       <h1>{title}</h1>
//     </header>
//   );
// }

// function Header({ title = 'List' }) {
//   return (
//     <header>
//       <h1>{title}</h1>
//     </header>
//   );
// }

// function Header({ title }) {
//   return (
//     <header>
//       <h1>{title}</h1>
//     </header>
//   );
// }

// Header.defaultProps = {
//   title: 'List',
// };

function Header({ title }) {
  return (
    <header>
      <h1>{title} List</h1>
    </header>
  );
}

export default Header;
