import React from "react";
import styled from "styled-components";
import Reviewcard from "./Reviewcard.jsx";
import man from "../avatars/man.png";
import gamer from "../avatars/gamer.png";
import girl from "../avatars/girl.png";
import user from "../avatars/user.png";
import woman1 from "../avatars/woman (1).png";
import woman from "../avatars/woman.png";
import profile2 from "../avatars/profile (2).png";



const reviews = [
  {
    imageSrc: man,
    name: "Michael Lee",
    description:
      "Excellent project delivery on time and within budget. Highly recommend for any construction work!",
  },
  {
    imageSrc: woman1,
    name: "Sarah Johnson",
    description:
      "Professional and reliable team. They delivered my office building with high standards and on schedule.",
  },
  {
    imageSrc: gamer,
    name: "John Smith",
    description:
      "Great experience working with them. The quality of construction and attention to detail was exceptional.",
  },
  {
    imageSrc: woman,
    name: "Emily Davis",
    description:
      "A trusted partner for our industrial projects. They completed the work without any issues and with great efficiency.",
  },
  {
    imageSrc: user,
    name: "David Wilson",
    description:
      "We’ve had multiple projects with them, and they always deliver top-notch results. Always stay on top of deadlines.",
  },
  {
    imageSrc: girl,
    name: "Daniel Brown",
    description:
      "The construction team was highly skilled, and the finished product exceeded our expectations. Highly recommend their services.",
  },
  {
    imageSrc: profile2,
    name: "Lucas Harris",
    description:
      "One of the best teams I've worked with in terms of construction expertise and project management. Highly recommended for large-scale projects.",
  },
  {
    imageSrc: man,
    name: "Michael Lee",
    description:
      "Excellent project delivery on time and within budget. Highly recommend for any construction work!",
  },
  {
    imageSrc: woman1,
    name: "Sarah Johnson",
    description:
      "Professional and reliable team. They delivered my office building with high standards and on schedule.",
  },
  {
    imageSrc: gamer,
    name: "John Smith",
    description:
      "Great experience working with them. The quality of construction and attention to detail was exceptional.",
  },
  {
    imageSrc: woman,
    name: "Emily Davis",
    description:
      "A trusted partner for our industrial projects. They completed the work without any issues and with great efficiency.",
  },
  {
    imageSrc: user,
    name: "David Wilson",
    description:
      "We’ve had multiple projects with them, and they always deliver top-notch results. Always stay on top of deadlines.",
  },
  {
    imageSrc: girl,
    name: "Daniel Brown",
    description:
      "The construction team was highly skilled, and the finished product exceeded our expectations. Highly recommend their services.",
  },
  {
    imageSrc: profile2,
    name: "Lucas Harris",
    description:
      "One of the best teams I've worked with in terms of construction expertise and project management. Highly recommended for large-scale projects.",
  },
];

const Reviews = () => {
  return (
    <ReviewsContainer>
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12 tracking-wide ">
        R  e  v  i  e  w  s
      </h2>
      <ReviewsTrack>
        {reviews.concat(reviews).map((review, index) => (
          <CardWrapper key={index}>
            <Reviewcard
              imageSrc={review.imageSrc}
              title={review.name}
              description={review.description}
            />
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(69, 61, 17, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(69, 61, 17, 1) 100%
  );
  color: white;
`;

const ReviewsTrack = styled.div`
  display: flex;
  animation: moveCards 40s linear infinite;

  @keyframes moveCards {
    0% {
      transform: translateX(0%);
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

export default Reviews;
