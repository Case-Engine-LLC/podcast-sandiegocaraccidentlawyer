import type { TranscriptSegment } from '@/lib/rss'
import { episodeTranscript } from './transcript'

export const generatedTranscripts: Record<string, TranscriptSegment[]> = {
  1: episodeTranscript,
}

export const TRANSCRIPTS_BY_GUID: Record<string, TranscriptSegment[]> = {}
