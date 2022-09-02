import { ioBarChartSharp } from "react-icons/io5";
import { mdQueryStats } from "react-icons/md";
import { FaWpForms } from "react-icons/ifa";
import { imProfile } from "react-icons/im";

const links = [
  { id: 1, text: "Stats", path: "/", icon: <ioBarChartSharp /> },
  { id: 2, text: "All jobs", path: "all-jobs", icon: <mdQueryStats /> },
  { id: 3, text: "Add job", path: "add-job", icon: <FaWpForms /> },
  { id: 4, text: "Profile", path: "profile", icon: <imProfile /> },
];

export default links;
