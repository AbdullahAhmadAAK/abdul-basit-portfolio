import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Ensure you have this CSS file
import logoimage from './logopics/High Regulation/Work 1 black.jpg';
import aboutPic1 from './IMG_20240203_211219.jpg';
import aboutPic2 from './IMG_20240203_211317.jpg';
import aboutPic3 from './WhatsApp Image 2024-05-17 at 14.53.52.jpeg.jpg';

const HomePage = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const videos = [
        "https://www.youtube.com/embed/d8gqXgLzSDk?si=v9Y1p7H9TEAOjYXC",
        "https://www.youtube.com/embed/VwSFpOGAwKg?si=GmEegiiwDJAJqBv1",
        "https://www.youtube.com/embed/your_video_id_3"
        // Add more video URLs as needed
    ];

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
            }, 5000); // Change slide every 5 seconds
            return () => clearInterval(interval);
        }
    }, [isPaused, videos.length]);

    const handleVideoClick = () => {
        setIsPaused(true); // Pause the slider when a video is clicked
    };

    return (
        <div>
            {/* Top Navigation Bar */}
            <div className="top-bar">
                <div className="contact-info">
                    <span>📞 +92 328 5399335</span>
                    <span>✉️ pa@abdulbasitpawar.com</span>
                    <span>🕒 Time Zone: PST</span>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="navbar">
                <img className='logo' src={logoimage} alt="Logo" />
                <ul className="nav-links">
                    <li><a href="#top">Home</a></li>
                    <li className="dropdown">
                        <button className="dropbtn">Sections</button>
                        <div className="dropdown-content">
                            <a href="#testimonials">Testimonials</a>
                            <a href="#study-plans">Study Plans</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#contact">Contact us</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <button className="dropbtn">More</button>
                        <div className="dropdown-content">
                            <a href="#about">About</a>
                            <a href="#qualification">Qualification</a>
                            <a href="#research">Research Experience</a>
                            <a href="#faqs">FAQ's</a>
                        </div>
                    </li>
                    <li className='freetrial'><a href="https://wa.me/message/CASFE6CD3FVQI1">Free Trial</a></li>
                </ul>
            </nav>
            {/* Content Section (Slider + Mission & Vision) */}
            <section id="content-section" className="content-section">
                <div className="slider-container">
                    <div 
                        className="slider" 
                        style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${videos.length * 100}%` }}
                    >
                        {videos.map((video, index) => (
                            <div className="video-frame-container" key={index} style={{ width: `${100 / videos.length}%` }}>
                                <iframe
                                    className="video-frame"
                                    src={video}
                                    title={`YouTube video ${index + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    onClick={handleVideoClick}
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mission-vision">
                    <h2>My Mission</h2>
                    <p>My mission is to provide a 
                        transformative educational experience that 
                        fosters intellectual curiosity, critical 
                        thinking, and innovation. I am committed 
                        to equipping students with the 
                        knowledge, skills, and ethical foundations 
                        necessary to excel in their chosen 
                        fields and to contribute positively to society.
                    </p>
                    <h2>My Vision</h2>
                    <p>My vision is to be a leading 
                        academic institution recognized for excellence 
                        in education, research, and community 
                        engagement. I aspire to create a dynamic 
                        learning environment that embraces diversity, 
                        promotes inclusivity, and drives social progress.
                    </p>
                </div>
            </section>

            <section className="achievement-grid">
                <div className="achievement">
                    <h2>770/800</h2>
                    <p>SAT (Math)</p>
                </div>
                <div className="achievement">
                    <h2>169/170</h2>
                    <p>GRE Quan</p>
                </div>
                <div className="achievement">
                    <h2>100+</h2>
                    <p>Students assisted</p>
                </div>
                <div className="achievement">
                    <h2>5.0</h2>
                    <p>Ratings</p>
                </div>
                <div className="achievement">
                    <h2>LUMS</h2>
                    <p>Alumni</p>
                </div>
            </section>
            
            {/* Home Section */}
            <section id="qualification" className='qualification'>
                <h1>Qualification</h1>
                <p>BSc (Hons)</p>
                <p>Department of Mathematics: Emerging Regional Center of Excellence</p>
                <p>Syed Babar Ali School of Science & Engineering</p>
                <p>Lahore University of Management Sciences</p>
            </section>
            <section id="research" className='research'>
                <h1>Research Experience</h1>
                <h3>Title: An Empirical Analysis of Amazon Product Sales; A Comprehensive Study on the Applicability of Zipf’s Law</h3>
                <p>Supervised by: Dr. Sultan Sial, Associate Professor</p>
                <p>For more details visit <a href='https://sbasse.lums.edu.pk/applying-math-in-real-world'>Applying Math in Real World</a></p>
                <h3>Title: Verification of study regarding "Impact of school closures and reopening on Covid-19 caseload in 6 cities of Pakistan" by reproducing it</h3>
                <p>Goal: To check validity of results</p>
                <p>Supervised by: Dr. Sultan Sial, Associate Professor</p>
                <p>Original Study Link: <a href='https://journals.plos.org/globalpublichealth/article?id=10.1371/journal.pgph.0000648'>Global Public Health</a></p>
            </section>

            {/* Study Plans Section */}
            <section id="study-plans" className='study-plans'>
                <h2>Study Plans</h2>
                <div className="study-plans-container">
                    <div className="study-plan">
                        <h3>Foundation</h3>
                        <p><span className="checkmark">✔</span> 4 sessions per week</p>
                        <p><span className="checkmark">✔</span> Practice material</p>
                    </div>
                    <div className="study-plan">
                        <h3>Mastery</h3>
                        <p><span className="checkmark">✔</span> 6 sessions per week</p>
                        <p><span className="checkmark">✔</span> Practice material</p>
                        <p><span className="checkmark">✔</span> Mock tests</p>
                        <p><span className="checkmark">✔</span> WhatsApp support</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className='pricing'>
                <h2>Pricing</h2>
                <div className="pricing-container">
                    <div className="pricing-plan">
                        <h3>Subcontinent</h3>
                        <p>monthly fees is PKR 30,000 (foundation) & PKR 40,000 (mastery)</p>
                    </div>
                    <div className="pricing-plan">
                        <h3>International</h3>
                        <p>monthly fees is USD 250 (foundation) & USD 325 (mastery)</p>
                    </div>
                </div>
                <p>Note: These prices have been stated on 1st September 2024. For updated prices, please WhatsApp us at +92-328-5399335.</p>
            </section>

            {/* About Section */}
            <section id="about" className='about'>
                <h1>About</h1>
                <div className="about-container">
                    <div className="about-text">
                        <div className="about-item">
                            <h3>The person</h3>
                            <p>Abdul Basit Pawar is a renowned mathematics tutor for preparation of GRE (Quan), SAT (Math section) and undergraduate math courses. Born on August 06, 2002, in Gujranwala, he has become a top-rated tutor both among local and international students. His journey to success is marked by perseverance, passion, and a deep understanding of mathematics.</p>
                        </div>
                        <div className="about-item2">
                            <h3>The Journey</h3>
                            <p>Abdul Basit's journey is a unique one, taking him from the world of entrepreneurship to help students as a tutor. He is the Co-founder of bikechaiye.com, the pioneering fuel bike rental service for university students and Yodobikes.com, the only electric scooter sharing service in Pakistan. Despite achieving entrepreneurial acclaim initially, Abdul Basit felt a calling to pursue a path that allowed him to help students.</p>
                        </div>
                        <div className="about-item3">
                            <h3>The Transition</h3>
                            <p>AbdulBasit's transition from entrepreneur to math tutor stemmed from a desire to devote himself for mathematics. He began by assisting more than a thousand students at LUMS Math Circles, drawing on his own experiences and challenges to connect with students. He then started working as a private tutor for mathematics and enjoying it till today. His relatable approach and simple language made him students’ favourite.</p>
                        </div>
                    </div>
                    <div className="about-images">
                        <div className="about-image">
                            <img src={aboutPic1} alt="About 1" />
                        </div>
                        <div className="about-image">
                            <img src={aboutPic2} alt="About 2" />
                        </div>
                        <div className="about-image">
                            <img src={aboutPic3} alt="About 3" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className='faqs'>
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(0)}>
                        <span>Do I need to pay the fees in advance?</span>
                        <span>{activeFAQ === 0 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 0 && (
                        <div className="faq-answer">
                            <p>Yes, you need to pay the monthly tuition fee after Free Trial/Demo session.</p>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(1)}>
                        <span>Is there any registration fees?</span>
                        <span>{activeFAQ === 1 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 1 && (
                        <div className="faq-answer">
                            <p>Yes, a registration fee of Rs 5000 or USD 50 also applies unless stated otherwise.</p>
                        </div>
                    )}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(2)}>
                        <span>Will my scores improve after taking classes?</span>
                        <span>{activeFAQ === 2 ? '-' : '+'}</span>
                    </div>
                    {activeFAQ === 2 && (
                        <div className="faq-answer">
                            <p>Score improvement is usually visible in 3-4 months provided that you complete the assignments.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
