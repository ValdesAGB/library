import React from 'react'
import { OffreElements } from '../data'
import { styled } from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { color } from '../untils/color'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

const OffreContainer = styled.div``

const ContentContainer = styled.div`
  text-align: center;
  border-bottom: solid 4px ${(props) => props.color};
  box-shadow: 0 0 10px rgba(101, 93, 93, 0.16);
  padding: 60px 35px;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  @media (max-width: 991px) {
    max-width: 370px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
  }
`

const OffreTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #373053;
  margin-bottom: 25px;
  line-height: 1.5;
`

const OffrePrice = styled.h6`
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: #373053;
  span {
    font-size: 16px;
  }
`

const List = styled.li`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  text-align: center;
  padding: 18px;
  border-bottom: ${(props) =>
    props.id === 'last' ? '' : '1px solid rgba(0, 0, 0, 0.1)'};
  font-family: 'Source Sans Pro', sans-serif;
  color: #8492a6;
`

const DownloadBtn = styled.button`
  border: none;
  background-color: ${(props) => props.color};
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  border-radius: 0;
  padding: 0;
  width: 170px;
  height: 51px;
  line-height: 49px;

  transition: 350ms ease-in-out;
  border-radius: 4px;
  overflow: hidden;

  &:hover {
    background-color: ${color.acceuilBgColor};
  }
`

function Offre() {
  return (
    <React.Fragment>
      <div>
        <OffreContainer className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 ">
            <Slider {...settings}>
              {OffreElements.map(({ id, price, title, borderColor }) => (
                <div className="p-2" key={id}>
                  <ContentContainer color={borderColor}>
                    <OffreTitle>{title}</OffreTitle>
                    <OffrePrice>
                      ${price}
                      <span>/month</span>
                    </OffrePrice>
                    <ul className="pricing-list list-unstyled">
                      <List>crm auto cync</List>
                      <List>click to call back</List>
                      <List>track energy costs </List>
                      <List id="last">predictive dialing </List>
                    </ul>
                    <DownloadBtn color={borderColor}>Télécharger</DownloadBtn>
                  </ContentContainer>
                </div>
              ))}
            </Slider>
          </div>
        </OffreContainer>
      </div>
    </React.Fragment>
  )
}

export default Offre
