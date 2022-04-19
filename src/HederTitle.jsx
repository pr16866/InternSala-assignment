import styled from '@emotion/styled';
import { Typography ,Box} from '@mui/material'
// import {  } from '@mui/system'
import React from 'react'

const TiteleBox = styled.div`
  .innerTitle {
    display: flex;
    align-items: center;
    background: #e6e6e6
    ;
    padding:20px;
    gap:14px;
  }
`;
export default function HederTitle() {
  return (
    <TiteleBox>
      <Box className="innerTitle">
        <Typography className="line" sx={{width:"4px",height:"60px",background:"blue"}}>

        </Typography>

      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quo nihil. Nulla sint, tempore molestiae repudiandae quod hic. Animi, ratione! Illum asperiores amet quidem, quos dolorem vero optio minima et?
      </Typography>
      </Box>
    </TiteleBox>
  )
}
