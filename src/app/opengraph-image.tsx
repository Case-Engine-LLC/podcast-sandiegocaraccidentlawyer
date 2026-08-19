import { ImageResponse } from 'next/og'
import { siteConfig, attorney } from '@/data/siteData'

export const runtime = 'edge'
export const alt = `${siteConfig.podcastName} — hosted by ${attorney.name} of ${attorney.firm}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#02073B',
          color: '#ffffff',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 500,
            height: 500,
            background:
              'radial-gradient(circle at 70% 30%, rgba(62,117,217,0.45) 0%, rgba(2,7,59,0) 60%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 56,
          }}
        >
          <div
            style={{
              width: 48,
              height: 2,
              background: '#3E75D9',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#3E75D9',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            Perry Personal Injury
          </div>
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: '-0.035em',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 32,
          }}
        >
          <div style={{ display: 'flex' }}>{attorney.name}</div>
        </div>

        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.35,
            maxWidth: 920,
            display: 'flex',
            marginBottom: 48,
          }}
        >
          {attorney.title} at {attorney.firm}. Host of San Diego Accident
          Attorneys & Law — California car accident claims explained by a
          former insurance defense litigator.
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 64,
            left: 80,
            right: 80,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.18)',
            fontSize: 22,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            <span style={{ display: 'flex' }}>Podcast</span>
            <span style={{ display: 'flex', color: '#3E75D9' }}>·</span>
            <span style={{ display: 'flex' }}>San Diego, CA</span>
            <span style={{ display: 'flex', color: '#3E75D9' }}>·</span>
            <span style={{ display: 'flex' }}>California law</span>
          </div>
          <div style={{ display: 'flex', color: '#3E75D9', fontWeight: 600 }}>
            perrypi.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
