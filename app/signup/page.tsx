import Link from "next/link";

export default function SignupPage() {
    return (
        <main>
            <section className="page-header">
                <Link href="/" className="back-link">
                    ← 홈으로
                </Link>

                <p className="eyebrow">Sign up</p>
                <h1>회원가입 유형 선택</h1>
                <p>
                    ReserveFlow는 예약을 신청하는 개인 회원과 체험 상품을 운영하는
                    사업자 회원을 구분해서 관리합니다.
                </p>
            </section>

            <section className="signup-type-grid">
                <article className="signup-type-card">
                    <span>Customer</span>
                    <h2>개인 회원으로 가입</h2>
                    <p>
                        삿포로와 홋카이도 지역의 관광 체험을 검색하고 예약 신청을 할 수
                        있습니다.
                    </p>

                    <Link href="/signup/customer" className="primary-link">
                        개인 회원 가입
                    </Link>
                </article>
                <article className="signup-type-card">
                    <span>Bussiness</span>
                    <h2>사업자로 가입</h2>
                    <p>
                        체험 상품을 등록하고, 고객의 예약신청을 확인하고 승인 할 수
                        있습니다.
                    </p>

                    <Link href="/signup/bussiness" className="primary-link">
                    사업자 회원가입
                    </Link>
                </article>
            </section>
        </main >
    );
}