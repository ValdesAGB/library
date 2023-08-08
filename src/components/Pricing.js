import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'
import FAQ from './FAQ'
import Offre from './Offre'

const Section = styled.section`
  text-align: center;
`

const Container = styled.div`
  padding-top: 80px;
  @media (max-width: 767px) {
    padding-bottom: 60px;
  }
  padding-bottom: 100px;
`

const SectionHead = styled.div`
  margin-bottom: 5%;
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
  @media (min-width: 992px) and (max-width: 1199px) {
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
const OffreContainer = styled.div`
  @media (max-width: 575px) {
    padding: 0;
    margin-top: 10%;
    margin-bottom: 20%;
  }
  @media (min-width: 576px) and (max-width: 991px) {
    padding: 0;
    margin-top: 10%;
    margin-bottom: 10%;
  }
`

const FAQContainer = styled.div`
  @media (max-width: 767px) {
    padding: 0;
  }
`
function Pricing() {
  return (
    <React.Fragment>
      <Section id="pricing">
        <Container className="container border-top">
          <SectionHead className="row justify-content-center ">
            <SectionTitle>Notre Meilleur Plan Tarifaire</SectionTitle>
            <SubTitleSection className="col-12 col-lg-6">
              Elle doit être utilisée pour raconter une histoire et permettre à
              vos utilisateurs d'en savoir un peu plus sur votre produit ou
              service. Quels sont les avantages que vous pouvez leur apporter ?
            </SubTitleSection>
          </SectionHead>
          <div className="row align-items-center">
            <OffreContainer className="col-12 col-lg-6">
              <Offre />
            </OffreContainer>
            <FAQContainer className="col-12 col-lg-6">
              <FAQ />
            </FAQContainer>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Pricing
