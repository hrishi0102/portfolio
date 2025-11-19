export default function Experience() {
  const experiences = [
    {
      role: "Developer Relations Engineer",
      company: "PaymanAI",
      period: "Oct 2025 - Present",
      description: [
        "Built end-to-end PoCs and integration use cases showcasing Payman’s AI Agentic capabilities",
        "Authored SDK guides, technical docs, and demo repos to accelerate onboarding and enhance the developer experience",
      ],
    },
    {
      role: "Analyst",
      company: "Nomura",
      period: "Jul 2024 – Oct 2025",
      description: [
        "Maintained and upgraded A2P: secure access to production services using Java, Spring, and Spring Boot.",
        "Developed an RAG-based AI system projected to reduce support and operational load by 60%, leveraging Langchain and vector databases.",
      ],
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative border-l-2 border-gray-200 pl-4">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-black" />
            <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-medium text-black">
                {exp.role} <span className="text-gray-500">|</span> {exp.company}
              </h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
