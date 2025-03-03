import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AuthorInfo from "@/components/AuthorInfo"
import ArticleSection from "@/components/ArticleSection"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AuthorInfo />
      <ArticleSection
        number={1}
        title="The Shocking Decision: DOGE Slashes Funding for 9/11 Cancer Research"
        content={`
          <p><strong>What's Really Happening:</strong> DOGE's abrupt cancellation of a $275,000 contract means that 
          crucial research aimed at identifying and treating cancers in 9/11 first responders is now on hold. This decision 
          directly affects firefighters, police officers, and other brave individuals who risked their lives during the crisis 
          and now face heightened health risks. Critics argue that this cut demonstrates a disturbing trend of placing 
          cost-saving measures over human welfare.</p>

          <p><strong>The Human Cost:</strong> For many of those who answered the call during 9/11, every dollar of federal 
          support has been a lifeline. With the funding now gone, the ability to detect new World Trade Center-related 
          conditions is compromised, leaving our heroes more vulnerable than ever. Families are left wondering: if the 
          government can so easily slash funds for our first responders, what does that say about its commitment to the 
          health of everyday Americans?</p>

          <p><strong>Why It Matters to You:</strong> When government decisions prioritize fiscal gymnastics over the 
          well-being of those who protect us, the consequences ripple out to all citizens. It's a stark reminder that 
          in times of crisis—and even in relative calm—the average American might not get the help they need when it 
          matters most.</p>
        `}
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image1-f2h9a069ORE78dw46AInfNz6dPyUF1.png"
        imageAlt="Firefighters carrying a victim on a stretcher through 9/11 debris"
      />
      <ArticleSection
        number={2}
        title="The Disturbing Reality: Prioritizing Cost Over Care"
        content={`
          <p><strong>A Question of Values:</strong> DOGE's decision highlights a troubling trend: government 
          choices that favor immediate savings over long-term health benefits. By cutting funding for cancer 
          research—especially research that benefits those who have already sacrificed so much—the government 
          appears to be prioritizing cost reduction over the preservation of human life.</p>

          <p><strong>The Ripple Effect:</strong> Such decisions have a domino effect. As research funding dwindles, 
          the potential for breakthroughs in treatment decreases, putting the health of current and future generations 
          at risk. With limited federal support for medical innovation, the burden of rising healthcare costs and 
          inadequate treatment options falls squarely on the shoulders of the public.</p>

          <p><strong>Your Health Is Non-Negotiable:</strong> In a system where every cut can mean the difference 
          between life and death for our heroes, it becomes clear that waiting for government policies to align with 
          your best interests is a dangerous gamble.</p>
        `}
      />
      <ArticleSection
        number={3}
        title="The One Beacon of Hope: Affordable Care Act – A Policy That Puts You First"
        content={`
          <p><strong>Why ACA Stands Out:</strong> Amid a series of government missteps, the Affordable Care Act (ACA) 
          remains one of the few initiatives designed to directly protect and support the average American. While 
          decisions like the DOGE funding cut demonstrate a disconnect from real-world needs, ACA is built on a promise 
          to provide comprehensive, affordable health coverage—regardless of your income or health status.</p>

          <p><strong>How ACA Helps:</strong><br/>
          • <em>Affordable Premiums:</em> Thanks to expanded subsidies, millions of Americans can access quality 
          health insurance without breaking the bank.<br/>
          • <em>Comprehensive Benefits:</em> ACA plans cover preventive care, routine checkups, emergency services, and more, 
          ensuring you're protected when you need it most.<br/>
          • <em>A Commitment to the People:</em> Unlike other policies that may sacrifice care for cost savings, ACA remains 
          steadfast in its mission to support everyday Americans.</p>

          <p><strong>Your Next Step:</strong> In a climate where government decisions too often undermine the health 
          of those who need it most, taking charge of your own healthcare is more important than ever. While the 
          funding for critical cancer research may be slashed, your right to quality, affordable health coverage should 
          never be compromised.</p>
        `}
      />
      <CTA />
      <Footer />
    </main>
  )
}

