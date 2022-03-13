import './index.css';
import './mobile.css';
import './bootstrap.min.css';
import './bootstrap-grid.min.css';
import img from '../images/logo2.png';
import img1 from '../images/logo.png';
import imgarrow from '../images/arrow-white.png';
import iconphone from '../images/icon-phone.png';
import icongmail from '../images/icon-gmail.png';
import iconfb from '../images/icon-fb.png';
import iconzing from '../images/icon-zing.png';
import iconyoutube from '../images/icon-youtube.png';
import messenger from '../images/messenger 1.png';
import phone1 from '../images/phone1.png';
import dkvay from '../images/dkvay.png';
function Footer() {
    return (
        <div>
          <div className="footer">
            <div className="" style={{paddingTop: '25px'}}>
              <div className="row footer-top" style={{margin: '0 5%'}}>
                <div className="col-lg-4 col-md-4 col-sm-4 sty-footer">
                  <div className="logo"><a href><img src={img1} width="100%" /></a></div>
                  <div className="content">
                    <p style={{fontWeight: 700}}>TRỤ SỞ CHÍNH: TẦNG 7, SỐ 1 LƯƠNG YÊN, PHƯỜNG BẠCH ĐẰNG, QUẬN HAI BÀ TRƯNG, HÀ NỘI.</p>
                    <input className="input-checker" type="text" placeholder="Kiểm tra tỷ lệ vay của bạn" />
                    <button className="btn-search"><img style={{width: '80%'}} src={imgarrow} alt="#" /></button>
                    <div>
                      <div className="footer-title" style={{paddingTop: '20px'}}>
                        <img src={iconphone} style={{marginRight: '15px'}} />
                        <p style={{color: '#DD1F26', fontSize: '18px'}}>024 - 3367 - 6699</p>
                      </div>
                      <div className="footer-title" style={{paddingTop: '15px'}}>
                        <img src={icongmail} style={{marginRight: '15px'}} />
                        <p style={{color: '#337ab7', fontSize: '13px'}}>vnfite@gmail.com.vn</p>
                      </div>
                      <div className="footer-title" style={{paddingTop: '15px'}}>
                        <img src={iconfb} style={{marginRight: '15px'}} />
                        <p style={{color: '#2F80ED', fontSize: '13px'}}>VnFite Việt Nam</p>
                      </div>
                      <div className="footer-title" style={{paddingTop: '15px'}}>
                        <img src={iconzing} style={{marginRight: '15px'}} />
                        <p style={{color: '#19A1B4', fontSize: '13px'}}>VNFITE VIET NAM</p>
                      </div>
                      <div className="footer-title" style={{paddingTop: '15px'}}>
                        <img src={iconyoutube} style={{marginRight: '15px'}} />
                        <p style={{color: '#DD1F26', fontSize: '13px'}}>VNFITE VIET NAM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="row pt-1" style={{paddingTop: '40px'}}>
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{textAlign: 'right'}}>
                      <div className="title"><a className="footer-menu" href>NHẬN ĐẦU TƯ (VAY)</a></div>
                      <ul style={{listStyle: 'none'}}>
                        <li><a className="footer-information" href="#">Sản phẩm</a></li>
                        <li><a className="footer-information" href="#">Khuyến mãi</a></li>
                        <li><a className="footer-information" href="#">Sàn giao dịch</a></li>
                        <li><a className="footer-information" href="#">Hồ sơ cho vay</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{textAlign: 'right'}}>
                      <div className="title"><a className="footer-menu" href>NHÀ ĐẦU TƯ</a></div>
                      <ul style={{listStyle: 'none'}}>
                        <li><a className="footer-information" href="#">Sản phẩm đầu tư</a></li>
                        <li><a className="footer-information" href="#">Khuyến mãi</a></li>
                        <li><a className="footer-information" href="#">Quản lý rủi ro</a></li>
                        <li><a className="footer-information" href="#">Sàn giao dịch</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{textAlign: 'right'}}>
                      <div className="title"><a className="footer-menu" href>VỀ CHÚNG TÔI</a></div>
                      <ul style={{listStyle: 'none'}}>
                        <li><a className="footer-information" href="#">Mục tiêu</a></li>
                        <li><a className="footer-information" href="#">Tầm nhìn</a></li>
                        <li><a className="footer-information" href="#">Đội ngũ lãnh đạo</a></li>
                        <li><a className="footer-information" href="#">Hình ảnh</a></li>
                        <li><a className="footer-information" href="#">Báo chí</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{textAlign: 'right'}}>
                      <div className="title"><a className="footer-menu" href>TIỆN ÍCH</a></div>
                      <ul style={{listStyle: 'none'}}>
                        <li><a className="footer-information" href="#">Tỷ giá</a></li>
                        <li><a className="footer-information" href="#">Lãi suất đầu tư</a></li>
                        <li><a className="footer-information" href="#">Biểu phí và biểu mẫu</a></li>
                        <li><a className="footer-information" href="#">Công cụ tính toán</a></li>
                        <li><a className="footer-information" href="#">Tra cứu hoá đơn điện tử</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{textAlign: 'right'}}>
                      <div className="title"><a className="footer-menu" href>TẢI APP VNFITE</a></div>
                      <ul style={{listStyle: 'none'}}>
                        <li><a className="footer-information" href="#">Tải app VNFITE</a></li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12" style={{textAlign: 'right'}}>
                      <div className="title"><a className="footer-menu" href>TRẢI NGHIỆM VNFITE</a></div>
                      <ul style={{listStyle: 'none'}}>
                        <li><a className="footer-information" href="#">Đầu tư trải nghiệm</a></li>
                        <li><a className="footer-information" href="#">Hướng dẫn sử dụng</a></li>
                        <li><a className="footer-information" href="#">Khảo sát đánh giá</a></li>
                        <li><a className="footer-information" href="#">Video về bài học thành công</a></li>
                        <li><a className="footer-information" href="#">Blog VNFITE</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid footer-bottom d-flex" style={{backgroundColor: '#333333', padding: '15px 6%'}}>
          <div className="col-md-3 img-footer-768px">
            <img className="footer-logo" src={img} width="100%" />
          </div>
          <div className="footer-text-768px" style={{padding: '0 15px'}}>
            <p className="mb-0 footer-note">Giấy phép thiết lập trang thông tin điện tử tổng hợp trên internet số 3321/GP-TTĐT do Sở
              Thông tin và Truyền thông TP Hà Nội cấp ngày 03 tháng 07 năm 2019.<br />Liên hệ quảng cáo:
                098 - 999 - 9999</p>
            </div>
            <div className="license-768px" style={{padding: '0 15px'}}>
              <p className="mb-0 footer-note">Giấy phép thiết lập trang thông tin điện tử tổng hợp trên internet số 3321/GP-TTĐT do Sở
                Thông tin và Truyền thông TP Hà Nội cấp ngày 03 tháng 07 năm 2019.</p>
            </div>
          </div>
          <div className="d-none supporter">
        <div className="supporter-bar">
          <div>
            <img className='img-support' src={messenger} width="40px" height="40px" alt="" />
            <p className="mb-0" style={{marginTop: '9px'}}>Chat</p>
          </div>
          <div style={{marginTop: '15px'}}>
            <img className='img-support' src={phone1} width="32px" height="32px" alt="" />
            <p className="mb-0" style={{marginTop: '9px'}}>Hỗ trợ</p>
          </div>
          <div style={{marginTop: '15px'}}>
            <img className='img-support' src={dkvay} width="32px" height="32px" alt="" />
            <p className="mb-0" style={{marginTop: '9px'}}>Đk vay</p>
          </div>
        </div>
      </div>
        </div>
      );
}

export default Footer;