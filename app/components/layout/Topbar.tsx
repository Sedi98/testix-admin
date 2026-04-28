import { Search } from "lucide-react";
import { mockUser } from "~/lib/user"

export function Topbar() {
    return (
        <header className="h-27 bg-white border-b border-neutral-stroke flex items-center px-6 gap-4 shrink-0">
            <div className="relative w-[763px]">
                <Search
                    size={20}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary"
                />
                <input
                    type="text"
                    placeholder="Axtarış....."
                    className="w-full pl-10 p-4 border border-neutral-stroke rounded-xl text-base font-normal text-brand-secondary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-200 focus:border-violet-300 transition-all"
                />
            </div>

            <div className="flex items-center gap-3 ml-auto">
                <div className="text-right">
                    <p className="text-xl font-medium text-brand-dark">{mockUser.name}</p>
                    <p className="text-sm font-medium text-dark-blue-300">{mockUser.role}</p>
                </div>
                <div className="w-14 h-14 border border-neutral-stroke rounded-full bg-primary-0 flex items-center justify-center text-brand-dark font-normal text-[25px]">
                    {mockUser.initials}
                </div>
            </div>
        </header>
    );
}