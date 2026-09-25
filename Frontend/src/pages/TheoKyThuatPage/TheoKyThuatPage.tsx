import { Helmet } from 'react-helmet-async'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { SplitSection } from '../../components/Sections/SplitSection'
import { theoKyThuatContent } from '../../data/content/theoKyThuat'

export function TheoKyThuatPage() {
  return (
    <>
      <Helmet>
        <title>{theoKyThuatContent.seoTitle}</title>
      </Helmet>

      <HeroBanner
        title={theoKyThuatContent.hero.title}
        description={theoKyThuatContent.hero.description}
        backgroundImage={theoKyThuatContent.hero.backgroundImage}
        videoUrl="/video/bannerBG.mp4"
        align="center"
      />

      {theoKyThuatContent.sections.map((section) => (
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
