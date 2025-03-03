import Image from "next/image"

export default function AuthorInfo() {
  return (
    <section className="author-info-section">
      <div className="content-container author-container">
        <div className="author-content">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/author-RYePIZx4HQGWVDF7MgKVKZb5kdslDk.png"
            alt="Author Photo"
            className="author-photo"
            width={30}
            height={30}
          />
          <p className="author-name">By: Marie Washington</p>
          <p className="update-date">Updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  )
}

