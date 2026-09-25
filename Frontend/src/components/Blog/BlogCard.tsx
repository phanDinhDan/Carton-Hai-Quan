import { Link } from 'react-router-dom'

type BlogCardProps = {
  id: number
  image: string
  title: string
  excerpt: string
  date: string
}

export function BlogCard({ id, image, title, excerpt, date }: BlogCardProps) {
  return (
    <div className="blog-card-wrapper col medium-4 small-12 large-4">
      <div className="anti-premium-card col-inner" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="img-wrapper" style={{ overflow: 'hidden', height: '200px' }}>
          <img 
            src={image} 
            alt={title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
            className="blog-img"
          />
        </div>
        <div className="text-wrapper" style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <span className="blog-date" style={{ color: '#00d1ff', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '10px', display: 'block' }}>
            {date}
          </span>
          <h3 className="blog-title" style={{ color: '#002664', fontSize: '18px', fontWeight: 700, lineHeight: 1.4, marginBottom: '15px' }}>
            {title}
          </h3>
          <p className="blog-excerpt" style={{ color: '#666', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
            {excerpt}
          </p>
          <Link 
            to={`/tin-tuc/${id}`} 
            className="is-underline" 
            style={{ color: '#002664', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '2px solid #002664', width: 'fit-content', paddingBottom: '3px' }}
          >
            Đọc thêm
          </Link>
        </div>
      </div>
      <style>{`
        .blog-card-wrapper:hover .blog-img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  )
}
