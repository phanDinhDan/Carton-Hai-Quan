export type HeroContent = {
  title: string
  description: string
  backgroundImage: string
}

export type SplitSectionContent = {
  title: string
  body: string
  imageSrc: string
  imageSide: 'left' | 'right'
  ctaLabel?: string
  ctaTo?: string
}

export type ProductSubpageContent = {
  seoTitle: string
  hero: HeroContent
  sections: SplitSectionContent[]
}

