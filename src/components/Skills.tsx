export default function Skills() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {[
          "React.js",
          "Typescript",
          "Node.js",
          "Postgres",
          "Docker",
          "Solidity",
        ].map((skill, index) => (
          <span
            key={index}
            className="bg-black text-white px-3 py-1 text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
        <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-indigo-600 text-white px-3 py-1 text-sm rounded-full shadow-md">
          Framework Agnostic ;)
        </span>
      </div>
    </section>
  );
}
