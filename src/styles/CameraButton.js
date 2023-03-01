import * as React from "react";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const StyledInputRoot = styled("div")`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 50%;
  background-color: #f69427;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
    font-family: ${theme.typography.fontFamily};
    width: 40px;
    font-size: 0.875rem;
    border-radius: 50%;
    background-color: #F69427;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
  
    &:hover {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  `
);

export const IconCameraButton = styled(ButtonUnstyled)`
  display: inline-flex;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 3px;
  border: none;
  background-color: #f69427;
  cursor: pointer;
`;

export const ButtonAdornment = styled("div")`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const CustomCameraButton = React.forwardRef(function CustomCameraButton(
  props,
  ref
) {
  const { slots, ...other } = props;
  return (
    <ButtonUnstyled
      slots={{
        root: StyledInputRoot,
        input: CustomButton,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});
