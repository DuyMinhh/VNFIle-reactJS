import './index.css';
import './mobile.css';
import img from '../images/logo.png';
import image from '../images/menu.png';
import imgsvg from '../images/circle-xmark-solid.svg';
function Header() {
  return (
    <div className='header'>
      <div className='header-top'>
      <a href="#">
        <img src={img} style={{width: '100%', height: '48px'}} alt="" />
      </a>
    <div className="header-between" style={{marginLeft: '30px'}}>
        <div>
          <a className="menu-top" href="#" style={{color: '#E9333A', marginRight: '10px', marginLeft: '40px'}}>Vay vốn</a>
        </div>
        <a className="menu-top" href="#" style={{marginLeft: '10px'}}>Đầu tư</a>
      </div>
    <div className="header-right">
      <button className="btn-registration">Đăng kí</button>
      <button className="btn-log-in">Đăng nhập</button>
      <button className="btn-menu-top" onclick="popup()"> 
        <img src={image} style={{width: '30px', height: '17px'}} alt="" />
      </button>
    </div>
      </div>
    <div className='header-overlay'></div>
    <div className="header-mobile">
      <div className='header-close'>  
          <img src={imgsvg} style={{width: '20px', height: '200px'}}  />
      </div>
        <div className='header-mobile-list'>
          <a className="menu-top-mobile" href="#">Vay vốn</a>
        </div>
        <div className='header-mobile-list'>
          <a className="menu-top-mobile" href="#">Đầu tư</a>
        </div>
      </div>
  </div>
  );
}

export default Header;
