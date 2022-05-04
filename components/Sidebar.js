import{
    HiOutlineChevronDown,
    HiShoppingBag,
    HiUserGroup,
    HiCalendar,
    HiClock,
    HiOutlineDesktopComputer,
    HiUsers
} from "react-icons/hi"
import SidebarRow from "./SidebarRow"

function Sidebar() {
    return (
        <div className="p-2 mt-5 max-w-[600px]
        xl:min-w-[300px]">
            <SidebarRow Icon={HiUsers} title="Friends" />
            <SidebarRow Icon={HiUserGroup} title="Groups" />
            <SidebarRow Icon={HiShoppingBag} title="Marketplace" />
            <SidebarRow Icon={HiOutlineDesktopComputer} title="Watch" />
            <SidebarRow Icon={HiCalendar} title="Events" />
            <SidebarRow Icon={HiClock} title="Memories" />
            <SidebarRow Icon={HiOutlineChevronDown} title="See More" />

        </div>
    )
};

export default Sidebar