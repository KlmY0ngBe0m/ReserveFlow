import Link from "next/link";

export default function CustomerSignupPage() {
    return (
        <main>
            <section className="page-header">
                <Link href="/signup" className="back-link">
                    ← 회원가입 유형 선택으로
                </Link>

                <p className="eyebrow">Customer Sign up</p>
                <h1>개인 회원 가입</h1>
                <p>
                    관광 체험을 예약하고 내 예약 내역을 관리하기 위한 개인 회원
                    정보입니다.
                </p>
            </section>

            <section className="form-card">
                <label htmlFor="customer-name">이름</label>
                <input
                    id="customer-name"
                    type="text"
                    placeholder="예: 홍길동"
                />

                <label htmlFor="customer-email">이메일</label>
                <input
                    id="customer-email"
                    type="email"
                    placeholder="example@email.com"
                />

                <label htmlFor="customer-password">비밀번호</label>
                <input
                    id="customer-password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                />

                <label htmlFor="customer-phone">전화번호</label>
                <input
                    id="customer-phone"
                    type="tel"
                    placeholder="예: 010-1234-5678"
                />

                <label htmlFor="customer-language">선호 언어</label>
                <select id="customer-language" defaultValue="ko">
                    <option value="ko">한국어</option>
                    <option value="ja">日本語</option>
                </select>

                <button type="button">개인 회원 가입</button>
            </section>
        </main>
    );
}