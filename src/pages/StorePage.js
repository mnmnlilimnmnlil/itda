import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./StorePage.css"

const products = [
  {
    id: 1,
    name: "프리미엄 사료",
    price: 45000,
    description: "영양가 높은 프리미엄 사료로 아이들의 건강을 지켜주세요",
    isNew: true,
    category: "사료",
    imageUrl: "https://i.pinimg.com/736x/3a/2b/04/3a2b040017b51edafbf411f0e61e0138.jpg"
  },
  {
    id: 2,
    name: "따뜻한 담요",
    price: 25000,
    originalPrice: 30000,
    description: "추운 겨울, 아이들에게 따뜻함을 선물해주세요",
    isDiscount: true,
    category: "침구",
    imageUrl: "https://i.pinimg.com/736x/49/cb/d9/49cbd97e19cadb52bf580bf6656dae17.jpg"
  },
  {
    id: 3,
    name: "장난감 세트",
    price: 18000,
    description: "재미있는 장난감으로 아이들의 스트레스를 해소해주세요",
    category: "장난감",
    imageUrl: "https://i.pinimg.com/736x/25/2a/a6/252aa6e9f277db0fe937bc093db51843.jpg"
  },
  {
    id: 4,
    name: "강아지 리드줄",
    price: 35000,
    description: "안전한 산책을 위한 튼튼한 목줄과 리드줄",
    isNew: true,
    category: "산책용품",
    imageUrl: "https://i.pinimg.com/736x/bd/aa/b5/bdaab575a038bc94d92e7165c8e8d291.jpg"
  },
  {
    id: 5,
    name: "애견용 간식 세트",
    price: 22000,
    description: "건강한 재료로 만든 맛있는 간식들",
    category: "간식",
    imageUrl: "https://i.pinimg.com/736x/13/73/42/137342f0a58cebf5a62f18bd02364a3a.jpg"
  },
  {
    id: 6,
    name: "애견용 샴푸 세트",
    price: 28000,
    description: "순한 성분의 샴푸로 아이들을 깨끗하게",
    category: "미용용품",
    imageUrl: "https://i.pinimg.com/736x/24/01/3f/24013f5192c04b642422bc0443534b9f.jpg"
  },
  {
    id: 7,
    name: "강아지 옷 겨울용",
    price: 32000,
    originalPrice: 40000,
    description: "귀엽고 따뜻한 겨울용 강아지 옷",
    isDiscount: true,
    category: "의류",
    imageUrl: "https://i.pinimg.com/736x/69/cb/bc/69cbbc909753e7e4c49761c1b29dd9f8.jpg"
  },
  {
    id: 8,
    name: "이동장",
    price: 55000,
    description: "여행이나 병원 방문에 필수인 튼튼한 이동장",
    isNew: true,
    category: "이동용품",
    imageUrl: "https://i.pinimg.com/736x/b9/94/5b/b9945b6201280b90dc5a49d9a3e99752.jpg"
  },
  {
    id: 9,
    name: "치아관리 세트",
    price: 15000,
    description: "구강 건강을 위한 칫솔, 치약, 덴탈껌 세트",
    category: "건강용품",
    imageUrl: "https://i.pinimg.com/736x/26/de/42/26de4200f43c3e1302e84b3758c3456e.jpg"
  },
]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [sortBy, setSortBy] = useState("latest")

  const categories = ["전체", "사료", "간식", "장난감", "침구", "산책용품", "미용용품"]

  const filteredProducts = selectedCategory === "전체" 
    ? products 
    : products.filter((product) => product.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.createdAt) - new Date(a.createdAt)
    } else if (sortBy === "price-asc") {
      return a.price - b.price
    } else if (sortBy === "price-desc") {
      return b.price - a.price
    }
    return 0
  })

  return (
    <div className="store-page">
      <div className="container">
        <div className="store-header">
          <h1 className="store-title">함께 나누기</h1>
          <p className="store-description">강아지 용품 구매로 후원에 참여해보세요</p>
          <p className="store-donation">
            구매 금액의 <strong>10%</strong>가 유기견 보호소에 후원됩니다
          </p>
        </div>

        <div className="filter-section">
          <h2 className="filter-title">필터</h2>
          <div className="filter-grid">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="filter-footer">
            <div className="sort-buttons">
              <button
                className={`filter-button ${sortBy === "latest" ? "active" : ""}`}
                onClick={() => setSortBy("latest")}
              >
                최신순
              </button>
              <button
                className={`filter-button ${sortBy === "price-asc" ? "active" : ""}`}
                onClick={() => setSortBy("price-asc")}
              >
                가격낮은순
              </button>
              <button
                className={`filter-button ${sortBy === "price-desc" ? "active" : ""}`}
                onClick={() => setSortBy("price-desc")}
              >
                가격높은순
              </button>
            </div>
            <p className="filter-count">총 {sortedProducts.length}개 상품</p>
          </div>
        </div>

        <div className="products-grid">
          {sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/store/${product.id}`}>
                <div className="product-image">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="product-img" />
                  ) : (
                    "🎁"
                  )}
                  {product.isNew && <div className="product-badge new">NEW</div>}
                  {product.isDiscount && <div className="product-badge discount">할인</div>}
                </div>
              </Link>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-price">
                  <span className="price-current">₩{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="price-original">₩{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                <div className="donation-info">
                  <p className="donation-text">
                    💝 후원금 ₩{Math.round(product.price * 0.1).toLocaleString()} (10%)
                  </p>
                </div>

                <Link to={`/store/${product.id}`} className="btn btn-primary w-full">
                  상세보기 →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
