import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  name?: string;
  image?: string;
  url?: string;
  jsonLd?: Record<string, any>;
}

export function SEO({ 
  title, 
  description, 
  keywords = "Sản xuất thùng carton, thùng carton giá rẻ, in hộp giấy, bao bì Hải Quân", 
  type = "website", 
  name = "Bao Bì Hải Quân", 
  image = "https://res.cloudinary.com/zq7yx874/image/upload/v1790234824/haiquan_web/logoHaiQuanWeb.webp", 
  url = "https://baobihaiquan.vn",
  jsonLd
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
