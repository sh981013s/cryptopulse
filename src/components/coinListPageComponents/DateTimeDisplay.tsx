import { useState, useEffect } from "react";
import styled from "styled-components";

const DateTimeContainer = styled.div`
  width: 50%;
  border: 1px solid #3c4269;
  border-radius: 10px;
  padding: 1rem;
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
`;

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <DateTimeContainer>
      {currentDateTime.toLocaleDateString()}{" "}
      {currentDateTime.toLocaleTimeString()}
    </DateTimeContainer>
  );
};

export default DateTimeDisplay;
