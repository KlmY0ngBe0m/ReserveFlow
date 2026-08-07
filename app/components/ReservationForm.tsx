"use client";

import { use, useState } from "react";

type ReservationFormProps = {
  price: number;
  maxPeople: number;
};

export default function ReservationForm({ 
  price,
  maxPeople,
 }: ReservationFormProps) {
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [peopleCount, setPeopleCount] = useState("2");
  const [requestMessage, setRequestMessage] = useState("");
  const [message, setMessage] = useState("");

  const totalPrice = price * Number(peopleCount || 0);

  function handleSubmit() {
    setMessage("");

    if (reservationDate === "") {
      setMessage("예약 날짜를 선택해주세요.");
      return;
    }

    if (reservationTime === "") {
      setMessage("예약 시간을 선택해주세요.");
      return;
    }

    if (peopleCount === "" || Number(peopleCount) < 1) {
      setMessage("인원수는 1명 이상 선택해주세요.");
      return;
    }

    if (Number(peopleCount) > maxPeople) {
      setMessage(`최대 인원수는 ${maxPeople}명 입니다.`);
      return;
    }

    setMessage("예약 신청이 완료되었습니다. 사업자 승인 후 예약이 확정됩니다.")
  }

  return (
    <aside className="reservation-card">
      <p className="eyebrow">Reservation</p>
      <h2>예약 신청</h2>

      <label htmlFor="reservation-date">예약 날짜</label>
      <input
        id="reservation-date"
        type="date"
        value={reservationDate}
        onChange={(event) => setReservationDate(event.target.value)}
      />

      <label htmlFor="reservation-time">예약 시간</label>
      <select
        id="reservation-time"
        value={reservationTime}
        onChange={(event) => setReservationTime(event.target.value)}
      >
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
        max={maxPeople}
        value={peopleCount}
        onChange={(event) => setPeopleCount(event.target.value)}
      />

      <label htmlFor="request-message">요청사항</label>
      <textarea
        id="request-message"
        value={requestMessage}
        onChange={(event) => setRequestMessage(event.target.value)}
        placeholder="예: 한국어 가능한 가이드가 있으면 좋겠어요."
      />

      <div className="reservation-total">
        <span>예상 금액</span>
        <strong>¥{totalPrice.toLocaleString()}</strong>
      </div>

      {message !== "" && <p className="form-message">{message}</p>}

      <button type="button" onClick={handleSubmit}>
        예약 신청
      </button>
    </aside>
  );
}