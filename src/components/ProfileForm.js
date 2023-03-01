import {
  Avatar,
  Box,
  InputAdornment,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
} from "@mui/material";
import { CustomInput, IconButton } from "styles/CustomInput";
import {
  StyledOption,
  CustomSelect,
  StyledButtonRoot,
} from "styles/CustomSelect";
import {
  CustomCameraButton,
  ButtonAdornment,
  IconCameraButton,
} from "styles/CameraButton";
import calendarForm from "assets/icons/calendarForm.svg";
import Camera from "assets/icons/camera.svg";
import { CustomCheckBox } from "styles/CustomCheckBox";
import { CustomButton } from "styles/CustomButton";
import PersonImage from "assets/image/Ellipse2.jpg";
import PersonImageMob from "assets/image/Ellipse-Mobile.jpg";
import "styles/style.css";

const drawerWidth = 312;

const ProfileForm = () => {
  return (
    <Box
      component="main"
      className="main"
      sx={{
        flexGrow: 1,
        display: "flex",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        backgroundColor: "#fff",
        borderRadius: "16px 0px 0px 16px",
        padding: "8px 10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "22px 5px 32px 5px",
          width: "100%",
        }}
      >
        <Typography
          sx={{ fontWeight: 900, fontSize: 14 }}
        >
          &#128522;ویرایش پروفایل
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            mb: 3,
          }}
        >
          <div className="camera">
            <div>
              <img src={PersonImage} alt="Profile" />
            </div>
            <CustomCameraButton>
              <ButtonAdornment>
                <IconCameraButton>
                  <img src={Camera} alt="camera" />
                </IconCameraButton>
              </ButtonAdornment>
            </CustomCameraButton>
          </div>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            justifyContent: "center",
            mb: 3,
          }}
        >
          <div className="camera">
            <div>
              <img src={PersonImageMob} alt="Profile" />
            </div>
            <CustomCameraButton>
              <ButtonAdornment>
                <IconCameraButton>
                  <img src={Camera} alt="camera" />
                </IconCameraButton>
              </ButtonAdornment>
            </CustomCameraButton>
          </div>
        </Box>

        <CustomInput placeholder="امید قلعه حسنی" />
        <CustomInput
          placeholder="تاریخ تولد"
          endAdornment={
            <InputAdornment>
              <IconButton>
                <Avatar src={calendarForm} className="calender-form" />
              </IconButton>
            </InputAdornment>
          }
        />
        <StyledButtonRoot>
          <CustomSelect defaultValue={10}>
            <StyledOption value={10}>استان</StyledOption>
            <StyledOption value={20}>تهران</StyledOption>
            <StyledOption value={30}>مشهد</StyledOption>
          </CustomSelect>
        </StyledButtonRoot>

        <FormControl>
          <RadioGroup
            defaultValue="single"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              value="single"
              disableTypography
              control={<CustomCheckBox />}
              label="مجرد"
              sx={{ fontSize: 12 }}
            />
            <FormControlLabel
              value="married"
              disableTypography
              control={<CustomCheckBox />}
              label="متاهل"
              sx={{ fontSize: "12px" }}
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <RadioGroup
            defaultValue="work"
            aria-labelledby="demo-customized-radios"
            name="customized-radios"
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <FormControlLabel
              disableTypography
              value="houseKeeper"
              control={<CustomCheckBox />}
              label="خانه دار"
              sx={{ fontSize: 12 }}
            />
            <FormControlLabel
              disableTypography
              value="work"
              control={<CustomCheckBox />}
              label="شاغل"
              sx={{ fontSize: 12 }}
            />
          </RadioGroup>
        </FormControl>

        <div style={{ display: "flex", margin: "10px" }}>
          <CustomButton sx={{ backgroundColor: "#B0BF24", color: "#fff" }}>
            ذخیره اطلاعات
          </CustomButton>

          <CustomButton
            sx={{
              backgroundColor: "#fff",
              color: "#B0BF24",
              border: "1px solid #B0BF24",
            }}
          >
            انصراف
          </CustomButton>
        </div>
      </Box>
    </Box>
  );
};

export default ProfileForm;
