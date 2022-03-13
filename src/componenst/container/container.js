import './index.css';
import './mobile.css';
import './bootstrap.min.css';
import './bootstrap-grid.min.css';
import iconwallet from '../images/icon-wallet.png';
import notebook from '../images/icon-notebook.png';
import motobike from '../images/icon-motobike.png';
import pickbank from '../images/icon-pickbank.png';
import carservice from '../images/icon-car-service.png';
import car from '../images/icon-car.png';
import invoice from '../images/icon-invoice.png';
import dankivay from '../images/dankivay.png';
import leftimg from '../images/left-red.png';
import qrcode from '../images/QR CODE 1.png';
import bgindex from '../images/bg-index.png';
import bgmenu from '../images/bg-menu.png';


function Container () {
    return (
     <div>
        <div className="position-relative">
        <img src={bgmenu} width="100%" height="100%" alt="" />
        <div className="position-absolute menu-bottom d-flex justify-content-center align-items-center" style={{padding: '0 80px'}}>
          <a className="btn-menu-bottom" href="#">Gói vay Cá Nhân</a>
          <a className="btn-menu-bottom" href="#">Gói vay Doanh nghiệp</a>
          <a className="btn-menu-bottom" href="#">Gói vay Hộ Kinh Doanh</a>
          <a className="btn-menu-bottom" href="#">Khuyến mãi</a>
          <a className="btn-menu-bottom" href="#">Danh sách đơn vay</a>   
        </div>
        <marquee className="position-absolute text-marquee" direction="left" height="26px">
          <div className="marquee">
            <span className="marquee-rank">A1</span>
            <span className="marquee-bold">VMX20051435 :</span>
            <span className="marquee-red">Khoản vay : </span>
            <span style={{fontSize: '13px'}}>/ Thời hạn : </span>
            <span className="marquee-red-bold">30.000.000 VNĐ</span>
            <span style={{fontSize: '13px'}}>/ 30 tháng</span>
            <span className="marquee-invest "><a href style={{color: '#DD1F26', textDecoration: 'none'}}>Đầu tư</a></span>|
            <span className="marquee-rank">A1</span>
            <span className="marquee-bold">VMX20051435 :</span>
            <span className="marquee-red">Khoản vay : </span>
            <span style={{fontSize: '13px'}}>/ Thời hạn : </span>
            <span className="marquee-red-bold">30.000.000 VNĐ</span>
            <span style={{fontSize: '13px'}}>/ 30 tháng</span>
            <span className="marquee-invest "><a href style={{color: '#DD1F26', textDecoration: 'none'}}>Đầu tư</a></span>|
            <span className="marquee-rank">A1</span>
            <span className="marquee-bold">VMX20051435:</span>
            <span className="marquee-red">Khoản vay: </span>
            <span style={{fontSize: '13px'}}>/ Thời hạn :</span>
            <span className="marquee-red-bold">30.000.000 VNĐ</span>
            <span style={{fontSize: '13px'}}>/ 30 tháng</span>
            <span className="marquee-invest "><a href style={{color: '#DD1F26', textDecoration: 'none'}}>Đầu tư</a></span>|
            <span className="marquee-rank">A1</span>
            <span className="marquee-bold">VMX20051435 :</span>
            <span className="marquee-red">Khoản vay : </span>
            <span style={{fontSize: '13px'}}>/ Thời hạn :</span>
            <span className="marquee-red-bold">30.000.000 VNĐ</span>
            <span style={{fontSize: '13px'}}>/ 30 tháng</span>
            <span className="marquee-invest "><a href style={{color: '#DD1F26', textDecoration: 'none'}}>Đầu tư</a></span>|
          </div>
        </marquee>
        <div className="position-absolute title-quick-loan" style={{padding: '27px 30px'}}>
          <div style={{marginBottom: '24px'}}>
            <p className="text-registration" style={{marginBottom: '5px'}}>Đăng kí vay nhanh</p>
            <p className="text-amount">4.789 người vay thành công</p>
          </div>
          <div style={{marginBottom: '2px'}}>
            <div className="input-group align-items-center" style={{marginBottom: '15px'}}>
              <input type="text" className="form-control input-text" placeholder="Họ và tên của bạn" />
            </div>
            <div className="input-group" style={{marginBottom: '15px'}}>
              <input type="text" className="form-control input-text" placeholder="Số điện thoại của bạn" />
            </div>
            <div className="input-group input-select" style={{marginBottom: '15px'}}>
              <input type="text" className="form-control p-0" style={{border: 'none'}} placeholder="Khu vực sống hiện tại (Tỉnh/TP)" />
              <button type="button" className="bg-white dropdown-toggle dropdown-toggle-split p-0" style={{border: 'none', marginTop: '4px'}} />
            </div>
            <div className="input-group input-select" style={{marginBottom: '15px'}}>
              <input type="text" className="form-control p-0" style={{border: 'none'}} placeholder="Khu vực sống hiện tại (Quận/Huyện)" />
              <button type="button" className="bg-white dropdown-toggle dropdown-toggle-split p-0" style={{border: 'none', marginTop: '4px'}} />
            </div>
          </div>
          <div style={{marginBottom: '25px'}}>
            <p className="mb-0 text-advise">Bạn có đồng ý để VNFITE gọi điện thoại <br /> và tư vấn khoản vay</p>
          </div>
          <div>
            <button className="btn-registration-fast">Đăng kí vay nhanh</button>
          </div>
        </div>
        <div className="title-quick-loan-mobile" style={{padding: '27px 30px'}}>
          <div style={{marginBottom: '24px'}}>
            <p className="text-registration" style={{marginBottom: '5px'}}>Đăng kí vay nhanh</p>
            <p className="text-amount">4.789 người vay thành công</p>
          </div>
          <div style={{marginBottom: '2px'}}>
            <div className="input-group input-text align-items-center" style={{marginBottom: '15px'}}>
              <input type="text" className="form-control" style={{border: 'none'}} placeholder="Họ và tên của bạn" />
            </div>
            <div className="input-group input-text" style={{marginBottom: '15px'}}>
              <input type="text" className="form-control" style={{border: 'none'}} placeholder="Số điện thoại của bạn" />
            </div>
            <div className="input-group input-select" style={{marginBottom: '15px'}}>
              <input type="text" className="form-control p-0" style={{border: 'none'}} placeholder="Khu vực sống hiện tại (Tỉnh/TP)" />
              <button type="button" className="bg-white dropdown-toggle dropdown-toggle-split p-0" style={{border: 'none', marginTop: '4px'}} />
            </div>
            <div className="input-group input-select" style={{marginBottom: '15px'}}>
              <input type="text" className="form-control p-0" style={{border: 'none'}} placeholder="Khu vực sống hiện tại (Quận/Huyện)" />
              <button type="button" className="bg-white dropdown-toggle dropdown-toggle-split p-0" style={{border: 'none', marginTop: '4px'}} />
            </div>
          </div>
          <div style={{marginBottom: '25px'}}>
            <p className="mb-0 text-advise">Bạn có đồng ý để VNFITE gọi điện thoại <br /> và tư vấn khoản vay</p>
          </div>
          <div>
            <button className="btn-registration-fast">Đăng kí vay nhanh</button>
          </div>
        </div>
      </div>
        <div className='container-loan' style={{background: '#333333', padding: '24px 128px 68px 154px'}}>
        <div>
          <p className="mb-0 text-uppercase text-package">Các gói sản phẩm vay</p>
        </div>
        <div className="d-flex justify-content-around text-center">
          <a className="text-title-loan" href>
            <div>
              <img className='img-loan' src={iconwallet} width="60px" height="60px" alt="" />
              <p className="mb-0" style={{marginTop: '4px'}}>Vay theo <br /> lương </p>
            </div>
          </a>
          <a className="text-title-loan" href>
            <div>
              <img className='img-loan' src={notebook} width="60px" height="60px" alt="" />
              <p className="mb-0" style={{marginTop: '4px'}}>Vay theo hộ <br /> khẩu </p>
            </div>
          </a>
          <a className="text-title-loan" href>
            <div>
              <img className='img-loan' src={motobike} width="60px" height="60px" alt="" />
              <p className="mb-0" style={{marginTop: '4px'}}>Vay theo đăng <br /> kí xe máy</p>
            </div>
          </a>
          <a className="text-title-loan" href>
            <div>
              <img className='img-loan' src={pickbank} width="60px" height="60px" alt="" />
              <p className="mb-0" style={{marginTop: '4px'}}>Vay trả góp </p>
            </div>
          </a>
          <a className="text-title-loan" href>
            <div>
              <img className='img-loan' src={carservice} width="60px" height="60px" alt="" />
              <p className="mb-0" style={{marginTop: '4px'}}>Vay theo đăng <br /> ký ô tô</p>
            </div>
          </a>
          <a className="text-title-loan" href>
            <div>
              <img className='img-loan' src={notebook} width="60px" height="60px" alt="" />
              <p className="mb-0" style={{marginTop: '4px'}}> Vay theo Cầm <br /> sổ đỏ</p>
            </div>
          </a>
          <a className="text-title-loan" href>
            <div>
              <img className='img-loan' src={car} width="60px" height="60px" alt="" />
              <p className="mb-0" style={{marginTop: '4px'}}>Vay theo Cầm <br /> ô tô </p>
            </div>
          </a>
          <a className="text-title-loan" href>
            <div>
              <img className='img-loan' src={invoice} width="60px" height="60px" alt="" />
              <p className="mb-0" style={{marginTop: '4px'}}>Vay theo hoá <br /> đơn điện,nước </p>
            </div>
          </a>
        </div>
      </div>
      <div className="bg-white container-choose-steps" style={{margin: '56px 136px', padding: '41px 136px'}}>
        <div style={{border: '1px solid #DD1F26', display: 'inline-block', padding: '7px 15px', borderRadius: '8px'}}>
          <p className="mb-0 text-upppercase text-papers">Bước 1 : Giấy tờ bạn cần có</p>
        </div>
        <div className="d-flex select-check" style={{marginTop: '53px'}}>
          <div className='sty-margin'>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Chứng minh thư
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Sổ hộ khẩu
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Giấy đăng ký kết hôn
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Bằng cấp
              </label>
            </div>
          </div>
          <div className='sty-margin' style={{marginLeft: '36px'}}>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Bảo hiểm y tế
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Mã số thuế
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Hợp đồng lao động
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Sao kê bảng lương
              </label>
            </div>
          </div>
          <div className='sty-margin' style={{marginLeft: '53px'}}>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Quyết định bổ nhiệm
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Địa chỉ làm việc
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Sổ đỏ
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Xe ô tô
              </label>
            </div>
          </div >
          <div className='sty-margin' style={{marginLeft: '32px'}}>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
                Xe máy
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
              </label>
            </div>
          </div>
          <div className='sty-margin-block' style={{marginLeft: '140px'}}>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
              </label>
            </div>
            <div className="form-check" style={{marginBottom: '30px'}}>
              <input className="form-check-input input-check" type="radio" />
              <label className="form-check-label label-check">
              </label>
            </div>
          </div>
        </div>
        <div style={{border: '1px solid #DD1F26', display: 'inline-block', padding: '7px 40px', borderRadius: '8px'}}>
          <p className="mb-0 text-upppercase text-papers">Bước 2 : Khoản vay bạn cần</p>
        </div>
        <div className="d-flex d-mobile">
          <div className="slidecontainer" style={{marginRight: '12px'}}>
            <p className="mb-0 text-money" style={{marginTop: '20px'}}>Số tiền: <span style={{color: '#DD1F26'}}>50.000.000</span></p>
            <input className="input-ranger" type="range" min={1} max={100} defaultValue={50} />
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0 text-select-money">0</p>
              <p className="mb-0 text-select-money">70.000.000 đ</p>
            </div>
          </div>
          <div className="slidecontainer slidecontainer-mobile" style={{marginLeft: '12px'}}>
            <p className="mb-0 text-money" style={{marginTop: '20px'}}>Thời hạn: <span style={{color: '#DD1F26'}}>12 tháng</span></p>
            <input className="input-ranger" type="range" min={1} max={100} defaultValue={50} />
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0 text-select-money">0</p>
              <p className="mb-0 text-select-money">24 tháng</p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center" style={{margin: '30px 0'}}>
          <p className="mb-0 text-uppercase text-pay">Tiền trả hàng tháng</p>
          <div style={{margin: '0 26px', border: '1px solid #DD1F26', display: 'inline-block', padding: '7px 15px', borderRadius: '8px'}}>
            <p className="mb-0 text-upppercase text-pay" style={{color: '#DD1F26'}}>4.166.667</p>
          </div>
          <p className="mb-0 text-uppercase text-pay">Vnd/tháng</p>
        </div>
        <div style={{border: '1px solid #DD1F26', display: 'inline-block', padding: '7px 30px', borderRadius: '8px'}}>
          <p className="mb-0 text-upppercase text-papers">Bước 3 : Đăng kí vay</p>
        </div>
        <div style={{marginTop: '40px'}}>
          <div className="d-flex d-mobile-input" style={{justifyContent: 'flex-start', marginBottom: '20px', width: '100%'}}>
            <div className="input-group w-100 input-text-mobile input-text-mobile-768" style={{marginRight: '15px'}}>
              <input type="text" className="form-control input-text" style={{borderRadius: '8px'}} placeholder="Họ và tên của bạn" />
            </div>
            <div className="input-group w-100 input-text-mobile" style={{marginLeft: '15px'}}>
              <input type="text" className="form-control input-text" style={{borderRadius: '8px'}} placeholder="Số điện thoại của bạn" />
            </div>
          </div>
          <div className="d-flex d-mobile-input" style={{justifyContent: 'flex-start', width: '100%'}}>
            <div className="input-group input-select input-text-mobile input-mobile-768" style={{marginRight: '15px', borderRadius: '8px'}}>
              <input type="text" className="form-control p-0" style={{border: 'none'}} placeholder="Khu vực sống hiện tại (Tỉnh/TP)" />
              <button type="button" className="bg-white dropdown-toggle dropdown-toggle-split p-0" style={{border: 'none', marginTop: '4px'}} />
            </div>
            <div className="input-group input-select input-text-mobile" style={{marginLeft: '15px', borderRadius: '8px'}}>
              <input type="text" className="form-control p-0" style={{border: 'none'}} placeholder="Khu vực sống hiện tại (Quận/Huyện)" />
              <button type="button" className="bg-white dropdown-toggle dropdown-toggle-split p-0" style={{border: 'none', marginTop: '4px'}} />
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            <button className="btn-registration-now">Đăng kí vay ngay</button>
          </div>
        </div>
      </div>
      <div className='container-steps-loan' style={{background: '#E5E5E5', paddingTop: '59px'}}>
        <div style={{textAlign: 'center'}}>
          <p className="mb-0 text-steps text-uppercase">CÁC BƯỚC VAY MỘT KHOẢN VAY CÁ NHÂN</p>
        </div>
        <div className="container-registration bg-white d-flex justify-content-between" style={{marginTop: '72px', padding: '55px 193px 30px 193px'}}>
          <div className='sty-steps' style={{marginRight: '22px'}}>
            <div className="d-flex justify-content-between">
              <div className='img-steps' style={{backgroundColor: '#DD1F26', padding: '20px'}}>
                <img src={dankivay} width="39px" height="40px" alt="" />
              </div>
              <div className='img-left'>
                <img src={leftimg} width="40px" height="20px" alt="" />
              </div>
            </div>
            <div style={{marginTop: '8px'}}>
              <p className="mb-0 text-number-steps">BƯỚC 1: ĐĂNG KÍ VAY</p>
              <p className="text-note-steps">Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank 
                từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. 
                Việt á là một ngân hàng nhà nước...</p>
            </div>
          </div>
          <div className='sty-steps' style={{margin: '0 22px'}}>
            <div className="d-flex justify-content-between">
              <div className='img-steps' style={{backgroundColor: '#DD1F26', padding: '20px'}}>
                <img src={dankivay} width="39px" height="40px" alt="" />
              </div>
              <div  className='img-left'>
                <img src={leftimg} width="40px" height="20px" alt="" />
              </div>
            </div>
            <div style={{marginTop: '8px'}}>
              <p className="mb-0 text-number-steps">BƯỚC 1: ĐĂNG KÍ VAY</p>
              <p className="text-note-steps">Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank 
                từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. 
                Việt á là một ngân hàng nhà nước...</p>
            </div>
          </div>
          <div className='sty-steps' style={{margin: '0 22px'}}>
            <div className="d-flex justify-content-between">
              <div className='img-steps' style={{backgroundColor: '#DD1F26', padding: '20px'}}>
                <img src={dankivay} width="39px" height="40px" alt="" />
              </div>
              <div className='img-left'>
                <img src={leftimg} width="40px" height="20px" alt="" />
              </div>
            </div>
            <div style={{marginTop: '8px'}}>
              <p className="mb-0 text-number-steps">BƯỚC 1: ĐĂNG KÍ VAY</p>
              <p className="text-note-steps">Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank 
                từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. 
                Việt á là một ngân hàng nhà nước...</p>
            </div>
          </div>
          <div className='sty-steps' style={{marginLeft: '22px'}}>
            <div className="d-flex justify-content-between">
              <div className='img-steps' style={{backgroundColor: '#DD1F26', padding: '20px'}}>
                <img src={dankivay} width="39px" height="40px" alt="" />
              </div>
              <div className='img-left'>
                <img src={leftimg} width="40px" height="20px" alt="" />
              </div>
            </div>
            <div style={{marginTop: '8px'}}>
              <p className="mb-0 text-number-steps">BƯỚC 1: ĐĂNG KÍ VAY</p>
              <p className="text-note-steps">Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank 
                từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. 
                Việt á là một ngân hàng nhà nước...</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-tutorial' style={{background: '#E5E5E5', paddingTop: '67px', paddingBottom: '40px'}}>
        <div className='container-tutorial-steps' style={{marginLeft: '225px', marginBottom: '67px'}}>
          <p className="mb-0 title-tutorial">Hướng dẫn cách vay tiền nhanh</p>
        </div>
        <div className='tutorial-steps' style={{padding: '0 139px'}}>
          <div className="d-flex justify-content-around align-items-top">
            <div className='number-steps' style={{marginRight: '27px'}}>
              <p className="mb-0 number-tutorial" style={{background: '#E9333A', padding: '5px 20px'}}>1</p>
            </div>
            <div className="bg-white" style={{padding: '19px 32px 23px 24px'}}>
              <p className="mb-0 text-tutorial">1. Bạn có thể vay tiền online bằng hình thức nào?</p>
              <p className="mb-0 text-tutorial-note">Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...
                Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với 
                chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...Chúng tôi đã kí kết hợp tác với 
                ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...</p>
            </div>
          </div>
        </div>
        <div className='tutorial-steps' style={{padding: '0 139px', marginTop: '24px'}}>
          <div className="d-flex justify-content-around align-items-top">
            <div className='number-steps' style={{marginRight: '27px'}}>
              <p className="mb-0 number-tutorial" style={{background: '#E9333A', padding: '5px 20px'}}>2</p>
            </div>
            <div className="bg-white" style={{padding: '19px 32px 23px 24px'}}>
              <p className="mb-0 text-tutorial">2. Bạn có thể vay tiền online bằng hình thức nào?</p>
              <p className="mb-0 text-tutorial-note">Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...
                Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với 
                chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...Chúng tôi đã kí kết hợp tác với 
                ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...</p>
            </div>
          </div>
        </div>
        <div className='tutorial-steps' style={{padding: '0 139px', marginTop: '24px'}}>
          <div className="d-flex justify-content-around align-items-top">
            <div className='number-steps' style={{marginRight: '27px'}}>
              <p className="mb-0 number-tutorial" style={{background: '#E9333A', padding: '5px 20px'}}>3</p>
            </div>
            <div className="bg-white" style={{padding: '19px 32px 23px 24px'}}>
              <p className="mb-0 text-tutorial">1. Bạn có thể vay tiền online bằng hình thức nào?</p>
              <p className="mb-0 text-tutorial-note">Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...
                Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với 
                chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...Chúng tôi đã kí kết hợp tác với 
                ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...</p>
            </div>
          </div>
        </div>
        <div className='tutorial-steps' style={{padding: '0 139px', marginTop: '24px'}}>
          <div className="d-flex justify-content-around align-items-top">
            <div className='number-steps' style={{marginRight: '27px'}}>
              <p className="mb-0 number-tutorial" style={{background: '#E9333A', padding: '5px 20px'}}>4</p>
            </div>
            <div className="bg-white" style={{padding: '19px 32px 23px 24px'}}>
              <p className="mb-0 text-tutorial">1. Bạn có thể vay tiền online bằng hình thức nào?</p>
              <p className="mb-0 text-tutorial-note">Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...
                Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, 
                và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...Chúng tôi đã kí kết hợp tác với ngân hàng Techcombank từ tháng 8 năm 2020 với 
                chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...Chúng tôi đã kí kết hợp tác với 
                ngân hàng Techcombank từ tháng 8 năm 2020 với chung mục đích muốn giúp người dùng tiếp cận được với nhiều nguồn vốn, và tiếp cận nhiều hơn với các quỹ tiền tệ, nhờ vào đó giúp thúc đẩy nền kinh tế hợp tác. Việt á là một ngân hàng nhà nước...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative" style={{marginBottom: '10px'}}>
        <div>
        <img className='img-download' src={bgindex} width="100%" alt="" />
        <div className="bg-white position-absolute position-download" style={{padding: '20px 20px'}}>
          <p className="mb-0 text-download">TẢI APP VNFITE</p>
          <div style={{textAlign: 'center'}}>
            <img className='img-qr' src={qrcode} width="244px" height="244px" alt="" />
          </div>
        </div>
        </div>
      </div>
     </div>
      
    );
}

export default Container;