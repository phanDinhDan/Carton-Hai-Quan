export const footerData = {
  logoSrc:
    '',
  columns: [
    {
      title: 'Sản phẩm',
      items: [
        { label: 'Thùng carton 3 lớp', to: '/san-pham/thung-carton-3-lop' },
        { label: 'Thùng carton 5 lớp', to: '/san-pham/thung-carton-5-lop' },
        { label: 'Liên hệ kinh doanh', to: '/lien-he' }
      ],
    },
    {
      title: 'Về công ty',
      items: [
        { label: 'Giới thiệu', to: '/gioi-thieu' },
        { label: 'Định vị nhà máy', to: '/lien-he' },
      ],
    },
    {
      title: 'Tuyển dụng',
      items: [{ label: 'Danh sách các vị trí tuyển dụng', to: '/tuyen-dung' }],
      cta: { label: 'Xem thêm', to: '/tuyen-dung' },
    },
    {
      title: 'Hỗ trợ',
      items: [
        { label: 'Hotline: 0796.265.379 (Mr. Hải)', to: 'tel:0796265379' },
        { label: 'Hotline: 0839.792.923 (Mr. Đàn)', to: 'tel:0839792923' },
      ],
    },
  ],
  copyright: 'Bản quyền thuộc về baobihaiquan.com',
} as const

