import Head from 'next/head';
import './globals.css'
import Link from 'next/link';
import DateSection from '@/components/DateSection'
import Navigation from '@/components/NavigationSection'
import MobileMenu from '@/components/MobileMenu';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Chris' Corner</title>
				<meta name="description" content="Lorem Ipsum"/>
			</Head>
			<html lang="en">
				<body>
					{/* <!-- Blocker --> */}
					<div className="blocker">
						<img id="blocker" src="blocker.png"/>
					</div>

					<main className="wrapper">

						{/* <!-- Banner --> */}
						<header>
							<p>WELCOME TO MY CORNER OF THE INTERNET.&nbsp; &nbsp; &nbsp;SITE UNDER CONSTRUCTION.</p>
							<div className="menu-icon" id="menu-icon">&#9776;</div>
						</header>

						<div className="container">
							{/* <!-- Navigation Sidebar --> */}
							<aside className="left-column active">

								{/* <!-- LOGO --> */}
								<Link href="/" className="logo">CHRIS' CORNER</Link>

								{/* <!-- Current Datetime --> */}
								<DateSection />

								{/* <!-- Navigation Content pt. 1 --> */}
								<Navigation />

								{/* <!-- Links --> */}
								<section className="tab-links">
									<a href="mailto:cleegu@gmail.com" className="tab-link" target="_blank">EMAIL</a>
									<a href="https://www.linkedin.com/in/christopherlgu/" className="tab-link" target="_blank">LINKEDIN</a>
									<a href="https://www.instagram.com/gu_christopher/" className="tab-link" target="_blank">INSTAGRAM</a>
									<a href="https://www.tiktok.com/@gu_christopher" className="tab-link" target="_blank">TIKTOK</a>
								</section>

								{/* <!-- Hero Image Caption --> */}
								{/* <HeroImageCaption {...selectedImage}/> */}
								{/* <p className="hero-image-caption">
									Friday, September 8, 2023<br/>
									Orsières, Switzerland<br/>
									Apple iPhone 14 Pro<br/>
									ƒ/1.78 1/18519 6.86mm ISO80
								</p> */}
								
							</aside>
							{children}
							<Analytics />
							<SpeedInsights/>
						</div>
					</main>
					<MobileMenu />
				</body>
			</html>
		</>
	)
}