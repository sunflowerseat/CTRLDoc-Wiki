// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "Home", link: "/" },
  {
    text: "Space",
    link: "/space/",
    items: [
      {
        text: "Quick Start",
        link: "/pages/fa6eb2/",
      },
      {
        text: "Adding Users to your Project",
        link: "/pages/492541/",
      },
    ],
  },
  {
    text: "Firedoc - Guide",
    link: "/pages/6b925b/",
  },
  {
    text: "Link",
    items: [
      {
        text: "Ctrldoc Website",
        link: "https://k8suat.ctrldoc.com/web_ux/",
      },
      {
        text: "Contact Us",
        link: "https://k8suat.ctrldoc.com/",
      },
    ],
  },
];
