"use client"

import { ScrambleText } from "@/components/scramble-text"
import { ProjectCard } from "@/components/project-card"
import { Metadata } from "next"
import { useState, useEffect, useRef } from "react"

const projects = [
  {
    title: "SmartGrader",
    description:
      "SmartGrader represents a breakthrough in educational technology, combining cutting-edge Vision-Language Models (VLMs) and Large Language Models (LLMs) to revolutionize the assessment of handwritten computer science assignments.",
    role: "AI-Powered Automated Assessment for Computer Science Education",
    period: "",
    achievements: [
      " Multimodal Intelligence processes handwritten text, diagrams, & code snippets",
      " Powered by LoRA optimization for resource-conscious deployment",
      " RAG-enhanced evaluation for consistent, bias-reduced assessments",
      " Supports diverse handwriting styles and multilingual inputs "
    ],
    technologies: [
      "python",
      "fine-tuning",
      "llm & vlm",
      "rag",
      "LoRA/QLoRA",
      "reinforcement learning",
      "Qwen, Gemma, and Llama 3",
      "unsloth and llamafactory"
    ],
    href: "https://github.com/manumishra12/SmartGrader",
  },

  {
    title: "NexusSearch",
    description: "Nexus Search is a cutting-edge, ultra-premium agentic search engine that combines the power of LangChain, LangGraph, and Tavily to deliver unparalleled search experiences.",
    role: "Built with a sophisticated 13-agent architecture, it provides intelligent content analysis, multi-modal processing, and professional document generation.",
    period: "",
    achievements: [
      " 13-Agent architecture specialized for different aspects of search and analysis",
      " Advanced Search powered by Tavily with intelligent content validation and analysis",
      " Multi-Modal Processing Handle PDFs, documents, images, and videos seamlessly",
      " Professional Document Generation Create high-quality, structured documents",
    ],
    technologies: ["python", "search engine", "langchain", "langgraph", "tavily", "llm", "rag", "pydantic"],
    href: "https://github.com/manumishra12/Nexus-Search",
  },

  {
    title: "Cuffless-BP-Estimation",
    description: "Developed a cuffless blood pressure estimation system using ECG and PPG signals, achieving high accuracy in predicting systolic and diastolic blood pressure.",
    role: " Leveraged bispectrum imaging and Swin Transformer for accurate systolic and diastolic BP prediction.",
    period: "",
    achievements: [
      "ECG & PPG signals into bispectrum & bicoherence to capture nonlinear features.",
      "Preprocessed signals with denoising and normalization for high-quality input data.",
      "Trained Swin Transformer (swin_base_patch4_window7_224).",
      "Achieved low MAE and RMSE in BP prediction via robust cross-validation.",
      "Validated model performance across subjects with 80:20 train-test splits.",
      "Built a cuffless, real-time BP estimation prototype for wearable use.",
      "Outperformed baseline ML models in accuracy and generalization."
    ],
    technologies: ["PyTorch", "Python", "Swin Transformer", "Signal Processing", "ECG", "PPG", "Bispectrum Analysis"],
    href: "https://github.com/manumishra12/Cuffless-BP-Estimation-",
  },

  {
    title: "RenewX",
    description: "RenewX is an AI-based machine that automatically segregates mixed construction waste and sells it to industries for recycling purposes.",
    role: "AI-based machine, segregates mixed construction waste for recycling",
    period: "",
    achievements: [
      "Built an AI-powered waste segregation system using Raspberry Pi and sensors",
      "Used YOLO and OpenCV for real-time detection of construction materials",
      "Classified waste with ML models and dielectric property analysis",
      "Automated sorting of recyclable and non-recyclable materials",
      "Connected output to recycling industries to support a circular economy"
    ],
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "Machine Learning",
      "Raspberry Pi",
      "Sensor Integration",
      "Dielectric Value Analysis",
      "Hardware Prototyping"
    ],
    href: "https://github.com/manumishra12/RenewX",
  },

  {
  title: "Resume Assistant",
  description: "Resume Assistant is an AI-powered voice tool that analyzes resumes and provides intelligent answers to common interview questions, helping candidates prepare with confidence.",
  role: "Built with Flask and Google Generative AI, it supports predefined Q&A, automated resume analysis, and custom document uploads for personalized interview preparation.",
  period: "",
  achievements: [
    " Predefined Q&A for five common interview questions using keyword-based intelligent matching",
    " Default Resume Analysis for quick insights and personalized responses",
    " Custom Resume Upload supporting PDF, DOC, and DOCX formats with automatic context switching",
    " Real-time AI-powered answer generation using Google Generative AI API",
  ],
  technologies: ["python", "flask", "google-generative-ai", "PyPDF2", "python-docx", "docx2txt", "resume-analysis", "nlp"],
  href: "https://github.com/manumishra12/resume_assistant",
},

  {
    title: "MedOBot",
    description: "Intelligent Medical Assistant for Radiology, Prescriptions, and Psychological Assessment",
    role: "AI chatbot capable of analyzing X-rays, providing prescriptions, and conducting mental health assessments",
    period: "",
    achievements: [
      "X-ray image analysis and anomaly detection using multimodal Gemini API",
      "Automated prescription generation based on symptom inputs",
      "Skin disease analysis through image input and prompt-based reasoning",
      "Mental health assessments with structured conversational flow and scoring",
      "Symptom checker with follow-up questions powered by LangGraph",
      "Diet and wellness suggestions based on health inputs and conditions",
      "Voice-based interaction for accessibility and faster consultation",
      "Doctor’s note summarization and patient case history retrieval",
    ],
    technologies: [
      "python",
      "streamlit",
      "LangChain",
      "LangGraph",
      "Gemini API",
      "OpenAI",
      "HuggingFace Transformers",
      "FastAPI",
      "scikit-learn"
    ],
    href: "",
  },

  {
    title: "Agentic-Product-Manager",
    description: "AI tool that listens to real-time conversations & generates technical documentation artifacts like flowcharts, architectural diagrams.",
    role: "assistant that bridges the gap between verbal ideation and structured technical planning",
    period: "",
    achievements: [
      "real-time voice recognition system to capture and transcribe user conversations",
      "NLP pipeline to extract key entities, tasks, and responsibilities from speech",
      "generates software design diagrams including system architecture",
      "class diagrams, sequence diagrams, DFDs, and flowcharts",
      "Streamlined the workflow with Streamlit UI for ease of access and control"
    ],
    technologies: [
      "Python",
      "Streamlit",
      "SpeechRecognition",
      "Gemini API",
      "Graphviz",
      "Diagrams (Python Library)",
      "NLTK / spaCy"
    ],
    href: "",
  },

  {
    title: "translate",
    description:
      "An AI-powered real-time multilingual video communication platform that enables two people to speak and hear in their native languages seamlessly during a live video call.",
    role: "Real-Time AI Translator for Native Language Video Conversations",
    period: "",
    achievements: [
      "Built a real-time speech translation pipeline using LLMs and speech synthesis",
      "Integrated video/audio streaming with speech recognition, translation, and TTS",
      "Developed a UI for two users to video call in their native languages",
      "Optimized low-latency translation using WebRTC and real-time buffering",
      "Enabled multilingual and accent-aware translation with OpenAI and Gemini APIs"
    ],

    technologies: [
      "TypeScript",
      "OpenAI API",
      "Gemini API",
      "WebRTC",
      "Socket.IO",
      "websocket",
      "SpeechRecognition",
      "Text-to-Speech APIs",
      "React",
      "Node.js"
    ],
    href: "",
  },

  {
    title: "DineWise",
    description: "DineWise revolutionizes restaurant operations through intelligent automation, combining cutting-edge AI agents with modern web technologies to create the ultimate dining experience.",
    role: "reimagining restaurant management with AI-driven automation and sleek interfaces.",
    period: "",
    achievements: [
      "Automated order taking, table allocation, and feedback handling using AI agents",
      "Built a modern web interface for staff and customer interactions",
      "Integrated a real-time kitchen dashboard with smart order queuing",
      "Enabled voice-based ordering and personalized menu suggestions via LLMs",
      "Optimized table turnaround time through workflow simulation"
    ]
    ,
    technologies: ["typescript", "python",
      "streamlit",
      "Gemini API",
      "LangChain",
      "LangGraph",
      "SQL & NoSQL databases",
      "SQL Agent",
      "react",
      "node.js"],
    href: "",
  },

  {
    title: "real-state-agent",
    description: "An AI-powered multilingual real estate assistant that converts voice queries into SQL to fetch and manage property listings in real time.",
    role: "Instant Property Search via Multilingual Voice-to-SQL AI",
    period: "",
    achievements: [
      "Built a multilingual voice interface that converts queries into SQL",
      "Used LangChain and Gemini to fetch structured real estate data",
      "Created a broker platform for direct property uploads to the database",
      "Enabled real-time property search, filter, and recommendations via AI",
      "Designed a React UI for seamless data interaction and visualization"
    ],
    technologies: [
      "typeScript",
      "python",
      "streamlit",
      "Gemini API",
      "LangChain",
      "react",
      "node.js",
      "SQL Agent",
      "SQL & NoSQL databases",
    ],
    href: "",
  },

  {
    title: "Talk2Me",
    description: "Developed a MERN stack real-time chat app with JWT authentication, Socket.io messaging, online status, Zustand state management, and robust error handling.",
    role: "a real-time chat application built with the secure messaging, live status ",
    period: "",
    achievements: [
      "Built real-time messaging with Socket.io and JWT-based user authentication",
      "Implemented online/offline status indicators and typing notifications",
      "Integrated Zustand for efficient client-side state management",
      "Handled edge cases with robust error management and reconnection logic",
      "Designed a responsive UI for seamless cross-device communication"
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "Zustand",
      "JWT",
      "TypeScript"
    ],
    href: "https://github.com/manumishra12/Talk2Me",
  },

  {
    title: "StockSense",
    description: "An application that uses stock price data and technical indicators for improved predictions, with serial and parallel backtesting to optimize trading strategies and enhance decision-making.",
    role: "Stock Price Prediction and Backtesting Application",
    period: "",
    achievements: [
      "Implemented stock prediction models using MACD, RSI, and moving average crossovers",
      "Built serial and parallel backtesting modules using multiprocessing and OpenMP",
      "Developed visualizations to display price trends, indicators, and buy/sell signals",
      "Optimized computation time with efficient use of parallelization techniques",
      "Enabled real-time strategy evaluation using historical stock data from yFinance"
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "mplfinance",
      "yFinance",
      "Multiprocessing",
      "OpenMP"
    ],
    href: "https://github.com/manumishra12/StockSense",
  },

  {
    title: "NoteDown",
    description: "Note-Taking Application built for desktop using Electron.js. The application allows users to easily create, edit, and organize their notes in a simple and intuitive interface.",
    role: "A lightweight, cross-platform desktop note-taking app built with Electron.js for creating, editing, and organizing notes ",
    period: "",
    achievements: [
      "Desktop note-taking app with a rich text editor and auto-save functionality",
      "Implemented search, folder organization, and local storage using SQLite",
      "Designed a clean and intuitive UI with cross-platform support",
      "Ensured data persistence and fast performance using Electron.js and Node.js",
      "Enabled offline-first experience with local data access and backup handling"
    ],
    technologies: [
      "Electron.js",
      "Node.js",
      "JavaScript",
      "HTML/CSS",
      "SQLite",
      "React (optional)"
    ],
    href: "https://github.com/manumishra12/NoteDown",
  },


  {
    title: "Virtual-Mouse",
    description: "Virtual Mouse using Mediapipe for real-time hand tracking and OpenCV for gesture recognition. Control your computer cursor with hand gestures like point, click, drag, and scroll",
    role: "real-time hand gesture recognition system that enables mouse control without physical contact",
    period: "",
    achievements: [
      "Developed a hand gesture-based virtual mouse using Mediapipe and OpenCV",
      "Implemented click, drag, scroll, and cursor control through fingertip tracking",
      "Designed a lightweight solution compatible with any webcam-enabled device",
      "Enabled hands-free control to improve accessibility and human-computer interaction",
      "Used HandTrackingModule for precise landmark detection and gesture mapping"
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Mediapipe",
      "PyAutoGUI",
      "Custom HandTrackingModule"
    ],
    href: "https://github.com/manumishra12/Virtual-Mouse",
  },

  {
    title: "TumorTrace",
    description: "The TumorTrace project aims to develop an automated system for identifying and segmenting tumor regions in brain MRI images",
    role: "AI-based system for automated brain tumor segmentation in MRI scans using deep learning",
    period: "",
    achievements: [
      "Trained a U-Net model for precise tumor segmentation using TCGA-LGG dataset.",
      "Achieved high segmentation accuracy with Dice coefficient and IoU metrics.",
      "Pipeline for preprocessing, augmentation, post-processing, and visualization.",
      "Improved model generalization with data augmentation and Dice loss optimization.",
      "Visualized results with overlays on MRI scans for clinical interpretability.",
      "Documented entire workflow and published code on GitHub for reproducibility."
    ],
    technologies: ["Python", "PyTorch", "NumPy", "U-Net", "OpenCV", "Matplotlib"],
    href: "https://github.com/manumishra12/TumorTrace",
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
        <ScrambleText text="projects" />
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
        here are some of the projects i&apos;ve worked on. i love building tools
        that make developers&apos; lives easier and exploring new technologies
        along the way.
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
