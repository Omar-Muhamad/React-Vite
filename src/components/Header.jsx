const navLinks = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

const Header = () => {
  return (
    <header className='flex justify-between items-center p-5'>
      <h1>React Vite Tutorial</h1>
      <nav>
        <ul className='flex gap-5'>
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
