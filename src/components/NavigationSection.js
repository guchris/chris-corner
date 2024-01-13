"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Data model for navigation tabs, sub-tabs, and sub-sub-tabs
const navigationTabs = [
    {
        name: "About Me",
        href: "/about-me",
        subTabs: [
            {
                name: "Career",
                href: "/about-me/career",
            },
            {
                name: "Education",
                href: "/about-me/education",
            },
            {
                name: "Goals",
                href: "/about-me/goals",
            }
        ]
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "Fashion",
        href: "/fashion",
        subTabs: [
            {
                name: "Closet",
                href: "/fashion/closet",
            },
            {
                name: "Outfits",
                href: "/fashion/outfits",
            }
        ]
    },
    {
        name: "Food",
        href: "/food",
        subTabs: [
            {
                name: "Recipies",
                href: "/food/recipies",
            },
            {
                name: "Sunday Suppers",
                href: "/food/sunday-suppers",
            }
        ]
    },
    {
        name: "Founder",
        href: "/founder",
        subTabs: [
            {
                name: "Highs Lows Rainbows",
                href: "/founder/highs-lows-rainbows",
            },
            {
                name: "Stellar Effects",
                href: "/founder/stellar-effects",
            },
            {
                name: "Worn",
                href: "/founder/worn",
            }
        ]
    },
    {
        name: "Projects",
        href: "/projects",
        subTabs: [
            {
                name: "Brews and Bites",
                href: "/projects/brews-and-bites",
            }
        ]
    }
]

export default function NavigationSection () {

    const pathname = usePathname();

    return (
        <nav className="tabs">
            {navigationTabs.map((tab, index)=> (
                <div key={index} className="tab">
                    <Link href={tab.href} className={`tab ${pathname === tab.href ? 'active' : ''}`}>{tab.name}</Link>
                    {pathname.startsWith(tab.href) && tab.subTabs && tab.subTabs.length > 0 && (
                        <ul className="sub-tabs">
                            {tab.subTabs.map((subTab, subIndex) => (
                                <li key={subIndex} className='sub-tab'>
                                    <Link href={subTab.href} className={`sub-tab ${pathname === subTab.href ? 'active' : ''}`}>{subTab.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </nav>
    );

}