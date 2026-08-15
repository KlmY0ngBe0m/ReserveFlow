import Link from "next/link";
import { title } from "process";

const featuredExperiences = [
  {
    title: "삿포로 도보 투어",
    location: "삿포로",
    price: "¥45,000부터",
    description: "현지 가이드와 함께 삿포로의 명소를 걸으며 둘러보는 체험",
  },
  {
    title: "오타루 운하 투어",
    location: "오타루",
    price: "¥55,000부터",
    description: "오타루 운하와 레트로 거리를 따라 즐기는 감성 투어",
  },
  {
    title: "홋카이도 로컬 미식 투어",
    location: "홋카이도",
    price: "¥65,000부터",
    description: "현지인이 추천하는 맛집을 찾아 떠나는 미식 체험",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-top">
          <p className="eyebrow">Sapporo Experience Platform</p>
        </div>

        <h1>ReserveFlow</h1>

        <p className="hero-description">
          삿포로와 홋카이도 지역의 관광 체험을 예약하고,
          사업자는 체험 상품과 예약을 관리할 수 있는 예약 플랫폼입니다.
        </p>

        <div className="hero-actions">
          <Link href="/experiences" className="primary-link">
            체험 둘러보기
          </Link>
        </div>
      </section>

      <section className="section-header">
        <p className="eyebrow">Featured Experiences</p>
        <h2>예약 가능한 체험</h2>
      </section>

      <section className="experience-grid">
        {featuredExperiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            <span>{experience.location}</span>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
            <strong>{experience.price}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}