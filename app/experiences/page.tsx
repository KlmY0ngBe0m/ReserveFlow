import Link from "next/link";

const experiences = [
  {
    id: "sapporo-walking-tour",
    title: "삿포로 도보 투어",
    location: "삿포로",
    category: "도보 투어",
    duration: "3시간",
    capacity: "최대 10명",
    price: "¥45,000부터",
    description: "현지 가이드와 함께 삿포로의 명소를 걸으며 둘러보는 체험입니다.",
  },
  {
    id: "otaru-canal-tour",
    title: "오타루 운하 투어",
    location: "오타루",
    category: "근교 투어",
    duration: "4시간",
    capacity: "최대 8명",
    price: "¥55,000부터",
    description: "오타루 운하와 레트로 거리를 따라 즐기는 감성 투어입니다.",
  },
  {
    id: "hokkaido-food-tour",
    title: "홋카이도 로컬 미식 투어",
    location: "홋카이도",
    category: "미식 투어",
    duration: "3.5시간",
    capacity: "최대 8명",
    price: "¥65,000부터",
    description: "현지인이 추천하는 맛집을 찾아 떠나는 미식 체험입니다.",
  },
];

export default function ExperiencesPage() {
  return (
    <main>
      <section className="page-header">
        <Link href="/" className="back-link">
          ← 홈으로
        </Link>

        <p className="eyebrow">Experiences</p>
        <h1>예약 가능한 체험</h1>
        <p>
          삿포로와 홋카이도 지역에서 신청할 수 있는 관광 체험 목록입니다.
        </p>
      </section>

      <section className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-list-card" key={experience.id}>
            <div>
              <span className="result-badge">{experience.category}</span>
              <h2>{experience.title}</h2>
              <p>{experience.description}</p>

              <div className="experience-meta">
                <span>{experience.location}</span>
                <span>{experience.duration}</span>
                <span>{experience.capacity}</span>
              </div>
            </div>

            <div className="experience-card-side">
              <strong>{experience.price}</strong>

              <Link
                href={`/experiences/${experience.id}`}
                className="primary-link"
              >
                자세히 보기
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}