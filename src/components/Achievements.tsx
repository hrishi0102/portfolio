export default function Achievements() {
  const achievements = [
    "3rd Place @ Nomura Kakhushin 7.0 - offered PPO",
    "Winner @ Payman AI Dev Challenge",
    "Winner @ ETHGlobal25, ETHIndia23, ETHIndia24, ETHMumbai24",
    "Winner @ BuildOn24, ZKOnline25, Syrus24",
    "300+ Users and 2000+ page visits within 48 hours of launch of PitchMeBaby",
    "250+ Attendees @ Augmented Reality Workshop conducted by me",
    "Interviewed on TV9 Marathi for Arduino Digital Rakhi",
    "Co founder of Kkrafts - A mask business with $1000 MRR during 2020 Pandemic",
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
      <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
        {achievements.map((item, index) => (
          <li key={index}>
            {item
              .split(/(Winner)/g)
              .map((part, i) =>
                part === "Winner" ? <strong key={i}>Winner</strong> : part
              )}
          </li>
        ))}
      </ul>
    </section>
  );
}
