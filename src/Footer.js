function Footer({ length }) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>
        {!length
          ? 'There is no list Items.'
          : `${length} List ${length > 1 ? 'Items' : 'Item'}.`}
      </p>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}

export default Footer;
