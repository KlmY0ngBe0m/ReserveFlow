"use client";

import Link from "next/link";
import { use, useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleLogin() {
        setMessage("");

        if (email === "") {
            setMessage("이메일을 입력하세요.");
            return;
        }

        if (password === "") {
            setMessage("비밀번호를 입력하세요.");
            return;
        }

        setMessage("로그인 기능은 이후 Supabase Auth와 연결할 예정입니다.");
    }

    return (
        <main>
            <section className="auth-card">
                <Link href="/" className="back-link">
                    ← 홈으로
                </Link>

                <p className="eyebrow">Login</p>
                <h1>로그인</h1>
                <p>
                    예약 신청 내역을 확인하거나 사업자 페이지를 이용하려면 로그인하세요.
                </p>

                <label htmlFor="login-email">이메일</label>
                <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="example@email.com"
                />

                <label htmlFor="login-password">비밀번호</label>
                <input
                    id="login-password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="비밀번호를 입력하세요"
                />

                {message !== "" && <p className="form-message">{message}</p>}

                <button type="button" onClick={handleLogin}>
                    로그인
                </button>

                <p className="auth-guide">
                    아직 계정이 없나요? <Link href="/signup">회원가입</Link>
                </p>
            </section>
        </main>
    );
}