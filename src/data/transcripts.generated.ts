import type { TranscriptSegment } from '@/lib/rss'
import { episodeTranscript } from './transcript'
import { episode1Transcript } from './episode1-transcript'

export const generatedTranscripts: Record<string, TranscriptSegment[]> = {
  1: episodeTranscript,
  // "The Story Behind Liam Perry, a California-Based Lawyer" — published transcript
  // from Drive doc "Transcript - EP1 The Founder Interview - Liam Perry.docx".
  // Keyed by slug, not RSS guid: fast-xml-parser returns <guid isPermaLink="false">
  // as an object ({ '#text', '@_isPermaLink' }), so `String(item.guid)` in
  // src/lib/rss.ts collapses every episode's guid to the literal string
  // "[object Object]" — a GUID-keyed entry here would silently never match.
  // (Pre-existing repo bug, out of scope to fix here; slug lookup already works
  // and is what PR #20 standardized on for this exact reason.)
  'the-story-behind-liam-perry-a-california-based-lawyer': episode1Transcript,
}

export const TRANSCRIPTS_BY_GUID: Record<string, TranscriptSegment[]> = {
  // "The Story Behind Liam Perry, a California-Based Lawyer" — published transcript
  // from Drive doc "Transcript - EP1 The Founder Interview - Liam Perry.docx".
  'flightcast:01M14VXZ6NME1G93V6BWA7YXMD': episode1Transcript,
}
