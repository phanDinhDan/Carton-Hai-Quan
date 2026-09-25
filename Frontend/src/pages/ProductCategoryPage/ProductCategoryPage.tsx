import { Helmet } from 'react-helmet-async'
import { HeroBanner } from '../../components/Hero/HeroBanner'
import { SplitSection } from '../../components/Sections/SplitSection'

export function ProductCategoryPage() {
  return (
    <>
      <Helmet>
        <title>Thùng carton - Công ty Cổ phần Bao bì Hải Quân</title>
      </Helmet>
      <HeroBanner
        kicker="Giải pháp đóng gói"
        title="Thùng carton"
        description="Tổng hợp các sản phẩm thùng carton của bao bì Hải Quân"
        backgroundImage="https://res.cloudinary.com/zq7yx874/image/upload/v1790234795/haiquan_web/Hero-Image-1-1.webp"
        videoUrl="/video/bannerBG.mp4"
        align="center"
      />

      <SplitSection
        title="Theo kích thước"
        description="Không phải lúc nào khách hàng cũng quan tâm đến ngành hay kỹ thuật, đôi khi điều họ cần chỉ đơn giản là thùng có kích thước phù hợp. Vì vậy, chúng tôi phân loại thùng carton theo size nhỏ, trung, lớn và đặc biệt là các kích thước chuẩn TMĐT như 20×20×20, 30×20×10, 40×30×20 cm – những size được các shop online và sàn thương mại điện tử ưa chuộng nhất. Nhóm này mang lại lợi ích rõ ràng: dễ mua, dễ dùng, tối ưu phí ship, thuận tiện lưu kho và xếp chồng. Dù bạn là cá nhân bán hàng online hay doanh nghiệp cần số lượng lớn, thùng carton theo kích thước giúp quá trình đóng gói trở nên nhanh chóng và chuyên nghiệp hơn."
        image="https://res.cloudinary.com/zq7yx874/image/upload/v1790234804/haiquan_web/kichthuocphobientmdt.webp"
        ctaText="Xem thêm"
        ctaTo="/kieu-hop-co-ban"
        reverse={true}
      />

      <SplitSection
        title="Theo ngành"
        description="Mỗi ngành hàng đều có những yêu cầu riêng biệt về đóng gói. Nhóm sản phẩm này được thiết kế chuyên biệt cho từng lĩnh vực: thùng chống ẩm, có lỗ thoáng cho thủy sản và nông nghiệp; thùng tiêu chuẩn RSC, in logo và mã vạch cho thương mại điện tử; thùng chống tĩnh điện và có vách ngăn cho điện tử và linh kiện; thùng in màu sắc nét cho thực phẩm – đồ uống; thùng 5–7 lớp chịu tải cho đồ gỗ, nội thất; và thùng trưng bày (shelf ready) cho FMCG & bán lẻ. Điểm chung là mỗi giải pháp đều được xây dựng dựa trên insight thực tế của ngành, đảm bảo hàng hóa giữ nguyên chất lượng, tối ưu chi phí và tăng uy tín thương hiệu khi đến tay người tiêu dùng."
        image="https://res.cloudinary.com/zq7yx874/image/upload/v1790234819/haiquan_web/theo_nganh.webp"
        ctaText="Xem thêm"
        ctaTo="/theo-nganh"
        reverse={false}
      />

      <SplitSection
        title="Theo kỹ thuật"
        description="Phân loại theo kỹ thuật tập trung vào cấu trúc sóng, số lớp giấy, chỉ số chịu lực và xử lý bề mặt (chống ẩm, phủ PE, chống tĩnh điện...), cùng công nghệ in ấn (Flexo/Offset, cán màng). Cách tiếp cận này giúp bạn chọn đúng loại thùng theo tải trọng và điều kiện vận chuyển thực tế."
        image="https://res.cloudinary.com/zq7yx874/image/upload/v1790234818/haiquan_web/theo_ky_thuat.webp"
        ctaText="Xem thêm"
        ctaTo="/theo-ky-thuat"
        reverse={true}
      />

      <SplitSection
        title="Phụ trợ"
        description="Ngoài thùng carton, chúng tôi cung cấp các vật tư và sản phẩm phụ trợ như vách ngăn, tấm lót, giấy tổ ong, pallet giấy… giúp hoàn thiện giải pháp đóng gói, tối ưu bảo vệ hàng hóa và tăng hiệu quả vận chuyển."
        image="https://res.cloudinary.com/zq7yx874/image/upload/v1790234811/haiquan_web/phu_tro.webp"
        ctaText="Xem thêm"
        ctaTo="/phu-tro"
        reverse={false}
      />
    </>
  )
}
