import { useMemo, useState } from 'react'

type ContactFormValues = {
  requestType: string
  fullName: string
  jobTitle: string
  companyName: string
  phone: string
  email: string
  message: string
}

type ContactFormProps = {
  onSubmit?: (values: ContactFormValues) => Promise<void> | void
  isRaw?: boolean // If true, removes the container shadow and padding
}

const defaultValues: ContactFormValues = {
  requestType: 'Thông tin sản phẩm',
  fullName: '',
  jobTitle: '',
  companyName: '',
  phone: '',
  email: '',
  message: '',
}

export function ContactForm({ onSubmit, isRaw }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>(defaultValues)
  const [submitting, setSubmitting] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const requiredErrors = useMemo(() => {
    const next: Record<string, string> = {}
    if (!values.fullName.trim()) next.fullName = 'Vui lòng nhập Họ và tên'
    if (!values.companyName.trim()) next.companyName = 'Vui lòng nhập Tên công ty'
    if (!values.phone.trim()) next.phone = 'Vui lòng nhập Số điện thoại'
    if (!values.email.trim()) next.email = 'Vui lòng nhập Email'
    return next
  }, [values])

  const canSubmit = Object.keys(requiredErrors).length === 0 && !submitting

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!canSubmit) {
      setError('Vui lòng kiểm tra các trường bắt buộc.')
      return
    }

    try {
      setSubmitting(true)
      if (onSubmit) {
        await onSubmit(values)
      } else {
        const response = await fetch('https://formsubmit.co/ajax/phandinhdan6602@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `[Bao Bì Hải Quân] Yêu cầu báo giá mới từ ${values.fullName}`,
            "Họ và tên": values.fullName,
            "Số điện thoại": values.phone,
            "Email": values.email,
            "Tên công ty": values.companyName,
            "Chức danh": values.jobTitle || 'Chưa cung cấp',
            "Nhu cầu quan tâm": values.requestType,
            "Lời nhắn": values.message || 'Không có',
            "_template": "table"
          })
        })

        const resData = await response.json()
        if (!response.ok || resData.success === 'false') {
          throw new Error(resData.message || 'Gửi thông tin thất bại. Vui lòng thử lại.')
        }
      }

      setShowModal(true)
      setValues(defaultValues)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gửi thông tin thất bại. Vui lòng thử lại.')
    } finally {
      setSubmitting(false)
    }
  }

  const formContent = (
    <>
      <form onSubmit={handleSubmit} noValidate>
        {/* Error Status Message */}
        {error && (
          <div className="status-msg error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            {error}
          </div>
        )}

        <div className="form-group-t">
          <label>Họ và tên <b>*</b></label>
          <input
            placeholder="VD: Nguyễn Văn A"
            value={values.fullName}
            onChange={(e) => setValues((s) => ({ ...s, fullName: e.target.value }))}
            aria-invalid={Boolean(requiredErrors.fullName)}
          />
        </div>

        <div className="contact-form-row-2col">
          <div className="form-group-t">
            <label>Số điện thoại <b>*</b></label>
            <input
              placeholder="098x xxx xxx"
              value={values.phone}
              onChange={(e) => setValues((s) => ({ ...s, phone: e.target.value }))}
              aria-invalid={Boolean(requiredErrors.phone)}
            />
          </div>
          <div className="form-group-t">
            <label>Email <b>*</b></label>
            <input
              type="email"
              placeholder="example@company.com"
              value={values.email}
              onChange={(e) => setValues((s) => ({ ...s, email: e.target.value }))}
              aria-invalid={Boolean(requiredErrors.email)}
            />
          </div>
        </div>

        <div className="form-group-t">
          <label>Tên công ty <b>*</b></label>
          <input
            placeholder="Nhập tên doanh nghiệp"
            value={values.companyName}
            onChange={(e) => setValues((s) => ({ ...s, companyName: e.target.value }))}
            aria-invalid={Boolean(requiredErrors.companyName)}
          />
        </div>

        <div className="form-group-t">
          <label>Chức danh (không bắt buộc)</label>
          <input 
            placeholder="VD: Trưởng phòng thu mua"
            value={values.jobTitle} 
            onChange={(e) => setValues((s) => ({ ...s, jobTitle: e.target.value }))} 
          />
        </div>
        
        <div className="form-group-t">
          <label>Bạn đang quan tâm đến <b>*</b></label>
          <div className="request-type-grid">
            {['Thông tin sản phẩm', 'Yêu cầu giấy bao bì', 'Quan hệ nhà đầu tư', 'Khác'].map((opt) => (
              <label key={opt} className="chip-option">
                <input
                  type="radio"
                  name="requestType"
                  value={opt}
                  checked={values.requestType === opt}
                  onChange={() => setValues((s) => ({ ...s, requestType: opt }))}
                />
                <span className="chip-label">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-group-t">
          <label>Nội dung lời nhắn</label>
          <textarea
            placeholder="Yêu cầu cụ thể của bạn..."
            rows={3}
            value={values.message}
            onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <button 
            className="button primary" 
            type="submit" 
            disabled={!canSubmit} 
            style={{ 
              borderRadius: 16, 
              width: '100%', 
              padding: '16px',
              fontSize: '16px',
              height: 'auto'
            }}
          >
            <span>{submitting ? 'ĐANG XỬ LÝ...' : 'GỬI YÊU CẦU NGAY'}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '12px' }}><path d="M9 18l6-6-6-6"></path></svg>
          </button>
        </div>

        <style>{`
          .contact-form-row-2col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          @media (max-width: 640px) {
            .contact-form-row-2col {
              grid-template-columns: 1fr;
              gap: 0;
            }
          }
        `}</style>
      </form>

      {/* Professional Success Popup Modal */}
      {showModal && (
        <div 
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0, 15, 45, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeInOverlay 0.3s ease'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px 32px',
              maxWidth: '480px',
              width: '100%',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 38, 100, 0.35)',
              position: 'relative',
              animation: 'popupZoomIn 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f1f5f9',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748b',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Success Checkmark Badge */}
            <div style={{
              width: '80px',
              height: '80px',
              background: '#ecfdf5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              border: '4px solid #d1fae5'
            }}>
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#002664', fontWeight: 800, marginBottom: '12px' }}>
              Gửi Yêu Cầu Thành Công!
            </h3>

            <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              Cảm ơn quý khách đã tin tưởng <strong>Bao Bì Hải Quân</strong>. Đội ngũ tư vấn sẽ phản hồi thông tin báo giá chi tiết qua Điện thoại/Email trong vòng <strong>15 - 30 phút</strong>.
            </p>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '14px 16px',
              marginBottom: '24px',
              border: '1px solid #e2e8f0',
              fontSize: '0.88rem',
              color: '#002664',
              fontWeight: 600
            }}>
              📞 Hotline hỗ trợ nhanh: <a href="tel:0796265379" style={{ color: '#002664', fontWeight: 800, textDecoration: 'none' }}>0796.265.379</a> (Mr. Hải) | <a href="tel:0839792923" style={{ color: '#002664', fontWeight: 800, textDecoration: 'none' }}>0839.792.923</a> (Mr. Đàn)
            </div>

            <button 
              onClick={() => setShowModal(false)}
              style={{
                width: '100%',
                backgroundColor: '#002664',
                color: '#ffffff',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0, 38, 100, 0.25)',
                transition: 'all 0.2s'
              }}
            >
              Hoàn tất & Đóng
            </button>
          </div>

          <style>{`
            @keyframes fadeInOverlay {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes popupZoomIn {
              from { opacity: 0; transform: scale(0.85); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </>
  )

  if (isRaw) return formContent

  return (
    <div className="premium-form-container">
      {formContent}
    </div>
  )
}
