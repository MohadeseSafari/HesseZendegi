import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

export const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
  font-family: ${theme.typography.fontFamily};
  width: 100%;
  font-size: 12px;
  padding: 10px 38px;
  border-radius: 5px;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin: 3px;

  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  &.${buttonUnstyledClasses.active} {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
);
