export default function Header() {

  return (
    <section className="mb-10 text-muted-foreground">
      <h1 className="text-5xl font-bold mt-8 text-black">Hrishikesh Patil</h1>
      <p className="text-lg mt-2">
        <span className="font-semibold text-gray-700">Dev Rel @ PaymanAI </span>| 9x Hackathon Winner
      </p>
      <p className="text-base mt-12">
        experimenting, building and shipping products at the intersection of
        blockchain, genai and fintech.
      </p>
      check out my{" "}
      <a
        href="https://devfolio.co/@hrishi2002"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-sm underline underline-offset-4 text-black"
      >
        proof of work
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href="https://github.com/hrishi0102"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-sm underline underline-offset-4 text-black"
      >
        github
      </a>
    </section>
  );
}
