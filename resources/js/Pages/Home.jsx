import CustomInput from "../Components/CustomInput";
import Sidebar from "../Components/Sidebar";
import SignupLogin from "./Authentication/SignupLogin";
import Items from "./Items";

export default function Home() {
    const SidebarLabels = [
        "Dashboard",
        "Categories",
        "Items",
        "Sales",
        "Invoices",
        "Orders",
        "Inventory",
        "Expenses",
        "Customer & Supplier",
        "Users",
        "settings",
    ];
    const SidebarImages = [
        "https://img.icons8.com/?size=100&id=RHrE90XqgFV6&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=48145&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=vfv1AbUEfpHl&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=pyTMIrisYjm1&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=13119&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=lMhEFosNBRbT&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=hSN01TgQcF5l&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=13008&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=KWeIIVbeWhzM&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=108341&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=12784&format=png&color=000000",
    ];
    return (
        <>
            <div className="relative">
                <Sidebar data={[SidebarLabels, SidebarImages]} />
                {/* On large screens, add left margin equal to the sidebar width */}
                <div className="lg:ml-64">
                    <Items />
                    {/* other contents */}
                </div>
            </div>
        </>
    );
}
