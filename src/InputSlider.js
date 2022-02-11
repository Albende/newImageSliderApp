import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Input = styled(MuiInput)`
  width: 42px;
`;

const InputSlider = ({ onChange = () => {} }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 500) {
      setValue(500);
    }
  };

  return (
    <Box sx={{ width: 800 }}>
      <Typography id="input-slider" textAlign={"center"}>
        Likes
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ThumbDownIcon />
        </Grid>
        <Grid item xs>
          <Slider
            min={0}
            max={1000}
            step={1}
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <ThumbUpIcon />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 1000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputSlider;
