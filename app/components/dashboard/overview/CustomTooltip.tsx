interface CustomTooltipProps {
    active?: boolean
    payload?: { value: number }[]
    label?: string
}

export function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-violet-500 text-white text-xs rounded-xl px-3 py-2 shadow-lg">
                <p className="font-semibold">{label}</p>
                <p>{payload[0].value}</p>
            </div>
        )
    }
    return null
}