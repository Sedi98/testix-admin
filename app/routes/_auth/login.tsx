import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Phone, Lock, X } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('hello');

        navigate("/dashboard");
    };
    // const [activeTab, setActiveTab] = useState<"login" | "register">("login");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400">
            <div className="w-full max-w-[522px] bg-white rounded-3xl p-9 space-y-5">

                <div className="flex justify-between items-center">
                    <img src="app/assets/icons/Logo.svg" alt="" width={120} height={30} />
                    <button className="cursor-pointer">
                        <X size={24} className="text-black" />
                    </button>
                </div>

                {/* <div className="flex bg-neutral-50 rounded-[14px] w-[243px] mx-auto items-center justify-center whitespace-nowrap">
                    <button
                        onClick={() => setActiveTab("login")}
                        className={`flex-1 py-3 px-4 rounded-[14px] text-base font-medium cursor-pointer ${activeTab === "login"
                            ? "bg-white text-brand-dark border border-neutral-stroke"
                            : "text-brand-secondary"
                            }`}
                    >
                        Daxil ol
                    </button>
                    <button
                        onClick={() => setActiveTab("register")}
                        className={`flex-1 py-3 px-4 rounded-[14px] text-base font-medium cursor-pointer ${activeTab === "register"
                            ? "bg-white text-brand-dark border border-neutral-stroke"
                            : "text-brand-secondary"
                            }`}
                    >
                        Qeydiyyatdan keç
                    </button>
                </div> */}

                <div className="space-y-2 mt-5">
                    <label className="text-sm text-brand-dark font-medium">Telefon nömrəsi</label>
                    <div className="flex items-center rounded-lg p-4 bg-neutral-50 gap-3">
                        <Phone size={20} className="text-brand-dark" />
                        <input
                            type="text"
                            placeholder="+994 XX XXX XX XX"
                            className="bg-transparent outline-none w-full text-base font-normal text-brand-secondary"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-brand-dark font-medium">Şifrə</label>
                    <div className="flex items-center rounded-lg p-4 bg-neutral-50 gap-3">
                        <Lock size={20} className="text-brand-dark" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="******"
                            className="bg-transparent outline-none w-full text-sm text-base font-normal text-brand-secondary"
                        />
                        <button onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                            {showPassword ? (
                                <EyeOff size={20} className="text-brand-dark" />
                            ) : (
                                <Eye size={20} className="text-brand-dark" />
                            )}
                        </button>
                    </div>
                </div>

                {/* <div>
                    <button className="text-sm text-brand-primary font-medium text-base cursor-pointer">
                        Şifrəni unutmusunuz?
                    </button>
                </div> */}

                <Button
                    onClick={() => handleLogin()
                    }
                    className="w-full py-3 px-4 rounded-xl bg-brand-primary text-white font-semibold text-base cursor-pointer"
                >
                    Daxil ol
                </Button>

                {/* <button className="w-full py-3 px-4 rounded-xl border border-neutral-stroke text-brand-primary font-semibold text-base cursor-pointer">
                    Qonaq kimi davam et
                </button> */}

            </div>
        </div>
    );
}