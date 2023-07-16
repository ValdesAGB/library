import React from 'react'
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
                      <Link href={href}>{title}</Link>
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
