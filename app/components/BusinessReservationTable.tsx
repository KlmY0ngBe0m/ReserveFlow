"use client";

import { useState } from "react";

type ReservationStatus = "승인 대기" | "확정" | "취소됨";

type Reservation = {
    id: string;
    experienceTitle: string;
    customerName: string;
    date: string;
    time: string;
    peopleCount: number;
    status: ReservationStatus;
};

const initialReservations: Reservation[] = [
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

export default function BusinessReservationTable() {
    const [reservations, setReservations] = useState(initialReservations);

    function updateStatus(id: string, status: ReservationStatus) {
        setReservations((currentReservations) =>
            currentReservations.map((reservation) =>
                reservation.id === id ? { ...reservation, status } :
                    reservation
            )
        );
    }


    return (
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
                            className={`status-badge ${reservation.status === "확정"
                                    ? "confirmed"
                                    : reservation.status === "취소됨"
                                        ? "cancelled"
                                        : "pending"
                                }`}
                        >
                            {reservation.status}
                        </strong>
                    </span>
                    <span className="table-actions">
                        <button
                            type="button"
                            onClick={() => updateStatus(reservation.id, "확정")}
                            disabled={reservation.status !== "승인 대기"}
                        >
                            승인
                        </button>

                        <button
                            type="button"
                            className="danger-button"
                            onClick={() => updateStatus(reservation.id, "취소됨")}
                            disabled={reservation.status === "취소됨"}
                        >
                            취소
                        </button>
                    </span>
                </div>
            ))}
        </div>
    );

}