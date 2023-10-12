import logo from '../logo.svg';
// import '../header.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-logo">
          <img src={logo} alt="logo" />
        </div>
        
        <div className="header-right">
          <p className="header-text">UNLIMITED TV SHOWS & MOVIES</p>
          <button className="btnbtn btn_red"><a href="#">JOIN NOW</a></button>
          <button className="btnbtn btn_black"><a href="#">SIGN IN</a></button>
        </div>
      </header>

    </div>
  );
}

export default Header;
