import Image from "next/image"

export default function Header() {
  return (
    <header className="top-header">
      <div className="header-inner">
        <div className="logo-section">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-zh5hhWRhYXQ9n98qlcUHD4iH54mMos.png"
            alt="Logo"
            className="logo-img"
            width={120}
            height={60}
            priority
          />
        </div>
        <div className="header-right">
          <p className="header-tagline">Your Source for Vital Healthcare News</p>
        </div>
      </div>
      <div className="red-accent-line"></div>
    </header>
  )
}

