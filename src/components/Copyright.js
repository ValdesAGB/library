import React from 'react'
import { styled } from 'styled-components'
import { police } from '../untils/police'
import { color } from '../untils/color'

const date = new Date()

const Section = styled.section`
  border-top: 1px solid ${color.copyrightBorderColor};
  padding-top: 50px;
`

const Container = styled.div`
  text-align: center;
  font-family: ${police.main};
  font-size: 14px;
  font-weight: 400;
  color: ${color.copyrightColor};
  text-transform: capitalize;
  line-height: 1.5;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: all 500ms;
    &:hover {
      color: ${color.footerLinkHoverColor};
    }
  }
`
function Copyright() {
  return (
    <React.Fragment>
      <Section>
        <Container>
          {date.getFullYear()} ©{' '}
          <a href="https://webgrowth.valdesagbokoni.com/" target="_blank">
            @WebGrowth
          </a>
          . All Rights Reserved.
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Copyright
