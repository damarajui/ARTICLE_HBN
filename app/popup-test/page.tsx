"use client"

import { useState } from 'react'
import ClaimPopup from '@/components/ClaimPopup'

export default function PopupTest() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '2rem' }}>Popup Test Page</h1>
      
      <button 
        onClick={() => {
          console.log("Opening popup");
          setIsPopupOpen(true);
        }}
        style={{ 
          backgroundColor: '#bd1313', 
          color: 'white', 
          padding: '1rem 2rem', 
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          border: 'none'
        }}
      >
        Open Popup
      </button>
      
      <p style={{ marginTop: '1rem' }}>
        Current popup state: {isPopupOpen ? 'OPEN' : 'CLOSED'}
      </p>
      
      <ClaimPopup 
        isOpen={isPopupOpen} 
        onClose={() => {
          console.log("Closing popup");
          setIsPopupOpen(false);
        }} 
      />
    </div>
  )
} 