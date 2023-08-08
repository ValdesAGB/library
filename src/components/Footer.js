import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NavMenu, Networks, logoLight } from '../data'
import Copyright from './Copyright'
import { color } from '../untils/color'
import { police } from '../untils/police'

const FooterSection = styled.footer`
  padding-top: 250px;
  position: relative;
  background-color: ${color.footerBgColor};
  margin-top: -200px;
  font-family: ${police.second}
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
`

const Container = styled.div`
  padding: 65px 0;
  @media (max-width: 991px) {
    text-align: center;
    padding: 35px 0;
  }
`

const LogoContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  img {
    @media (min-width: 992px) and (max-width: 1199px) {
      width: 100%;
    }
  }
`

const List = styled.ul`
  text-align: center;
  @media (max-width: 991px) {
    margin-top: ${(props) => (props.id === 'icone' ? '0' : '20px')};
    margin-bottom: 20px;
  }
`

const ListItem = styled.li`
  margin: ${(props) => (props.id === 'icone' ? '0 10px' : '0 30px')};
  @media (max-width: 991px) {
    margin: 0 10px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    margin: ${(props) => (props.id === 'icone' ? '0 5px' : '0 30px')};
  }
`

const Link = styled.a`
  text-decoration: none;
  font-size: 18px;
  line-height: 42px;
  color: ${color.ctaBtnColor};
  font-weight: 500;
  font-family: ${police.second};
  padding: 0;
  transition: 300ms ease-in-out;
  text-transform: capitalize;
  &:hover {
    color: ${color.footerLinkHoverColor};
  }
`

const CopyrightContainer = styled.div`
  margin-top: 3%;
`

function Footer() {
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
  return (
    <React.Fragment>
      <FooterSection className="row">
        <div>
          <Container className="container">
            <div className="row ">
              <LogoContainer className="col-12 col-lg-3 ">
                <a className="logo" href="/">
                  <img src={logoLight} alt="Ebookyo Logo" />
                </a>
              </LogoContainer>
              <div className="col-12 col-lg-7 ">
                <List className="list-inline ">
                  {NavMenu.slice(0, 5).map(({ id, title, href }) => (
                    <ListItem className="list-inline-item" key={id}>
                      <Link
                        href={href}
                        onClick={(e) => handleClick(e, id, href)}
                      >
                        {title}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </div>
              <div className="col-12 col-lg-2 ">
                <List className="list-inline " id={'icone'}>
                  {Networks.slice(0, 5).map(({ id, icone }) => (
                    <ListItem
                      className="list-inline-item"
                      key={id}
                      id={'icone'}
                    >
                      <Link href="#">
                        <i className={`bi bi-${icone}`} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
            <CopyrightContainer>
              <Copyright />
            </CopyrightContainer>
          </Container>
        </div>
      </FooterSection>
    </React.Fragment>
  )
}

export default Footer
