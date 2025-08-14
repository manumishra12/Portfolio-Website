import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { SkillSection } from "@/components/skill-section"
import { LinksSection } from "@/components/links-section"

const workItems: Item[] = [
  {
    title: "Mondee ",
    role: "AI Engineer Intern",
    period: "Apr 2025 - present",
    description:
      " Designed prompts and built multi-agent GenAI workflows using LangChain, LangGraph, and custom ML models to power Aarna, an AI-driven travel assistant for generating personalized itineraries.",
    href: "https://www.linkedin.com/company/mondeetravel/posts/?feedView=all",
  },
  {
    title: "DigiQuanta",
    role: "Software Developer Intern",
    period: "Jan 2025 - Mar 2025",
    description:
      " Developed a lip-syncing pipeline using facial keypoint detection and temporal modeling for realistic multilingual videos, and built a voice-enabled medical assistant using speech recognition and GenAI for real-time health diagnostics.",
    href: "https://www.linkedin.com/company/digiquanta/posts/?feedView=all",
  },
  {
    title: "Indian Institute of Technology, Hyderabad",
    role: "Research Intern",
    period: "Jan 2025 - present",
    description:
      " Currently working on Federated Learning and Class-Incremental Learning, focusing on privacy-preserving, scalable AI systems for continual model improvement.",
    href: "https://www.linkedin.com/school/iithyderabad/posts/?feedView=all",
  },
  {
    title: "Indian Institute of Technology, BHU",
    role: "Junior Researcher",
    period: "June 2024 – July 2024",
    description:
      " Engineered a cuffless blood pressure estimation system using ECG, PPG, and advanced ML techniques, enhancing healthcare through real-time signal processing and non-invasive monitoring solutions.",
    href: "https://www.linkedin.com/school/iitbhu-varanasi/posts/?feedView=all",
  },
]

const projectItems = [
  {
    title: "SmartGrader",
    role: "VLM, LLM, Unsloth, Llamafactory",
    description:
      "Built an AI grading system using fine-tuned LLMs and Qwen-VL to interpret handwritten diagrams, pseudocode and structured content.",
    href: "https://github.com/manumishra12/SmartGrader",
  },
  {
    title: "Nexus Search",
    role: "Agentic Search, LangChain, LangGraph, Tavily",
    description: "Nexus Search delivers intelligent, multi-modal search and content analysis through a 13-agent architecture enabling professional advanced query generation.",
    href: "https://github.com/manumishra12/Nexus-Search",
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList
      title="work"
      viewAllHref="https://www.linkedin.com/in/manu12mishra/"
      viewAllText="all experience"
      items={workItems.map(item => ({
        ...item,
        role: (
        <span className="text-accent hover:underline">{item.role}</span>
        ),
      }))}
      />
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <SkillSection />
      <LinksSection />
    </>
  )
}
