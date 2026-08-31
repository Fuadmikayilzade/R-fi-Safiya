import React from 'react'
import './VenueSection.css'

export default function VenueSection({ venueImg }) {
  const inv = ""
  return (
    <section className="vs-section">
      <p className={`sec-label-v ${inv}`}>Mərasim Yeri</p>
      <div className="vs-img-wrap">
        <img src={venueImg} alt="Ay İşığı Şadlıq Sarayı 1" className={`vs-img ${inv}`} />
        <div className={`vs-fade ${inv}`} />
      </div>
      <div className={`vs-info ${inv}`}>
        <p className={`vs-name ${inv}`}>Ay İşığı Şadlıq Sarayı 1</p>
        <p className={`vs-addr ${inv}`}>✿ Rüstəm Rüstəmov küçəsi 1, Nizami rayonu, Bakı şəhəri</p>
        <div className="vs-btns">
          <a href="https://maps.google.com/?q=Ay+Işığı+Şadlıq+Sarayı+Bakı" target="_blank" rel="noopener noreferrer" className={`vbtn primary ${inv}`}>🗺 Google Maps</a>
          <a href="https://waze.com/ul?q=Ay+Işığı+Bakı" target="_blank" rel="noopener noreferrer" className={`vbtn outline ${inv}`}>🧭 Waze</a>
        </div>
      </div>
    </section>
  )
}