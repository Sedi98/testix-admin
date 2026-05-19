import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Phone, Lock, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Cookies from "js-cookie";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Login } from "~/services/user/api";
import { useLogin } from "~/services/user/hooks";
import { toast } from "sonner"

const loginSchema = z.object({
    phone: z
        .string()
        .min(1, "Telefon nömrəsi tələb olunur")
        .regex(/^\+994\d{9}$/, "Düzgün telefon nömrəsi daxil edin"),
    password: z
        .string()
        .min(1, "Şifrə tələb olunur")
        .min(6, "Şifrə ən az 6 simvol olmalıdır"),
    accountType: z.enum(["STUDENT", "TEACHER", "PARENT"]),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {

    const{ mutateAsync:LoginMutation , isPending } = useLogin();
    const [showPassword, setShowPassword] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: "",
            password: "",
            accountType: "TEACHER",
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        setSubmitError(null);
        try {
            console.log(data)
            const result = await LoginMutation(data);
            console.log(result);
            // const res = await Login(data);
            // if (!res?.tokens?.access_token) {
            //     setSubmitError("Daxil olmaq mümkün olmadı. Məlumatları yoxlayın.");
            //     return;
            // }
            // Cookies.set("token", res.tokens.access_token, { expires: 1 });
            // Cookies.set("refreshToken", res.tokens.refresh_token, { expires: 30 });
            result && navigate("/dashboard");
        } catch {
            toast.error("Xəta baş verdi. Yenidən cəhd edin.");
            setSubmitError("Xəta baş verdi. Yenidən cəhd edin.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-400">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-[522px] bg-white rounded-3xl p-9 space-y-5"
            >
                <div className="flex justify-between items-center">
                    <img src="app/assets/icons/Logo.svg" alt="" width={120} height={30} />
                </div>

                <div className="space-y-2 mt-5">
                    <label className="text-sm text-brand-dark font-medium">Telefon nömrəsi</label>
                    <div className="flex items-center rounded-lg p-4 bg-neutral-50 gap-3">
                        <Phone size={20} className="text-brand-dark" />
                        <Input
                            type="text"
                            placeholder="+994 XX XXX XX XX"
                            className="border-0 bg-transparent shadow-none p-0 h-auto text-base font-normal text-brand-secondary focus-visible:ring-0"
                            {...register("phone")}
                        />
                    </div>
                    {errors.phone && (
                        <p className="text-xs text-red-500">{errors.phone.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-brand-dark font-medium">Şifrə</label>
                    <div className="flex items-center rounded-lg p-4 bg-neutral-50 gap-3">
                        <Lock size={20} className="text-brand-dark" />
                        <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="******"
                            className="border-0 bg-transparent shadow-none p-0 h-auto text-base font-normal text-brand-secondary focus-visible:ring-0"
                            {...register("password")}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowPassword(!showPassword)}
                            className="cursor-pointer bg-transparent hover:bg-transparent"
                        >
                            {showPassword ? (
                                <EyeOff size={20} className="text-brand-dark" />
                            ) : (
                                <Eye size={20} className="text-brand-dark" />
                            )}
                        </Button>
                    </div>
                    {errors.password && (
                        <p className="text-xs text-red-500">{errors.password.message}</p>
                    )}
                </div>

                {submitError && (
                    <p className="text-sm text-red-500">{submitError}</p>
                )}

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 h-12 rounded-xl bg-brand-primary text-white font-semibold text-base cursor-pointer disabled:opacity-60"
                >
                    {isSubmitting ? "Yüklənir..." : "Daxil ol"}
                </Button>
            </form>
        </div>
    );
}