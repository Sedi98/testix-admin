import { NavLink } from "react-router"
import { LogOut } from "lucide-react"
import Logo from "~/assets/icons/Logo.svg"
import { navItems } from "~/lib/navigation"

export function Sidebar() {

    return (
        <aside className="w-[263px] bg-white border-r border-neutral-stroke flex flex-col h-full shrink-0">
            <img src={Logo} alt="Testix" width={160} height={40} className="pt-7 px-4" />

            <nav className="flex-1 overflow-y-auto py-4 px-3">

                {navItems.map((group) => (
                    <div key={group.section} className="mb-5">
                        <p className="text-base font-semibold text-brand-dark px-4 py-3">
                            {group.section}
                        </p>
                        <div>
                            {group.links.map(({ label, href, icon: Icon }) => (
                                <NavLink
                                    key={href}
                                    to={href}
                                    end={href === "/dashboard"}
                                    className={({ isActive }) =>
                                        `flex items-center gap-[10px] px-4 py-3 rounded-xl font-semibold text-base transition-all ${isActive
                                            ? "bg-primary-0 text-brand-primary"
                                            : "text-neutral-500 hover:bg-primary-0 hover:text-brand-primary"
                                        }`
                                    }
                                >
                                    <Icon size={24}/>
                                    <span>{label}</span>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>

            <div className="px-3 py-4 border-t border-gray-100">
                <button className="flex items-center gap-[10px] px-4 py-3w-full rounded-xl text-base font-semibold text-red-500 hover:bg-red-50 transition-all">
                    <LogOut size={24} />
                    <span>Çıxış</span>
                </button>
            </div>
        </aside>
    )
}
