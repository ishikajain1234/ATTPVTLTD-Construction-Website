import React from "react";
import styled from "styled-components";

const Card = ({title, description, iconSrc}) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="box">
          <img className="icon" src={iconSrc} alt={`${title} icon`} />
          <span className="title text-yellow-300">{title}</span>
          {/* Only show description on larger screens */}
          <div className="description">
            <span>{description}</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    color: white;
    position: relative;
    font-family: sans-serif;
  }

  .container .box {
    width: 18em;
    height: 23em;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.222);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border-radius: 0.7rem;
    transition: all ease 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container .box .icon {
    width: 40px; /* Adjust size of icon */
    height: 40px;
    margin-bottom: 1rem; /* Adjust spacing between icon and title */
  }

  .container .box .title {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-align: center;
  }

  .container .box div span {
    font-size: 1rem;
    font-weight: 300;
    text-align: center;
  }

  .container .box div span:nth-child(3) {
    font-weight: 500;
    margin-right: 0.2rem;
  }

  /* Golden glow shadow on hover */
  .container .box:hover {
    box-shadow: 0px 0px 20px 5px rgba(255, 215, 0, 0.8); /* Golden glow shadow */
    border: 1px solid rgba(255, 215, 0, 0.8); /* Match shadow color */
  }

  /* Media Query for smaller screens (mobile) */
  @media (max-width: 650px) {
    .container .box {
      width: 10em; /* Smaller card width for mobile */
      height: 12em; /* Smaller height for mobile */
      padding: 0.5rem; /* Adjust padding for mobile */
    }

    .container .box .title {
      font-size: 0.8rem; /* Minimized title font size */
    }

    .container .box .description {
      display: none; /* Hide description on mobile */
    }
  }
`;

export default Card;
