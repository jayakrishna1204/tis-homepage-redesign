import { useState } from 'react';
import { Check, Phone, Send } from 'lucide-react';
import Reveal from '../ui/Reveal';

export default function AdmissionSection() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section className="section admission" id="admission">
      <div className="container admission-grid">
        <Reveal>
          <div>
            <p className="section-kicker">06 / ADMISSIONS</p>
            <h2>Let’s build their<br /><em>next chapter.</em></h2>
            <p className="admission-copy">Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.</p>
            <div className="contact-row">
              <Phone size={18}/>
              <div>
                <span>Admissions Helpline</span>
                <a href="tel:+919837983791">+91-9837983791</a>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <form className="enquiry-card" onSubmit={submit}>
            {submitted ? (
              <div className="success">
                <span><Check size={28}/></span>
                <h3>Thank you for enquiring.</h3>
                <p>Our admissions team will follow up with you using the details provided.</p>
                <button type="button" className="button button-outline" onClick={()=>setSubmitted(false)}>Send another enquiry</button>
              </div>
            ) : (
              <>
                <div className="form-head">
                  <span>ENQUIRE NOW</span>
                  <Send size={18}/>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="student-name">Full name</label>
                    <input id="student-name" required name="name" placeholder="Enter your full name" autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="student-email">Email <small>(optional)</small></label>
                    <input id="student-email" type="email" name="email" placeholder="Enter email address" autoComplete="email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="student-mobile">Mobile number</label>
                    <input id="student-mobile" required name="mobile" inputMode="tel" placeholder="Enter mobile number" autoComplete="tel" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="student-grade">Grade / Class</label>
                    <select id="student-grade" defaultValue="" required>
                      <option value="" disabled>Select class</option>
                      <option value="Primary">Primary</option>
                      <option value="Middle School">Middle School</option>
                      <option value="Secondary">Secondary</option>
                      <option value="Senior Secondary">Senior Secondary</option>
                    </select>
                  </div>
                </div>
                <button className="button button-primary" type="submit">
                  Submit enquiry <Send size={16}/>
                </button>
                <p className="form-note">By submitting, you agree to receive information regarding your enquiry from Tulas International School.</p>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
