"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

const Sidebar = () => {
    const pathname = usePathname();
    const navItems = [
        { href: '/', label: 'Home', icon: '/Home.svg' },
        { href: '/cards', label: 'Cards', icon: '/Card.svg' },
        { href: '/payments', label: 'Payments', icon: '/Payments.svg' },
        { href: '/credit', label: 'Credit', icon: '/Credit.svg' },
        { href: '/settings', label: 'Settings', icon: '/Account.svg' },
      ];
    return (
        <div className="bg-dark-grey text-white pl-12 pt-12 pr-14 fixed top-0 left-0 h-screen flex flex-col lg:w-86 xl:w-96">
            <Image src="/Logo.svg" alt="Logo" width={125} height={35} />
            <div className="mt-5 text-sm opacity-30">
                Trusted way of banking for 3,000+ SMEs and startups in Singapore
            </div>
            <nav className="mt-20 space-y-4 flex-1">
                {navItems.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        active={pathname === item.href}
                    />
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;