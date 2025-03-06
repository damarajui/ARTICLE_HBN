import Image from "next/image"

interface ArticleSectionProps {
  number: number
  title: string
  content: string
  imageSrc?: string
  imageAlt?: string
  useRegularImg?: boolean
}

export default function ArticleSection({ number, title, content, imageSrc, imageAlt, useRegularImg = false }: ArticleSectionProps) {
  return (
    <section className={number % 2 === 0 ? "section-white" : "section-light"}>
      <div className="content-container">
        {imageSrc && useRegularImg ? (
          <img
            src={imageSrc}
            alt={imageAlt || ""}
            className="section-image"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        ) : imageSrc ? (
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt || ""}
            className="section-image"
            width={800}
            height={450}
          />
        ) : null}
        <article>
          <h2>
            {number}. {title}
          </h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </section>
  )
}

