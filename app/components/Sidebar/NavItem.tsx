import Image from "next/image";

const NavItem = ({ href, icon, label, active }: any) => {
    return (
        <a
            href={href}
            className="flex items-center text-[16px] text-white hover:text-gray-300 mb-16"
        >
            <Image src={icon} alt={label} width={24} height={24} />
            <span className={`ml-4 ${
                active ? "text-green-500 font-bold" : ""
            }`}>{label}</span>
        </a>
    );
}

export default NavItem;