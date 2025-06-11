import { Link } from "react-router-dom"
import { useFavorites } from "../contexts/FavoritesContext"
import "./FavoritesPage.css"

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useFavorites()

  const handleRemove = (dogId) => {
    if (window.confirm("이 아이를 관심 목록에서 제거하시겠어요?")) {
      removeFromFavorites(dogId)
    }
  }

  return (
    <div className="favorites-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">담아둔 친구들</h1>
          <p className="page-description">관심있게 본 소중한 친구들이에요</p>
        </div>

        {favorites.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">♥</div>
            <h2 className="empty-title">아직 담아둔 친구가 없어요</h2>
            <p className="empty-description">
              마음에 드는 아이들을 찾아서 하트를 눌러보세요
              <br />
              특별한 인연이 기다리고 있을지도 몰라요
            </p>
            <Link to="/dogs" className="empty-action">
              아이들 만나러 가기 →
            </Link>
          </div>
        ) : (
          <>
            <div className="favorites-count">
              총 <strong>{favorites.length}마리</strong>의 친구들을 담아두셨어요
            </div>
            <div className="favorites-grid">
              {favorites.map((dog) => (
                <div key={dog.id} className="favorite-card">
                  <div className="favorite-image">
                    <img src={dog.imageUrl} alt={dog.name} />
                    <button className="remove-btn" onClick={() => handleRemove(dog.id)}>
                      ♥
                    </button>
                  </div>
                  <div className="favorite-content">
                    <h3 className="favorite-name">{dog.name}</h3>
                    <div className="favorite-info">
                      📅 {dog.age} • {dog.breed} • {dog.gender}
                    </div>
                    <div className="favorite-location">📍 {dog.location}</div>
                    <div className="favorite-traits">
                      {dog.personality.map((trait, index) => (
                        <span key={index} className="badge badge-secondary">
                          {trait}
                        </span>
                      ))}
                    </div>
                    <div className="favorite-description">{dog.description}</div>
                    <Link to={`/dogs/${dog.id}`} className="detail-link">
                      자세히 보기
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="more-link">
              <Link to="/dogs">더 많은 아이들 보기 →</Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
