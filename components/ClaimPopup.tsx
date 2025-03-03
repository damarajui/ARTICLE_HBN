"use client"

import { X, Phone } from "lucide-react"

interface ClaimPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ClaimPopup({ isOpen, onClose }: ClaimPopupProps) {
  if (!isOpen) return null;
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 10000
        }}
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div style={{
        position: 'relative',
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        width: '100%',
        maxWidth: '500px',
        zIndex: 10001,
        border: '2px solid #1a5cb0'
      }}>
        <button 
          onClick={onClose} 
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            color: '#6b7280',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem'
          }}
        >
          <X size={24} />
        </button>
        
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
          color: '#0b2b5b'
        }}>
          Don't Miss Out on Your Benefits!
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          You could be eligible for up to <span style={{ fontWeight: 'bold', color: '#bd1313' }}>$6,400</span> in Health Insurance Tax Credits!
        </p>
        
        <ul style={{ marginBottom: '1.5rem', listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
            <span>Instant eligibility check</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
            <span>Free consultation with a healthcare specialist</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
            <span style={{ color: '#10b981', marginRight: '0.5rem' }}>✓</span>
            <span>$500 Rewards Card upon enrollment</span>
          </li>
        </ul>
        
        <div style={{ textAlign: 'center' }}>
          <a
            id="numberpool"
            href={`tel:+18449340565`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#bd1313',
              color: 'white',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }}
          >
            <Phone style={{ marginRight: '0.5rem' }} size={20} />
            Call Now: <span id="retreaver-number">(844) 934 0565</span>
          </a>
        </div>
        
        <p style={{
          marginTop: '1rem',
          fontSize: '0.875rem',
          textAlign: 'center',
          color: '#6b7280'
        }}>
          Don't wait! Our specialists are standing by to help you claim your benefits.
        </p>
      </div>
    </div>
  )
}

