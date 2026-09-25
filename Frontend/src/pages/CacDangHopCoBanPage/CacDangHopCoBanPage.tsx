import { Helmet } from 'react-helmet-async'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { SplitSection } from '../../components/Sections/SplitSection'
import { cacDangHopCoBanContent } from '../../data/content/cacDangHopCoBan'

export function CacDangHopCoBanPage() {
  return (
    <>
      <Helmet>
        <title>{cacDangHopCoBanContent.seoTitle}</title>
      </Helmet>

      <HeroBanner
        title={cacDangHopCoBanContent.hero.title}
        description={cacDangHopCoBanContent.hero.description}
        backgroundImage={cacDangHopCoBanContent.hero.backgroundImage}
        videoUrl="/video/bannerBG.mp4"
        align="center"
      />

      {cacDangHopCoBanContent.sections.map((section) => (
        <SplitSection
          key={section.title}
          title={section.title}
          description={section.body}
          image={section.imageSrc}
          reverse={section.imageSide === 'right'}
        />
      ))}
    </>
  )
}
