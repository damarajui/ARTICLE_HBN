"use client"
import { useEffect, useRef } from "react"
interface RetreaverScriptProps {
  campaignKey: string
  onNumberReceived: (number: string) => void
}
export function RetreaverScript({ campaignKey, onNumberReceived }: RetreaverScriptProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const numberRequestedRef = useRef(false)
  useEffect(() => {
    if (scriptRef.current) return // Script already added
    console.log("RetreaverScript mounted, adding script...")
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.defer = true
    script.src = document.location.protocol + "//dist.routingapi.com/jsapi/v1/retreaver.min.js"
    const handleScriptLoad = () => {
      console.log("Retreaver script loaded, initializing...")
      const Retreaver = (window as any).Retreaver
      if (!Retreaver) {
        console.error("Retreaver not found in window object")
        return
      }
      console.log("Configuring Retreaver...")
      Retreaver.configure({
        host: "api.routingapi.com",
        prefix: document.location.protocol === "https:" ? "https" : "http",
      })
      console.log("Creating campaign...")
      const campaign = new Retreaver.Campaign({ campaign_key: campaignKey })
      if (!numberRequestedRef.current) {
        console.log("Requesting number...")
        campaign.request_number(
          { calling_about: "support" },
          (number) => {
            console.log("Successfully received number from Retreaver:", number.get("number"))
            onNumberReceived(number.get("number"))
            numberRequestedRef.current = true
          },
          (response) => {
            console.error("Error requesting number from Retreaver:", response)
          },
        )
      }
    }
    script.onload = handleScriptLoad
    script.onerror = (error) => console.error("Error loading Retreaver script:", error)
    document.head.appendChild(script)
    scriptRef.current = script
    console.log("Retreaver script added to document head")
    // We're not removing the script on unmount anymore
  }, [campaignKey, onNumberReceived])
  return null
}

