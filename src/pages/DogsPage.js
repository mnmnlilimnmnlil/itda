import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useFavorites } from "../contexts/FavoritesContext"
// import CustomSelect from "../components/CustomSelect"
import "./DogsPage.css"

const dogs = [
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
    isNew: false,
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
  },
  {
    id: 4,
    name: "별이",
    age: "4살",
    breed: "골든 리트리버",
    gender: "여아",
    size: "대형견",
    weight: "28kg",
    personality: ["온순함", "똑똑함", "가족친화적"],
    location: "서울 송파구",
    description: "온순하고 똑똑한 별이입니다. 아이들과도 잘 지내고 훈련도 잘 따라해요.",
    neutered: true,
    vaccinated: true,
    isNew: false,
    imageUrl: "https://i.pinimg.com/736x/df/e7/6f/dfe76f03fb8395802bda52c31fb638af.jpg"
  },
  {
    id: 5,
    name: "뽀삐",
    age: "2살",
    breed: "말티푸",
    gender: "여아",
    size: "소형견",
    weight: "4kg",
    personality: ["조용함", "사람좋아함", "순종적"],
    location: "인천 부평구",
    description: "조용하지만 사람을 좋아하는 뽀삐예요. 순종적이고 집에서 얌전해요.",
    neutered: true,
    vaccinated: true,
    isNew: false,
    imageUrl: "https://i.pinimg.com/736x/dd/db/5d/dddb5dd313d6bd1490b896a07df4736a.jpg"
  },
  {
    id: 6,
    name: "멍멍이",
    age: "5살",
    breed: "시바견",
    gender: "남아",
    size: "중형견",
    weight: "12kg",
    personality: ["독립적", "차분함", "깔끔함"],
    location: "서울 종로구",
    description: "독립적이고 차분한 성격의 멍멍이입니다. 깔끔하고 자존심이 강해요.",
    neutered: true,
    vaccinated: true,
    isNew: false,
    imageUrl: "https://i.pinimg.com/736x/53/72/3e/53723e64dc50e9e2389fd9b4ad2e4ba1.jpg"
  },
  {
    id: 7,
    name: "루비",
    age: "3살",
    breed: "시바견",
    gender: "여아",
    size: "대형견",
    weight: "25kg",
    personality: ["친화적", "활발함", "똑똑함"],
    location: "경기 수원시",
    description: "친화적이고 활발한 루비예요. 사람과 다른 동물들과도 잘 어울려요.",
    neutered: true,
    vaccinated: true,
    isNew: false,
    imageUrl: "https://i.pinimg.com/736x/cf/18/f9/cf18f9661c27a95dc58cd33a0d52b081.jpg"
  },
  {
    id: 8,
    name: "코코",
    age: "1살",
    breed: "믹스견",
    gender: "남아",
    size: "소형견",
    weight: "2kg",
    personality: ["용감함", "애교쟁이", "보호본능"],
    location: "서울 강서구",
    description: "작지만 용감한 코코예요. 주인을 보호하려는 마음이 강해요.",
    neutered: false,
    vaccinated: true,
    isNew: true,
    imageUrl: "https://i.pinimg.com/736x/f5/67/33/f56733b9bfb5ee5059e6b4f2c471342e.jpg"
  },
  {
    id: 9,
    name: "콩이",
    age: "6살",
    breed: "시바견",
    gender: "여아",
    size: "중형견",
    weight: "15kg",
    personality: ["영리함", "활발함", "훈련잘함"],
    location: "경기 고양시",
    description: "매우 영리하고 훈련을 잘 따르는 하늘이예요. 운동을 좋아해요.",
    neutered: true,
    vaccinated: true,
    isNew: false,
    imageUrl: "https://i.pinimg.com/736x/71/41/96/714196bec523679bee75a325a1b05799.jpg"
  },
]

export default function DogsPage() {
  const [filters, setFilters] = useState({
    location: "all",
    size: "all",
    age: "all",
    gender: "all",
  })
  const [sortBy, setSortBy] = useState("latest")
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  const locationOptions = [
    { value: "all", label: "전체 지역" },
    { value: "서울", label: "서울" },
    { value: "경기", label: "경기" },
    { value: "인천", label: "인천" },
  ]

  const sizeOptions = [
    { value: "all", label: "전체 크기" },
    { value: "소형견", label: "소형견" },
    { value: "중형견", label: "중형견" },
    { value: "대형견", label: "대형견" },
  ]

  const ageOptions = [
    { value: "all", label: "전체 나이" },
    { value: "1살 미만", label: "1살 미만" },
    { value: "1-3살", label: "1-3살" },
    { value: "4-6살", label: "4-6살" },
    { value: "7살 이상", label: "7살 이상" },
  ]

  const genderOptions = [
    { value: "all", label: "전체 성별" },
    { value: "남아", label: "남아" },
    { value: "여아", label: "여아" },
  ]

  const filteredDogs = dogs.filter((dog) => {
    if (filters.location !== "all" && !dog.location.includes(filters.location)) return false
    if (filters.size !== "all" && dog.size !== filters.size) return false
    if (filters.gender !== "all" && dog.gender !== filters.gender) return false
    if (filters.age !== "all") {
      const dogAge = Number.parseInt(dog.age.replace("살", ""))
      if (filters.age === "1살 미만" && dogAge >= 1) return false
      if (filters.age === "1-3살" && (dogAge < 1 || dogAge > 3)) return false
      if (filters.age === "4-6살" && (dogAge < 4 || dogAge > 6)) return false
      if (filters.age === "7살 이상" && dogAge < 7) return false
    }
    return true
  })

  const sortedDogs = [...filteredDogs].sort((a, b) => {
    if (sortBy === "latest") {
      return b.isNew - a.isNew
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name)
    }
    return 0
  })

  const handleFavoriteToggle = (dog) => {
    if (isFavorite(dog.id)) {
      removeFromFavorites(dog.id)
    } else {
      addToFavorites(dog)
    }
  }

  const resetFilters = () => {
    setFilters({
      location: "all",
      size: "all",
      age: "all",
      gender: "all",
    })
  }

  return (
    <div className="dogs-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">아이들 만나기</h1>
          <p className="page-description">새로운 가족을 기다리는 소중한 친구들이에요</p>
        </div>

        <div className="filter-section">
          <h3 className="filter-title">필터</h3>
          <div className="filter-grid">
            <select
              value={filters.location}
              onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
            >
              {locationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={filters.size}
              onChange={(e) => setFilters((prev) => ({ ...prev, size: e.target.value }))}
            >
              {sizeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={filters.age}
              onChange={(e) => setFilters((prev) => ({ ...prev, age: e.target.value }))}
            >
              {ageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={filters.gender}
              onChange={(e) => setFilters((prev) => ({ ...prev, gender: e.target.value }))}
            >
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-buttons">
            <div className="filter-sort">
              <button
                className={`btn ${sortBy === "latest" ? "btn-primary" : "btn-outline"}`}
                onClick={() => setSortBy("latest")}
              >
                최신순
              </button>
              <button
                className={`btn ${sortBy === "name" ? "btn-primary" : "btn-outline"}`}
                onClick={() => setSortBy("name")}
              >
                이름순
              </button>
              <button className="btn btn-ghost" onClick={resetFilters}>
                필터 초기화
              </button>
            </div>
            <p className="filter-count">총 {sortedDogs.length}마리</p>
          </div>
        </div>

        {sortedDogs.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🐕</div>
            <h3 className="empty-title">조건에 맞는 아이들이 없어요</h3>
            <button className="btn btn-primary" onClick={resetFilters}>
              필터 초기화
            </button>
          </div>
        ) : (
          <div className="dogs-grid">
            {sortedDogs.map((dog) => (
              <div key={dog.id} className="dog-card">
                <div className="dog-image">
                  <img src={dog.imageUrl} alt={dog.name} className="dog-img" />
                  <button
                    className={`favorite-btn ${isFavorite(dog.id) ? "active" : ""}`}
                    onClick={() => handleFavoriteToggle(dog)}
                  >
                    {isFavorite(dog.id) ? "♥" : "♡"}
                  </button>
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
        )}
      </div>
    </div>
  )
}
