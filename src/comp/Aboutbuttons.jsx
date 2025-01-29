import React from "react";
import styled from "styled-components";

const Aboutbuttons = ({text}) => {
  return (
    <StyledWrapper>
      <button className="neon-button">{text}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .neon-button {
    position: relative;
    padding: 0.75em 1.5em;
    border-radius: 0.625em;
    border: 2px solid #ffd700; /* Golden border */
    font-size: 0.938em;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.125em;
    background: transparent;
    color: #fff; /* Black text */
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.3s ease-in-out;
  }

  .neon-button:hover {
    background: rgba(255, 215, 0, 0.1); /* Light golden background on hover */
    box-shadow: 0 0 40px 10px rgba(255, 215, 0, 0.5); /* Golden glow on hover */
    color: #fff; /* Keep black text on hover */
  }

  .neon-button::before {
    content: "";
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: linear-gradient(
      90deg,
      transparent,
      #ffd700,
      transparent
    ); /* Golden shine */
    box-shadow: 0 0 50px 30px #ffd700; /* Golden glow */
    transform: skewX(-20deg);
    transition: all 0.5s ease-in-out;
  }

  .neon-button:hover::before {
    animation: neon-shine 0.6s 0s linear;
  }

  @keyframes neon-shine {
    from {
      opacity: 0;
      left: 0%;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
      left: 100%;
    }
  }

  .neon-button:active {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 transparent;
    transition: all 0.2s ease-in;
  }
`;

export default Aboutbuttons;
