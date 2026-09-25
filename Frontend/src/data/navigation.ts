export type NavItem =
  | {
      type: 'link'
      label: string
      to: string
    }
  | {
      type: 'dropdown'
      label: string
      to: string
      children: Array<{ label: string; to: string }>
    }

export const navigation: NavItem[] = [
  { type: 'link', label: 'Trang chủ', to: '/' },
  { type: 'link', label: 'Giới thiệu', to: '/gioi-thieu' },
  {
    type: 'dropdown',
    label: 'Sản phẩm',
    to: '/thung-carton',
    children: [
      { label: 'Theo kích thước', to: '/kieu-hop-co-ban' },
      { label: 'Theo ngành', to: '/theo-nganh' },
      { label: 'Theo kỹ thuật', to: '/theo-ky-thuat' },
      { label: 'Phụ trợ', to: '/phu-tro' },
    ],
  },
  { type: 'link', label: 'Các dạng hộp cơ bản', to: '/cac-dang-hop-co-ban' },
  { type: 'link', label: 'Tin tức', to: '/blog' },
]

