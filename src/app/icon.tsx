import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#02073B',
          color: '#3E75D9',
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          fontFamily: 'sans-serif',
          borderRadius: 6,
        }}
      >
        P
      </div>
    ),
    { ...size }
  )
}
