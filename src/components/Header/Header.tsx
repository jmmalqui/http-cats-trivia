import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="title"> HTTPCatsTrivia</div>
        <div className="buttons">
          <a
            href="https://github.com/jmmalqui"
            className="button"
            target="_blank"
          >
            Github
          </a>
          <div className="button"> Contact</div>
        </div>
      </div>
    </>
  );
}

export default Header;
