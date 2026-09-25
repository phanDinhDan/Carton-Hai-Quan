import { Helmet } from 'react-helmet-async'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { SplitSection } from '../../components/Sections/SplitSection'
import { kieuHopCoBanContent } from '../../data/content/kieuHopCoBan'

export function KieuHopCoBanPage() {
  return (
    <>
      <Helmet>
        <title>{kieuHopCoBanContent.seoTitle}</title>
      </Helmet>

      <HeroBanner
        title={kieuHopCoBanContent.hero.title}
        description={kieuHopCoBanContent.hero.description}
        backgroundImage={kieuHopCoBanContent.hero.backgroundImage}
        videoUrl="/video/bannerBG.mp4"
        align="center"
      />

      {kieuHopCoBanContent.sections.map((section) => (
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
