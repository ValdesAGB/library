import React, { useEffect, useRef, useState } from 'react'
import { AboutElements } from '../data'
import { color } from '../untils/color'
import { police } from '../untils/police'
import { styled } from 'styled-components'

const Section = styled.div`
  @media (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  padding-top: 100px;
  padding-bottom: 100px;
`

const SectionTitle = styled.h2`
  color: ${color.sectionTitleColor};
  font-family: ${police.main};
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 10px;
  text-transform: none;
  @media (max-width: 991px) {
    text-align: center;
  }
  @media (min-width: 320px) and (max-width: 991px) {
    font-size: 24px;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 36px;
  }
  font-size: 42px;
`

const SubTitleSection = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 0;
  padding: 0;
  color: ${color.sectionSubTitleColor};
  font-family: ${police.second};
  @media (max-width: 991px) {
    text-align: center;
  }
`

const Level = styled.div`
  font-family: ${police.main};
  color: ${color.sectionTitleColor};
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  text-transform: capitalize;
`

const Content = styled.div`
  border-radius: 5px;
  border-bottom: 4px solid ${(props) => props.color};
  box-shadow: 0 0 40px ${color.boxShadowColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 180px;
`

const Icone = styled.div`
  margin-bottom: 20px;
`

function About() {
  const AnimatedValue = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0)
    const valueRef = useRef(null)

    useEffect(() => {
      let animationFrame
      let startTimestamp

      const getAnimationDuration = () => {
        return 2000
      }

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = timestamp - startTimestamp
        const duration = getAnimationDuration()

        let stepValue
        if (value < 5) {
          stepValue = parseFloat((value * (progress / duration)).toFixed(1))
        } else {
          stepValue = Math.round((value / duration) * progress)
        }

        if (stepValue <= value) {
          setDisplayValue(stepValue)
          animationFrame = requestAnimationFrame(step)
        } else {
          setDisplayValue(value)
        }
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrame = requestAnimationFrame(step)
          }
        })
      })

      observer.observe(valueRef.current)

      return () => {
        cancelAnimationFrame(animationFrame)
        observer.disconnect()
      }
    }, [value])

    return <Level ref={valueRef}>{displayValue.toLocaleString('en-US')}</Level>
  }

  return (
    <React.Fragment>
      <Section id="about">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-6">
              <SectionTitle>About The Book</SectionTitle>
              <SubTitleSection>
                After all, as described in Web Design Trends vision dominates.
                power of simple and communication each make a lasting
                impression.
              </SubTitleSection>
              <div className="row">
                {AboutElements.map(
                  ({ id, icone, level, designation, borderBottomColor }) => (
                    <div key={id} className="col my-5">
                      <Content color={borderBottomColor}>
                        <div>
                          <Icone>{icone}</Icone>
                          <AnimatedValue value={level} />
                          <Level>{designation}</Level>
                        </div>
                      </Content>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-12 col-sm-8  col-lg-6">
              <img
                src="https://landing.zytheme.com/ebookyo/assets/images/cover/book-2.png"
                alt="books"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default About
