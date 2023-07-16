import React, { useEffect, useState } from 'react'
import { NavMenu, logoLight, logoDark } from '../data'
import { styled } from 'styled-components'
import DownloadBtn from './DownloadBtn'
import { police } from '../untils/police'
import { color } from '../untils/color'
import { slideDownAnimation } from '../untils/animations'

const Navigation = styled.nav`
  @media (min-width: 1400px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`

const ElementContainer = styled.div`
  @media (max-width: 575px) {
    padding: 0;
  }
`
const LogoContainer = styled.a`
  @media (max-width: 400px) {
    width: 70%;
    padding: 8% 5%;
  }
  @media (min-width: 401px) and (max-width: 767px) {
    padding: 5%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 2%;
  }
`

const ToggleBtn = styled.span`
  padding: 0;
  border: 0;
  @media (max-width: 400px) {
    padding: 8% 5%;
  }
  @media (min-width: 401px) and (max-width: 767px) {
    padding: 5%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    padding: 2%;
  }
`

const ListContainer = styled.div`
  @media (max-width: 991px) {
    background-color: white;
    padding-bottom: 5%;
  }
`

const List = styled.ul`
  text-align: center;
  margin-left: 20%;
  margin-right: 5%;
  @media (max-width: 991px) {
    margin: 0;
    text-align: start;
    padding: 0 15px;
  }
  @media (min-width: 992px) {
    margin-left: 5%;
    margin-right: 2%;
  }
  @media (min-width: 1200px) {
    margin-left: 20%;
    margin-right: 5%;
  }
  @media (min-width: 401px) and (max-width: 991px) {
    padding: 15px;
  }
`

const BouttonContainer = styled.div`
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`

function Header() {
  const [onTop, setOnTop] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop
      setOnTop(top === 0 ? true : false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const Section = styled.section`
    position: fixed;
    right: 0;
    left: 0;
    z-index: 10;
    animation: ${slideDownAnimation} 0.8s ease-in-out;
    background-color: ${onTop ? 'transparent' : 'white'};
  `

  const Toogle = styled.span`
    color: ${onTop ? 'white' : color.acceuilBgColor};
    font-size: 2em;
  `

  const Link = styled.a`
    font-family: ${police.main};
    font-size: 16px;
    text-transform: capitalize;
    font-weight: 500;
    line-height: 100px;
    color: ${onTop ? color.ctaBtnColor : color.main};
    padding: 0;
    position: relative;
    display: block;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${onTop ? color.ctaBtnColor : color.main};
    }
    &:focus {
      color: ${onTop ? color.ctaBtnColor : color.main};
    }

    @media (max-width: 991px) {
      margin-right: 0;
      padding: 15px 10px;
      color: ${color.sectionTitleColor};
      line-height: 1;
      &:hover {
        color: ${color.main};
      }
      &:focus {
        color: ${color.main};
      }
    }
  `

  const BouttonStyle = styled.button`
    background-color: ${onTop ? 'transparent' : color.footerLinkHoverColor};
    color: ${color.ctaBtnColor};
    width: 175px;
    padding: 0 17px;
    font-family: ${police.main};
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
    border: ${onTop ? 'solid 1px white' : 'none'};
    height: 51px;
    line-height: 49px;
    border-radius: 4px;
    overflow: hidden;
    transition: background-color 350ms ease-in-out, border 350ms ease-in-out,
      color 500ms 150ms;
    &:hover {
      color: ${color.ctaBtnColor};
      border: ${onTop ? `solid 1px ${color.footerLinkHoverColor}` : 'none'};
      background-color: ${onTop
        ? color.footerLinkHoverColor
        : color.acceuilBgColor};
    }

    @media (max-width: 991px) {
      background-color: ${color.footerLinkHoverColor};
      width: 100%;
      border: none;
      text-align: center;
      line-height: 40px;
      font-size: 13px;
      margin-right: 15px;
      height: 40px;
    }
  `

  return (
    <React.Fragment>
      <Section className="row">
        <div>
          <div className="container p-0">
            <Navigation className="navbar navbar-expand-lg">
              <ElementContainer className="container-fluid">
                <LogoContainer className="" href="/">
                  <img
                    src={onTop ? logoLight : logoDark}
                    alt="Ebookyo Logo"
                    className="w-100"
                  />
                </LogoContainer>
                <ToggleBtn
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <Toogle className="bi bi-list"></Toogle>
                </ToggleBtn>

                <ListContainer
                  className="collapse navbar-collapse  "
                  id="navbarNav"
                >
                  <List className="navbar-nav">
                    {NavMenu.map(({ id, title, href }) => (
                      <li className="nav-item " key={id}>
                        <Link className="nav-link" href={href}>
                          {title}
                        </Link>
                      </li>
                    ))}
                  </List>
                  <BouttonContainer>
                    <DownloadBtn BouttonStyle={BouttonStyle} />
                  </BouttonContainer>
                </ListContainer>
              </ElementContainer>
            </Navigation>
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Header
/**
 * Pour links
 * /*Retravaillé cette partie du code
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: white;
      transition: width 300ms;
    }
    &:hover::after {
      width: ${(props) => (props.ids === 'home' ? 0 : '100%')};
      border-bottom: solid 4px ${onTop ? 'white' : 'black'};
    }*/
