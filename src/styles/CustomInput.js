import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import InputUnstyled from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E4E6EF",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputRoot = styled("div")(
  ({ theme }) => `
  border-radius: 6px;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  &:hover {
    border-color: ${grey[400]};
  }
`
);

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 280px;
  font-size: 0.875rem; 
  font-weight: 400;
  line-height: 1.5;
  flex-grow: 1;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 10px 12px;
  outline: 0;
  &:hover {
    border-color: ${theme.palette.mode === "dark" ? grey[200] : grey[600]};
`
);

export const IconButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[700]};
  `
);

export const InputAdornment = styled("div")`
  position: absolute;
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <InputUnstyled
      slots={{
        root: StyledInputRoot,
        input: StyledInputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});
