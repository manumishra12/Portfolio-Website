import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"
import { SectionList } from "@/components/section-list"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Manu Mishra" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Hyderabad, India
        </div>
        <div className="flex items-center gap-2">
          {/* <Building2 className="w-4 h-4" /> */}
          Crafting llm-powered tools & software systems
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a 21 y/o final year cs undergrad passionate about building impactful tech solutions through AI, full-stack development,automation and
        solving problems. i enjoy system design, theoretical computer science
        and i live on the terminal. when i&apos;m not coding, i&apos;m probably
        trading, diving into finance, or exploring new cities.
      </p>

        <Link
          href="https://drive.google.com/file/d/1QRcnsDgH4m7LKHTXobsQwLAsinUwDb7e/view"
          className="inline-flex items-center gap-1 mt-6 text-accent hover:underline group"
        > resume
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
    </header>
  )
}
