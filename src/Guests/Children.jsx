import styled from "@emotion/styled";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const GuestMain = styled.div`
  .adultBox {
    display: flex;
    /* border: 1px solid black; */
    /* width: 50vw; */
    justify-content: space-between;
    gap: 50px;
    align-items: center;
  }
`;
export default function Children(props) {
  const { number, addChildren, removeChildren, name } = props;
  // console.log(props);
  return (
    <GuestMain>
      <Box className="GuestBox">
        <Box className="adultBox" sx={{}}>
          <Typography> {name}</Typography>
          <Box
            clasName="buttonBox"
            sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              className="btn"
              sx={{
                border: "3px solid #3f51b5",
                borderRadius: 0,
                width: 36,
                borderRadius: 2,
                height: 37,
              }}
              onClick={removeChildren}>
              <RemoveIcon />
            </IconButton>
            <span style={{ fontWeight: 600, fontSize: 20 }}>{number}</span>
            <IconButton
              className="btn"
              sx={{
                border: "3px solid #3f51b5",
                borderRadius: 2,
                width: 36,

                height: 37,
              }}
              onClick={addChildren}>
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </GuestMain>
  );
}
