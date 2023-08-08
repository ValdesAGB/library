import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import DownloadBtn from './DownloadBtn'
import { police } from '../untils/police'

const Section = styled.section`
  background-color: ${color.acceuilBgColor};
  text-align: center;
  @media (max-width: 767px) {
    padding: 150px 0;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    padding-top: 190px;
    padding-bottom: 160px;
  }
  padding-top: 200px;
  padding-bottom: 200px;
`

const Title = styled.h1`
  color: ${color.ctaBtnColor};
  font-family: ${police.main};
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 20px;
  text-transform: none;
  @media (max-width: 767px) {
    font-size: 36px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 32px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 40px;
  }
  font-size: 46px;
`

const SubTitle = styled.p`
  color: ${color.ctaBtnColor};
  font-family: ${police.second};
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 42px;
`

const Br = styled.br`
  @media (max-width: 767px) {
    display: none;
  }
`
function Accueil() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <Title>
            Il n'y a pas d'ami plus <Br /> Loyal qu'un livre.
          </Title>
          <div className="row justify-content-center">
            <SubTitle className="col-12 col-md-8 col-xl-6">
              nous sommes présents sur le marché du développement web depuis
              2000 et n'avons cessé de depuis lors. Un studio de design a été
              fondé à Londres et a élargi nos services.
            </SubTitle>
          </div>
          <DownloadBtn />
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Accueil
