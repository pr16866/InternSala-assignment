import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const Headertext = styled.div`
  .headingText{

    
padding: 20px;

  } 
  .span {
    height: 3px;
    width: 30px;
    background: black;
    border: 1px soild black;
    display: inline-block;
    text-align: center;
  }
`;
export default function HeaderText() {
  return (
    <Headertext>
      <Box component="h1" className="headingText" alignItems="center">
Zetgo <span className="span" style={{marginBottom:"8px"}}></span> amazing hostel for the free spirited traveler
      </Box>
    </Headertext>
  )
}
