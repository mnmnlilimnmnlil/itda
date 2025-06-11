import React from "react"
import { Link } from "react-router-dom"
import "./HomePage.css"

const todaysDogs = [
  {
    id: 1,
    name: "초코",
    age: "2살",
    breed: "믹스견",
    gender: "남아",
    size: "중형견",
    weight: "15kg",
    personality: ["활발함", "사람좋아함", "산책좋아함"],
    location: "서울 강남구",
    description: "사람을 정말 좋아하는 활발한 초코예요! 산책을 무척 좋아하고, 다른 강아지들과도 잘 어울려요.",
    neutered: true,
    vaccinated: true,
    isNew: true,
    imageUrl: "https://i.pinimg.com/736x/34/7b/c6/347bc6c2c7abdb9d4d3b94fff1978fa1.jpg"
  },
  {
    id: 2,
    name: "바둑이",
    age: "3살",
    breed: "웰시코기",
    gender: "여아",
    size: "중형견",
    weight: "18kg",
    personality: ["차분함", "독립적", "영리함"],
    location: "서울 마포구",
    description: "차분하고 독립적인 성격의 바둑이입니다. 영리하고 주인에게 충성심이 강해요.",
    neutered: true,
    vaccinated: true,
    isNew: true,
    imageUrl: "https://i.pinimg.com/736x/cc/45/06/cc4506b9646370de5d93cc6b2388c4f1.jpg"
  },
  {
    id: 3,
    name: "콩이",
    age: "1살",
    breed: "포메라니안",
    gender: "남아",
    size: "소형견",
    weight: "3kg",
    personality: ["장난꾸러기", "애교쟁이", "활발함"],
    location: "경기 성남시",
    description: "장난기 많고 애교 넘치는 콩이예요! 작지만 용감하고 사람을 무척 좋아해요.",
    neutered: false,
    vaccinated: true,
    isNew: true,
    imageUrl: "https://i.pinimg.com/736x/ba/3d/25/ba3d255ce7bbd582c7d9238dd720113d.jpg"
  }
]

const stats = [
  { icon: "♥", number: "1,247", label: "입양 건수", description: "새로운 가족을 만난 아이들" },
  { icon: "💰", number: "₩2,340만", label: "후원금", description: "따뜻한 마음이 모인 금액" },
  { icon: "👥", number: "856명", label: "봉사자", description: "함께하는 따뜻한 손길" },
  { icon: "🏠", number: "23곳", label: "보호소", description: "협력하는 보호소" },
]

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section" style={{ backgroundImage: "url('https://i.pinimg.com/736x/1e/74/fa/1e74fade510ab8d016b59824f936c244.jpg')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">잇다</h1>
          <p className="hero-description">
            유기견과 사람을 따뜻하게 잇는 공간
            <br />
            새로운 가족을 기다리는 소중한 생명들과 특별한 인연을 만나보세요
          </p>
          <div className="hero-buttons">
            <Link to="/dogs" className="hero-button">
              아이들 만나기 →
            </Link>
            <Link to="/stories" className="hero-button">
              입양 후기 보기
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="today-section">
          <div className="page-header">
            <h2 className="page-title">오늘의 특별한 친구들</h2>
            <p className="page-description">최근에 보호소에 온 새로운 친구들을 소개해드려요</p>
          </div>

          <div className="dogs-grid">
            {todaysDogs.map((dog) => (
              <div key={dog.id} className="dog-card">
                <div className="dog-image">
                  <img src={dog.imageUrl} alt={dog.name} className="dog-img" />
                  {dog.isNew && <div className="new-badge">오늘의 친구</div>}
                </div>
                <div className="dog-content">
                  <h3 className="dog-name">{dog.name}</h3>
                  <div className="dog-info">
                    📅 {dog.age} • {dog.breed} • {dog.gender} • {dog.size}
                  </div>
                  <div className="dog-info">체중: {dog.weight}</div>
                  <div className="dog-location">📍 {dog.location}</div>
                  <div className="dog-traits">
                    {dog.personality.slice(0, 3).map((trait, index) => (
                      <span key={index} className="badge badge-secondary">
                        {trait}
                      </span>
                    ))}
                  </div>
                  <div className="dog-description">{dog.description}</div>
                  <div className="dog-status">
                    <span>중성화: {dog.neutered ? "완료" : "미완료"}</span>
                    <span>예방접종: {dog.vaccinated ? "완료" : "미완료"}</span>
                  </div>
                  <Link to={`/dogs/${dog.id}`} className="detail-link">
                    자세히 보기
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/dogs" className="btn btn-primary text-lg px-8 py-3">
              더 많은 아이들 보기 →
            </Link>
          </div>
        </section>

        <section className="stats-section">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="stats-title">함께 만든 따뜻한 변화</h2>
              <p className="stats-description">여러분의 사랑과 관심으로 만들어낸 소중한 성과들입니다</p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container text-center">
            <div className="page-header">
              <h2 className="page-title">다양한 방법으로 함께해요</h2>
              <p className="page-description">
                입양 외에도 후원, 봉사활동 등 여러 방법으로 아이들을 도울 수 있어요.
                <br />
                작은 관심이 큰 변화를 만들어냅니다.
              </p>
            </div>

            <div className="cta-buttons">
              <Link to="/store" className="btn btn-primary text-lg px-8 py-3">
                💝 후원하기
              </Link>
              <Link to="/volunteer" className="btn btn-outline text-lg px-8 py-3">
                🤝 봉사활동 참여하기
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
