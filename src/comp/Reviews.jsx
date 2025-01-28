import React from 'react';
import styled from 'styled-components';

// Importing Font Awesome for icons
import { FaUserAlt } from 'react-icons/fa';

const reviews = [
  { name: "John Doe", text: "Great work! The site was always clean and organized.", icon: <FaUserAlt /> },
  { name: "Michael Lee", text: "Excellent project delivery on time and within budget.", icon: <FaUserAlt /> },
  { name: "Emily Davis", text: "Amazing job, safe and well-managed construction site!", icon: <FaUserAlt /> },
  { name: "Sophia Johnson", text: "Very happy with the outcome. Friendly and skilled workers.", icon: <FaUserAlt /> },
  { name: "Michael Lee", text: "Excellent project delivery on time and within budget.", icon: <FaUserAlt /> },
  // Add more reviews as needed...
];

const Reviews = () => {
  return (
    <ReviewsContainer>
      <Title>Reviews</Title>
      <ReviewsTrack>
        {/* Map over the reviews and repeat them to create continuous scrolling */}
        {reviews.concat(reviews).map((review, index) => (
          <CardWrapper key={index}>
            <StyledCard>
              <div className="card-content">
                <IconContainer>
                  {review.icon}
                </IconContainer>
                <h4>{review.name}</h4>
                <p>{review.text}</p>
              </div>
            </StyledCard>
          </CardWrapper>
        ))}
      </ReviewsTrack>
    </ReviewsContainer>
  );
};

const ReviewsContainer = styled.div`
  width: 100%;
  min-height: 350px; /* Increased height for more space */
  overflow: hidden;
  background: linear-gradient(135deg, #000000, #555555);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  padding: 30px 10px; /* Adjusted padding for more space around */
  margin-top: 0;
  display: flex;
  justify-content: center; /* Center the track horizontally */
  flex-direction: column; /* Added to stack content vertically */
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff4081, #ffeb3b);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 20px;
  text-align: center;
`;

const ReviewsTrack = styled.div`
  display: flex;
  animation: moveCards 40s linear infinite; /* Slower continuous horizontal scroll */

  @keyframes moveCards {
    0% {
      transform: translateX(50%); /* Start from the center */
    }
    100% {
      transform: translateX(-50%); /* Move to the left */
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px; /* Added more space around the cards */
  margin-bottom: 20px; /* Space between cards */
`;

const StyledCard = styled.div`
  width: 350px; /* Increased width */
  height: 300px; /* Increased height */
  background: linear-gradient(135deg, rgba(255, 99, 132, 0.8), rgba(255, 159, 64, 0.8));
  border-radius: 15px;
  padding: 25px;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-align: center;
    align-items: center;
  }

  h4 {
    margin: 10px 0;
    font-size: 1.4rem;
    font-weight: bold;
  }

  p {
    font-size: 1.1rem;
    color: #f1f1f1;
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`;

export default Reviews;
