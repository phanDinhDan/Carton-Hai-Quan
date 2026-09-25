import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../../layouts/RootLayout/RootLayout'
import { AboutPage } from '../../pages/AboutPage/AboutPage'
import { BlogPage } from '../../pages/BlogPage/BlogPage'
import { CacDangHopCoBanPage } from '../../pages/CacDangHopCoBanPage/CacDangHopCoBanPage'
import { ContactPage } from '../../pages/ContactPage/ContactPage'
import { HomePage } from '../../pages/HomePage/HomePage'
import { KieuHopCoBanPage } from '../../pages/KieuHopCoBanPage/KieuHopCoBanPage'
import { PhuTroPage } from '../../pages/PhuTroPage/PhuTroPage'
import { ProductCategoryPage } from '../../pages/ProductCategoryPage/ProductCategoryPage'
import { TheoKyThuatPage } from '../../pages/TheoKyThuatPage/TheoKyThuatPage'
import { TheoNganhPage } from '../../pages/TheoNganhPage/TheoNganhPage'
import { SearchPage } from '../../pages/SearchPage/SearchPage'
import { BlogPostPage } from '../../pages/BlogPage/subpages/BlogPostPage'
import { Thung3LopPage } from '../../pages/LandingPages/Thung3LopPage'
import { Thung5LopPage } from '../../pages/LandingPages/Thung5LopPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'gioi-thieu', element: <AboutPage /> },
      { path: 'lien-he', element: <ContactPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'thung-carton', element: <ProductCategoryPage /> },
      { path: 'kieu-hop-co-ban', element: <KieuHopCoBanPage /> },
      { path: 'cac-dang-hop-co-ban', element: <CacDangHopCoBanPage /> },
      { path: 'theo-nganh', element: <TheoNganhPage /> },
      { path: 'theo-ky-thuat', element: <TheoKyThuatPage /> },
      { path: 'phu-tro', element: <PhuTroPage /> },
      { path: 'tim-kiem', element: <SearchPage /> },
      { path: 'san-pham/thung-carton-3-lop', element: <Thung3LopPage /> },
      { path: 'san-pham/thung-carton-5-lop', element: <Thung5LopPage /> },
    ],
  },
])
