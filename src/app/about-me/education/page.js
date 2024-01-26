import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const EducationPage = () => {

    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Education</title>
                <meta name="description" content="Lorem Ipsum"/>
            </Head>
            <div className="page-content">
                <h2 className="directory">
                    <Link href="/about-me" className="link">About Me</Link> | Education
                </h2>

                <h4 className="section-title">Missouri University of Science & Technology (S&T)</h4>
                <section className="section">
                    <p className="body-upper">B.S. Computer Science</p>
                    <p className="body-upper">Aug 2016 - Dec 2020</p>
                    <p className="body-upper">Rolla, MO, USA</p>
                    <p className="body-upper">GPA 3.81, Summa Cum Laude</p>
                </section>
                
                
                <h4 className="section-title">Comp Sci Transcript</h4>
                <div className = "section">
                    <p className="body-upper">COMP SCI 1001 - Special Topics (Data Structures Laboratory)</p>
                    <p className="body-upper">COMP SCI 1010 - Intro / Computer Science</p>
                    <p className="body-upper">COMP SCI 1200 - Discrete Math For Computer Science</p>
                    <p className="body-upper">COMP SCI 1510 - Data Structures</p>
                    <p className="body-upper">COMP SCI 1570 - Intro To Programming</p>
                    <p className="body-upper">COMP SCI 1580 - Intro To Programming Lab</p>
                    <p className="body-upper">COMP SCI 2200 - Theory of Computer Science</p>
                    <p className="body-upper">COMP SCI 2300 - File Structures and Intro to Databases</p>
                    <p className="body-upper">COMP SCI 2500 - Algorithms</p>
                    <p className="body-upper">COMP SCI 3100 - Software Engineering I</p>
                    <p className="body-upper">COMP SCI 3200 - Intro Numerical Methods</p>
                    <p className="body-upper">COMP SCI 3500 - Programming Languages & Translators</p>
                    <p className="body-upper">COMP SCI 3800 - Intro To Operating Systems</p>
                    <p className="body-upper">COMP SCI 4096 - Software System Development</p>
                    <p className="body-upper">COMP SCI 5001 - Special Topics (Introduction to Deep Learning)</p>
                    <p className="body-upper">COMP SCI 5001 - Special Topics (Experiential Entrepreneurship Computer Scientists)</p>
                    <p className="body-upper">COMP SCI 5001 - Special Topics (Introduction to Virtual Reality)</p>
                    <p className="body-upper">COMP SCI 5402 - Intro to Data Mining</p>
                    <p className="body-upper">COMP SCI 5700 - Bioinformatics</p>
                </div>
                
                
                <h4 className="section-title">Scholarships</h4>
                <div className="section">
                    <p className="body-upper">Missouri Bright Flight Scholarship ($12,000)</p>
                    <p className="body-upper">Missouri S&T University Scholarship ($8,000)</p>
                    <p className="body-upper">Missouri S&T Trustees Scholarship ($14,000)</p>
                    <p className="body-upper">Missouri S&T CS Department Scholarship ($2500)</p>
                    <p className="body-upper">Garmin Scholarship ($20,000)</p>
                    <p className="body-upper">Chang-Lin Tien Scholarship ($1,000)</p>
                    <p className="body-upper">Donald D. Myers Scholarship ($1,500)</p>
                </div>
                
                
                <h4 className="section-title">Awards & Honors</h4>
                <div className="section">
                    <p className="body-upper">Missouri S&T Most Improved Organization (2019)</p>
                    <p className="body-upper">Missouri S&T CS Leadership Award (2019, 2020)</p>
                    <p className="body-upper">Missouri S&T CS Ambassador Award (2019, 2020)</p>
                    <p className="body-upper">Miner Key ICCA Midwest QF Runner Up (2020)</p>
                    <p className="body-upper">Miner Key ICCA Midwest QF Best Choreo (2020)</p>
                    <p className="body-upper">MLH Top 50 Hacker (2019)</p>
                    <p className="body-upper">1st Place @ TAVhacks (2020)</p>
                    <p className="body-upper">1st Place @ Union Pacific Hackathon (2018)</p>
                    <p className="body-upper">2nd Place @ Forbes Hackathon (2018, 2019)</p>
                    <p className="body-upper">Goldman Saches PRIDE Summit Scholar (2018)</p>
                    <p className="body-upper">Forbes Under 30 Scholar (2018, 2019)</p>
                    <p className="body-upper">O4U Tech Scholar (2019)</p>
                </div>

                <h4 className="section-title">Recommendations</h4>
                <div className="section">
                    <p className="reccomendation">
                        Chris Maples, Missouri S&T Chancellor<br/><br/>
                        <i>"Christopher - it has been an honor and privilege to work with you and see so many of the things that you have accomplished on behalf of our students at Missouri S&T. I know that you will accomplish great things in the years to come and look forward to seeing what direction you go and what impact you have."</i>
                    </p>
                </div>
                
                
                <h4 className="section-title">Extracurriculars</h4>
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">PickHacks</h3>
                        <p className="body-upper">Co-Founder, Co-Director, Finance + Dev + Design Lead</p>
                        <p className="body-upper">Mar 2018 - Jan 2021</p>
                    </div>
                    <img className="image-banner" src="/about-me/pickhacks.png" alt="PickHacks Team Picture"/>
                    <p className="body-lower">Transformed the Midwest hackathon landscape by scaling an organizing team of students, raising an ungodly amount of sponsorship money, and establishing a thriving hacker community.</p>
                    <ul className="bullets">
                        <li>Orchestrated and guided a dynamic team of 18 students, propelling PickHacks and PickleHack to become premier hackathons in the Midwest, boasting over 500 attendees annually.</li>
                        <li>Singlehandedly raised and managed $170,000 in corporate and university sponsorships, adeptly navigating 501(c) tax exemptions, and overseeing multiple bank accounts both within and outside the university.</li>
                        <li>Masterminded exponential growth by scaling the team, overseeing the design of captivating websites and marketing materials, and leading a powerhouse development team. The result: flyers on every wall of every Midwest campus, a comprehensive suite of platforms, from the main website to hacker portals, resume portals, sponsor portals, and even cutting-edge on-prem devices.</li>
                        <li>Established a vibrant community for S&T students to extend their learning beyond the traditional classroom setting, fulfilling crucial "experiential learning" requirements essential for graduation. Notably, our events helped secure internships and full-time roles for over 30 S&T students.</li>
                        <li>Attracted an illustrious lineup of sponsors that reads like a who's who, including heavyweights like St. Louis Bread Co (Panera), St. Louis Cardinals, Boeing, Mastercard, GitHub, Rolls Royce, State Farm, AT&T, Accenture, and Redbull.</li>
                    </ul>
                    <div className="section-skinny">
                        <a href="https://www.pickhacks.io/" className="body-lower" target="_blank">PickHacks Official Website</a>
                        <a href="https://www.instagram.com/sandtpickhacks/?hl=en" className="body-lower" target="_blank">PickHacks Instagram</a>
                        <a href="https://youtu.be/Iqnbst4-Ujw?si=y_bCzJeAUKDIPG6t" className="body-lower" target="_blank">PickHacks 2019 Recap Video</a>
                        <a href="https://youtu.be/wE_aFwbrVAA?si=kd1wvE95H52aqUaU" className="body-lower" target="_blank">MLH HackCon VII - Session Speaker</a>
                        <a href="https://news.mst.edu/2019/02/missouri-st-to-host-pickhacks-competition/" className="body-lower" target="_blank">Missouri S&T PickHacks Article</a>
                    </div>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Miner Key</h3>
                        <p className="body-upper">Founder, President, Music Director</p>
                        <p className="body-upper">Jan 2018 - Jan 2021</p>
                    </div>
                    <img className="image-banner" src="/about-me/miner-key.png" alt="Miner Key ICCA Group Picture"/>
                    <p className="body-lower">Founded and propelled Miner Key, a dynamic co-ed collegiate a cappella group, to meteoric success with over 15,000 subscribers and 3 million views/streams on YouTube and Spotify, culminating in multiple accolades at the prestigious ICCA competition.</p>
                    <ul className="bullets">
                        <li>Assembled, directed, and musically led a team of 18 students, achieving 2nd place in the 2020 Midwest Quarterfinals of the prestigious ICCA competition. Secured additional accolades for the best choreography and recorded the 2nd highest score ever for a first-time group.</li>
                        <li>Singlehandedly raised $10,000 through strategic relationship-building with the Chancellor, collaboration with the Department of Music, and successful campaigns to the student council, enabling the acquisition of arrangements, equipment, and professional mixing services.</li>
                        <li>Conducted bi-weekly rehearsals, teaching vocal parts, shaping the group's sound, and all administrative tasks, including securing rehearsal spaces, booking gigs, and implementing a comprehensive recruitment process. This hands-on approach transformed Miner Key into a well-oiled machine, ensuring both musical excellence and operational cohesion.</li>
                        <li>Crafted and choreographed an electrifying, award-winning sequence for Miner Key's ICCA competition set, showcasing an innovative approach that defied conventional expectations, setting the group apart with style and flair despite zero prior choreography and dance experience.</li>
                        <li>Amidst the challenges of the pandemic, facilitated the production, review, and release of professional recordings of Miner Key's ICCA set by coordinating with a professional mixing studio.</li>
                        <li>Established and managed Miner Key's presence on social media platforms, including Instagram, Facebook, YouTube, and Spotify, contributing to the group's visibility and outreach.</li>
                    </ul>
                    <section className="section-skinny">
                        <a href="https://www.youtube.com/@minerkeyacappella7421" className="body-lower" target="_blank">Miner Key Official YouTube Channel</a>
                        <a href="https://open.spotify.com/artist/72NZlUC6Bn1iSAtTE13Y6B?si=vpUek8KBQrmGc7picW7uZg" className="body-lower" target="_blank">Miner Key Official Spotify</a>
                        <a href="https://youtu.be/-ZwS4yYLXV0?si=GPLnw0P-LO3f4G3f" className="body-lower" target="_blank">Miner Key 2019 ICCA Set</a>
                        <a href="https://varsityvocals.com/results-page/?fwp_year=2020&fwp_type=icca&fwp_region=midwest&fwp_venue=missouri-state-university" className="body-lower" target="_blank">Miner Key 2019 ICCA Results</a>
                        <a href="https://www.instagram.com/sandtminerkey/" className="body-lower" target="_blank">Miner Key Instagram</a>
                    </section>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">S&T Association for Computer Machinery (ACM)</h3>
                        <p className="body-upper">Vice President, ACM Hack Chair</p>
                        <p className="body-upper">May 2018 - Aug 2020</p>
                    </div>
                    <img className="image-banner" src="/about-me/acm.png" alt="ACM Executive Team Picture"/>
                    <p className="body-lower">Orchestrated a transformative era of S&T's chapter of ACM by engaging with 7 dynamic communities of over 200 members across 100s of events.</p>
                    <ul className="bullets">
                        <li>Elevated S&T ACM and its communities by introducing groundbreaking programs such as concept events, captivating socials, and career-shaping workshops.</li>
                        <li>Played a pivotal role in the design and development of the S&T ACM website and resume portal, facilitating career growth and opportunities for members through a streamlined platform.</li>
                        <li>Pioneered S&T ACM's social media presence by initiating and managing the organization's first social media accounts, enhancing visibility and engagement.</li>
                        <li>Grew and created automated tooling for the S&T ACM Discord server, fostering a supportive environment for computer science students to connect and collaborate.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://www.mstacm.org/" className="body-lower" target="_blank">S&T ACM Official Website</a>
                        <a href="https://www.instagram.com/mstacm/" className="body-lower" target="_blank">S&T ACM Instagram</a>
                        <a href="https://github.com/mstacm" className="body-lower" target="_blank">S&T ACM GitHub</a>
                        <a href="https://cs.mst.edu/undergraduate-degree/student-organizations/" className="body-lower" target="_blank">S&T CS Department Student Orgs</a>
                        <a href="https://cs.mst.edu/newsandevents/student-events/" className="body-lower" target="_blank">S&T CS Department Student Events</a>
                    </nav>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">SPECTRUM (LGBTQ+)</h3>
                        <p className="body-upper">Public Relations</p>
                        <p className="body-upper">Apr 2019 - May 2020</p>
                    </div>
                    <img className="image-banner" src="/about-me/spectrum.png" alt="Spectrum Executive Team Picture"/>
                    <p className="body-lower">Cultivated a profound sense of belonging and community for S&T LGBTQ+ students, fostering an inclusive environment that transcends the digital and physical realms.</p>
                    <ul className="bullets">
                        <li>Revolutionized SPECTRUM's outreach by catapulting the organization into the digital age with a vibrant and active presence on Instagram and Twitter.</li>
                        <li>Amplified SPECTRUM's visibility on campus by personally designing and strategically disseminating modern marketing materials.</li>
                        <li>Secured a dedicated office space, providing the executive team with a centralized hub for meetings and storage, fostering organizational efficiency.</li>
                        <li>Successfully advocated for SPECTRUM's financial needs, securing an impressive $4,000 per semester budget as the organization's representative at Student Council Meetings.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://lgbtqrolla.org/resources/campus/" className="body-lower" target="_blank">S&T SPECTRUM S&T Website</a>
                        <a href="https://www.instagram.com/sandtspectrum/" className="body-lower" target="_blank">S&T SPECTRUM Instagram</a>
                        <a href="https://sdi.mst.edu/newresources/currentstudents/lgbtqresources/" className="body-lower" target="_blank">S&T SPECTRUM x Student Diversity Initiatives</a>
                    </nav>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">TAVtech</h3>
                        <p className="body-upper">Cybersecurity Fellow</p>
                        <p className="body-upper">Dec 2019 - Jan 2020</p>
                    </div>
                    <img className="image-banner" src="/about-me/tavtech.png" alt="TAVtech Class Picture"/>
                    <p className="body-lower">Chosen as a standout participant in the prestigious TAVtech Cybersecurity Fellowship's Winter 2019 class, studying cybersecurity while fully immersed in the vibrant Israeli culture and startup ecosystem.</p>
                    <ul className="bullets">
                        <li>Immersed myself in over 80 hours of intensive and immersive cybersecurity training throughout an entire winter break.</li>
                        <li>Ventured into a new city, embracing its language and culture while forging lifelong friendships with fellow participants.</li>
                        <li>Took innovation by storm by conceiving, designing, and developing a groundbreaking mobile app to promote STD testing and transparency within the LGBTQ+ community, achieving a 1st-place finish at the TAVtech hackathon.</li>
                        <li>Skillfully secured a $1,000 no-strings-attached grant from the esteemed 1517 Fund, propelling the development of a robust MVP of the aforementioned mobile app following the conclusion of the fellowship.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://taventure.org/" className="body-lower" target="_blank">TAVtech Official Website</a>
                        <a href="https://www.linkedin.com/company/tavml/" className="body-lower" target="_blank">TAVtech LinkedIn Page</a>
                        <a href="https://econnection.mst.edu/2020/04/technology-fellowship-takes-student-to-in-israel/" className="body-lower" target="_blank">S&T TAVtech Article</a>
                    </nav>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Out for Undergrad (O4U)</h3>
                        <p className="body-upper">Alumni, Campus Ambassador</p>
                        <p className="body-upper">Feb 2020 - Oct 2020</p>
                    </div>
                    <ul className="bullets">
                        <li>Orchestrated and executed impactful outreach programs tailored to connect with LGBTQ+ students across Midwest universities, fostering a sense of community and support.</li>
                        <li>Captivated audiences through dynamic presentations and shared slide decks with thousands of students, resulting in 156 applications to O4U initiatives.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://www.outforundergrad.org/tech" className="body-lower" target="_blank">Out for Undergrad Website</a>
                        <a href="https://www.linkedin.com/posts/christopherlgu_o4ut2019-activity-6582278201970688000--Rc8?utm_source=share&utm_medium=member_desktop" className="body-lower" target="_blank">O4U LinkedIn Post</a>
                    </nav>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Major League Hacking</h3>
                        <p className="body-upper">Community Expert, Top 50 Hacker</p>
                        <p className="body-upper">Aug 2018 - Jan 2021</p>
                    </div>
                    <ul className="bullets">
                        <li>Leveraged my expertise in pioneering my university's inaugural hackathon group to become an official advisor, extending invaluable guidance to new and experienced community organizers.</li>
                        <li>Conducted video call sessions, providing comprehensive support in areas such as finances, logistics, website development, judging, and day-of event scenarios, imparting crucial insights to fellow organizers.</li>
                        <li>Contributed to the enhancement of community-building practices by reporting key feedback and insights to MLH, actively shaping and refining the official, free organizer handbook available online.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://mlh.io/" className="body-lower" target="_blank">MLH Official Website</a>
                        <a href="https://top.mlh.io/2020/profiles/christopher-gu" className="body-lower" target="_blank">MLH Top 50 - Christopher Gu</a>
                        <a href="https://top.mlh.io/2020/profiles/the-pickhacks-team" className="body-lower" target="_blank">MLH Top 50 - The PickHacks Team</a>
                        <a href="https://www.instagram.com/mlhacks/p/CsFB_HLOTTm/?img_index=1" className="body-lower" target="_blank">MLH Commmunity Spotlight</a>
                        <a href="https://news.mlh.io/how-becoming-a-hackathon-organizer-helped-me-launch-my-first-business-stellar-effects-04-04-2023" className="body-lower" target="_blank">MLH Article</a>
                        <a href="https://www.linkedin.com/posts/christopherlgu_hackconvii-mlh-hackathon-activity-6572181956291887104-LJuQ" className="body-lower" target="_blank">HackCon LinkedIn Post</a>
                    </nav>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Missouri S&T CS Department</h3>
                        <p className="body-upper">Student Ambassador</p>
                        <p className="body-upper">Dec 2018 - Dec 2020</p>
                    </div>
                    <ul className="bullets">
                        <li>Hosted engaging sessions for prospective high school students and parents, providing an insightful introduction to the CS department and adeptly addressing their inquiries.</li>
                        <li>Collaborated with distinguished alumni, the chair, and the dean in brainstorming transformative enhancements for the department, contributing to its overall evolution and success.</li>
                        <li>Spearheaded the organization and digitization of student files, elevating data upkeep and transparency within the department.</li>
                        <li>Represented the university at the renowned Grace Hopper Celebration in 2018 and 2019, showcasing a commitment to advancing diversity and inclusion in technology on a global scale.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://cs.mst.edu/" className="body-lower" target="_blank">S&T CS Department Website</a>
                        <a href="" className="body-lower" target="_blank">S&T Student Ambassadors Website</a>
                    </nav>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Impact Labs</h3>
                        <p className="body-upper">Sponsorship Director</p>
                        <p className="body-upper">Dec 2018 - Nov 2019</p>
                    </div>
                    <ul className="bullets">
                        <li>Secured over 10k in sponsorships for the Impact Labs annual summit in NYC, leveraging strategic partnerships with major companies like Lyft and Digital Ocean.</li>
                        <li>Dynamically marketed Impact Labs events, deploying effective outreach strategies across my extensive network and the organizations under my leadership, maximizing visibility and engagement.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://www.impactlabs.io/" className="body-lower" target="_blank">Impact Labs Website</a>
                    </nav>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Forbes</h3>
                        <p className="body-upper">Under 30 Scholar</p>
                        <p className="body-upper">Oct 2018, Oct 2019</p>
                    </div>
                    <ul className="bullets">
                        <li>Catapulted the Under 30 Scholar program at Forbes into the spotlight through a strategically crafted series of LinkedIn posts, amassing an extraordinary 10 million views and generating a flood of thousands of applications.</li>
                        <li>Showcased exceptional networking prowess at multiple Under 30 summits, seamlessly cultivating valuable connections and securing sponsorships for various groups under my leadership.</li>
                        <li>Clinched 2nd place in the prestigious Forbes Under 30 hackathon in both 2018 and 2019.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://www.linkedin.com/posts/christopherlgu_forbes30under30-under30summit-activity-6561418190285602816-ed4A" className="body-lower" target="_blank">Forbes Under 30 Scholar LinkedIn Post 1</a>
                        <a href="https://www.linkedin.com/posts/christopherlgu_under30summit-activity-6595360551294107648-DrHR" className="body-lower" target="_blank">Forbes Under 30 Scholar LinkedIn Post 2</a>
                        <a href="https://www.forbes.com/sites/forbespr/2017/09/12/forbes-under-30-scholars-program-focused-on-diversity-and-inclusion-offers-1000-college-students-access-to-2017-forbes-under-30-summit/" className="body-lower" target="_blank">Forbes Under 30 Scholar Website</a>
                        <a href="https://econnection.mst.edu/2020/03/st-student-named-top-hacker-forbes-under-30-scholar/" className="body-lower" target="_blank">S&T Forbes 2019 Article</a>
                        <a href="https://econnection.mst.edu/2018/11/two-students-selected-for-forbes-program/" className="body-lower" target="_blank">S&T Forbes 2018 Article</a>
                    </nav>
                </section>
            </div>
        </>
    );
};

export default EducationPage;