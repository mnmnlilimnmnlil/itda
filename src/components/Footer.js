import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/images/logo2.png" alt="잇다 로고" />
            </div>
            <p className="footer-description">
              유기견과 사람을 따뜻하게 잇는 공간입니다.
              <br />
              새로운 가족을 기다리는 소중한 생명들과 특별한 인연을 만들어보세요.
            </p>
          </div>

          <div>
            <h3 className="footer-section-title">서비스</h3>
            <ul className="footer-links">
              <li>
                <Link to="/dogs" className="footer-link">
                  아이들 만나기
                </Link>
              </li>
              <li>
                <Link to="/store" className="footer-link">
                  함께 나누기
                </Link>
              </li>
              <li>
                <Link to="/stories" className="footer-link">
                  우리 이야기
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="footer-link">
                  봉사활동
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">연락처</h3>
            <p className="footer-contact">
              📞 02-1234-5678
              <br />
              ✉️ contact@itda.co.kr
            </p>
          </div>
        </div>

        <div className="footer-divider">
          © 2024 잇다(ITDA). All rights reserved.
        </div>
      </div>
    </footer>
  )
}
