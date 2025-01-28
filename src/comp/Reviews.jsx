import React from "react";
import styled from "styled-components";

// Importing Font Awesome for icons
import {FaUserAlt} from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    text: "Great work! The site was always clean and organized.",
    icon: <FaUserAlt />,
  },
  {
    name: "Michael Lee",
    text: "Excellent project delivery on time and within budget.",
    icon: <FaUserAlt />,
  },
  {
    name: "Emily Davis",
    text: "Amazing job, safe and well-managed construction site!",
    icon: <FaUserAlt />,
  },
  {
    name: "Sophia Johnson",
    text: "Very happy with the outcome. Friendly and skilled workers.",
    icon: <FaUserAlt />,
  },
  {
    name: "Michael Lee",
    text: "Excellent project delivery on time and within budget.",
    icon: <FaUserAlt />,
  },
];

const Reviews = () => {
  return (
    <ReviewsContainer className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 py-16">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12 tracking-wide">
        Reviews
      </h2>
      <ReviewsTrack>
        {reviews.concat(reviews).map((review, index) => (
          <CardWrapper key={index}>
            <StyledCard>
              <div className="card-content">
                <IconContainer>{review.icon}</IconContainer>
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
  min-height: 350px;
  overflow: hidden;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ReviewsTrack = styled.div`
  display: flex;
  animation: moveCards 40s linear infinite;

  @keyframes moveCards {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 15px;
  margin-bottom: 20px;
`;

const StyledCard = styled.div`
  width: 350px;
  height: 300px;
  background: linear-gradient(
    135deg,
    #ffd700,
    #000000
  ); /* Golden to black gradient */
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
  background-color: rgba(255, 215, 0, 0.2); /* Subtle golden background */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;

  svg {
    width: 40px;
    height: 40px;
    color: #ffd700; /* Golden icon color */
  }
`;

export default Reviews;
