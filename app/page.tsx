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
        title="The Shocking Decision: FEMA Funds Redirected to NYC Migrant Housing"
        content={`
          <p><strong>What's Really Happening:</strong> In a controversial move, disaster relief funds were initially 
          funneled into New York City hotels to house migrants instead of being reserved for communities hit by natural 
          disasters. This decision, quickly brought to light by DOGE, has been widely criticized as a misuse of federal 
          resources that were meant to help Americans in times of crisis.</p>

              <p><strong>The Human Cost:</strong> Taxpayers are left reeling as funds intended for emergency response and 
              community rebuilding were diverted to support policies that many feel have nothing to do with protecting lives 
              during natural disasters. For families who have faced the devastation of hurricanes, wildfires, or floods, 
              this misallocation is a painful reminder that government priorities are often skewed toward political or social 
              agendas rather than the urgent needs of everyday Americans.</p>

          <p><strong>Why It Matters to You:</strong> When funds meant for disaster relief are misdirected, it directly 
          impacts the ability to help those suffering from real emergencies. It raises a critical question: if the 
          government can easily divert aid meant for protecting lives, where does that leave you and your community 
          when disaster strikes?</p>
        `}
        imageSrc="/masonwarnerr_A_conceptual_illustration_showing_a_cracked_U.S._550e31bd-2eef-40f2-99da-bd91ebf35b6d_2.png"
        imageAlt="Conceptual illustration showing a cracked U.S. flag symbolizing division in American priorities"
        useRegularImg={true}
      />
      <ArticleSection
        number={2}
        title="The Disturbing Reality: Prioritizing Political Agendas Over American Safety"
        content={`
          <p><strong>A Question of Values:</strong> The decision to redirect FEMA funds signals a troubling trend of 
          prioritizing politically charged initiatives over the immediate needs of citizens. While government officials 
          may claim that every allocation is justified, the reality is that these choices often leave vulnerable 
          communities without the essential support they need in times of crisis.</p>

          <p><strong>The Ripple Effect:</strong> Mismanagement of funds not only jeopardizes emergency response efforts 
          but also erodes public trust. When taxpayers see their hard-earned money diverted to causes that appear 
          disconnected from their own struggles, it fuels widespread frustration and a sense of betrayal. As funds for 
          disaster relief dwindle, the gap between government promises and real-world action widens.</p>

          <p><strong>Your Safety Is Non-Negotiable:</strong> In a system where every misstep can have life-altering 
          consequences, relying on government promises alone is a dangerous gamble. It's imperative to take control 
          of your own well-being—even when government priorities seem to falter.</p>
        `}
      />
      <ArticleSection
        number={3}
        title="The One Beacon of Hope: Affordable Care Act – A Policy That Puts You First"
        content={`
          <p><strong>Why ACA Stands Out:</strong> Amid widespread governmental mismanagement, the Affordable Care Act 
          remains one of the few initiatives that consistently prioritizes the health and security of everyday Americans. 
          While decisions like the FEMA fund misdirection reveal a government fixated on political maneuvering, ACA is 
          built on the promise of providing comprehensive, affordable health coverage to all citizens.</p>

          <p><strong>How ACA Helps:</strong><br/>
          • <em>Affordable Premiums:</em> Expanded subsidies mean millions of Americans can access quality health insurance 
          without financial strain.<br/>
          • <em>Comprehensive Benefits:</em> From preventive care and routine checkups to emergency services, ACA plans 
          ensure you're covered when you need it most.<br/>
          • <em>A Commitment to the People:</em> Unlike policies swayed by political interests, ACA remains steadfast in 
          its mission to safeguard your health and well-being.</p>

          <p><strong>Your Next Step:</strong> When government actions undermine essential services, it's crucial to secure 
          a reliable safety net for yourself and your family. While FEMA funds may be mismanaged, your right to quality, 
          affordable health coverage should never be compromised.</p>
        `}
      />
      <CTA />
      <Footer />
    </main>
  )
}

