/**
 * Props for a link whose destination is configurable.
 *
 * The CTA href in siteData can be either an in-page anchor (e.g. "#form") or a
 * URL on the firm's own site. Only the off-site case should open a new tab —
 * putting target="_blank" on an anchor jump spawns a pointless tab instead of
 * scrolling the page.
 */
export function externalLinkProps(href: string | undefined | null) {
  return /^https?:\/\//i.test(href ?? '')
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}
}
