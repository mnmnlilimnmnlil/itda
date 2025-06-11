import React, { useState } from "react"
import { useParams } from "react-router-dom"
import "./ProductDetailPage.css"

const productDetails = {
  1: {
    id: 1,
    name: "프리미엄 사료",
    price: 45000,
    description: "영양가 높은 프리미엄 사료로 아이들의 건강을 지켜주세요",
    isNew: true,
    category: "사료",
    features: ["고단백", "무첨가", "소화잘됨", "영양균형"],
    detailDescription:
      "최고급 재료로 만든 프리미엄 사료입니다. 단백질 함량이 높고 인공 첨가물을 사용하지 않아 아이들의 건강을 지켜줍니다.",
    imageUrl: "https://i.pinimg.com/736x/3a/2b/04/3a2b040017b51edafbf411f0e61e0138.jpg"
  },
  2: {
    id: 2,
    name: "따뜻한 담요",
    price: 25000,
    originalPrice: 30000,
    description: "추운 겨울, 아이들에게 따뜻함을 선물해주세요",
    isDiscount: true,
    category: "침구",
    features: ["보온성", "세탁가능", "부드러움", "내구성"],
    detailDescription: "부드럽고 따뜻한 소재로 만든 담요입니다. 세탁이 가능하고 오래 사용할 수 있습니다.",
    imageUrl: "https://i.pinimg.com/736x/49/cb/d9/49cbd97e19cadb52bf580bf6656dae17.jpg"
  },
  3: {
    id: 3,
    name: "장난감 세트",
    price: 18000,
    description: "재미있는 장난감으로 아이들의 스트레스를 해소해주세요",
    category: "장난감",
    features: ["안전소재", "스트레스해소", "치아건강", "재미"],
    detailDescription:
      "안전한 소재로 만든 다양한 장난감 세트입니다. 아이들의 스트레스 해소와 치아 건강에 도움이 됩니다.",
    imageUrl: "https://i.pinimg.com/736x/25/2a/a6/252aa6e9f277db0fe937bc093db51843.jpg"
  },
  4: {
    id: 4,
    name: "강아지 리드줄",
    price: 35000,
    description: "안전한 산책을 위한 튼튼한 목줄과 리드줄",
    isNew: true,
    category: "산책용품",
    features: ["튼튼함", "길이조절", "편안함", "안전고리"],
    detailDescription: "튼튼한 소재와 안전고리로 제작된 목줄과 리드줄 세트입니다. 길이 조절이 가능해 산책이 더욱 편리합니다.",
    imageUrl: "https://i.pinimg.com/736x/bd/aa/b5/bdaab575a038bc94d92e7165c8e8d291.jpg"
  },
  5: {
    id: 5,
    name: "애견용 간식 세트",
    price: 22000,
    description: "건강한 재료로 만든 맛있는 간식들",
    category: "간식",
    features: ["천연재료", "무방부제", "다양한맛", "소화잘됨"],
    detailDescription: "천연 재료로 만든 다양한 맛의 간식 세트입니다. 방부제를 사용하지 않아 건강하게 급여할 수 있습니다.",
    imageUrl: "https://i.pinimg.com/736x/13/73/42/137342f0a58cebf5a62f18bd02364a3a.jpg"
  },
  6: {
    id: 6,
    name: "애견용 샴푸 세트",
    price: 28000,
    description: "순한 성분의 샴푸로 아이들을 깨끗하게",
    category: "미용용품",
    features: ["저자극", "피부보호", "향기좋음", "거품풍성"],
    detailDescription: "저자극 성분으로 만들어진 샴푸 세트입니다. 풍성한 거품과 좋은 향기로 아이들의 목욕이 즐거워집니다.",
    imageUrl: "https://i.pinimg.com/736x/24/01/3f/24013f5192c04b642422bc0443534b9f.jpg"
  },
  7: {
    id: 7,
    name: "강아지 옷 겨울용",
    price: 32000,
    originalPrice: 40000,
    description: "귀엽고 따뜻한 겨울용 강아지 옷",
    isDiscount: true,
    category: "의류",
    features: ["보온성", "귀여운디자인", "신축성", "세탁가능"],
    detailDescription: "추운 겨울에도 따뜻하게 입을 수 있는 귀여운 겨울용 강아지 옷입니다. 신축성이 좋아 착용이 편리합니다.",
    imageUrl: "https://i.pinimg.com/736x/69/cb/bc/69cbbc909753e7e4c49761c1b29dd9f8.jpg"
  },
  8: {
    id: 8,
    name: "이동장",
    price: 55000,
    description: "여행이나 병원 방문에 필수인 튼튼한 이동장",
    isNew: true,
    category: "이동용품",
    features: ["튼튼함", "통풍잘됨", "휴대간편", "안전잠금"],
    detailDescription: "튼튼한 소재와 안전잠금장치가 있는 이동장입니다. 통풍이 잘 되고 휴대가 간편해 외출 시 유용합니다.",
    imageUrl: "https://i.pinimg.com/736x/b9/94/5b/b9945b6201280b90dc5a49d9a3e99752.jpg"
  },
  9: {
    id: 9,
    name: "치아관리 세트",
    price: 15000,
    description: "구강 건강을 위한 칫솔, 치약, 덴탈껌 세트",
    category: "건강용품",
    features: ["구강청결", "치석제거", "간편사용", "맛있는껌"],
    detailDescription: "칫솔, 치약, 덴탈껌이 포함된 치아관리 세트입니다. 구강 청결과 치석 제거에 효과적입니다.",
    imageUrl: "https://i.pinimg.com/736x/26/de/42/26de4200f43c3e1302e84b3758c3456e.jpg"
  },
}

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = productDetails[Number.parseInt(id)]
  const [quantity, setQuantity] = useState(1)
  // const [isWishlist, setIsWishlist] = useState(false)

  if (!product) {
    return (
      <div className="page-container">
        <div className="container text-center">
          <div className="text-6xl mb-4">🎁</div>
          <h1 className="text-3xl font-bold mb-4">상품을 찾을 수 없습니다</h1>
        </div>
      </div>
    )
  }

  const donationAmount = Math.round(product.price * 0.1)
  const totalPrice = product.price * quantity
  const totalDonation = donationAmount * quantity

  const handleQuantityChange = (value) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value)
    }
  }

  // const handleAddToCart = () => {
  //   alert(
  //     `장바구니에 추가되었습니다!\n상품: ${product.name}\n수량: ${quantity}개\n총 금액: ₩${totalPrice.toLocaleString()}`,
  //   )
  // }

  const handleBuyNow = () => {
    alert(`구매를 진행합니다!\n상품: ${product.name}\n수량: ${quantity}개\n총 금액: ₩${totalPrice.toLocaleString()}`)
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-grid">
          {/* 이미지 섹션 */}
          <div className="product-image-section">
            <div className="product-image">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} className="product-img" />
              ) : (
                "🎁"
              )}
              {product.isNew && <div className="product-badge new">NEW</div>}
              {product.isDiscount && <div className="product-badge discount">할인</div>}
            </div>
          </div>

          {/* 정보 섹션 */}
          <div className="product-info-section">
            <div className="product-header">
              <div>
                <h1 className="product-title">{product.name}</h1>
                <p className="product-description">{product.description}</p>
              </div>
            </div>

            <div className="product-category">
              {product.category}
            </div>

            <div className="product-price-section">
              <div className="price-row">
                {product.originalPrice && (
                  <span className="price-original">₩{product.originalPrice.toLocaleString()}</span>
                )}
                <span className="price-current">₩{product.price.toLocaleString()}</span>
              </div>
              <div className="donation-info">
                <p className="donation-text">
                  💝 구매 금액의 <strong>10%</strong>인 <strong>₩{donationAmount.toLocaleString()}</strong>이 유기견
                  보호소에 후원됩니다
                </p>
              </div>
            </div>

            <div className="product-features">
              <div className="feature-item">
                <span className="feature-icon">🚚</span>
                <span>무료배송</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⏰</span>
                <span>1-3일 내 발송</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <span>품질 보증</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💯</span>
                <span>만족도 보장</span>
              </div>
            </div>

            <div className="quantity-section">
              <label className="quantity-label">수량</label>
              <div className="quantity-controls">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number.parseInt(e.target.value) || 1)}
                  min="1"
                  max="10"
                  className="quantity-input"
                />
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>

            <div className="price-summary">
              <div className="summary-row">
                <span>상품 금액</span>
                <span>₩{totalPrice.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>후원 금액 (10%)</span>
                <span>₩{totalDonation.toLocaleString()}</span>
              </div>
              <div className="summary-total">
                <span>총 결제 금액</span>
                <span>₩{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="purchase-buttons">
              <button className="btn btn-primary w-full text-lg py-3" onClick={handleBuyNow}>
                바로 구매하기
              </button>
            </div>
          </div>
        </div>

        {/* 상품 상세 정보 */}
        <div className="product-detail-section">
          <h2 className="detail-title">상품 상세 정보</h2>
          <p className="detail-description">{product.detailDescription}</p>

          <h3 className="features-title">주요 특징</h3>
          <div className="features-grid">
            {product.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
