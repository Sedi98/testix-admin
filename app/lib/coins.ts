import { CircleDollarSign, Coins, UserRound, Wallet, type LucideIcon } from "lucide-react"

export type CoinTab = "packages" | "sales" | "history"

export type CoinStatCard = {
  title: string
  value: string
  meta: string
  icon: LucideIcon
  positive: boolean
}

export type CoinPackage = {
  id: number
  amount: string
  price: string
  rate: string
  sold: number
  progress: number
}

export type CoinHistoryRow = {
  id: number
  date: string
  user: string
  role: string
  operation: string
  type: "Alış" | "Xərcləmə" | "Admin"
  amount: string
  coins: string
}

export const coinStats: CoinStatCard[] = [
  {
    title: "Ümumi satılan koin",
    value: "186,000",
    meta: "+ 12,300 / son 1 ay",
    icon: Coins,
    positive: true,
  },
  {
    title: "Bu ay gəlir",
    value: "9,630 AZN",
    meta: "+ 100 / son 1 ay",
    icon: Wallet,
    positive: true,
  },
  {
    title: "Bu ay satış",
    value: "3,300",
    meta: "- 234 / son 1 ay",
    icon: CircleDollarSign,
    positive: false,
  },
  {
    title: "Unikal alıcı",
    value: "2,120",
    meta: "+ 130 / son 1 ay",
    icon: UserRound,
    positive: true,
  },
]

export const coinTabs: { key: CoinTab; label: string }[] = [
  { key: "packages", label: "Koin paketləri" },
  { key: "sales", label: "Koin satışı" },
  { key: "history", label: "Koin tarixçəsi" },
]

export const coinPackages: CoinPackage[] = [
  { id: 1, amount: "500", price: "4.99 Azn", rate: "1 koin = 0.01 azn", sold: 678, progress: 56 },
  { id: 2, amount: "1000", price: "9.99 Azn", rate: "1 koin = 0.01 azn", sold: 678, progress: 55 },
  { id: 3, amount: "2000", price: "15.99 Azn", rate: "1 koin = 0.004 azn", sold: 678, progress: 55 },
  { id: 4, amount: "5000", price: "20.99 Azn", rate: "1 koin = 0.008 azn", sold: 678, progress: 56 },
]

export const coinHistoryRows: CoinHistoryRow[] = [
  ["24/07/2026", "Sevinc Aliyeva Arif", "Şagird", "1.000 koin alındı", "Alış", "9.99 azn", "+5,300"],
  ["24/07/2026", "Sevinc Aliyeva Arif", "Şagird", "Fizika imtahanı alındı", "Xərcləmə", "9.99 azn", "-1,300"],
  ["24/07/2026", "Sevinc Aliyeva Arif", "Şagird", "Admin tərəfindən əlavə", "Admin", "---", "+500"],
  ["25/07/2026", "Elman Məmmədov", "Müəllim", "Riyaziyyat imtahanı alındı", "Xərcləmə", "9.99 azn", "-1,300"],
  ["26/07/2026", "Nigar Hüseynova", "Şagird", "500 koin alındı", "Alış", "9.99 azn", "+300"],
  ["27/07/2026", "Tural Quliyev", "Şagird", "Pro Paket alındı", "Xərcləmə", "9.99 azn", "-1,300"],
  ["28/07/2026", "Aytac Rahimova", "Müəllim", "3.000 koin alındı", "Alış", "9.99 azn", "+1500"],
  ["29/07/2026", "Rəşad Əliyev", "Şagird", "750 koin alındı", "Alış", "9.99 azn", "+400"],
  ["30/07/2026", "Leyla Məmmədova", "Müəllim", "2.000 koin alındı", "Alış", "9.99 azn", "+900"],
  ["24/07/2026", "Sevinc Aliyeva Arif", "Şagird", "Fizika imtahanı alındı", "Xərcləmə", "9.99 azn", "-1,300"],
].map(([date, user, role, operation, type, amount, coins], index) => ({
  id: index + 1,
  date,
  user,
  role,
  operation,
  type: type as CoinHistoryRow["type"],
  amount,
  coins,
}))
