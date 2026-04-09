import { useSearchParams } from 'react-router-dom'

export default function KakaoPayRefund() {
  const [params] = useSearchParams()

  const itemName   = params.get('item_name') || '펫 호텔 예약'
  const total      = params.get('cancel_amount') || '0'
  const canceledAt = params.get('canceled_at') || '-'

  const closeAndReload = () => {
    if (window.opener) {
      window.opener.location.reload()
      window.close()
    } else {
      window.location.href = '/mypage'
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #fef2f2, #fee2e2)', fontFamily: "'Noto Sans KR', sans-serif"
    }}>
      <div style={{
        background: '#fff', borderRadius: '20px', padding: '48px 40px',
        textAlign: 'center', maxWidth: '420px', width: '90%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: '#fee2e2', display: 'flex', alignItems: 'center',
          justifyContent: 'center', margin: '0 auto 24px'
        }}>
          <span style={{ fontSize: '40px' }}>💸</span>
        </div>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
          환불이 완료되었습니다
        </h2>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>
          환불 처리가 정상적으로 완료되었습니다
        </p>

        {/* 환불 정보 */}
        <div style={{
          background: '#f9fafb', borderRadius: '12px', padding: '20px',
          marginBottom: '28px', textAlign: 'left'
        }}>
          {[
            { label: '상품명',    value: itemName },
            { label: '환불 금액', value: `${Number(total).toLocaleString()}원` },
            { label: '환불 시각', value: canceledAt },
          ].map(({ label, value }) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '8px 0', borderBottom: '1px solid #e5e7eb',
              fontSize: '14px'
            }}>
              <span style={{ color: '#6b7280' }}>{label}</span>
              <span style={{ fontWeight: 600, color: '#111827' }}>{value}</span>
            </div>
          ))}
        </div>

        <button onClick={closeAndReload} style={{
          width: '100%', padding: '14px', borderRadius: '10px',
          border: 'none', background: '#ef4444', color: '#fff',
          fontSize: '16px', fontWeight: 600, cursor: 'pointer'
        }}>
          확인
        </button>
      </div>
    </div>
  )
}