import { useEffect, useState } from "react";
import { init, miniApp } from "@tma.js/sdk";

export default function App() {
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    try{
      init()
      miniApp.mount()
      setStatus('TelegramSDK is connected!')
    } catch {
      setStatus('Open in browser. TelegramSDK is not Loading')
    }
  }, [])

  return (
    <main>
      <h1>My Telegram Mini-App</h1>
      <p>{status}</p>
    </main>
  )
} 