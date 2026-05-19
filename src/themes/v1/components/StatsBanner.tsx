'use client'

import React from 'react'
import { Star, ThumbsUp, Briefcase } from 'lucide-react'
import { stats } from '@/data/siteData'

type StatCard = {
  key: string
  value: string
  Icon: React.ComponentType<{ size?: number; className?: string; fill?: string }>
  label: string
  verbalization: string
  variant: 'secondary' | 'primary'
}

const StatsBanner = () => {
  const cards: StatCard[] = []

  const reviewCount = Number((stats as { reviewCount?: number | string }).reviewCount ?? 0)
  if (
    stats.rating &&
    Number(stats.rating) > 0 &&
    reviewCount > 0
  ) {
    cards.push({
      key: 'rating',
      value: String(stats.rating),
      Icon: Star,
      label: 'Positive Reviews',
      verbalization: stats.ratingVerbalization,
      variant: 'secondary',
    })
  }

  if (
    stats.satisfactionRate &&
    Number(stats.satisfactionRate) > 0 &&
    stats.satisfactionLabel
  ) {
    cards.push({
      key: 'satisfaction',
      value: `${stats.satisfactionRate}%`,
      Icon: ThumbsUp,
      label: stats.satisfactionLabel,
      verbalization: stats.satisfactionVerbalization,
      variant: 'primary',
    })
  }

  if (
    stats.casesHandled &&
    Number(stats.casesHandled) > 0 &&
    stats.casesLabel
  ) {
    cards.push({
      key: 'cases',
      value: `${stats.casesHandled}+`,
      Icon: Briefcase,
      label: stats.casesLabel,
      verbalization: stats.casesVerbalization,
      variant: 'secondary',
    })
  }

  if (cards.length === 0) return null

  // Grid column count adapts to card count so 1 or 2 cards fill the row
  const gridColsClass =
    cards.length === 1
      ? 'grid-cols-1'
      : cards.length === 2
        ? 'grid-cols-1 sm:grid-cols-2'
        : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'

  return (
    <section className="bg-white py-0 md:py-12">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className={`grid ${gridColsClass} gap-6`}>
          {cards.map((card) => {
            const bg = card.variant === 'primary' ? 'bg-primary' : 'bg-secondary'
            const valueColor = card.variant === 'primary' ? 'text-secondary' : 'text-white'
            const iconColor = card.variant === 'primary' ? 'text-secondary' : 'text-white'
            const bodyColor = card.variant === 'primary' ? 'text-white/80' : 'text-white/85'
            const { Icon } = card

            return (
              <div
                key={card.key}
                className={`${bg} rounded-3xl px-6 py-8 md:px-5 md:py-10 text-left`}
              >
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className={`${valueColor} text-4xl md:text-6xl font-bold`}>
                    {card.value}
                  </span>
                  <Icon size={56} className={iconColor} fill="currentColor" />
                </div>
                <p className="text-white text-xl md:text-2xl font-bold mb-3">{card.label}</p>
                <p className={`${bodyColor} text-sm md:text-base leading-relaxed`}>
                  {card.verbalization}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsBanner
