import { Link } from 'react-router-dom'

interface FeaturedItem {
  title: string
  description: string
  icon: string
  to: string
}

interface FeaturedSectionsProps {
  title: string
  description: string
  items: FeaturedItem[]
}

export function FeaturedSections({ title, description, items }: FeaturedSectionsProps) {
  return (
    <section className="section bg-light" id="section_1576470340" style={{ paddingBottom: '80px' }}>
      <div className="section-content relative container">
        <div className="row align-center" id="row-387163201">
          <div id="col-2122780878" className="col medium-9 small-12 large-9">
            <div className="col-inner text-center">
              <div id="text-2740392129" className="text tieude-1" style={{ marginBottom: '50px' }}>
                <h2 style={{ color: '#002664', fontWeight: 800, fontSize: '38px', marginBottom: '20px' }}>{title}</h2>
                <p style={{ color: '#555', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>{description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-equal row-box-t" id="row-1156929712">
          {items.map((item) => (
            <div key={item.title} className="col medium-4 small-12 large-4">
              <div className="anti-premium-card col-inner" style={{ padding: '45px 35px', height: '100%' }}>
                <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '85px', height: '85px', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        loading="lazy"
                        decoding="async"
                        src={item.icon}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="card-title" style={{ fontSize: '24px', fontWeight: 700, color: '#002664', marginBottom: '15px' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#666', fontSize: '15.5px', lineHeight: 1.6, margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
