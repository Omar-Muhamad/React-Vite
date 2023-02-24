const navLinks = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

const Header = () => {
  return (
    <header>
      <h1>React Vite Tutorial</h1>
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={`/${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
