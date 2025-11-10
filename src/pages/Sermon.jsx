export default function Sermons() {
  const sermons = [
    { id: 1, title: "Faith Over Fear", speaker: "Pastor John", date: "2025-10-10", video: "https://youtube.com/embed/example" },
    { id: 2, title: "Walking in Love", speaker: "Pastor Mary", date: "2025-09-17", video: "https://youtube.com/embed/example2" },
  ];

  return (
    <div className="sermons">
      <h2>Latest Sermons</h2>
      {sermons.map(s => (
        <div key={s.id}>
          <h3>{s.title}</h3>
          <p>By {s.speaker} on {s.date}</p>
          <iframe width="560" height="315" src={s.video} title={s.title} allowFullScreen></iframe>
        </div>
      ))}
    </div>
  );
}
