/** Site-wide SEO / Open Graph — single image for every page (including /contact). */
export const SITE = {
  name: 'StudyGlide Educational Consult',
  shortName: 'StudyGlide',
  url: 'https://studyglidedu.com',
  description: 'Expert guidance for Nigerian students ready to study abroad.',
  /**
   * Social preview image in public/og-image.png.
   * Do NOT add app/opengraph-image.jsx — that overrides this metadata.
   * After replacing the file, bump ogImageVersion and redeploy.
   */
  ogImageVersion: 5,
  ogImagePath: '/og-image.png',
  ogImageWidth: 512,
  ogImageHeight: 512,
}

/** Relative path for Next.js metadata (uses metadataBase in layout). */
export function getOgImagePath() {
  return `${SITE.ogImagePath}?v=${SITE.ogImageVersion}`
}

/** Absolute URL for external tools / manual checks. */
export function getOgImageUrl() {
  return `${SITE.url}${getOgImagePath()}`
}

export function getOgImages() {
  return [
    {
      url: getOgImagePath(),
      width: SITE.ogImageWidth,
      height: SITE.ogImageHeight,
      alt: SITE.name,
    },
  ]
}

export function getCanonicalUrl(pathname) {
  if (!pathname || pathname === '/') return `${SITE.url}/`
  return `${SITE.url}${pathname.endsWith('/') ? pathname.slice(0, -1) : pathname}`
}

/** Next.js metadata for a route (server components). Same OG image on every page. */
export function pageMetadata({ title, description, path = '/' }) {
  const pageTitle = title ? `${title} | ${SITE.shortName}` : SITE.name
  const pageDescription = description ?? SITE.description
  const url = getCanonicalUrl(path)
  const images = getOgImages()

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: SITE.name,
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: images.map((img) => img.url),
    },
  }
}
