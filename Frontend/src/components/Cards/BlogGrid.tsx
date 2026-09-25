import { BlogCard, type BlogCardModel } from './BlogCard'

type BlogGridProps = {
  posts: BlogCardModel[]
  columns?: number
}

export function BlogGrid({ posts, columns = 3 }: BlogGridProps) {
  return (
    <div className="blog-grid-root">
      <div 
        className="premium-news-grid"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${columns}, 1fr)`, 
          gap: '30px',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto'
        }}
      >
        {posts.map((p, idx) => (
          <div 
            key={p.to} 
            style={{ 
              animation: `card-fade-in 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) ${idx * 0.15}s both` 
            }}
          >
            <BlogCard {...p} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes card-fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .premium-news-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 20px;
          }
        }

        @media (max-width: 640px) {
          .premium-news-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  )
}
