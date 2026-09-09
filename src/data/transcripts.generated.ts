import type { TranscriptSegment } from '@/lib/rss'
import { episodeTranscript } from './transcript'
import { episode1Transcript } from './episode1-transcript'

export const generatedTranscripts: Record<string, TranscriptSegment[]> = {
  1: episodeTranscript,
}

export const TRANSCRIPTS_BY_GUID: Record<string, TranscriptSegment[]> = {
  // "The Story Behind Liam Perry, a California-Based Lawyer" — published transcript
  // from Drive doc "Transcript - EP1 The Founder Interview - Liam Perry.docx".
  'flightcast:01M14VXZ6NME1G93V6BWA7YXMD': episode1Transcript,
}
