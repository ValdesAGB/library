import React, { useState } from 'react'
import { FAQElements } from '../data'
import { styled } from 'styled-components'

const ContentContainer = styled.div`
  border-left: solid 4px ${(props) => props.color};
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 0 20px rgba(101, 93, 93, 0.16);
  transition: all 0.5s ease;
`

const Question = styled.div`
  padding: 30px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: #373053;
  font-weight: 700;
  line-height: 20px;
  text-transform: capitalize;
  position: relative;
  display: block;
  transition: all 0.5s ease;
  @media (max-width: 991px) {
    padding: 15px 25px 15px 15px;
    font-size: 16px;
    line-height: 1.8;
  }
`

const Icone = styled.i`
  transform: rotate(180deg);
  transition: all 0.3s ease;
`

const Answer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Source Sans Pro', sans-serif;
  padding: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #8492a6;
  transition: all 0.5s ease;
  @media (max-width: 991px) {
    padding: 15px;
  }
`

const QuestionContainer = styled.div`
  text-align: left;
`

const Content = styled.div`
  transition: all 0.5s ease;
`

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleQuestion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <React.Fragment>
      <QuestionContainer>
        {FAQElements.map(({ id, question, answer, leftBorderColor }) => (
          <ContentContainer
            key={id}
            className={` ${activeIndex === id ? 'active' : ''}`}
            color={leftBorderColor}
          >
            <Question onClick={() => toggleQuestion(id)}>{question}</Question>

            {activeIndex === id && (
              <Content>
                <Answer>{answer}</Answer>
              </Content>
            )}
          </ContentContainer>
        ))}
      </QuestionContainer>
    </React.Fragment>
  )
}

export default FAQ
