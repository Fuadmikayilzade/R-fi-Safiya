import React, { useState } from 'react'
import './PhotoShare.css'

const LINK = 'https://photos.app.goo.gl/zhhBgwFTs88T1UHX9'

export default function PhotoShare() {
  const [copied, setCopied] = useState(false)
  const inv = ""

  const handleCopy = () => {
    navigator.clipboard.writeText(LINK).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section className="ps-section">
      <div className={`ps-card ${inv}`}>
        <div className={`ps-ornament ${inv}`}><div className="ps-line"/><span>✿</span><div className="ps-line"/></div>

        <div className={`ps-icon-wrap ${inv}`}>
          <svg viewBox="0 0 48 48" className="ps-icon" fill="none">
            <path d="M18 8l-3 5H8a3 3 0 00-3 3v22a3 3 0 003 3h32a3 3 0 003-3V16a3 3 0 00-3-3h-7l-3-5H18z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="24" cy="26" r="8" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="24" cy="26" r="4.5" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

        <h3 className={`ps-title ${inv}`}>Xatirələrinizi Bizimlə Bölüşün</h3>
        <div className="g-divider"><div className="g-diamond"/></div>

        <p className={`ps-desc ${inv}`}>
          Mərasimdə çəkdiyiniz <strong>foto</strong> və <strong>video</strong>larınızı
          Google Photos albomuna yükləyin — bu xatirələr bizimlə əbədi qalacaq 🌿
        </p>
        <p className={`ps-sub ${inv}`}>
          Aşağıdakı düyməyə toxunaraq birbaşa alboma keçin və şəkil əlavə edin.
        </p>

        <div className="ps-btns">
          <a href={LINK} target="_blank" rel="noopener noreferrer" className={`ps-btn-main ${inv}`}>
            <svg viewBox="0 0 24 24" className="ps-gicon" fill="none">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Alboma Şəkil Yüklə
          </a>
          <button className={`ps-btn-copy ${inv}`} onClick={handleCopy}>
            {copied ? '✓ Kopyalandı' : '🔗 Linki Kopyala'}
          </button>
        </div>

        <div className={`ps-ornament ${inv}`} style={{marginTop:18,marginBottom:0}}><div className="ps-line"/><span>✿</span><div className="ps-line"/></div>
      </div>
    </section>
  )
}