import React from 'react';
import styled from 'styled-components';

const Card = ({ name, text }) => {
  return (
    <StyledCard className="card">
      <div className="card-content">
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 250px;
  height: 300px;
  background: linear-gradient(135deg, rgba(255, 99, 132, 0.8), rgba(255, 159, 64, 0.8));
  border-radius: 15px;
  padding: 20px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: #f1f1f1;
  }
`;

export default Card;
