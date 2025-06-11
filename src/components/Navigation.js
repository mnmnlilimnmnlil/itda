import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useFavorites } from "../contexts/FavoritesContext"
import "./Navigation.css"

const navItems = [
  { href: "/dogs", label: "아이들 만나기" },
  { href: "/store", label: "함께 나누기" },
  { href: "/stories", label: "우리 이야기" },
  { href: "/volunteer", label: "봉사활동" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { favorites } = useFavorites()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-logo">
            <img src="/images/logo1.png" alt="잇다 로고" className="logo-img" />
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
              >
                {item.label}
                {location.pathname === item.href && (
                  <div className="active-indicator"></div>
                )}
              </Link>
            ))}
            <Link
              to="/favorites"
              className="favorites-link"
            >
              ♥ 담아둔 친구들
              {favorites.length > 0 && (
                <span className="favorites-badge">{favorites.length}</span>
              )}
            </Link>
          </div>

          <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✕" : "☰"}
          </button>

          {isOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`mobile-nav-link ${location.pathname === item.href ? "active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/favorites"
                  className="mobile-favorites-link"
                  onClick={() => setIsOpen(false)}
                >
                  ♥ 담아둔 친구들 {favorites.length > 0 && `(${favorites.length})`}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
