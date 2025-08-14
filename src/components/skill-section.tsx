import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function SkillSection() {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span>
        skills
      </h2>
      <div className="space-y-4">
        <div className="flex flex-col gap-2 text-gray-400">

          <p className="text-accent hover:underline">languages</p>
          <p className="text-sm"> Python, Java, C++, ReactJS, NextJS, JavaScript, TypeScript </p>

          <p className="text-accent hover:underline">developer tools</p>
          <p className="text-sm"> Cloud basics, MongoDB, SQL,NodeJS, ExpressJS, Figma, AdobeXD </p>

          <p className="text-accent hover:underline">technologies</p>
          <p className="text-sm"> Git/GitHub, Machine Learning, Deep Learning, Generative AI, LangChain/Graph, MCP Servers </p>

          <p className="text-accent hover:underline">relevant coursework</p>
          <p className="text-sm"> DSA, OOPS, System Design, Software Engineering </p>
        </div>
      </div>

    </section>
  )
}

