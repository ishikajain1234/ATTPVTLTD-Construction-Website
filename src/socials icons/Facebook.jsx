import React from "react";
import styled from "styled-components";

const Facebook = () => {
  const handleClick = () => {
    window.open("https://www.facebook.com", "_blank", "noopener,noreferrer");
  };
  return (
    <StyledWrapper>
      <button className="Btn" onClick={handleClick}>
        <span className="svgContainer">
          <svg
            viewBox="0 0 320 512"
            height="1.3em"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIcon"
            fill="white"
          >
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
        <span className="BG" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    /* overflow: hidden; */
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #1877f2;
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    border: 1px solid rgba(230, 230, 230, 0.466);
    background-color: rgba(204, 204, 204, 0.466);
    backdrop-filter: blur(4px);
  }
`;

export default Facebook;
