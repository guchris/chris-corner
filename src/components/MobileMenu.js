"use client";
import Link from 'next/link';
import { useEffect } from 'react';

export default function MobileMenu({ setMenuIconContent }) {
    
    useEffect(() => {
        
        const menuIcon = document.getElementById('menu-icon');
        const leftColumn = document.querySelector('.left-column');
  
        const handleClick = () => {
            leftColumn.classList.toggle('active');
        };

        const handleTabClick = () => {
            leftColumn.classList.remove('active');
        };

        // Add event listeners to tabs in the left-column
        const tabs = leftColumn.querySelectorAll('.tab', '.subTab');
        tabs.forEach(tab => tab.addEventListener('click', handleTabClick));
        
        // Add event listener to the menu icon
        if (menuIcon && leftColumn) {
            menuIcon.addEventListener('click', handleClick);
        }
  
        return () => {
            // Remove event listeners when the component is unmounted
            if (menuIcon && leftColumn) {
                menuIcon.removeEventListener('click', handleClick);
            }

            // Remove event listener from each tab inside the left-column
            tabs.forEach(tab => tab.removeEventListener('click', handleTabClick));
        };
    }, []);
  
    return null; // This component doesn't render anything
  }