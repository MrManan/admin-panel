import home from "@/assets/icons/sidebar/home.svg";
import activeHome from "@/assets/icons/sidebar/activeHome.svg";
import category from "@/assets/icons/sidebar/category.svg";
import activeCategory from "@/assets/icons/sidebar/activeCategory.svg";

import user from "@/assets/icons/sidebar/user.svg";
import activeUser from "@/assets/icons/sidebar/activeUser.svg";
import video from "@/assets/icons/sidebar/video.svg";
import activeVideo from "@/assets/icons/sidebar/activeVideo.svg";
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
    icon: category,
    activeIcon: activeCategory,
    link: "/category",
    children: [],
  },
  {
    id: "uploadVideo",
    label: "Video",
    icon: video,
    activeIcon: activeVideo,
    link: "/uploadVideo",
    children: [],
  },
  {
    id: "pending",
    label: "Pending Video",
    icon: video,
    activeIcon: activeVideo,
    link: "/pendingVideos",
    children: [],
  },
];

export default menuItems;
