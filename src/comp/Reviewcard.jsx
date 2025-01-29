import React from "react";
import styled from "styled-components";

const Reviewcard = ({imageSrc, title, description}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg" />
        <div className="content">
          <img src={imageSrc} alt={title} className="image" />
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
        <div className="blob" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 330px; /* Increased width by 20px */
    height: 260px; /* Increased height by 20px */
    border-radius: 40px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000000; /* Solid black background */
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 320px; /* Increased width by 20px */
    height: 250px; /* Increased height by 20px */
    z-index: 2;
    background: #000000; /* Solid black background */
    backdrop-filter: none; /* Remove blur */
    border-radius: 40px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .content {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    color: white; /* White text */
    transition: transform 0.3s ease-in-out; /* Smooth hover effect */
  }

  .content:hover {
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  .image {
    width: 90px; /* Reduced width */
    height: 90px; /* Reduced height */
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.6); /* Glow effect */
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
    text-shadow: 2px 2px 6px rgba(255, 215, 0, 0.7); /* Subtle text shadow */
    letter-spacing: 1px; /* Slight letter-spacing */
  }

  .description {
    font-size: 16px;
    color: #fff; /* Lighter text */
    line-height: 1.5;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6); /* Soft text shadow */
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ffd700; /* Yellow color for animation */
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default Reviewcard;
