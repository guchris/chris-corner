import React from 'react';
import Head from 'next/head';

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
                <h2 className="directory">About Me / Education</h2>

                <section className="education">
                    <div className="details">
                    <h3 className="title">Missouri University of Science & Technology</h3>
                    <p className="discipline">B.S. Computer Science</p>
                    <p className="date-range">Aug 2016 - Dec 2020</p>
                    <p className="location">Rolla, MO, USA</p>
                    <p className="gpa">GPA 3.81, Summa Cum Laude</p>
                    </div>
                </section>
                
                
                <h4 className="section-title">Comp Sci Transcript</h4>
                <div className = "courses">
                    <p className="course">COMP SCI 1001 - Special Topics (Data Structures Laboratory)</p>
                    <p className="course">COMP SCI 1010 - Intro / Computer Science</p>
                    <p className="course">COMP SCI 1200 - Discrete Math For Computer Science</p>
                    <p className="course">COMP SCI 1510 - Data Structures</p>
                    <p className="course">COMP SCI 1570 - Intro To Programming</p>
                    <p className="course">COMP SCI 1580 - Intro To Programming Lab</p>
                    <p className="course">COMP SCI 2200 - Theory of Computer Science</p>
                    <p className="course">COMP SCI 2300 - File Structures and Intro to Databases</p>
                    <p className="course">COMP SCI 2500 - Algorithms</p>
                    <p className="course">COMP SCI 3100 - Software Engineering I</p>
                    <p className="course">COMP SCI 3200 - Intro Numerical Methods</p>
                    <p className="course">COMP SCI 3500 - Programming Languages & Translators</p>
                    <p className="course">COMP SCI 3800 - Intro To Operating Systems</p>
                    <p className="course">COMP SCI 4096 - Software System Development</p>
                    <p className="course">COMP SCI 5001 - Special Topics (Introduction to Deep Learning)</p>
                    <p className="course">COMP SCI 5001 - Special Topics (Experiential Entrepreneurship Computer Scientists)</p>
                    <p className="course">COMP SCI 5001 - Special Topics (Introduction to Virtual Reality)</p>
                    <p className="course">COMP SCI 5402 - Intro to Data Mining</p>
                    <p className="course">COMP SCI 5700 - Bioinformatics</p>
                </div>
                
                
                <h4 className="section-title">Scholarships</h4>
                <div className="scholarships">
                    <p className="scholarship">Missouri Bright Flight Scholarship ($12,000)</p>
                    <p className="scholarship">Missouri S&T University Scholarship ($8,000)</p>
                    <p className="scholarship">Missouri S&T Trustees Scholarship ($14,000)</p>
                    <p className="scholarship">Missouri S&T CS Department Scholarship ($2500)</p>
                    <p className="scholarship">Garmin Scholarship ($20,000)</p>
                    <p className="scholarship">Chang-Lin Tien Scholarship ($1,000)</p>
                    <p className="scholarship">Donald D. Myers Scholarship ($1,500)</p>
                </div>
                
                
                <h4 className="section-title">Awards & Honors</h4>
                <div className="awards">
                    <p className="award">Missouri S&T Most Improved Organization (2019)</p>
                    <p className="award">Missouri S&T CS Leadership Award (2019, 2020)</p>
                    <p className="award">Missouri S&T CS Ambassador Award (2019, 2020)</p>
                    <p className="award">Miner Key ICCA Midwest QF Runner Up (2020)</p>
                    <p className="award">Miner Key ICCA Midwest QF Best Choreo (2020)</p>
                    <p className="award">MLH Top 50 Hacker (2019)</p>
                    <p className="award">1st Place @ TAVhacks (2020)</p>
                    <p className="award">1st Place @ Union Pacific Hackathon (2018)</p>
                    <p className="award">2nd Place @ Forbes Hackathon (2018, 2019)</p>
                    <p className="award">Goldman Saches PRIDE Summit Scholar (2018)</p>
                    <p className="award">Forbes Under 30 Scholar (2018, 2019)</p>
                    <p className="award">O4U Tech Scholar (2019)</p>
                </div>
                
                
                <h4 className="section-title">Extracurriculars</h4>
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">PickHacks</h3>
                    <p className="role">Co-Founder, Co-Director, Finance + Dev + Design Lead</p>
                    <p className="date-range">Mar 2018 - Jan 2021</p>
                    </div>
                    <div className="description">
                    Recruited and led a team of 18 students to grow PickHacks and PickleHack, which became some of the largest hackathons in the Midwest, bringing together over 500 attendees annually
                    Personally raised and managed over all $170,000 in corporate and university sponsorships, managing tax exemptions, and various bank accounts with the university and outside of the university
                    Scaled the team, designed the websites, marketing materials, and swag items, and led the development team to build out our main website, hacker portals, resume portals, sponsor portals, and on-prem devices
                    Some notable sponsors: Some notable sponsors included St. Louis Bread Co (Panera), St. Louis Cardinals, Boeing, Mastercard, GitHub, Rolls Royce, State Farm, AT&T, Accenture, and Redbull
                    </div>
                    <nav className="links">
                    <a href="https://www.pickhacks.io/" className="link" target="_blank">PickHacks Official Website</a>
                    <a href="https://www.instagram.com/sandtpickhacks/?hl=en" className="link" target="_blank">PickHacks Instagram</a>
                    <a href="https://youtu.be/Iqnbst4-Ujw?si=y_bCzJeAUKDIPG6t" className="link" target="_blank">PickHacks 2019 Recap Video</a>
                    <a href="https://youtu.be/wE_aFwbrVAA?si=kd1wvE95H52aqUaU" className="link" target="_blank">MLH HackCon VII - Session Speaker</a>
                    <a href="https://news.mst.edu/2019/02/missouri-st-to-host-pickhacks-competition/" className="link" target="_blank">Missouri S&T PickHacks Article</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">Miner Key</h3>
                    <p className="role">Founder, President, Music Director</p>
                    <p className="date-range">Jan 2018 - Jan 2021</p>
                    </div>
                    <div className="description">
                    Created an award-winning, Midwest collegiate a cappella group with over 15k subscribers and 3 million views/streams on YouTube and Spotify<br/>
                    Recruited, organized, and musically led a group of 18 students to compete in the prestigious ICCA competition, ultimately placing 2nd in the 2020 Midwest Quarterfinals, receiving the award for best choreography, and having the 2nd highest score of any first time group of all time
                    Raised $10,000 to purchase arrangements, equipment, and other professional services by developing relationships with the Chancellor, working with the Department of Music, and convincing student council for allocations of budget.
                    Designed and taught an award-winning choreography sequence for the group's competing ICCA set
                    Ran rehearsals 2-3 times a week, taught vocal parts, and shaped the sound of the group.
                    Maintained all admin duties, booked gigs, secured rehearsal spaces, and built out and facilitated an entire recruitment process.
                    Facilitated the production, review, and posting of professional recordings of our ICCA set with a studio during the pandemic.
                    Created and managed Miner Key social media platforms (Instagram, Facebook, YouTube, Spotify)
                    </div>
                    <nav className="links">
                    <a href="https://www.youtube.com/@minerkeyacappella7421" className="link" target="_blank">Miner Key Official YouTube Channel</a>
                    <a href="https://open.spotify.com/artist/72NZlUC6Bn1iSAtTE13Y6B?si=vpUek8KBQrmGc7picW7uZg" className="link" target="_blank">Miner Key Official Spotify</a>
                    <a href="https://youtu.be/-ZwS4yYLXV0?si=GPLnw0P-LO3f4G3f" className="link" target="_blank">Miner Key 2019 ICCA Set</a>
                    <a href="https://varsityvocals.com/results-page/?fwp_year=2020&fwp_type=icca&fwp_region=midwest&fwp_venue=missouri-state-university" className="link" target="_blank">Miner Key 2019 ICCA Results</a>
                    <a href="https://www.instagram.com/sandtminerkey/" className="link" target="_blank">Miner Key Instagram</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">Association for Computer Machinery (ACM)</h3>
                    <p className="role">Vice President, ACM Hack Chair</p>
                    <p className="date-range">TBD</p>
                    </div>
                    <div className="description">
                    Co-founded ACM Hack to foster the university's growing hacker community.
                    Oversaw and maintained cohesiveness among ACM's 7 committees (special interst groups) and over 100+ active members.
                    Established new programs and partnerships to further ACM and its committees.
                    Further progressed ACM and its 7 committees by maintaining cohesiveness and establishing new programs and partnerships.
                    Handled all social media and marketing for ACM, starting the organization's first social media accounts.
                    Supported logistics and running of various ACM events, such as ACM Donuts, ACM Resume Workshops, and more.
                    </div>
                    <nav className="links">
                    <a href="https://www.mstacm.org/" className="link" target="_blank">S&T ACM Official Website</a>
                    <a href="https://www.instagram.com/mstacm/" className="link" target="_blank">S&T ACM Instagram</a>
                    <a href="https://github.com/mstacm" className="link" target="_blank">S&T ACM GitHub</a>
                    <a href="https://cs.mst.edu/undergraduate-degree/student-organizations/" className="link" target="_blank">S&T CS Department Student Orgs</a>
                    <a href="https://cs.mst.edu/newsandevents/student-events/" className="link" target="_blank">S&T CS Department Student Events</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">SPECTRUM (LGBTQ+)</h3>
                    <p className="role">Public Relations</p>
                    <p className="date-range">Apr 2019 - May 2020</p>
                    </div>
                    <div className="description">
                    Brought SPECTRUM into the digital age with the creation of and active presence on social media platforms, such as Instagram and Twitter
                    Ran all weekly and speciality meetings, making social content for all activities
                    Designed and spread out all marketing materials on campus
                    Secured an office space for the executive team to hold meetings and store items
                    Secured $4,000 / semester budget as the representative of SPECTRUM at Student Council Meetings
                    Created a sense of belonging and community for LGBTQ+ students
                    </div>
                    <nav className="links">
                    <a href="" className="link" target="_blank">S&T SPECTRUM S&T Website</a>
                    <a href="" className="link" target="_blank">S&T SPECTRUM Instagram</a>
                    <a href="" className="link" target="_blank">S&T SPECTRUM Article</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">TAVtech</h3>
                    <p className="role">Cybersecurity Fellow</p>
                    <p className="date-range">Dec 2019 - Jan 2020</p>
                    </div>
                    <div className="description">
                    Selected for the TAVtech Cybersecurity Fellowship's className of Winter 2019 and pursued over 80 hours of intensive cybersecurity training whilst being simultaneously submerged in Israeli culture and startup ecosystem
                    Designed and built out a mobile app to support STD testing and status transparency among the LGBTQ+ community, winning 1st place at the TAVtech hackathon
                    Secured a $1,000 no-strings-attached grant from 1517 Fund to build out MVP post fellowship
                    </div>
                    <nav className="links">
                    <a href="" className="link" target="_blank">TAVtech Official Website</a>
                    <a href="https://econnection.mst.edu/2020/04/technology-fellowship-takes-student-to-in-israel/" className="link" target="_blank">S&T TAVtech Article</a>
                    <a href="" className="link" target="_blank">TAVtech Hackathon Project</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">Out for Undergrad</h3>
                    <p className="role">Alumni, Campus Ambassador</p>
                    <p className="date-range">Feb 2020 - Oct 2020</p>
                    </div>
                    <div className="description">
                    Designed and implemented outreach programs to reach LGBTQ+ students at Midwest universities
                    Presented and shared slide decks with thousdands of students and resulted in 156 applications
                    Attended Out for Undergrad Tech in 2019 and received 2 internship offers
                    </div>
                    <nav className="links">
                    <a href="https://www.outforundergrad.org/tech" className="link" target="_blank">Out for Undergrad Website</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">Major League Hacking</h3>
                    <p className="role">Community Expert, Top 50 Hacker</p>
                    <p className="date-range">TBD</p>
                    </div>
                    <div className="description">
                    As an expert in community building based on my experiences with starting my unviersity's first hackathon group, I became an official advisor to other organizers in the Community
                    Held video call sessions with organizers to go through finances, logistics, website development, judging, and day-of scenarios
                    Reported feedback and insights to MLH to be incorporated into the official, free organizer handbook online
                    </div>
                    <nav className="links">
                    <a href="https://mlh.io/" className="link" target="_blank">MLH Official Website</a>
                    <a href="https://top.mlh.io/2020/profiles/christopher-gu" className="link" target="_blank">MLH Top 50 - Christopher Gu</a>
                    <a href="https://top.mlh.io/2020/profiles/the-pickhacks-team" className="link" target="_blank">MLH Top 50 - The PickHacks Team</a>
                    <a href="https://www.instagram.com/mlhacks/p/CsFB_HLOTTm/?img_index=1" className="link" target="_blank">MLH Commmunity Spotlight</a>
                    <a href="https://news.mlh.io/how-becoming-a-hackathon-organizer-helped-me-launch-my-first-business-stellar-effects-04-04-2023" className="link" target="_blank">MLH Article</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">Missouri S&T CS Department</h3>
                    <p className="role">Student Ambassador</p>
                    <p className="date-range">Dec 2018 - Dec 2020</p>
                    </div>
                    <div className="description">
                    Held sessions with prospective high school students and their parents to introduce them to the CS department and answer any questions
                    Met with alumni, the chair, and the dean to brainstorm improvements to the department as a whole.
                    Organized and digitized student files for better data upkeep and transparency
                    </div>
                    <nav className="links">
                    <a href="https://cs.mst.edu/" className="link" target="_blank">S&T CS Department Website</a>
                    <a href="" className="link" target="_blank">S&T Student Ambassadors Website</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">Impact Labs</h3>
                    <p className="role">Sponsorship Director</p>
                    <p className="date-range">Dec 2018 - Nov 2019</p>
                    </div>
                    <div className="description">
                    Raised over 10k in sponsorships for the Impact Labs annual summit in NYC, such as Lyft and Digital Ocean.
                    </div>
                    <nav className="links">
                    <a href="https://www.impactlabs.io/" className="link" target="_blank">Impact Labs Website</a>
                    </nav>
                </section>
                
                <section className="extracurricular">
                    <div className="details">
                    <h3 className="title">Forbes</h3>
                    <p className="role">Under 30 Scholar</p>
                    <p className="date-range">TBD</p>
                    </div>
                    <div className="description">
                    Popularized the Under 30 Scholar program at Forbes through a series of LinkedIn posts, garnering over 10 million views and 1000s of applications
                    Attended multiple Under 30 summits to network and garner sponsorships for various groups I led
                    Won 2nd place in the official Forbes Under 30 hackathon in 2018 and 2019
                    </div>
                    <nav className="links">
                    <a href="" className="link" target="_blank">Forbes Under 30 Scholar LinkedIn Post</a>
                    <a href="" className="link" target="_blank">Forbes Under 30 Scholar Website</a>
                    <a href="https://econnection.mst.edu/2020/03/st-student-named-top-hacker-forbes-under-30-scholar/" className="link" target="_blank">S&T Forbes 2019 Article</a>
                    <a href="https://econnection.mst.edu/2018/11/two-students-selected-for-forbes-program/" className="link" target="_blank">S&T Forbes 2018 Article</a>
                    </nav>
                </section>
            </div>
        </>
    );
};

export default EducationPage;