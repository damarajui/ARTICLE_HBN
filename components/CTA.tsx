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
        <h2 className="cta-headline">🚨 THE GOV IS A MESS—HERE'S HOW YOU CAN STILL GET HELP 🚨</h2>
        <div className="cta-dashed-line"></div>
        <p className="cta-description">
          Most Americans don't realize: The <em>Affordable Care Act (ACA)</em>
          offers <strong>up to $6,400 in Health Insurance Tax Credits</strong>—and you could be
          <strong>eligible right now</strong>!
        </p>
        <p className="cta-description">
          The problem isn't a lack of funding—it's that
          <strong>too many people don't know about these benefits.</strong> This
          <em>fully-funded, government-backed program</em> is designed to lower your monthly living expenses by covering
          health insurance costs—and it even gets better.
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
            ✅ Up to <strong>$6,400 in Health Insurance Tax Credits</strong>—straight from the state!
          </li>
          <li>✅ $500 Rewards Card from your carrier to help with gas, groceries, and utilities!</li>
          <li>✅ Lower monthly expenses, better healthcare coverage, and more money in your pocket!</li>
        </ul>
        <p className="cta-description">
          That's why we found this <strong>[EXCLUSIVE OFFER]</strong>—a legitimate, fully-backed health plan that helps
          you save big, reduce stress, and put money back where it belongs: in <strong>YOUR</strong> wallet.
        </p>
        <p className="cta-description">💰 Find out if you qualify and start saving on health insurance today!</p>
        <div className="cta-button-container">
          <button 
            onClick={handleClaimNowClick} 
            className="cta-big-button"
            style={{ backgroundColor: '#bd1313', padding: '0.8rem 1.6rem', borderRadius: '40px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Claim Now
          </button>
        </div>
      </div>
      <ClaimPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </section>
  )
}

