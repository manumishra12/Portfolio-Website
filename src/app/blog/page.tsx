"use client"

import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { useState, useEffect, useRef } from "react"

const projects = [
  {
    title: "Cuffless BP Estimation",
    description:
      "Developed cuffless blood pressure estimation system using bispectrum and bicoherence images for accurate predictions, with a SWIN Transformer model for non-invasive monitoring.",
    role: "Deep Learning, Machine Learning, SWIN Transformers | Published",
    period: "",
    achievements: [
      "Implemented bispectrum and bicoherence image generation for physiological signal processing",
      "Trained a SWIN Transformer for robust, non-invasive BP estimation",
      "Published work demonstrating high prediction accuracy for clinical applications",
    ],
    technologies: [
      "python",
      "deep learning",
      "machine learning",
      "signal processing",
      "SWIN Transformer",
    ],
    href: "https://ieeexplore.ieee.org/document/10958421",
  },
  {
    title: "A System and Method for Automated Waste Segregation",
    description:
      "An AI-powered machine that automates construction waste segregation, enhancing recycling efficiency and sustainability by diverting waste from landfills and integrating with waste management systems.",
    role: "Patent | Application no: 202441064693",
    period: "",
    achievements: [
      "Designed intelligent vision system for construction waste classification",
      "Integrated real-time sorting mechanisms to improve recycling efficiency",
      "Patented technology for automated waste segregation and landfill diversion",
    ],
    technologies: [
      "computer vision",
      "machine learning",
      "embedded systems",
      "robotics",
    ],
    href: "https://iprsearch.ipindia.gov.in/",
  },
  {
    title: "Federated Learning for Privacy-Preserving AI",
    description:
      "Ongoing research on privacy-preserving machine learning models using Federated Learning to enable collaborative training without sharing raw data.",
    role: "Research in Progress",
    period: "Ongoing",
    achievements: [
      "Developing a federated learning pipeline for distributed environments",
      "Integrating differential privacy to protect sensitive user data",
      "Exploring cross-device model aggregation and optimization techniques",
    ],
    technologies: [
      "python",
      "federated learning",
      "differential privacy",
      "PySyft",
      "PyTorch",
    ],
    href: "",
  },
]

export default function ProjectsPage() {
  const [search, setSearch] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Open search on "/" or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "/" || (e.ctrlKey && e.key.toLowerCase() === "k")) &&
        document.activeElement !== inputRef.current
      ) {
        e.preventDefault()
        setShowSearch(true)
        setTimeout(() => inputRef.current?.focus(), 0)
      }
      if (e.key === "Escape") {
        setShowSearch(false)
        setSearch("")
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    const query = search.toLowerCase()
    return (
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.role.toLowerCase().includes(query) ||
      p.technologies.join(" ").toLowerCase().includes(query)
    )
  })

  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent mr-2">*</span>
        <ScrambleText text="research & patent" />
      </h1>

      {/* Search Bar (only appears when shortcut pressed) */}
      {showSearch && (
        <div className="mb-6">
          <input
            ref={inputRef}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type to search projects..."
            className="w-full px-3 py-2 bg-black text-white border border-gray-800 rounded focus:outline-none focus:border-accent"
          />
        </div>
      )}

      <p className="hidden sm:block text-sm text-gray-400 mb-8">
        press{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">/</kbd>{" "}
        or{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">Ctrl / ⌘ K</kbd>{" "}
        to search • press{" "}
        <kbd className="px-1 py-0.5 text-xs border border-gray-700 rounded">Esc</kbd>{" "}
        to close
      </p>

      <p className="text-gray-400 mb-12 leading-relaxed">
        here are some of the publications, patents, and research projects
        i&apos;ve contributed to, driven by a passion for solving real-world
        problems. <br />I like exploring and conducting research in areas of AI
        ethics.
      </p>

      <div className="space-y-12">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))
        ) : (
          <p className="text-gray-500 italic">No projects found.</p>
        )}
      </div>
    </main>
  )
}
