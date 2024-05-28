import { LinkItemsType } from "@/types/HeaderLinksType";

export const ITEMS: LinkItemsType = [
  {
    id: 1,
    value: "Home",
    href: "/",
    type: "outpage",
  },
  {
    id: 2,
    value: "Posty",
    href: "#posts",
    type: "onpage",
  },
  {
    id: 3,
    value: "Portfolio",
    href: "https://oliwiermarkiewicz.netlify.app/",
    type: "outpage",
  },
  {
    id: 4,
    value: "Newsletter",
    href: "#newsletter",
    type: "onpage",
  },
];
