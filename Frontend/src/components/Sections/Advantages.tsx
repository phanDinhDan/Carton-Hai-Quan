interface AdvantageItem {
  title: string
  description: string
  icon: string
}

interface AdvantagesProps {
  kicker: string
  title: string
  description: string
  items: AdvantageItem[]
}

export function Advantages({ kicker, title, description, items }: AdvantagesProps) {
  return (
    <section className="section bg-light" id="section_376779530" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      <div className="section-content relative container">
        <div className="row align-middle" id="row-869736139">
          <div id="col-951095536" className="col medium-6 small-12 large-6 advantages-col">
            <div className="col-inner text-left advantages-text-col">
              <div id="text-1497413446" className="text tieude-1">
                <h4 style={{ color: '#00d1ff', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '14px', fontWeight: 700, marginBottom: '20px' }}>{kicker}</h4>
                <h2 style={{ color: '#002664', fontWeight: 800, lineHeight: 1.25, marginBottom: '25px' }} className="responsive-h2">{title}</h2>
                <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '40px' }} className="responsive-p">{description}</p>
              </div>
            </div>
          </div>

          <div id="col-492201791" className="col medium-6 small-12 large-6 advantages-col">
            <div className="col-inner">
              {items.map((item) => (
                <div 
                  key={item.title}
                  className="anti-premium-card"
                  style={{
                    padding: '35px',
                    marginBottom: '25px',
                    cursor: 'default'
                  }}
                >
                  <div className="icon-box featured-box box-t-1 icon-box-left text-left" style={{ margin: 0, display: 'flex', alignItems: 'flex-start', gap: '25px' }}>
                    <div className="icon-box-img" style={{ width: 60, flexShrink: 0 }}>
                      <img
                        loading="lazy"
                        decoding="async"
                        src={item.icon}
                        className="attachment-medium size-medium"
                        alt={item.title}
                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="icon-box-text" style={{ flexGrow: 1 }}>
                      <h3 style={{ fontSize: '20px', color: '#002664', fontWeight: 800, marginBottom: '12px' }}>{item.title}</h3>
                      <p style={{ color: '#666', fontSize: '15.5px', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
