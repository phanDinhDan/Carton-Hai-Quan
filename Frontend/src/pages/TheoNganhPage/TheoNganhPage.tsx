import { Helmet } from 'react-helmet-async'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { SplitSection } from '../../components/Sections/SplitSection'
import { theoNganhContent } from '../../data/content/theoNganh'

export function TheoNganhPage() {
  return (
    <>
      <Helmet>
        <title>{theoNganhContent.seoTitle}</title>
      </Helmet>

      <HeroBanner
        title={theoNganhContent.hero.title}
        description={theoNganhContent.hero.description}
        backgroundImage={theoNganhContent.hero.backgroundImage}
        videoUrl="/video/bannerBG.mp4"
        align="center"
      />

      {theoNganhContent.sections.map((section) => (
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
