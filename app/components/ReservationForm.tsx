"use client";

import { useState } from "react";

type ReservationFormProps = {
    price: number;
};

export default function ReservationForm({ price }: ReservationFormProps) {
    const [peopleCount, setPeopleCount] = useState("2");
    const totalPrice = price * Number(peopleCount || 0);

function handleSubmit() {
    alert("예약 신청이 완료되었습니다.");
}

  return (
    <aside className="reservation-card">
      <p className="eyebrow">Reservation</p>
      <h2>예약 신청</h2>

      <label htmlFor="reservation-date">예약 날짜</label>
      <input id="reservation-date" type="date" />

      <label htmlFor="reservation-time">예약 시간</label>
      <select id="reservation-time" defaultValue="">
        <option value="" disabled>
          시간을 선택하세요
        </option>
        <option value="10:00">10:00</option>
        <option value="14:00">14:00</option>
        <option value="18:00">18:00</option>
      </select>

      <label htmlFor="people-count">인원수</label>
      <input
        id="people-count"
        type="number"
        min="1"
        max="10"
        value={peopleCount}
        onChange={(event) => setPeopleCount(event.target.value)}
      />

      <label htmlFor="request-message">요청사항</label>
      <textarea
        id="request-message"
        placeholder="예: 한국어 가능한 가이드가 있으면 좋겠어요."
      />

      <div className="reservation-total">
        <span>예상 금액</span>
        <strong>¥{totalPrice.toLocaleString()}</strong>
      </div>

      <button type="button" onClick={handleSubmit}>
        예약 신청
      </button>
    </aside>
  );
}