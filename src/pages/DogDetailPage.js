import { useState } from "react"
import { useParams } from "react-router-dom"
import { useFavorites } from "../contexts/FavoritesContext"
import CustomSelect from "../components/CustomSelect"
import "./DogDetailPage.css"

const dogDetails = {
  1: {
    id: 1,
    name: "초코",
    age: "2살",
    breed: "믹스견",
    gender: "남아",
    weight: "15kg",
    personality: ["활발함", "사람좋아함", "산책좋아함"],
    location: "서울 강남구",
    description: "사람을 정말 좋아하는 활발한 초코예요! 산책을 무척 좋아하고, 다른 강아지들과도 잘 어울려요.",
    health: "건강상태 양호, 중성화 완료, 예방접종 완료",
    shelter: "사랑보호소",
    contact: "02-1234-5678",
    imageUrl: "https://i.pinimg.com/736x/34/7b/c6/347bc6c2c7abdb9d4d3b94fff1978fa1.jpg"
  },
  2: {
    id: 2,
    name: "바둑이",
    age: "3살",
    breed: "웰시코기",
    gender: "여아",
    weight: "18kg",
    personality: ["차분함", "독립적", "영리함"],
    location: "서울 마포구",
    description: "차분하고 독립적인 성격의 바둑이입니다. 영리하고 주인에게 충성심이 강해요.",
    health: "건강상태 양호, 중성화 완료, 예방접종 완료",
    shelter: "희망보호소",
    contact: "02-2345-6789",
    imageUrl: "https://i.pinimg.com/736x/cc/45/06/cc4506b9646370de5d93cc6b2388c4f1.jpg"
  },
  3: {
    id: 3,
    name: "콩이",
    age: "1살",
    breed: "포메라니안",
    gender: "남아",
    weight: "3kg",
    personality: ["장난꾸러기", "애교쟁이", "활발함"],
    location: "경기 성남시",
    description: "장난기 많고 애교 넘치는 콩이예요! 작지만 용감하고 사람을 무척 좋아해요.",
    health: "건강상태 양호, 예방접종 완료 (중성화 예정)",
    shelter: "따뜻한보호소",
    contact: "031-3456-7890",
    imageUrl: "https://i.pinimg.com/736x/ba/3d/25/ba3d255ce7bbd582c7d9238dd720113d.jpg"
  },
  4: {
    id: 4,
    name: "별이",
    age: "4살",
    breed: "골든 리트리버",
    gender: "여아",
    weight: "28kg",
    personality: ["온순함", "똑똑함", "가족친화적"],
    location: "서울 송파구",
    description: "온순하고 똑똑한 별이입니다. 아이들과도 잘 지내고 훈련도 잘 따라해요.",
    health: "건강상태 양호, 중성화 완료, 예방접종 완료",
    shelter: "행복보호소",
    contact: "02-3456-7890",
    imageUrl: "https://i.pinimg.com/736x/df/e7/6f/dfe76f03fb8395802bda52c31fb638af.jpg"
  },
  5: {
    id: 5,
    name: "뽀삐",
    age: "2살",
    breed: "말티푸",
    gender: "여아",
    weight: "4kg",
    personality: ["조용함", "사람좋아함", "순종적"],
    location: "인천 부평구",
    description: "조용하지만 사람을 좋아하는 뽀삐예요. 순종적이고 집에서 얌전해요.",
    health: "건강상태 양호, 중성화 완료, 예방접종 완료",
    shelter: "미소보호소",
    contact: "032-4567-8901",
    imageUrl: "https://i.pinimg.com/736x/dd/db/5d/dddb5dd313d6bd1490b896a07df4736a.jpg"
  },
  6: {
    id: 6,
    name: "멍멍이",
    age: "5살",
    breed: "시바견",
    gender: "남아",
    weight: "12kg",
    personality: ["독립적", "차분함", "깔끔함"],
    location: "서울 종로구",
    description: "독립적이고 차분한 성격의 멍멍이입니다. 깔끔하고 자존심이 강해요.",
    health: "건강상태 양호, 중성화 완료, 예방접종 완료",
    shelter: "평화보호소",
    contact: "02-4567-8901",
    imageUrl: "https://i.pinimg.com/736x/53/72/3e/53723e64dc50e9e2389fd9b4ad2e4ba1.jpg"
  },
  7: {
    id: 7,
    name: "루비",
    age: "3살",
    breed: "래브라도",
    gender: "여아",
    weight: "25kg",
    personality: ["친화적", "활발함", "똑똑함"],
    location: "경기 수원시",
    description: "친화적이고 활발한 루비예요. 사람과 다른 동물들과도 잘 어울려요.",
    health: "건강상태 양호, 중성화 완료, 예방접종 완료",
    shelter: "사랑나눔보호소",
    contact: "031-5678-9012",
    imageUrl: "https://i.pinimg.com/736x/cf/18/f9/cf18f9661c27a95dc58cd33a0d52b081.jpg"
  },
  8: {
    id: 8,
    name: "코코",
    age: "1살",
    breed: "믹스견",
    gender: "남아",
    weight: "2kg",
    personality: ["용감함", "애교쟁이", "보호본능"],
    location: "서울 강서구",
    description: "작지만 용감한 코코예요. 주인을 보호하려는 마음이 강해요.",
    health: "건강상태 양호, 예방접종 완료 (중성화 예정)",
    shelter: "희망나눔보호소",
    contact: "02-5678-9012",
    imageUrl: "https://i.pinimg.com/736x/f5/67/33/f56733b9bfb5ee5059e6b4f2c471342e.jpg"
  },
  9: {
    id: 9,
    name: "콩이",
    age: "6살",
    breed: "보더콜리",
    gender: "여아",
    weight: "15kg",
    personality: ["영리함", "활발함", "훈련잘함"],
    location: "경기 고양시",
    description: "매우 영리하고 훈련을 잘 따르는 하늘이예요. 운동을 좋아해요.",
    health: "건강상태 양호, 중성화 완료, 예방접종 완료",
    shelter: "행복나눔보호소",
    contact: "031-6789-0123",
    imageUrl: "https://i.pinimg.com/736x/71/41/96/714196bec523679bee75a325a1b05799.jpg"
  }
}

export default function DogDetailPage() {
  const { id } = useParams()
  const dog = dogDetails[Number.parseInt(id)]
  // const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    message: "",
  })
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()

  if (!dog) {
    return (
      <div className="detail-page">
        <div className="container">
          <div className="empty-state">
            <div className="empty-icon">🐕</div>
            <h1 className="empty-title">아이를 찾을 수 없어요</h1>
            <p className="empty-description">존재하지 않는 강아지입니다.</p>
          </div>
        </div>
      </div>
    )
  }

  const handleFavoriteToggle = () => {
    if (isFavorite(dog.id)) {
      removeFromFavorites(dog.id)
    } else {
      addToFavorites(dog)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsModalOpen(false)
    alert("입양 신청이 완료되었습니다. 보호소에서 연락드릴 예정입니다.")
    setFormData({ name: "", phone: "", email: "", experience: "", message: "" })
  }

  const experienceOptions = [
    { value: "", label: "경험을 선택해주세요" },
    { value: "none", label: "없음" },
    { value: "beginner", label: "초보 (1년 미만)" },
    { value: "intermediate", label: "중급 (1-5년)" },
    { value: "expert", label: "고급 (5년 이상)" },
  ]

  return (
    <div className="detail-page">
      <div className="container">
        <div className="detail-grid">
          {/* 이미지 섹션 */}
          <div className="image-section">
            <div className="dog-image">
              <img src={dog.imageUrl} alt={dog.name} className="dog-img" />
              <button
                className={`favorite-btn ${isFavorite(dog.id) ? "active" : ""}`}
                onClick={handleFavoriteToggle}
              >
                {isFavorite(dog.id) ? "♥" : "♡"}
              </button>
            </div>
          </div>

          {/* 정보 섹션 */}
          <div className="detail-card">
            <div className="detail-header">
              <h1 className="detail-title">{dog.name}</h1>
              <button
                className={`favorite-btn ${isFavorite(dog.id) ? "active" : ""}`}
                onClick={handleFavoriteToggle}
              >
                {isFavorite(dog.id) ? "♥" : "♡"}
              </button>
            </div>

            <div className="detail-info">
              <span>📅</span>
              <span>
                {dog.age} • {dog.breed} • {dog.gender} • {dog.weight}
              </span>
            </div>
            <div className="detail-location">
              <span>📍</span>
              <span>{dog.location}</span>
            </div>

            <div className="detail-section">
              <h3 className="section-title">성격</h3>
              <div className="traits-list">
                {dog.personality.map((trait, index) => (
                  <span key={index} className="badge badge-secondary">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3 className="section-title">소개</h3>
              <p className="detail-description">{dog.description}</p>
            </div>

            <div className="detail-section">
              <h3 className="section-title">건강상태</h3>
              <p className="detail-description">{dog.health}</p>
            </div>

            <div className="shelter-info">
              <h3 className="shelter-title">보호소 정보</h3>
              <div className="shelter-detail">
                <div className="shelter-item">
                  <span>🏠</span>
                  <span>{dog.shelter}</span>
                </div>
                <div className="shelter-item">
                  <span>📞</span>
                  <span>{dog.contact}</span>
                </div>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                입양 신청하기
              </button>
              <button className="btn btn-outline" onClick={() => window.open(`tel:${dog.contact}`)}>
                📞 보호소 연락하기
              </button>
            </div>
          </div>
        </div>

        {/* 입양 신청 모달 */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}>
            <div className="modal-content">
              <h2 className="modal-title">입양 신청서</h2>

              <div className="dog-summary">
                <h3 className="dog-summary-name">{dog.name}</h3>
                <p className="dog-summary-info">
                  {dog.age} • {dog.breed} • {dog.location}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">이름</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="이름을 입력해주세요"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">연락처</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="연락처를 입력해주세요"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">이메일</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="이메일을 입력해주세요"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">반려동물 경험</label>
                  <CustomSelect
                    value={formData.experience}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}
                    options={experienceOptions}
                    placeholder="경험을 선택해주세요"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">입양 사유</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="입양을 원하는 이유를 적어주세요"
                    required
                  />
                </div>
                <div className="modal-buttons">
                  <button type="button" className="btn btn-outline" onClick={() => setIsModalOpen(false)}>
                    취소
                  </button>
                  <button type="submit" className="btn btn-primary">
                    신청하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
