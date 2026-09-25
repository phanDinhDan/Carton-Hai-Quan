import { Helmet } from 'react-helmet-async'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { SplitSection } from '../../components/Sections/SplitSection'
import { phuTroContent } from '../../data/content/phuTro'

export function PhuTroPage() {
  return (
    <>
      <Helmet>
        <title>{phuTroContent.seoTitle}</title>
      </Helmet>

      <HeroBanner
        title={phuTroContent.hero.title}
        description={phuTroContent.hero.description}
        backgroundImage={phuTroContent.hero.backgroundImage}
        videoUrl="/video/bannerBG.mp4"
        align="center"
      />

      {phuTroContent.sections.map((section) => (
        <SplitSection
          key={section.title}
          title={section.title}
          description={section.body}
          image={section.imageSrc}
          reverse={section.imageSide === 'right'}
          ctaText={section.ctaLabel}
          ctaTo={section.ctaTo}
        />
      ))}
    </>
  )
}
