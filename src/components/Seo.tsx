import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SeoEntry = {
  title: string
  description: string
  path: string
  image?: string
}

const defaultSeo: SeoEntry = {
  title: 'OTSEF | Off The Streets Educational Foundation',
  description:
    'Off The Streets Educational Foundation supports children and young people through education, mentorship, book distribution, and community partnerships.',
  path: '/',
  image: '/logo.png',
}

const seoByPath: Record<string, SeoEntry> = {
  '/': defaultSeo,
  '/about': {
    title: 'About OTSEF | Off The Streets Educational Foundation',
    description:
      'Learn about OTSEF, our mission, values, founder story, and commitment to helping children and young people access education and opportunity.',
    path: '/about',
    image: '/img/founder.png',
  },
  '/projects': {
    title: 'Our Impact | OTSEF',
    description:
      'See OTSEF impact through book distribution, school and public library support, partnerships, and community education initiatives.',
    path: '/projects',
    image: '/img/img10.jpg',
  },
  '/contact': {
    title: 'Contact OTSEF | Partner, Volunteer, or Sponsor',
    description:
      'Contact Off The Streets Educational Foundation to partner, sponsor, volunteer, donate, or learn more about our work.',
    path: '/contact',
    image: '/logo.png',
  },
  '/donate': {
    title: "Donate Now | Support a Child's Future Today | OTSEF",
    description:
      'Donate to OTSEF to support scholarships, educational materials, vocational training, youth empowerment, and community development for vulnerable children.',
    path: '/donate',
    image: '/img/img13.jpg',
  },
}

function absoluteUrl(path: string) {
  return `https://otsef.org${path}`
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value)
  })
}

function upsertCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

export function Seo() {
  const location = useLocation()

  useEffect(() => {
    const seo = seoByPath[location.pathname] || defaultSeo
    const canonicalUrl = absoluteUrl(seo.path)
    const imageUrl = seo.image?.startsWith('http')
      ? seo.image
      : absoluteUrl(seo.image || defaultSeo.image || '/logo.png')

    document.title = seo.title
    upsertCanonical(canonicalUrl)
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    })
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    })
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
  }, [location.pathname])

  return null
}
