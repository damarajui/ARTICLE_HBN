import Header from "@/components/Header"
import Hero from "@/components/Hero"
import AuthorInfo from "@/components/AuthorInfo"
import ArticleSection from "@/components/ArticleSection"
import DirectImage from "@/components/DirectImage"
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
        title="The Shocking Decision: Inflated Costs for Basic Supplies"
        content={`
          <p><strong>What's Really Happening:</strong> An audit has laid bare the Defense Department's shocking decision 
          to overpay Boeing by 8,000% for soap dispensers—an expenditure that totaled $149,072. While soap dispensers are 
          a basic necessity, this astronomical markup highlights how government contracts can be riddled with inefficiencies 
          and mismanagement.</p>

          <p><strong>The Human Cost:</strong> For taxpayers, every dollar wasted on inflated costs for everyday items means 
          fewer resources available for critical services. When government spending spirals out of control on non-essential 
          items, it undermines public trust and leaves communities questioning where their money is really going.</p>

          <p><strong>Why It Matters to You:</strong> When public funds are mismanaged at such a high level, it indirectly
          burdens you by inflating overall costs and reducing the quality of services meant to protect and serve the American
          people. It's a stark reminder that government priorities don't always align with the needs of ordinary citizens.</p>
        `}
        imageSrc="/pig.png"
        imageAlt="Cracked piggy bank with government seal, symbolizing wasteful government spending"
        useRegularImg={true}
      />
      <ArticleSection
        number={2}
        title="The Disturbing Reality: Wasteful Spending Inflates Costs for Everyone"
        content={`
          <p><strong>A Question of Accountability:</strong> The massive overcharge for soap dispensers is emblematic of a 
          broader issue: a system where cost-cutting measures are abandoned in favor of wasteful spending. When contracts 
          are mismanaged and overspending is tolerated, it creates a ripple effect that ultimately impacts the services 
          and support available to the public.</p>

          <p><strong>The Ripple Effect:</strong> Every instance of government waste, whether it's overpaying for basic 
          supplies or misallocating funds for critical programs, erodes confidence in our public institutions. The 
          consequences of such inefficiencies are felt in higher taxes and diminished resources for essential services 
          like disaster relief, education, and healthcare.</p>

          <p><strong>Your Financial Well-Being Is Non-Negotiable:</strong> In an environment where government mismanagement 
          is all too common, relying solely on public funds for your well-being is a risky gamble. It's crucial to seek 
          stability and protection in areas that truly work for you.</p>
        `}
      />
      <ArticleSection
        number={3}
        title="The One Beacon of Hope: Affordable Care Act – A Policy That Puts You First"
        content={`
          <p><strong>Why ACA Stands Out:</strong> Amid a series of government missteps, the Affordable Care Act remains 
          one of the few initiatives that consistently prioritizes the health and financial security of everyday Americans. 
          While wasteful spending scandals highlight mismanagement in other areas, ACA is designed to deliver real, tangible 
          benefits directly to you.</p>

          <p><strong>How ACA Helps:</strong><br/>
          • <em>Affordable Premiums:</em> Expanded subsidies ensure that millions of Americans can secure quality health 
          insurance without incurring crippling costs.<br/>
          • <em>Comprehensive Benefits:</em> ACA plans cover everything from preventive care and routine checkups to emergency 
          services, safeguarding you against unexpected medical expenses.<br/>
          • <em>A Commitment to the People:</em> Unlike policies swayed by inefficient spending, ACA is steadfast in its 
          mission to provide accessible, reliable healthcare for every American.</p>

          <p><strong>Your Next Step:</strong> In a climate where government waste can undermine even the simplest necessities, 
          it's more important than ever to secure a safety net that truly works for you. While overcharged soap dispensers 
          highlight the pitfalls of mismanaged funds, your right to quality, affordable health coverage remains intact through 
          the Affordable Care Act.</p>
        `}
      />
      <CTA />
      <Footer />
    </main>
  )
}

