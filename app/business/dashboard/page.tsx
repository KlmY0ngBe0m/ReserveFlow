const reservations = [
    {
        id: "RSV-001",
        experienceTitle: "삿포로 도보 투어",
        customerName: "홍길동",
        date: "2026-08-20",
        time: "10:00",
        peopleCount: 2,
        status: "승인 대기",
    },
    {
        id: "RSV-002",
        experienceTitle: "오타루 운하 투어",
        customerName: "김민지",
        date: "2026-08-21",
        time: "14:00",
        peopleCount: 3,
        status: "확정",
    },
    {
        id: "RSV-003",
        experienceTitle: "홋카이도 로컬 미식 투어",
        customerName: "이준호",
        date: "2026-08-22",
        time: "18:00",
        peopleCount: 2,
        status: "승인 대기",
    },
];

export default function BusinessDashboardPage() {
    const pendingCount = reservations.filter(
        (reservation) => reservation.status === "승인대기"
    ).length;

    return (
        <main>
            <section className="page-header">
                <p className="eyebrow">Business Dashboard</p>
                <h1>사업자 대시보드</h1>
                <p>
                    등록한 체험 상품의 예약 신청을 확인하고 승인 상태를 관리하는
                    화면입니다.
                </p>
            </section>

            <section className="dashboard-summary-grid">
                <div className="dashboard-card">
                    <span>오늘 예약</span>
                    <strong>{reservations.length}건</strong>
                </div>

                <div className="dashboard-card">
                    <span>승인 대기</span>
                    <strong>{pendingCount}건</strong>
                </div>

                <div className="dashboard-card">
                    <span>등록 체험</span>
                    <strong>3개</strong>
                </div>
            </section>

            <section className="dashboard-table-card">
                <div className="dashboard-section-header">
                    <div>
                        <p className="eyebrow">Reservations</p>
                        <h2>예약 목록</h2>
                    </div>

                    <button type="button">체험 상품 등록</button>
                </div>

                <div className="reservation-table">
                    <div className="reservation-table-head">
                        <span>예약번호</span>
                        <span>체험명</span>
                        <span>고객명</span>
                        <span>예약일시</span>
                        <span>인원</span>
                        <span>상태</span>
                        <span>관리</span>
                    </div>

                    {reservations.map((reservation) => (
                        <div className="reservation-table-row" key={reservation.id}>
                            <span>{reservation.id}</span>
                            <span>{reservation.experienceTitle}</span>
                            <span>{reservation.customerName}</span>
                            <span>
                                {reservation.date} {reservation.time}
                            </span>
                            <span>{reservation.peopleCount}명</span>
                            <span>
                                <strong
                                    className={
                                        reservation.status === "확정"
                                            ? "status-badge confirmed"
                                            : "status-badge pending"
                                    }
                                >
                                    {reservation.status}
                                </strong>
                            </span>
                            <span className="table-actions">
                                <button type="button">승인</button>
                                <button type="button" className="danger-button">
                                    취소
                                </button>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}