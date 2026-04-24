import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'
import FAQ from '../components/FAQ'
import type { Episode } from '@/lib/data'
import type { TranscriptSegment } from '@/lib/rss'

const episodeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://podcast-sandiegocaraccidentlawyer.vercel.app/episode/1#webpage",
      "url": "https://podcast-sandiegocaraccidentlawyer.vercel.app/episode/1",
      "name": "What Every San Diego Driver Needs to Know in the First 72 Hours After a Crash | Episode 1 | San Diego Accident Attorneys & Law w. Liam Perry",
      "description": "Liam Perry walks through exactly what a San Diego driver should do in the first 72 hours after a car accident — from medical care to evidence preservation to the call no one should make.",
      "isPartOf": {
        "@id": "https://podcast-sandiegocaraccidentlawyer.vercel.app/#website"
      },
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".episode-description",
          ".episode-overview",
          ".key-takeaways"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://podcast-sandiegocaraccidentlawyer.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Episodes",
            "item": "https://podcast-sandiegocaraccidentlawyer.vercel.app/#episodes"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What Every San Diego Driver Needs to Know in the First 72 Hours After a Crash",
            "item": "https://podcast-sandiegocaraccidentlawyer.vercel.app/episode/1"
          }
        ]
      }
    },
    {
      "@type": "PodcastEpisode",
      "@id": "https://podcast-sandiegocaraccidentlawyer.vercel.app/episode/1#episode",
      "name": "What Every San Diego Driver Needs to Know in the First 72 Hours After a Crash",
      "description": "In the debut episode of San Diego Accident Attorneys & Law, Liam Perry walks through exactly what a San Diego driver should do in the first 72 hours after a car accident — what to say (and not say) to the adjuster, when to file the SR-1, why late-onset neck and back pain does not mean it is too late, and how California's pure comparative negligence rule affects what a claim is actually worth. TODO: finalize title, description, and episode art from final recording and show notes.",
      "episodeNumber": 1,
      "url": "https://podcast-sandiegocaraccidentlawyer.vercel.app/episode/1",
      "image": "https://podcast-sandiegocaraccidentlawyer.vercel.app/cover.jpg",
      "partOfSeries": {
        "@id": "https://podcast-sandiegocaraccidentlawyer.vercel.app/#podcast"
      },
      "author": {
        "@id": "https://podcast-sandiegocaraccidentlawyer.vercel.app/#host"
      },
      "publisher": {
        "@id": "https://perrypi.com/#org"
      },
      "inLanguage": "en-US",
      "genre": [
        "Personal Injury Law",
        "Legal Education",
        "California Personal Injury Law"
      ],
      "keywords": [
        "Perry Personal Injury Lawyers",
        "San Diego",
        "Car Accident Law",
        "Motorcycle Accidents",
        "Truck Accidents"
      ],
      "isAccessibleForFree": true
    },
    {
      "@type": "FAQPage",
      "@id": "https://podcast-sandiegocaraccidentlawyer.vercel.app/episode/1#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should a San Diego driver do in the first 72 hours after a crash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the debut episode, Liam Perry walks through exactly what a San Diego driver should do after a car accident: seek medical attention even when injuries feel minor, document the scene, file a police report, preserve physical evidence, and avoid giving a recorded statement to any insurance adjuster before speaking with a California-licensed personal injury attorney."
          }
        },
        {
          "@type": "Question",
          "name": "Why can't I give a recorded statement to the other driver's insurance company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Liam explains that recorded statements are used to lock claimants into preliminary language before they understand the full scope of their injury. Late-onset neck and back injuries are common after rear-end collisions and may not be apparent for days; a recorded statement given early can be used against the claimant later."
          }
        },
        {
          "@type": "Question",
          "name": "How does uninsured and underinsured motorist coverage work in California?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Liam covers California UM/UIM basics: who carries the coverage, how it stacks, when to put your own carrier on notice, and why low policy limits on the at-fault driver do not end a serious injury case. Episodes include concrete examples drawn from the firm’s real cases."
          }
        },
        {
          "@type": "Question",
          "name": "How do I reach Perry Personal Injury Lawyers after this episode?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact Perry Personal Injury Lawyers at perrypi.com or by calling (760) 633-2233. Consultations are free and cases are handled on contingency — no attorney’s fees unless the firm recovers money for the client. The firm serves clients throughout San Diego County from seven office locations."
          }
        }
      ]
    }
  ]
}

export function generateEpisodeSchema(_episodeId: string) {
  return episodeSchema
}

interface V1EpisodePageProps {
  episodeId: string
  episode?: Episode | null
  allEpisodes?: Episode[]
  transcript?: TranscriptSegment[]
}

const V1EpisodePage = ({ episodeId: _episodeId, episode: rssEpisode, allEpisodes, transcript }: V1EpisodePageProps) => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeSchema) }}
      />
      <Header variant="light" />

      <main className="pt-[6rem]">
        <EpisodeHero episode={rssEpisode} />
        <EpisodeContent episode={rssEpisode} transcript={transcript} />
        <OtherEpisodes episodes={allEpisodes} />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default V1EpisodePage
