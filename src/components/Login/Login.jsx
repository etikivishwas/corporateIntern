import React, { useState } from 'react'
import styles from './styles.module.css'
import { FaBuilding, FaUserTie, FaCode, FaServer, FaProjectDiagram } from 'react-icons/fa';

function Login() {
  const [activeTab, setActiveTab] = useState("signin");

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.topRow}>
          <FaBuilding className={styles.icon} />
          <h1 className={styles.title}>CorporateIntern</h1>
        </div>
        <div className={styles.bottomRow}>
          <p className={styles.subtitle}>
            Real-World Corporate Experience for Students
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.mainContent}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Join the Future of Professional Development</h2>
          <p className={styles.description}>
            Experience real-world corporate environments with industry-standard tools,
            agile methodologies, and expert mentorship from leading MNCs.
          </p>

          <div className={styles.features}>
            <div className={styles.featureBox}><FaCode /> Complete SDLC Experience</div>
            <div className={styles.featureBox}><FaUserTie /> Industry Mentor Guidance</div>
            <div className={styles.featureBox}><FaServer /> Virtual Machine Environments</div>
            <div className={styles.featureBox}><FaProjectDiagram /> Agile Project Management</div>
          </div>

          <div className={styles.stats}>
            <div><h3>2,500+</h3><p>Students Trained</p></div>
            <div><h3>150+</h3><p>Industry Mentors</p></div>
            <div><h3>25+</h3><p>Partner Companies</p></div>
          </div>

          <div className={styles.testimonial}>
            <img src="/profile.jpg" alt="Priya Sharma" className={styles.avatar} />
            <p className={styles.quote}>
              "This program gave me real-world experience that directly translated to my role at Google."
            </p>
            <p className={styles.author}>Priya Sharma, Software Engineer at Google</p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.tabs}>
            <button
              className={activeTab === "signin" ? styles.activeTab : styles.inactiveTab}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
            <button
              className={activeTab === "signup" ? styles.activeTab : styles.inactiveTab}
              onClick={() => setActiveTab("signup")}
            >
              Create Account
            </button>
          </div>

          {activeTab === "signin" ? (
            <>
              <h2 className={styles.formTitle}>Welcome Back</h2>
              <p className={styles.formSubtitle}>Sign in to continue your professional journey</p>

              <form className={styles.form}>
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />

                <label>Password</label>
                <input type="password" placeholder="Enter your password" />

                <div className={styles.rememberRow}>
                  <div>
                    <input type="checkbox" /> <span>Remember me</span>
                  </div>
                  <a href="/" className={styles.forgot}>Forgot Password?</a>
                </div>

                <button type="submit" className={styles.signInBtn}>Sign In</button>
              </form>

              <div className={styles.orLine}>
                <span></span> or continue with <span></span>
              </div>

              <button className={styles.googleBtn}>Sign in with Google</button>
            </>
          ) : (
            <>
              <h2 className={styles.formTitle}>Create Your Account</h2>
              <p className={styles.formSubtitle}>
                Join thousands of professionals advancing their careers
              </p>

              <form className={styles.form}>
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />

                <label>Email Address *</label>
                <input type="email" placeholder="Enter your email address" />

                <label>Phone Number</label>
                <input type="tel" placeholder="+1 (555) 123-4567" />

                <label>Role *</label>
                <select>
                  <option>Select your role</option>
                  <option>Student</option>
                  <option>Mentor</option>
                  <option>Partner</option>
                </select>

                <label>Password *</label>
                <input type="password" placeholder="Create a strong password" />

                <label>Confirm Password *</label>
                <input type="password" placeholder="Confirm your password" />

                <div className={styles.checkRow}>
                  <input type="checkbox" /> <span>I agree to the Terms of Service and Privacy Policy</span>
                </div>
                <div className={styles.checkRow}>
                  <input type="checkbox" /> <span>I'd like to receive updates about new features and opportunities</span>
                </div>

                <button type="submit" className={styles.signInBtn}>Create Account</button>
              </form>

              <div className={styles.orLine}>
                <span></span> or continue with <span></span>
              </div>

              <button className={styles.googleBtn}>Sign up with Google</button>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <a href="/">Support</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Contact Us</a>
        </div>
        <div className={styles.footerRight}>
          <p>© 2025 CorporateIntern. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Login
