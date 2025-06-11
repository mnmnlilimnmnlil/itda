import React from "react"
import { useState } from "react"
// import CustomSelect from "../components/CustomSelect"
import "./VolunteerPage.css"

const volunteerActivities = [
  {
    id: 1,
    title: "강아지 산책 도우미",
    shelter: "사랑보호소",
    location: "서울 강남구",
    date: "2024-02-15",
    time: "14:00 - 17:00",
    duration: "3시간",
    participants: "5/10명",
    type: "산책",
    description: "보호소 강아지들과 함께 산책하며 운동과 사회화를 도와주세요",
    requirements: "동물을 사랑하는 마음, 편한 운동복 착용",
    status: "모집중",
    image: "https://i.pinimg.com/736x/30/3b/24/303b243e19a2272f6bdc2f8f40401ac0.jpg"
  },
  {
    id: 2,
    title: "보호소 청소 및 정리",
    shelter: "희망보호소",
    location: "서울 마포구",
    date: "2024-02-18",
    time: "10:00 - 13:00",
    duration: "3시간",
    participants: "8/12명",
    type: "청소",
    description: "보호소 시설 청소와 정리정돈을 통해 깨끗한 환경을 만들어주세요",
    requirements: "작업복 착용, 청소용품 지급",
    status: "모집중",
    image: "https://i.pinimg.com/736x/1b/de/25/1bde255b178ee52f30434c7e4644dc6b.jpg"
  },
  {
    id: 3,
    title: "강아지 목욕 및 그루밍",
    shelter: "따뜻한보호소",
    location: "경기 성남시",
    date: "2024-02-20",
    time: "13:00 - 16:00",
    duration: "3시간",
    participants: "3/6명",
    type: "그루밍",
    description: "보호소 강아지들의 목욕과 간단한 그루밍을 도와주세요",
    requirements: "물을 무서워하지 않는 분, 앞치마 지급",
    status: "모집중",
    image: "https://i.pinimg.com/736x/cd/2f/8c/cd2f8c57c694c6d2b54afe8d7edf3bd7.jpg"
  },
  {
    id: 4,
    title: "강아지 사회화 훈련",
    shelter: "새생명보호소",
    location: "인천 부평구",
    date: "2024-02-22",
    time: "15:00 - 18:00",
    duration: "3시간",
    participants: "10/10명",
    type: "훈련",
    description: "보호소 강아지들의 사회화 훈련을 도와주세요",
    requirements: "동물 훈련 경험 우대, 간식 지급",
    status: "마감",
    image: "https://i.pinimg.com/736x/9a/3f/67/9a3f6774e0cd176b3422783147ddd3c0.jpg"
  },
  {
    id: 5,
    title: "강아지 산책 및 놀이",
    shelter: "행복보호소",
    location: "서울 송파구",
    date: "2024-02-25",
    time: "14:00 - 17:00",
    duration: "3시간",
    participants: "8/8명",
    type: "산책",
    description: "보호소 강아지들과 함께 산책하고 놀이를 통해 사회화를 도와주세요",
    requirements: "체력이 좋으신 분, 운동복 착용",
    status: "마감",
    image: "https://i.pinimg.com/736x/c1/22/42/c122425d82dfac2ca2efff53b45a1619.jpg"
  },
  {
    id: 6,
    title: "보호소 환경 개선",
    shelter: "미래보호소",
    location: "경기 수원시",
    date: "2024-02-28",
    time: "10:00 - 16:00",
    duration: "6시간",
    participants: "15/15명",
    type: "청소",
    description: "보호소 시설 개선 및 환경 정비를 도와주세요",
    requirements: "건설/인테리어 경험자 우대, 작업복 지급",
    status: "마감",
    image: "https://i.pinimg.com/1200x/e2/f9/83/e2f983490dc0291e2ef8071ff230b6d7.jpg"
  }
]

export default function VolunteerPage() {
  const [filters, setFilters] = useState({
    location: "all",
    type: "all",
    status: "all",
  })
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    motivation: "",
  })

  // const locationOptions = [
  //   { value: "all", label: "전체 지역" },
  //   { value: "서울", label: "서울" },
  //   { value: "경기", label: "경기" },
  //   { value: "인천", label: "인천" },
  // ]

  // const typeOptions = [
  //   { value: "all", label: "전체 활동 유형" },
  //   { value: "산책", label: "산책" },
  //   { value: "청소", label: "청소" },
  //   { value: "그루밍", label: "그루밍" },
  //   { value: "훈련", label: "훈련" },
  // ]

  // const statusOptions = [
  //   { value: "all", label: "전체 모집 상태" },
  //   { value: "모집중", label: "모집중" },
  //   { value: "마감", label: "마감" },
  // ]

  const experienceOptions = [
    { value: "", label: "봉사 경험을 선택해주세요" },
    { value: "none", label: "없음" },
    { value: "beginner", label: "초보 (1-5회)" },
    { value: "intermediate", label: "중급 (6-20회)" },
    { value: "expert", label: "고급 (20회 이상)" },
  ]

  const filteredActivities = volunteerActivities.filter((activity) => {
    if (filters.location !== "all" && !activity.location.includes(filters.location)) return false
    if (filters.type !== "all" && activity.type !== filters.type) return false
    if (filters.status !== "all" && activity.status !== filters.status) return false
    return true
  })

  const handleApply = (activity) => {
    setSelectedActivity(activity)
    setIsApplicationModalOpen(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const submitApplication = (e) => {
    e.preventDefault()
    setIsApplicationModalOpen(false)
    alert(`${selectedActivity.title} 봉사활동 신청이 완료되었습니다! 보호소에서 연락드릴 예정입니다.`)
    setFormData({ name: "", phone: "", email: "", experience: "", motivation: "" })
  }

  const resetFilters = () => {
    setFilters({
      location: "all",
      type: "all",
      status: "all",
    })
  }

  return (
    <div className="volunteer-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">봉사활동 찾기</h1>
          <p className="page-description">유기견들을 위한 따뜻한 손길이 필요해요</p>
        </div>

        {/* 필터 섹션 */}
        <div className="filter-section">
          <h2 className="filter-title">필터</h2>
          <div className="filter-grid">
            <button 
              className={`filter-button ${filters.location === 'all' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, location: 'all' }))}
            >
              전체 지역
            </button>
            <button 
              className={`filter-button ${filters.location === '서울' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, location: '서울' }))}
            >
              서울
            </button>
            <button 
              className={`filter-button ${filters.location === '경기' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, location: '경기' }))}
            >
              경기
            </button>
            <button 
              className={`filter-button ${filters.location === '인천' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, location: '인천' }))}
            >
              인천
            </button>
          </div>
          <div className="filter-grid">
            <button 
              className={`filter-button ${filters.type === 'all' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, type: 'all' }))}
            >
              전체 유형
            </button>
            <button 
              className={`filter-button ${filters.type === '산책' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, type: '산책' }))}
            >
              산책
            </button>
            <button 
              className={`filter-button ${filters.type === '청소' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, type: '청소' }))}
            >
              청소
            </button>
            <button 
              className={`filter-button ${filters.type === '그루밍' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, type: '그루밍' }))}
            >
              그루밍
            </button>
          </div>
          <div className="filter-grid">
            <button 
              className={`filter-button ${filters.status === 'all' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, status: 'all' }))}
            >
              전체 상태
            </button>
            <button 
              className={`filter-button ${filters.status === '모집중' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, status: '모집중' }))}
            >
              모집중
            </button>
            <button 
              className={`filter-button ${filters.status === '마감' ? 'active' : ''}`}
              onClick={() => setFilters((prev) => ({ ...prev, status: '마감' }))}
            >
              마감
            </button>
          </div>
          <div className="filter-footer">
            <button className="btn btn-ghost" onClick={resetFilters}>
              필터 초기화
            </button>
            <p className="filter-count">총 {filteredActivities.length}개 활동</p>
          </div>
        </div>

        {filteredActivities.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🤝</div>
            <h3 className="empty-title">조건에 맞는 봉사활동이 없어요</h3>
            <button className="btn btn-primary" onClick={resetFilters}>
              필터 초기화
            </button>
          </div>
        ) : (
          <div className="activities-grid">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="activity-card">
                <div 
                  className="activity-image"
                  style={{ backgroundImage: `url(${activity.image})` }}
                >
                  <div className={`status-badge ${activity.status === "모집중" ? "recruiting" : "closed"}`}>
                    {activity.status}
                  </div>
                  <div className="type-badge">
                    {activity.type}
                  </div>
                </div>
                <div className="activity-content">
                  <h3 className="activity-title">{activity.title}</h3>

                  <div className="activity-info">
                    <div className="info-item">
                      <span className="info-icon">📍</span>
                      <span>
                        {activity.shelter} • {activity.location}
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">📅</span>
                      <span>{new Date(activity.date).toLocaleDateString("ko-KR")}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">⏰</span>
                      <span>
                        {activity.time} ({activity.duration})
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-icon">👥</span>
                      <span>{activity.participants}</span>
                    </div>
                  </div>

                  <div className="activity-description">{activity.description}</div>

                  <div className="activity-requirements">
                    <strong>준비사항:</strong> {activity.requirements}
                  </div>

                  <button
                    className={`activity-button ${activity.status === '모집중' ? 'recruiting' : 'closed'}`}
                    onClick={() => activity.status === '모집중' && handleApply(activity)}
                    disabled={activity.status === '마감'}
                  >
                    {activity.status === '모집중' ? '신청하기' : '마감'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 신청 모달 */}
        {isApplicationModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">봉사활동 신청</h2>
              <form onSubmit={submitApplication}>
                <div className="form-group">
                  <label htmlFor="name">이름</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">이메일</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="experience">봉사 경험</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                  >
                    {experienceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="motivation">지원 동기</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="modal-actions">
                  <button type="button" className="btn btn-ghost" onClick={() => setIsApplicationModalOpen(false)}>
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
