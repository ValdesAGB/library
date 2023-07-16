import React from 'react'
import { styled } from 'styled-components'
import { color } from '../untils/color'
import { police } from '../untils/police'
import PropTypes from 'prop-types'

const Boutton = styled.button`
  background-color: ${color.footerLinkHoverColor};
  color: ${color.ctaBtnColor};
  width: auto;
  padding: 0 17px;
  font-family: ${police.main};
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  border: none;
  height: 51px;
  line-height: 49px;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 350ms ease-in-out, color 500ms 150ms;
  &:hover {
    color: ${color.acceuilBgColor};
    background-color: white;
  }
`

function DownloadBtn({ BouttonStyle = Boutton }) {
  return (
    <React.Fragment>
      <div>
        <BouttonStyle>Download Now</BouttonStyle>
      </div>
    </React.Fragment>
  )
}

DownloadBtn.propTypes = {
  BouttonStyle: PropTypes.object,
}

export default DownloadBtn
