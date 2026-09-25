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
  const [submitted, setSubmitted] = useState(false)
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
    setSubmitted(false)

    if (!canSubmit) {
      setError('Vui lòng kiểm tra các trường bắt buộc.')
      return
    }

    try {
      setSubmitting(true)
      await onSubmit?.(values)
      setSubmitted(true)
      setValues(defaultValues)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gửi thông tin thất bại. Vui lòng thử lại.')
    } finally {
      setSubmitting(false)
    }
  }

  const formContent = (
    <form onSubmit={handleSubmit} noValidate>
      {/* Status Messages */}
      {error && (
        <div className="status-msg error">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          {error}
        </div>
      )}
      {submitted && (
        <div className="status-msg success">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Đã gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.
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
  )

  if (isRaw) return formContent

  return (
    <div className="premium-form-container">
      {formContent}
    </div>
  )
}
