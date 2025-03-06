"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import ClaimPopup from "./ClaimPopup"

export default function CTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Log when component mounts
  useEffect(() => {
    console.log("CTA component mounted");
  }, []);

  const handleClaimNowClick = () => {
    console.log("Claim Now clicked, current state:", isPopupOpen);
    setIsPopupOpen(true);
    console.log("State should be updated to:", true);
  }

  const handlePopupClose = () => {
    console.log("Closing popup");
    setIsPopupOpen(false);
  }

  console.log("CTA rendering, isPopupOpen:", isPopupOpen);

  return (
    <section className="section-revamped-cta">
      <div className="cta-revamped-container">
        <h2 className="cta-headline">🚨 WHILE THE GOVERNMENT WASTES BILLIONS, HERE'S HOW YOU CAN SAVE 🚨</h2>
        <div className="cta-dashed-line"></div>
        <p className="cta-description">
          <strong>Quick Tip:</strong> Even when the government overspends on basic supplies, they aren't cutting your access to dependable healthcare under the <em>Affordable Care Act (ACA)</em>.
        </p>
        <p className="cta-description">
          The problem isn't a lack of funding—it's that
          <strong> government priorities are often misaligned with American needs.</strong> The
          <em> Affordable Care Act</em> is designed to lower your monthly living expenses by covering
          health insurance costs—protecting you from the impact of wasteful government spending elsewhere.
        </p>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagecard-Fl1qRxfpAIiWnJz3fLJHy1N7iABO2j.png"
          alt="Health Rewards Card showing $500 value"
          className="cta-image"
          width={600}
          height={400}
        />
        <ul className="cta-bullets">
          <li>
            ✅ Up to <strong>$6,400 in Health Insurance Tax Credits</strong>—a government program that actually delivers value for your tax dollars!
          </li>
          <li>✅ $500 Rewards Card from your carrier to help with gas, groceries, and utilities!</li>
          <li>✅ Protection from rising costs caused by government waste and mismanagement!</li>
        </ul>
        <p className="cta-description">
          That's why we found this <strong>[EXCLUSIVE OFFER]</strong>—a legitimate, fully-backed health plan that helps
          you save big, reduce stress, and ensures your healthcare isn't compromised by wasteful government spending.
        </p>
        <p className="cta-description">💰 Find out if you qualify and start saving on health insurance today!</p>
        <div className="cta-button-container">
          <button 
            onClick={handleClaimNowClick} 
            className="cta-big-button"
            style={{ backgroundColor: '#bd1313', padding: '0.8rem 1.6rem', borderRadius: '40px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Check ACA Eligibility Now
          </button>
        </div>
      </div>
      <ClaimPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </section>
  )
}

