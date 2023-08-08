import React from 'react'
import { color } from '../untils/color'
import { police } from '../untils/police'
import { styled } from 'styled-components'
import { AuthorElements } from '../data'

const Section = styled.section`
  background-color: ${color.authorSectionBgColor};
  @media (max-width: 767px) {
    padding-top: 60px;
    padding-bottom: 60px;
    text-align: center;
  }
  padding-top: 100px;
  padding-bottom: 100px;
`

const Container = styled.div`
  @media (max-width: 575px) {
    padding: 0;
  }
`

const CoverContainer = styled.div`
  margin-bottom: 30px;
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
`

const ContentContainer = styled.div`
  margin-bottom: 30px;
`

const Content = styled.div`
  border-radius: 5px;
  border-bottom: 4px solid ${(props) => props.color};
  box-shadow: 0 0 40px ${color.boxShadowColor};
  padding: 30px 30px 30px 20px;
  min-height: 150px;
  background-color: white;
`

const ContentTitle = styled.h3`
  font-weight: 700;
  margin: 28px 0 30px 0;
  color: ${color.sectionTitleColor};
  font-family: ${police.main};
  @media (max-width: 767px) {
    font-size: 24px;
  }
  font-size: 20px;
`
const Grade = styled.div`
  font-family: ${police.main};
  color: ${color.sectionTitleColor};
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 5px;
`
const Since = styled.div`
  color: ${(props) => props.color};
  font-size: 15px;
  line-height: 17px;
  margin-bottom: 10px;
  font-family: ${police.second};
  font-weight: 400;
`
const Description = styled.div`
  font-size: 16px;
  font-family: ${police.second};
  font-weight: 400;
  color: ${color.sectionSubTitleColor};
  line-height: 1.5;
`

function Author() {
  return (
    <React.Fragment>
      <Section id="author">
        <Container className="container ">
          <div className="">
            <div className="row align-items-center">
              <CoverContainer className="col-12 col-lg  p-0">
                <img
                  src="https://landing.zytheme.com/ebookyo/assets/images/cover/author.png"
                  alt="author"
                  className="w-100"
                />
              </CoverContainer>
              <div className="col-12 col-lg">
                <SectionTitle>À Propos de l'Auteur</SectionTitle>
                <SubTitleSection>
                  L'auteur s'appelle Herry Khan. Né en 1930, il pratique le vol
                  à voile depuis plus de cinquante ans. Avec l'insigne C d'or et
                  deux diamants, il a piloté une centaine de types de planeurs
                  différents, dont vingt de ceux décrits dans cet ouvrage.
                </SubTitleSection>
                <div className="row">
                  <ContentTitle>Parcours Scolaire</ContentTitle>
                  {AuthorElements.map(
                    ({ id, grade, since, description, borderBottomColor }) => (
                      <ContentContainer key={id} className="col-12 col-sm">
                        <Content color={borderBottomColor}>
                          <div>
                            <Grade>{grade}</Grade>
                            <Since color={borderBottomColor}>
                              Depuis {since}
                            </Since>
                            <Description>{description}</Description>
                          </div>
                        </Content>
                      </ContentContainer>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Author
