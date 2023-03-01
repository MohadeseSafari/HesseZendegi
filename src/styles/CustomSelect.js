import * as React from "react";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

const green = {
  200: "#FEFFE7",
  300: "#E9EC90",
  400: "#E0EC74",
  700: "#B0BF24",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E4E6EF",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#757575",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

export const StyledButtonRoot = styled("div")(
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

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: ${theme.typography.fontFamily};
  width: 100%;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 10px 12px;
  border-radius: inherit;
  text-align: right;
  line-height: 1.5;
  outline: none;
  background: inherit;
  border: none;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;
 &:hover {
    border-color: ${theme.palette.mode === "dark" ? grey[200] : grey[600]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${green[400]};
    outline: 3px solid ${
      theme.palette.mode === "dark" ? green[400] : green[200]
    };
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: left;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
   font-family: ${theme.typography.fontFamily};
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  width: 320px;
  border-radius: 6px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
  `
);

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 6px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${
      theme.palette.mode === "dark" ? green[300] : green[200]
    };
    color: ${theme.palette.mode === "dark" ? green[200] : green[700]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${
      theme.palette.mode === "dark" ? green[700] : green[200]
    };
    color: ${theme.palette.mode === "dark" ? green[200] : green[700]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

export const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});
