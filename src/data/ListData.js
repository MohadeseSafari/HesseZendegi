import Heart from "assets/icons/heart.svg";
import Share from "assets/icons/share.svg";
import Bubble from "assets/icons/bubble.svg";
import LogOut from "assets/icons/logout.svg";
import Message from "assets/icons/messages.svg";
import Wallet from "assets/icons/wallet-add.svg";
import Calender from "assets/icons/calendar.svg";
import MedalStar from "assets/icons/medal-star.svg";
import Profile from "assets/icons/profile-circle.svg";

const DrawerList = [
  {
    id: 0,
    textList: "اطلاعات پروفایل",
    icon: <img src={Profile} alt="Profile" />,
    link: 'profile',
    color: "#3F4254",
  },
  {
    id: 1,
    textList: "ویژگی ها و علاقه ها",
    icon: <img src={Bubble} alt="Bubble" />,
    link: 'property',
    color: "#3F4254",
  },
  {
    id: 2,
    textList: "برنامه هفتگی",
    icon: <img src={Calender} alt="Calender" />,
    link: 'schedule',
    color: "#3F4254",
  },
  {
    id: 3,
    textList: "غذاهای مورد علاقه",
    icon: <img src={Heart} alt="Heart" />,
    link: 'FavoriteFoods',
    color: "#3F4254",
  },
  {
    id: 4,
    textList: "اشتراک و پرداخت ها",
    icon: <img src={Wallet} alt="Wallet" />,
    link: 'payments',
    color: "#3F4254",
  },
  {
    id: 5,
    textList: "پیام ها و گفتگو ها",
    icon: <img src={Message} alt="Message" />,
    link: 'messages',
    color: "#3F4254",
  },
  {
    id: 6,
    textList: "معرفی به دوستان",
    icon: <img src={Share} alt="share" />,
    link: 'introduce',
    color: "#3F4254",
  },
  {
    id: 7,
    textList: "جایزه ها",
    icon: <img src={MedalStar} alt="medalStar" />,
    link: 'awards',
    color: "#3F4254",
  },
  {
    id: 8,
    textList: "خروج",
    icon: <img src={LogOut} alt="LogOut" />,
    link: '/',
    color: "#CF2D55",
  },
];

export default DrawerList;
