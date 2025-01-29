import React from "react";
import styled from "styled-components";

const Project = ({imgSrc, title, description}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image">
          <img src={imgSrc} alt={title} className="img-product" />
        </div>
        <span className="title">{title}</span>
        <p className="description">{description}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    background: #000000;
    width: 250px;
    height: 350px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 120ms;
    overflow: hidden;
    box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .title {
    font-size: 20px;
    font-weight: 900;
    color: #ffd700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
    z-index: 2;
  }

  .image {
    width: 120px;
    height: auto;
    transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
    z-index: 1;
  }

  .description {
    font-size: 18px;
    color: #fff;
    opacity: 0;
    position: absolute;
    width: 80%;
    text-align: center;
    transition: opacity 0.5s ease-in-out;
    z-index: 3;
  }

  .card:hover .image {
    width: 120px;
    height: auto;
    animation: none;
    transform: rotate(15deg) translate(-35%, -25%);
    filter: blur(10px);
  }

  .card:hover .title {
    transform: rotate(15deg) translate(-35%, -25%);
    filter: blur(5px);
  }

  .card:hover .description {
    opacity: 1;
  }
`;

export default Project;
