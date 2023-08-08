import React, { useEffect, useState } from 'react'
import { NavMenu, logoLight, logoDark } from '../data'
import { styled } from 'styled-components'
import DownloadBtn from './DownloadBtn'
import { police } from '../untils/police'
import { color } from '../untils/color'
import { slideDownAnimation } from '../untils/animations'

const Navigation = styled.nav`
  @media (max-width: 1199px) {
    padding: 0;
  }
`

const ElementContainer = styled.div`
  @media (max-width: 575px) {
    padding: 0;
  }
`
const LogoContainer = styled.a`
  padding: 20px;

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 10px;
  }

  img {
    @media (max-width: 425px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 100%;
    }
  }
`

const ToggleBtn = styled.span`
  border: 0;

  padding: 20px;

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 10px;
  }
`

const ListContainer = styled.div`
  @media (max-width: 1199px) {
    background-color: white;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    margin-top: 10px;
  }
`

const List = styled.ul`
  text-align: center;

  @media (max-width: 1199px) {
    margin: 0;
    text-align: start;
    padding: 0 15px;
  }

  @media (min-width: 1200px) {
    margin-left: 20px;
    margin-right: 5px;
  }
  @media (min-width: 401px) and (max-width: 991px) {
    padding: 15px;
  }
`

const BouttonContainer = styled.div`
  text-align: center;
  @media (max-width: 767px) {
    padding: 20px 0;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 10px;
    margin-left: 15px;
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

  const [headerHeight, setHeaderHeight] = useState(20) // Hauteur par défaut pour les grands écrans
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Fonction pour mettre à jour la hauteur de l'en-tête en fonction de la taille de l'écran
    const updateHeaderHeight = () => {
      const screenWidth = window.innerWidth
      setWindowWidth(screenWidth) // Met à jour la largeur de l'écran dans l'état
    }

    // Ajoutez un écouteur d'événement pour détecter les changements de taille d'écran
    window.addEventListener('resize', updateHeaderHeight)

    // Nettoyage : supprimez l'écouteur lors de la suppression du composant
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  useEffect(() => {
    // Met à jour la hauteur de l'en-tête en fonction de la largeur de l'écran actuelle
    if (windowWidth < 992) {
      setHeaderHeight(50)
    } else if (windowWidth >= 992 && windowWidth < 1200) {
      setHeaderHeight(100)
    } else {
      setHeaderHeight(80)
    }
  }, [windowWidth])

  const handleClick = (event, targetId, targetHref) => {
    event.preventDefault()

    if (targetHref === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition - headerHeight

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

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

    @media (max-width: 1199px) {
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

    @media (max-width: 1199px) {
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
            <Navigation className="navbar navbar-expand-xl">
              <ElementContainer className="container-fluid">
                <LogoContainer
                  className="col-8 col-md-5 col-xl-3 col-xxl-3"
                  href="/"
                >
                  <img src={onTop ? logoLight : logoDark} alt="Ebookyo Logo" />
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
                  <List className="navbar-nav col justify-content-end">
                    {NavMenu.map(({ id, title, href }) => (
                      <li className="nav-item " key={id}>
                        <Link
                          className="nav-link"
                          href={href}
                          onClick={(e) => handleClick(e, id, href)}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </List>
                  <BouttonContainer>
                    <div className="row justify-content-center justify-content-md-start">
                      <div className="col-8 col-md-4">
                        <DownloadBtn BouttonStyle={BouttonStyle} />
                      </div>
                    </div>
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
