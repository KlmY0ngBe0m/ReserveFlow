import Link from "next/link";
import ReservationForm from "@/app/components/ReservationForm";

const experiences = [
    {
        id: "sapporo-walking-tour",
        title: "삿포로 도보 투어",
        location: "삿포로",
        category: "도보 투어",
        duration: "3시간",
        capacity: "최대 10명",
        price: 45000,
        description:
            "현지 가이드와 함께 삿포로의 대표 명소를 걸으며 도시의 역사와 문화를 체험하는 투어입니다.",
        highlights: ["삿포로 시계탑", "오도리 공원", "현지 가이드 동행"],
    },
    {
        id: "otaru-canal-tour",
        title: "오타루 운하 투어",
        location: "오타루",
        category: "근교 투어",
        duration: "4시간",
        capacity: "최대 8명",
        price: 55000,
        description:
            "오타루 운하와 레트로 거리를 따라 걸으며 홋카이도의 감성적인 분위기를 즐기는 투어입니다.",
        highlights: ["오타루 운하", "유리 공방 거리", "레트로 거리 산책"],
    },
    {
        id: "hokkaido-food-tour",
        title: "홋카이도 로컬 미식 투어",
        location: "홋카이도",
        category: "미식 투어",
        duration: "3.5시간",
        capacity: "최대 8명",
        price: 65000,
        description:
            "현지인이 추천하는 맛집을 방문하며 홋카이도의 다양한 음식을 즐기는 미식 체험입니다.",
        highlights: ["해산물", "로컬 맛집", "현지 음식 문화"],
    },
];

type ExperienceDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ExperienceDetailPage({
    params,
}: ExperienceDetailPageProps) {
    const { id } = await params;
    const experience = experiences.find((item) => item.id === id);

    if (!experience) {
        return (
            <main>
                <section className="detail-card">
                    <Link href="/experiences" className="back-link">
                        ← 체험 목록으로
                    </Link>
                    <h1>체험 정보를 찾을 수 없습니다.</h1>
                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="detail-layout">
                <article className="detail-card">
                    <Link href="/experiences" className="back-link">
                        ← 체험 목록으로
                    </Link>

                    <span className="result-badge">{experience.category}</span>

                    <h1>{experience.title}</h1>

                    <p className="detail-description">{experience.description}</p>

                    <div className="detail-meta-grid">
                        <div>
                            <span>지역</span>
                            <strong>{experience.location}</strong>
                        </div>

                        <div>
                            <span>소요 시간</span>
                            <strong>{experience.duration}</strong>
                        </div>

                        <div>
                            <span>예약 가능 인원</span>
                            <strong>{experience.capacity}</strong>
                        </div>

                        <div>
                            <span>가격</span>
                            <strong>¥{experience.price.toLocaleString()}부터</strong>
                        </div>
                    </div>

                    <section className="detail-section">
                        <h2>체험 포인트</h2>

                        <ul className="highlight-list">
                            {experience.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </section>
                </article>

                <ReservationForm price={experience.price} />
            </section>
        </main>
    );
}