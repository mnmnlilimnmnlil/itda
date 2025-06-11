import React, { useState } from "react"
import "./StoriesPage.css"

const initialStories = [
  {
    id: 1,
    title: "흰둥이와 함께한 1년",
    author: "김민수",
    date: "2024-01-15",
    likes: 127,
    image: "https://i.pinimg.com/736x/51/43/53/514353cf94860559881305d073a812c2.jpg",
    comments: [
      {
        id: 1,
        author: "이지은",
        content: "정말 행복해 보이네요! 흰둥이가 정말 귀여워요 😊",
        date: "2024-01-16"
      },
      {
        id: 2,
        author: "박서준",
        content: "우리도 강아지를 입양하고 싶어요!",
        date: "2025-06-12"
      }
    ],
    content:
      "처음 보호소에서 흰둥이를 만났을 때, 그는 다른 강아지들 사이에서 조용히 앉아있었어요. 하지만 우리 집에 온 후로는 완전히 다른 강아지가 되었죠! 매일 아침 6시면 정확히 깨워서 산책을 가자고 조르고, 저녁에는 제가 퇴근하면 문 앞에서 꼬리를 흔들며 반겨줘요. 흰둥이는 특히 이쁜 옷을 입혀주면 정말 좋아하는데, 그 모습이 너무 귀여워요. 흰둥이 덕분에 우리 가족 모두가 더 규칙적인 생활을 하게 되었고, 웃음이 끊이지 않는 집이 되었어요.",
    dogName: "흰둥이",
  },
  {
    id: 2,
    title: "몽실이와의 특별한 여행",
    author: "이지은",
    date: "2025-06-10",
    likes: 89,
    image: "https://i.pinimg.com/736x/38/83/27/388327831d9bfffb57039d7f4eaa8b16.jpg",
    comments: [
      {
        id: 1,
        author: "김민수",
        content: "여행 다녀오신 사진들 정말 예쁘네요! 몽실이도 행복해 보여요 😊",
        date: "2025-06-11"
      }
    ],
    content:
      "지난 주말, 몽실이와 함께 제주도 여행을 다녀왔어요. 처음에는 비행기를 탈 때 걱정이 많았는데, 몽실이는 여행용 가방에서 조용히 잘 있었어요. 제주도의 아름다운 해변에서 몽실이와 함께 뛰어놀고, 카페에서 함께 커피를 마시며 특별한 추억을 만들었어요. 특히 한라산 등반 코스에서 만난 다른 반려인들과 몽실이의 친구들이 된 것도 좋은 경험이었어요. 이제는 정기적으로 몽실이와 함께하는 여행을 계획하고 있어요!",
    dogName: "몽실",
  },
  {
    id: 3,
    title: "루니의 첫 생일 파티",
    author: "박서준",
    date: "2025-06-05",
    likes: 156,
    image: "https://i.pinimg.com/736x/a1/ee/2c/a1ee2c4f73b21aa20d603b270a79a556.jpg",
    comments: [],
    content:
      "어제 루니의 첫 번째 생일을 맞이해서 작은 파티를 열었어요. 강아지 친구들을 초대하고, 루니가 좋아하는 간식으로 케이크를 만들었죠. 생일 모자를 쓰고 있는 루니의 모습이 정말 귀여웠어요! 특히 루니가 좋아하는 장난감들을 선물로 받았을 때의 기쁜 표정은 잊을 수 없어요. 내년 생일에는 더 큰 파티를 열어주고 싶어요. 루니와 함께하는 매 순간이 특별하고 소중해요.",
    dogName: "루니",
  },
  {
    id: 4,
    title: "해피와 함께한 벚꽃축제",
    author: "최지원",
    date: "2025-04-01",
    likes: 203,
    image: "https://i.pinimg.com/736x/52/8b/d3/528bd3b531c3efd46fcfcf3aa400b8af.jpg",
    comments: [
      {
        id: 1,
        author: "김민수",
        content: "벚꽃과 함께한 해피의 모습이 정말 예쁘네요! 💕",
        date: "2025-04-02"
      }
    ],
    content:
      "지난 주말, 해피와 함께 여의도 벚꽃축제에 다녀왔어요. 처음에는 사람이 많을까봐 걱정했는데, 해피는 오히려 사람들을 만나는 걸 좋아했어요. 벚꽃이 흩날리는 가운데 해피와 함께 산책하고, 벚꽃 아래서 사진도 찍었어요. 특히 해피가 벚꽃잎을 입에 물고 있는 모습이 너무 귀여웠어요! 축제장에서 만난 다른 반려인들과도 이야기를 나누며 좋은 시간을 보냈어요. 내년에도 꼭 해피와 함께 벚꽃축제에 가고 싶어요.",
    dogName: "해피",
  }
]

export default function StoriesPage() {
  const [sortBy, setSortBy] = useState("latest")
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false)
  const [likedStories, setLikedStories] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    dogName: "",
    content: "",
    image: null
  })
  const [comments, setComments] = useState({})
  const [newComment, setNewComment] = useState("")
  const [selectedStoryForComments, setSelectedStoryForComments] = useState(null)
  const [stories, setStories] = useState(initialStories)

  const sortedStories = [...stories].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date) - new Date(a.date)
    }
    return b.likes - a.likes
  })

  const handleLike = (storyId) => {
    setLikedStories((prev) =>
      prev.includes(storyId)
        ? prev.filter((id) => id !== storyId)
        : [...prev, storyId]
    )
  }

  const handleCommentClick = (storyId) => {
    setSelectedStoryForComments(selectedStoryForComments === storyId ? null : storyId)
  }

  const handleAddComment = (storyId) => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "익명",
        content: newComment.trim(),
        date: new Date().toISOString().split("T")[0],
      }
      setComments((prev) => ({
        ...prev,
        [storyId]: [...(prev[storyId] || []), comment],
      }))
      setNewComment("")
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newStory = {
      id: Date.now(),
      title: formData.title,
      author: "익명",
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      comments: [],
      content: formData.content,
      dogName: formData.dogName,
      image: formData.image
    }

    setStories(prevStories => [newStory, ...prevStories])
    setIsWriteModalOpen(false)
    setFormData({ title: "", dogName: "", content: "", image: null })
    alert("입양 후기가 등록되었습니다!")
  }

  return (
    <div className="stories-page">
      <div className="container">
        <div className="stories-header">
          <h1 className="stories-title">입양 후기</h1>
          <p className="stories-description">
            새로운 가족과 함께한 소중한 순간들을 나누어주세요
          </p>
        </div>

        <div className="stories-controls">
          <div className="sort-buttons">
            <button
              className={`sort-button ${sortBy === "latest" ? "active" : ""}`}
              onClick={() => setSortBy("latest")}
            >
              최신순
            </button>
            <button
              className={`sort-button ${sortBy === "popular" ? "active" : ""}`}
              onClick={() => setSortBy("popular")}
            >
              인기순
            </button>
          </div>
          <button
            className="write-button"
            onClick={() => setIsWriteModalOpen(true)}
          >
            ✏️ 이야기 작성하기
          </button>
        </div>

        <div>
          {sortedStories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-content">
                <div className="story-image">
                  {story.image ? (
                    <img src={story.image} alt={story.title} className="story-img" />
                  ) : (
                    "📸"
                  )}
                </div>
                <div className="story-text">
                  <div className="story-header">
                    <h2 className="story-title">{story.title}</h2>
                    <div className="dog-badge">{story.dogName}</div>
                  </div>

                  <div className="story-meta">
                    <span>📅</span>
                    <span className="story-author">{story.author}</span>
                    <span>{new Date(story.date).toLocaleDateString("ko-KR")}</span>
                  </div>

                  <div className="story-description">{story.content}</div>

                  <div className="story-actions">
                    <div className="action-buttons">
                      <button
                        className={`action-button ${likedStories.includes(story.id) ? "liked" : ""}`}
                        onClick={() => handleLike(story.id)}
                      >
                        {likedStories.includes(story.id) ? "♥" : "♡"}
                        {story.likes + (likedStories.includes(story.id) ? 1 : 0)}
                      </button>
                      <button 
                        className="action-button"
                        onClick={() => handleCommentClick(story.id)}
                      >
                        💬 {story.comments.length + (comments[story.id]?.length || 0)}
                      </button>
                    </div>
                  </div>

                  {selectedStoryForComments === story.id && (
                    <div className="comments-section">
                      <div className="comments-list">
                        {story.comments.map((comment) => (
                          <div key={comment.id} className="comment">
                            <div className="comment-header">
                              <span className="comment-author">{comment.author}</span>
                              <span className="comment-date">{new Date(comment.date).toLocaleDateString("ko-KR")}</span>
                            </div>
                            <div className="comment-content">{comment.content}</div>
                          </div>
                        ))}
                        {comments[story.id]?.map((comment) => (
                          <div key={comment.id} className="comment">
                            <div className="comment-header">
                              <span className="comment-author">{comment.author}</span>
                              <span className="comment-date">{new Date(comment.date).toLocaleDateString("ko-KR")}</span>
                            </div>
                            <div className="comment-content">{comment.content}</div>
                          </div>
                        ))}
                      </div>
                      <div className="comment-form">
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="댓글을 작성해주세요"
                          className="comment-input"
                        />
                        <button
                          className="comment-submit"
                          onClick={() => handleAddComment(story.id)}
                          disabled={!newComment.trim()}
                        >
                          댓글 작성
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {isWriteModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">이야기 작성하기</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">제목</label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dogName">강아지 이름</label>
                  <input
                    type="text"
                    id="dogName"
                    value={formData.dogName}
                    onChange={(e) => setFormData(prev => ({ ...prev, dogName: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="content">내용</label>
                  <textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="image">이미지</label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {formData.image && (
                    <div className="image-preview">
                      <img src={formData.image} alt="미리보기" />
                    </div>
                  )}
                </div>

                <div className="modal-buttons">
                  <button type="button" onClick={() => setIsWriteModalOpen(false)}>
                    취소
                  </button>
                  <button type="submit">작성하기</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
