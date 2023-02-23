import { NavItem } from "../_nav.service";
import { faCalendar, faHome, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export const sideNavListItems: NavItem[] = [
    {
        name: "Home",
        icon: faHome,
        route: "/home"
    },
    {
        name: "Calendar",
        icon: faCalendar,
        route: "/calendar"
    },
    {
        name: "Pay",
        icon: faMoneyBill,
        route: "/budget"
    }
];