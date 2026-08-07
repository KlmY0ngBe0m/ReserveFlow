import Link from "next/link";

export default function Header() {
    return (
        <header className="site-header">
            <Link href="/" className="site-logo">
                ReserveFlow
            </Link>

            <nav className="site-nav">
                <Link href="/experiences">체험 둘러보기</Link>
                <Link href="/login">로그인</Link>
            </nav>
        </header>
    );
}