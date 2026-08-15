import Link from "next/link";

export default function BusinessSignupPage() {
    return (
        <main>
            <section className="page-header">
                <Link href="/signup" className="back-link">
                    ← 회원가입 유형 선택으로
                </Link>

                <p className="eyebrow">Business Sign up</p>
                <h1>사업자 회원 가입</h1>
                <p>
                    체험 상품을 등록하고 고객의 예약 신청을 관리하기 위한 사업자
                    정보입니다.
                </p>
            </section>

            <section className="form-card">
                <div className="form-grid">
                    <div>
                        <label htmlFor="business-name">업체명</label>
                        <input
                            id="business-name"
                            type="text"
                            placeholder="예: 삿포로 투어 컴퍼니"
                        />
                    </div>

                    <div>
                        <label htmlFor="representative-name">대표자명</label>
                        <input
                            id="representative-name"
                            type="text"
                            placeholder="예: 야마다 타로"
                        />
                    </div>

                    <div>
                        <label htmlFor="business-email">이메일</label>
                        <input
                            id="business-email"
                            type="email"
                            placeholder="business@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="business-password">비밀번호</label>
                        <input
                            id="business-password"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                        />
                    </div>

                    <div>
                        <label htmlFor="business-phone">전화번호</label>
                        <input
                            id="business-phone"
                            type="tel"
                            placeholder="예: 011-123-4567"
                        />
                    </div>

                    <div>
                        <label htmlFor="business-language">운영 언어</label>
                        <select id="business-language" defaultValue="ja">
                            <option value="ja">日本語</option>
                            <option value="ko">한국어</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="bussinss-number">사업자 등록번호</label>
                    <input
                        id="business-number"
                        type="text"
                        placeholder="예: 123-45-6789"
                    />
                </div>

                <label htmlFor="business-license">사업자 등록증</label>
                <input
                    id="business-license"
                    type="file"
                    accept="image/*, pdf"
                />

                <p className="helper-text">
                    사업자 등록증을 제출하면 관리자 검토 후 사업자 계정이 활성화됩니다.
                </p>

                <label htmlFor="business-address">업체 주소</label>
                <input
                    id="business-address"
                    type="text"
                    placeholder="예: 北海道札幌市中央区..."
                />

                <label htmlFor="business-description">업체 소개</label>
                <textarea
                    id="business-description"
                    placeholder="운영 중인 관광 체험, 가이드 경력, 제공 가능한 언어 등을 입력하세요."
                />

                <button type="button">사업자 회원 가입</button>
            </section>
        </main>
    );
}