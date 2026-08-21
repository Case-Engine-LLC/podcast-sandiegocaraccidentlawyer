'use client'

import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import StatsBanner from '../components/StatsBanner'
import About from '../components/About'
import PodcastTeam from '../components/PodcastTeam'
import LatestEpisodes from '../components/LatestEpisodes'
import PodcastSubscribeCTA from '../components/PodcastSubscribeCTA'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import TopicalEntryGrid from '../components/TopicalEntryGrid'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import type { Episode } from '@/lib/data'

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://perrypi.com/#org",
      "name": "Perry Personal Injury Lawyers",
      "legalName": "Perry Personal Injury Lawyers",
      "url": "https://perrypi.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.personalinjurylawuncovered.attorney/logo.svg",
        "width": 200,
        "height": 60
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.personalinjurylawuncovered.attorney/Hero.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "Perry Personal Injury Lawyers is a California plaintiff personal injury firm founded by Liam Perry, a former insurance defense attorney. The firm represents injured Californians from seven San Diego County office locations and handles car, truck, motorcycle, rideshare, and wrongful death matters.",
      "telephone": "+17606332233",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "614 Fifth Ave, Suite H1",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "postalCode": "92101",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": "California"
      },
      "knowsAbout": [
        "Car Accident Law",
        "Truck Accident Law",
        "Motorcycle Accident Law",
        "Wrongful Death Law",
        "Catastrophic Injury Law"
      ],
      "sameAs": [
        "https://perrypi.com/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.personalinjurylawuncovered.attorney/#website",
      "url": "https://www.personalinjurylawuncovered.attorney/",
      "name": "Personal Injury Law Uncovered with Liam Perry",
      "description": "Liam Perry, founding attorney of Perry Personal Injury Lawyers and former insurance-defense litigator, walks San Diego drivers through California car accident and personal injury law.",
      "publisher": {
        "@id": "https://perrypi.com/#org"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.personalinjurylawuncovered.attorney/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.personalinjurylawuncovered.attorney/#webpage",
      "url": "https://www.personalinjurylawuncovered.attorney/",
      "name": "Personal Injury Law Uncovered with Liam Perry | Perry Personal Injury Lawyers",
      "description": "Liam Perry covers California car accident law from the plaintiff side — coverage, evidence preservation, and how insurance defense lawyers actually evaluate claims.",
      "isPartOf": {
        "@id": "https://www.personalinjurylawuncovered.attorney/#website"
      },
      "about": {
        "@id": "https://perrypi.com/#org"
      },
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".podcast-description",
          ".about-section",
          ".episode-description"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.personalinjurylawuncovered.attorney/"
          }
        ]
      }
    },
    {
      "@type": "PodcastSeries",
      "@id": "https://www.personalinjurylawuncovered.attorney/#podcast",
      "name": "Personal Injury Law Uncovered with Liam Perry",
      "description": "Personal Injury Law Uncovered with Liam Perry covers California personal injury law from the plaintiff side — with the added perspective of years spent defending insurance carriers before switching to plaintiffs' work. Episodes address what San Diego drivers actually need to know about coverage, evidence, and settlement.",
      "url": "https://www.personalinjurylawuncovered.attorney/",
      "image": "https://www.personalinjurylawuncovered.attorney/Hero.jpg",
      "author": {
        "@type": "Person",
        "@id": "https://www.personalinjurylawuncovered.attorney/#host",
        "name": "Liam Perry",
        "givenName": "Liam",
        "familyName": "Perry",
        "jobTitle": "Founding Attorney & Podcast Host",
        "image": "https://www.personalinjurylawuncovered.attorney/headshot-liam-perry.jpg",
        "worksFor": {
          "@id": "https://perrypi.com/#org"
        },
        "sameAs": [
          "https://perrypi.com/"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "University of San Diego School of Law"
        }
      },
      "webFeed": [],
      "genre": [
        "Legal",
        "Personal Injury Law",
        "Education"
      ],
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://perrypi.com/#org"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.personalinjurylawuncovered.attorney/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What topics does Liam Perry cover on Personal Injury Law Uncovered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Liam Perry covers everything a San Diego driver needs to know about California car accident, motorcycle, truck, and rideshare law — including uninsured and underinsured motorist coverage, how insurance defense lawyers evaluate claims (Liam spent years on that side), late-onset neck and back injuries, California lane-splitting law, and when a personal injury case actually needs to go to trial."
          }
        },
        {
          "@type": "Question",
          "name": "How often are new episodes released?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Personal Injury Law Uncovered publishes on an ongoing, evergreen cadence. Episodes run 40–70 minutes and focus on one topic in depth. Subscribe via the platform links in the footer to be notified when each episode drops."
          }
        },
        {
          "@type": "Question",
          "name": "Why does Liam Perry's insurance-defense background matter for plaintiffs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Liam spent the early part of his career defending some of the largest insurance carriers in the country. That work taught him exactly how carriers evaluate claims, what documentation they respect, and which plaintiff firms they track as trial-ready. He now uses that knowledge on the plaintiff side to position cases for higher reserves and better settlements."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact Perry Personal Injury Lawyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Listeners can reach Perry Personal Injury Lawyers through perrypi.com or by calling (760) 633-2233. The firm offers free case reviews and represents clients on a contingency-fee basis — no attorney’s fees unless a recovery is obtained. Perry Personal Injury Lawyers maintains seven offices across San Diego County."
          }
        }
      ]
    }
  ]
}

interface V1HomeProps {
  episodes?: Episode[]
}

const V1Home = ({ episodes }: V1HomeProps) => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Header />

      <main>
        <Hero latestEpisode={episodes?.[0]} />
        <TrustBadges />
        <StatsBanner />
        <About />
        <PodcastTeam />
        <LatestEpisodes episodes={episodes} />
        <Testimonials />
        <PodcastSubscribeCTA />
        <FAQ />
        <TopicalEntryGrid />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default V1Home
