import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../../styles/benefits.css';

function Benefits() {
  const items = [
    {
      title: 'Clarity that Sells',
      text: 'Clear product descriptions, prices, and delivery details so shoppers know exactly what they’re getting—no endless calls or confusion.',
    },
    {
      title: 'Mobile-First Design',
      text: 'Most Kenyans shop on their phones. Your site will feel fast, smooth, and natural on any mobile device.',
    },
    {
      title: 'Build Instant Trust',
      text: 'Showcase Mpesa Paybill/Till numbers, verified reviews, and secure payment badges that give shoppers confidence to buy.',
    },
    {
      title: 'SEO for Local Reach',
      text: 'Optimised pages so people searching “buy furniture in Nairobi” or “fresh produce in Kisumu” find your store first.',
    },
    {
      title: 'Fast & Reliable',
      text: 'Quick load times even on slower connections—because a few extra seconds could cost you a sale.',
    },
    {
      title: 'Clear Next Steps',
      text: 'Easy “Add to Cart” and checkout buttons so customers don’t get lost before completing their purchase.',
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <header className="benefits-header">
          <h2 className="benefits-title">Benefits that actually move products</h2>
          <p className="benefits-subtitle">
            In Kenya’s busy online marketplace, you have seconds to convince a shopper to trust you and buy. <br></br>
            These essentials make your e-commerce site work harder for every click.
          </p>
        </header>

        <div className="benefits-grid">
          {items.map((b, i) => (
            <article className="benefits-card" key={i}>
              <FaCheckCircle className="benefits-icon" aria-hidden="true" />
              <h3 className="benefits-card-title">{b.title}</h3>
              <p className="benefits-card-text">{b.text}</p>
            </article>
          ))}
        </div>

        <div className="benefits-cta">
          <a href="/ClientForms/StoreForms" className="benefits-button" aria-label="Start your project">
            Start your online store
          </a>
          <p className="benefits-note">Let’s set up a store that earns while you sleep.</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
