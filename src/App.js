
import Box from "@mui/material/Box";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FilledInput,
  StandardInput,
  Typography,Button, Grid
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Guests from "./Guests/Guests";
import Children from "./Guests/Children";
import HeaderText from "./HeaderText";
import HederTitle from "./HederTitle";
// import StandardInput from "@mui/material/StandardInput";
const MianBox = styled.div`
  background: #d9d9d9;
  /* width: 100vw; */
  height: 100vh;
  /* padding:50px; */
  .formMainBox {
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: #d9d9d9; */
    width: 100%;
    height: 60%;
  }

  .form {
    width: 60%;
    background: #f2f2f2;
    padding: 20px;
  }
  .fieldBox {
    /* border: 1px solid black; */
    display: flex;
    gap: 40px;
  }
  .guests {
    /* display: flex; */
    /* gap: 40px; */
    width: 100%;
    /* align-items:center; */
    /* justify-content: space-between;  */
  }

  @media screen and (max-width: 600px) {
    .form {
      width: 90%;
      justify-content: "center";
    }
    .fieldBox {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
function App() {
  const [personName, setPersonName] = useState([]);
  
  const [adults, setAdults] = useState(0);
  const [Children, setChildren] = useState(0);
      const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === "string" ? value.split(",") : value
        );
      };
  console.log(personName);
  const addAdults = () => {
    setAdults(adults + 1);
  }
  const removeAdults = () => {
    setAdults(adults - 1);
  }
  const addChildren = () => {
    setChildren(Children + 1);
  };
  const removeChildren = () => {
    setChildren(Children - 1);
  };
 

  
  return (
    <MianBox>
      <HeaderText />
      <HederTitle/>
      <Box className="formMainBox">
        <Box component="form" noValidate autoComplete="off" className="form">
          <Box component="div" className="fieldBox">
            <TextField
              label="Check-in"
              focused
              variant="standard"
              type="date"
              fullWidth
              className="textfield"
              sx={{
                paddingTop: 1,

                "& label.Mui-focused": {
                  color: "#3f51b5",
                  fontWeight: "bolder",
                  fontSize: 22,
                },
              }}
            />
            <TextField
              label="Check-out"
              focused
              variant="standard"
              type="date"
              fullWidth
              // select
              sx={{
                paddingTop: 1,

                "& label.Mui-focused": {
                  color: "#3f51b5",
                  fontWeight: "bolder",
                  fontSize: 22,
                },
              }}
            />
          </Box>

          <Grid
            className="guests"
            container
            gap={2}
            justifyContent="center"
            alignItems="center">
            <Grid item md={6} sm={6} xs={12}>
              <InputLabel
                id="demo-multiple-checkbox-label"
                sx={{
                  color: "#3f51b5",
                  fontWeight: "550",
                  fontSize: 20,
                }}>
                Guests
              </InputLabel>
              <Select
                variant="standard"
                label="Check-out"
                focused="true"
                fullWidth
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={new Array(personName[personName.length - 1])}
                onChange={handleChange}
                renderValue={(selected) => selected.join(", ")}

                // MenuProps={MenuProps}
              >
                {/* <MenuItem value=""></MenuItem> */}
                <MenuItem value={`${adults}-Adults`}>
                  <Guests
                    addAdults={addAdults}
                    removeAdults={removeAdults}
                    number={adults}
                    name="Adults"
                  />
                </MenuItem>
                <MenuItem value={adults + "-Childrens"}>
                  {/* <Children
                addAdults={addChildren}
                removeAdults={removeChildren}
                number={Children}
                name="Childrens"
              /> */}
                </MenuItem>
              </Select>
            </Grid>
            <Grid item md={4} sm={4} xs={10} justifyContent="center">
              <Button
                variant="contained"
                sx={{ display: "inline-block", textAlign: "center" }}
                fullWidth>
                submit now
              </Button>
            </Grid>

            {/* </FormControl> */}
          </Grid>
        </Box>
      </Box>
    </MianBox>
  );
}

export default App;
