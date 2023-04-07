import home from "@/assets/icons/sidebar/home.svg";
import activeHome from "@/assets/icons/sidebar/activeHome.svg";
import category from "@/assets/icons/sidebar/category-icon.svg";
import avtiveCategory from "@/assets/icons/sidebar/avtiveCategory.svg";
import user from "@/assets/icons/sidebar/user.svg";
import activeUser from "@/assets/icons/sidebar/activeUser.svg";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: home,
    activeIcon: activeHome,
    link: "/",
    children: [""],
  },
  {
    id: "user",
    label: "User",
    icon: user,
    activeIcon: activeUser,
    link: "/user",
    children: [],
  },
  {
    id: "category",
    label: "Category",
    icon: "category",
    activeIcon: "activeCategory",
    link: "/category",
    children: [],
  },
  {
    id: "uploadVideo",
    label: "UploadVideo",
    link: "/uploadVideo",
    children: [],
  },
];

export default menuItems;
