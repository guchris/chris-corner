import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CareerPage = () => {
    
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Career</title>
                <meta name="details" content="Lorem Ipsum"/>
            </Head>
            <div className='page-content'>
                <h2 className="directory">
                    <Link href="/about-me" className="link">About Me</Link> | Career
                </h2>

                <p className="intro">
                    Product manager by day, entrepreneur by night, and a connoisseur of good memes always.
                    In my free time, you can catch me creating augmented reality experiences that have been viewed and captured by billions of people and building out ambitious projects and ventures.
                    I'm passionate about using technology to improve people's lives and have a knack for making even the most mundane things just a bit more fun (and viral).<br/><br/>
                    Below are my corporate, career experiences.
                </p>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Lead Product Manager</h3>
                        <p className="body-upper">TaxBit</p>
                        <p className="body-upper">Mar 2022 - Jun 2023</p>
                        <p className="body-upper">Seattle, WA, USA</p>
                        <p className="body-upper">Full-time</p>
                    </div>
                    <p className="body-lower">Orchestrated the strategic conception, development, and launch of transformative crypto-tax products, driving substantial revenue growth, establishing industry standards, and fostering a developer-centric ecosystem.</p>
                    <ul className="bullets">
                        <li>Conceptualized and launched a Digital W9/W8 tax filing product, complete with SDK and API implementation solutions, generating over $1M in annual recurring revenue (ARR) and enabling clients to verify more than 1M of their user records for tax identity compliance.</li>
                        <li>Led the construction of a comprehensive suite of B2B2C tax management tools, swiftly becoming a staple in all client contracts, that empowered 2 million users to navigate and comprehend their crypto tax obligations.</li>
                        <li>Coordinate the cross-functional project to design, develop, and launch TaxBit's v2 API by leading technical discussions, collaborating with engineering leads of diverse teams, and prioritizing feedback from existing customers.</li>
                        <li>Created, hired, and contributed to a dedicated Developer Relations team that overhauled content creation, documentation, and client support. This move enhanced the overall developer experience, fostering robust relationships and ensuring the success of client API integrations.</li>
                        <li>Secured approval for a groundbreaking proposal on DeFi personal identification, leveraging zero-knowledge tokens as a strategic adjunct to the Digital W9/W8 product.</li>
                        <li>Served as the inaugural member of a diversity group, actively contributing to planning and organizing events to promote inclusivity and diversity within the company.</li>
                    </ul>
                    <nav className="section-skinny">
                        <a href="https://taxbit.com/digital-w9-w8/" className="body-lower" target="_blank">TaxBit Digital W9/W8</a>
                        <a href="https://taxbit.com/uphold-case-study/" className="body-lower" target="_blank">TaxBit Digital W9/W8 Case Study</a>
                        <a href="https://taxbit.com/broker-cost-basis/" className="body-lower" target="_blank">TaxBit Tax Center Solutions</a>
                        <a href="https://apidocs.taxbit.com/docs/getting-started" className="body-lower" target="_blank">TaxBit API Guides</a>
                        <a href="https://apidocs.taxbit.com/reference/auth-token" className="body-lower" target="_blank">TaxBit API Reference</a>
                    </nav>
                    <p className="reccomendation">
                        Daniel Kluesing, VP of Product (Direct Manager)<br/><br/>
                        <i>"Chris did great work at TaxBit, and I recommend him for any organization. He possesses a strong work ethic, high attention to detail, and a remarkable ability to quickly grasp complex concepts, ranging from technical to regulatory."</i>
                    </p>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Product Manager II</h3>
                        <p className="body-upper">Microsoft Corporation</p>
                        <p className="body-upper">Feb 2021 - Mar 2022</p>
                        <p className="body-upper">Redmond, WA, USA</p>
                        <p className="body-upper">Full-time</p>
                    </div>
                    <p className="body-lower">Drove the strategy & vision, design & implementation, and metrics & impact of a suite of internal tools to automate developer workflows and keep Windows safe and secure.</p>
                    <ul className="bullets">
                        <li>Optimized a critical automation tool, slashing developer integration times by 2000+ hours, and managed its migration to a serverless framework, orchestrating timely bug resolutions and feature requests.</li>
                        <li>Spearheaded the design and creation of a unified internal tools platform for Windows Servicing, rolling out with a suite of 7 high-utility web-apps and achieving a rapid 40% adoption rate among engineers within the debut week.</li>
                        <li>Conducted regular developer feedback loops through targeted surveys and roadshows, leading to pivotal enhancements in debugging and integration support, solidifying tool robustness.</li>
                        <li>Designed the UI/UX blueprint for Microsoft Gaming Studios' NFT marketplace, partnering closely with developers to realize a seamless end-to-end user experience from purchase to acquisition.</li>
                    </ul>
                    <p className="reccomendation">
                        Luis Luciano, Principal PM (Direct Manager)<br/><br/>
                        <i>"Christopher came into my team and instantly started having a positive impact on the day to day, but also on our long-term goals. Christopher took it upon himself to completely design the UX of a brand-new service platform for our organization that completely revolutionized the way our engineers interacted with all of our internal tools & services.<br/><br/>
                        Christopher was an amazing partner to our teams, and fully engaged in all engineering system designs, architecture discussions, planning, agile development and deployment. I was extremely proud of his growth as a product manager, and his business maturity when it came to presenting ideas, the progress of the team & communicating successes & failures.<br/><br/>
                        There is no doubt in my mind that Christopher is one of the most prepared & best university hires I have ever had the pleasure to work with, and there is no doubt in my mind that given the opportunity I would hire him, or work with him in any capacity. He truly is one of the best professionals in the industry, and everything he does he pours his all."</i>
                    </p>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Coach / DevRel Representative</h3>
                        <p className="body-upper">Major League Hacking</p>
                        <p className="body-upper">Oct 2020 - Dec 2023</p>
                        <p className="body-upper">Seattle, WA, USA</p>
                        <p className="body-upper">Part-time</p>
                    </div>
                    <p className="body-lower">Empowered thousands of students throughout dozens of collegiate MLH hackathons, both virtual and in-person, while serving as a dynamic developer evangelist for tech giants.</p>
                    <ul className="bullets">
                        <li>Elevated hackathon experiences as a coach for events like HackHarvard, ShellHacks, QWER Hacks, and others, imparting invaluable insights to organizing teams and student hackers.</li>
                        <li>Evangelized developer tools from industry leaders like Google Cloud, MongoDB, and Twilio, while providing technical support to student hackers incorporating them into their projects.</li>
                        <li>Amplified community engagement by providing dedicated support to the official MLH Discord, fostering collaboration and knowledge sharing among thousands of active users.</li>
                        <li>Played a pivotal role in shaping the future of hackathon organizing by attending and actively contributing to HackCon in both 2021 and 2022, making it easier than ever to hit the ground running.</li>
                        <li>Architected a comprehensive Notion resource hub, crafting meticulously designed templates for slide decks, project judging, and more, streamlining the coaching process and enhancing support for organizers and students.</li>
                    </ul>
                    <p className="reccomendation">
                        Brandon Minaya, Coaches Program Lead (Direct Manager)<br/><br/>
                        <i>"I had the pleasure of working with Chris as their direct manager for over a year at MLH. Chris was a go-to resource for staffing large/premier hackathons and educational events.<br/><br/>
                        They not only had a high level of professionalism and organizational skills, but a deep understanding of the student developer communities at each of these events and could relate to just about anyone to help them learn/embrace new technologies. Chris would routinely have to learn new technologies quickly to be able to lead workshops on them as well as help encourage developers to use them and was incredible at it.<br/><br/>
                        Chris would be a huge asset to any DevRel, evangelism, or product marketing team."</i>
                    </p>
                    <p className="reccomendation">
                        Nick Quinlan, Chief Operating Officer<br/><br/>
                        <i>"I was introduced to Chris by way of a 30ft tall banner depicting Chris that my company, Major League Hacking (MLH), had printed celebrating him for his achievements in building community at his university. Out of a community of more than 5,000 campus organizers we worked with that year, he had set himself apart for the way he was able to create events, connection, and community for the student developers at his school.<br/><br/>
                        As I got to know Chris better and he began working at MLH as a Coach, I got to see how he puts his community building skills to work firsthand in a developer relations context. Chris has shown great ability to help people understand and get setup on a suite of developer tools including APIs and cloud services, all while engaging them personally and authentically.<br/><br/>
                        If you have the chance to work with Chris, seize it, you might just end up printing a larger than life banner of him."</i>
                    </p>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Social Media Intern</h3>
                        <p className="body-upper">Out in Tech</p>
                        <p className="body-upper">Aug 2020 - Dec 2020</p>
                        <p className="body-upper">Seattle, WA, USA</p>
                        <p className="body-upper">Internship</p>
                    </div>
                    <p className="body-lower">Orchestrated exponential growth across diverse digital platforms, amplifying the narratives of a thriving 40,000-strong community through strategic content creation, innovative growth strategies, and beyond.</p>
                    <ul className="bullets">
                        <li>Engineered an automated content dissemination system across various social platforms, streamlining the delivery of impactful stories and maximizing reach.</li>
                        <li>Created a comprehensive Figma Design system, setting the standard for all marketing and social materials at Out in Tech, ensuring a cohesive and visually compelling brand identity.</li>
                        <li>Spearheaded dynamic community engagement by publishing various content series, curating member highlights, and managing 24/7 social media interactions.</li>
                        <li>Increased collaboration within the official Slack by implementing channel rules, creating sub-communities, and incorporating bots.</li>
                        <li>Collaborated with the President and Vice-President to ideate and execute events and initiatives, strategically driving the community's growth through innovative concepts and impactful strategies.</li>
                    </ul>
                    <p className="reccomendation">
                        Gary Goldman, Senior Program Director (Direct Manager)<br/><br/>
                        <i>"Christopher was a wonderful intern at Out in Tech: entrepreneurial, detail-oriented, and mission-driven. It’s rare to see someone spearhead new initiatives to such an extent, but Christopher did it with our communications and social media seamlessly.<br/><br/>
                        I’d recommend him wholeheartedly for a digital marketing or communications position!"</i>
                    </p>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Product Manager Intern</h3>
                        <p className="body-upper">Microsoft Corporation</p>
                        <p className="body-upper">May 2020 - Aug 2020</p>
                        <p className="body-upper">Redmond, WA, USA</p>
                        <p className="body-upper">Internship</p>
                    </div>
                    <p className="body-lower">Led the development of a visionary log analytics tool, coupled with a robust triage system for Windows Server bugs, significantly elevating team efficiency and issue resolution.</p>
                    <ul className="bullets">
                        <li>Spearheaded the design and development of an internal log analytics tool, resuling in a 35% reduction in engineering debug time, enhancing overall engineering team productivity.</li>
                        <li>Maintained the safety and security of the Windows ecosystem by meticulously updating and supporting a triage system handling over 100 concurrent tickets.</li>
                        <li>Navigated the challenges of the pandemic by orchestrating inclusive LGBTQ+ intern virtual events, fostering meaningful conversations and community engagement during remote work periods.</li>
                        <li>Created an official "Guess the Gibberish" AR filter variant for Microsoft Life's Instagram account, garnering an impressive 20 million views and amplifying brand visibility.</li>
                    </ul>
                    <p className="reccomendation">
                        Harpreet Kaur, Principal TPM (Direct Manager)<br/><br/>
                        <i>"Chris is a leader as a whole, be it product vision, analysis and framework. When I managed him in his early career at Microsoft, I could see the urge in him to learn and challenge himself by pushing the boundaries, he brought the outside in and learn in all to the internal product we were working on. He took the feedback and kept improving upon on his product designs.<br/><br/>
                        His passion to bring his whole self, give back to community and bring everyone along is treat to watch. If you are looking for product leader who is ready to bring innovation and manage it all, this leader is in making, keep shining bright Chris! And keep in touch."</i>
                    </p>
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Product Manager Intern</h3>
                        <p className="body-upper">Microsoft Corporation</p>
                        <p className="body-upper">May 2019 - Aug 2019</p>
                        <p className="body-upper">Redmond, WA, USA</p>
                        <p className="body-upper">Internship</p>
                    </div>
                    <p className="body-lower">Elevated the productivity of Azure DevOps users by strategically enhancing Microsoft Flow's capabilities and crafting high-impact templates for widespread adoption, streamlining workflows and automating millions of tasks.</p>
                    <ul className="bullets">
                        <li>Drove internal tooling innovation by defining scopes and securing stakeholder approvals through in-depth analysis of insights gleaned from over 30 customer interviews.</li>
                        <li>Led the expansion effort of Microsoft Flow features and the creation of top-value templates, resulting in a reduction of over 1 million manual tasks for developers in both public and private domains.</li>
                        <li>Contributed to the design and development of a live polling feature within PowerPoint presentations, familiarizing myself with the existing PowerPoint codebase and proactively submitting Pull Requests (PRs) during the company-wide hackathon.</li>
                    </ul>
                    {/* <p className="reccomendation">
                        Ric Lewis, Senior PM (Direct Manager)<br/>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo massa, fermentum id sodales vitae, laoreet quis erat. Sed non faucibus eros. Praesent ullamcorper enim vel est imperdiet vehicula. Nunc tincidunt, arcu et egestas varius, massa ex vehicula magna, sit amet sollicitudin mi eros sed odio."
                    </p> */}
                </section>
                
                <section className="section-gap">
                    <div className="section-skinny">
                        <h3 className="body-upper-bold">Software Engineering Intern</h3>
                        <p className="body-upper">Union Pacific Railroad</p>
                        <p className="body-upper">May 2018 - Aug 2018</p>
                        <p className="body-upper">Omaha, NE, USA</p>
                        <p className="body-upper">Internship</p>
                    </div>
                    <p className="body-lower">Pioneered the integration of cutting-edge chatbot technologies at Union Pacific, leveraging NLP and Rasa to prototype innovative internal and consumer-facing chatbots, establishing the company's initial footprint in the realm of conversational AI.</p>
                    <ul className="bullets">
                        <li>Conducted comprehensive market research on available chatbot technologies to select and champion an optimal solution for Union Pacific's trajectory.</li>
                        <li>Demonstrated agility and innovation by deploying a customizable and open-source platform to create compelling proof-of-concept (POC) and minimum viable product (MVP) internal and external chatbots.</li>
                        <li>Won 1st place at the intern hackathon by developing and presenting a successful POC chatbot to company VPs, underscoring a commitment to provide the best user experience to company clientele.</li>
                        <li>Achieved a 56% boost in traffic to the Hadoop Architecture and Data Portal through the strategic implementation of interactive Rasa chatbots, enhancing user engagement and accessibility.</li>
                    </ul>
                    {/* <p className="reccomendation">
                        Lorem Ipsum, Engineering Manager<br/>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer justo massa, fermentum id sodales vitae, laoreet quis erat. Sed non faucibus eros. Praesent ullamcorper enim vel est imperdiet vehicula. Nunc tincidunt, arcu et egestas varius, massa ex vehicula magna, sit amet sollicitudin mi eros sed odio."
                    </p> */}
                </section>
            </div>
        </>
    );
};

export default CareerPage;