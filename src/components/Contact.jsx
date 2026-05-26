import React, { useState } from 'react';
import { Mail, MapPin, Clock, Globe, BookOpen } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    try {
      const response = await fetch("https://formsubmit.co/ajax/tanvijain87@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        })
      });
      
      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">For research collaboration, student inquiries, or speaking invitations</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-container">
            {formState === 'success' ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent</h3>
                <p>Thank you for reaching out. Dr. Tanvi Jain will get back to you soon.</p>
                <button 
                  className="btn btn-ghost" 
                  style={{ color: 'var(--color-secondary)', borderColor: 'var(--color-secondary)' }}
                  onClick={() => setFormState('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="Dr. John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required placeholder="john@university.edu" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="Collaboration">Research Collaboration</option>
                    <option value="Student Inquiry">Student Inquiry (PhD/M.Tech)</option>
                    <option value="Speaking">Speaking Invitation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary full-width" disabled={formState === 'loading'}>
                  {formState === 'loading' ? 'Sending...' : formState === 'error' ? 'Error. Try Again?' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="info-item">
              <MapPin className="info-icon" size={24} />
              <div className="info-text">
                <h4>Office</h4>
                <p>Cabin No.2, E2 Block,<br />BML Munjal University</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" size={24} />
              <div className="info-text">
                <h4>Email</h4>
                <p>tanvijain87@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <Globe className="info-icon" size={24} />
              <div className="info-text">
                <h4>ORCID</h4>
                <p><a href="https://orcid.org/0000-0002-1817-9577" target="_blank" rel="noopener noreferrer">0000-0002-1817-9577</a></p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon" size={24} />
              <div className="info-text">
                <h4>Phone</h4>
                <p>+91 9559355403</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" title="Google Scholar">
                <Globe size={20} />
                <span>Google Scholar</span>
              </a>
              <a href="#" className="social-link" title="ResearchGate">
                <BookOpen size={20} />
                <span>ResearchGate</span>
              </a>
              <a href="https://www.linkedin.com/in/dr-tanvi-jain-718927101/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
