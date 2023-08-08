import React from 'react'
import { CustomersElements } from '../data'
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
  text-align: left;
  @media (max-width: 991px) {
    margin: 0 auto 30px auto;
  }
`

const Content = styled.div`
  padding: 40px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 40px ${color.boxShadowColor};
  height: 100%;
  border-bottom: 4px solid ${(props) => props.color};
  transition: all 300ms ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 991px) {
    max-width: 370px;
    padding: 20px;
    margin: auto;
  }
`

const ContentFooter = styled.h3`
  margin-top: 20px;
  font-family: ${police.main};
`

const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${color.sectionSubTitleColor};
  font-weight: 400;
  font-family: ${police.second};
  i {
    color: ${(props) => props.color};
    font-size: 50px;
  }
`

const ContentName = styled.p`
  font-family: ${police.main};
  color: ${color.sectionTitleColor};
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-transform: capitalize;
  padding-top: 5px;
  margin-bottom: -5px;
`

function Customers() {
  return (
    <React.Fragment>
      <Section id="testimonials">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <SectionTitle>Témoignages Clients</SectionTitle>
            <SubTitleSection className="col-12 col-md-8 col-lg-6">
              Elle doit être utilisée pour raconter une histoire et permettre à
              vos utilisateurs d'en savoir un peu plus sur votre produit ou
              service. Quels sont les avantages que vous pouvez leur apporter ?{' '}
            </SubTitleSection>
          </div>
          <div className="row">
            {CustomersElements.map(
              ({ id, text, name, cover, star, borderBottomColor }) => (
                <ContentContainer key={id} className="col-12 col-lg">
                  <Content color={borderBottomColor}>
                    <ContentText color={borderBottomColor}>
                      <i className="bi bi-quote" />
                      <br />
                      {text}
                    </ContentText>
                    <ContentFooter>
                      <div className="row justify-content-end ">
                        <div className="col-10">
                          <div className=" row justify-content-center align-items-center">
                            <div className="col-3 col-lg-4">
                              <img src={cover} alt={name} />
                            </div>
                            <div className="col-8 offset-1 offset-lg-0">
                              <ContentName>{name}</ContentName>
                              <div>
                                <img src={star} alt={name} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ContentFooter>
                  </Content>
                </ContentContainer>
              )
            )}
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Customers
