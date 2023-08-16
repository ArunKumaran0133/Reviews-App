import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  getReview = reviewsList => {
    const {activeReview} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReview
    ]

    return (
      <div className="review-card">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="user-name">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  toLeft = () => {
    const {activeReview} = this.state
    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  toRight = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props

    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    return (
      <div className="main-bg-container">
        <button
          className="arrow-btn"
          type="button"
          onClick={this.toLeft}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          className="arrow-btn"
          type="button"
          onClick={this.toRight}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
