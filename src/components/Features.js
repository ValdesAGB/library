import React from 'react'
import { FeaturesElements } from '../data'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'

const Section = styled.section`
  text-align: center;
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
  @media (min-width: 320px) and (max-width: 991px) {
    font-size: 24px;
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
`
const ContentContainer = styled.div`
  text-align: center;
  @media (max-width: 991px) {
    margin: 0 auto 50px auto;
    max-width: 370px;
  }
`

const Content = styled.div`
  padding: 10%;
  cursor: pointer;
  height: 100%;
  box-shadow: ${(props) =>
    props.id !== '2' ? '' : `0 0 40px ${color.boxShadowColor}`};

  transition: box-shadow 0.3s linear;
  &:hover {
    box-shadow: ${(props) =>
      props.id !== '2' ? `0 0 40px ${color.boxShadowColor}` : ''};
  }
`

const ContentTitle = styled.h3`
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 5px;
  text-transform: capitalize;
  color: ${color.sectionTitleColor};
  font-family: ${police.main};
  font-weight: 700;
`

const ContentText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0;
  color: ${color.sectionSubTitleColor};
  font-family: ${police.second};
`

const IconeContainer = styled.div`
  margin-bottom: 10px;
  height: 90px;
`

const BgIcone = styled.div`
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

function Features() {
  return (
    <React.Fragment>
      <Section id="feature">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <SectionTitle>Book Features</SectionTitle>
            <SubTitleSection className="col-12 col-md-8 col-lg-6 col-xxl-5">
              This should be used to tell a story and let your users know a
              little more about your product or service.
            </SubTitleSection>
          </div>
          <div className="row">
            {FeaturesElements.map(({ id, bgIcone, icone, title, text }) => (
              <ContentContainer key={id} className="col-12 col-lg">
                <Content id={id}>
                  <IconeContainer>
                    <BgIcone img={bgIcone}>
                      <img src={icone} alt="icone" />
                    </BgIcone>
                  </IconeContainer>
                  <ContentTitle>{title}</ContentTitle>
                  <ContentText>{text}</ContentText>
                </Content>
              </ContentContainer>
            ))}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Features
