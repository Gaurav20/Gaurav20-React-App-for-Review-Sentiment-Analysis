// src/components/ReviewList.js
import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter';

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviewsData.json')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <h2>{review.reviewer_name}</h2>
          <p>Date: {review.date}</p>
          <p>Rating: {review.rating_review_score} / {review.out_of}</p>
          <ReviewHighlighter content={review.content} analytics={review.analytics} />
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
