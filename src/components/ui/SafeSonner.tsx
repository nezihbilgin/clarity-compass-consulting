import { useEffect, useState } from "react"

export default function SafeSonner() {
    const [Sonner, setSonner] = useState<JSX.Element | null>(null)

    useEffect(() => {
        const load = async () => {
            const { Toaster } = await import("@/components/ui/sonner")
            setSonner(<Toaster />)
        }
        load()
    }, [])

    return Sonner
}