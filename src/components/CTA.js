import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'

const Section = styled.section`
  position: relative;
  z-index: 2;
`

const Container = styled.div`
  @media (max-width: 991px) {
    padding: 0;
  }
`

const Content = styled.div`
  background-image: url(https://landing.zytheme.com/ebookyo/assets/images/background/bg-cta.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${color.ctaBgColor};
  padding: 50px;
  border-radius: 20px;
  @media (max-width: 991px) {
    padding: 10px;
  }
`
const ImageContainer = styled.div`
  background-color: ${color.ctaCoverBgColor};
  @media (max-width: 767px) {
    text-align: center;
  }
`

const Image = styled.img`
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
`

const Title = styled.h3`
  color: ${color.ctaBtnColor};
  font-size: 30px;
  line-height: 45px;
  margin-bottom: 30px;
  font-family: ${police.main};
  font-weight: 700;
  margin: 0 0 28px;
  @media (max-width: 991px) {
    font-size: 28px;
    padding: 0;
    line-height: 35px;
    text-align: center;
    margin-top: 10%;
    margin-bottom: 10%;
  }
`

const Formulaire = styled.div``

const Input = styled.input`
  height: 50px;
  padding-left: 24px;
  padding-right: 24px;
  color: ${color.sectionSubTitleColor};
  border-radius: 0 !important;
  font-family: ${police.second};
  &::placeholder {
    color: ${color.sectionSubTitleColor};
    font-family: ${police.second};
  }
  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
    width: calc(100% - 120px);
  }
`

const Button = styled.button`
  padding: 3px 17px;
  border-radius: 0;
  z-index: 2;
  background-color: ${color.downloadBtnBgColor};
  color: ${color.ctaBtnColor};
  font-family: ${police.main};
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  border: none;
`

function CTA() {
  return (
    <React.Fragment>
      <Section>
        <Container className="container">
          <Content>
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-4">
                <ImageContainer>
                  <Image
                    src="https://landing.zytheme.com/ebookyo/assets/images/cover/book-cover-2.png"
                    alt="books"
                  />
                </ImageContainer>
              </div>
              <div className="col-12 col-md-7">
                <Title>
                  Want To Read This book ? <br /> Get A Free Preview.
                </Title>
                <Formulaire className="input-group mb-3">
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Enter E-mail Address"
                  />
                  <Button>Download</Button>
                </Formulaire>
              </div>
            </div>
          </Content>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default CTA
