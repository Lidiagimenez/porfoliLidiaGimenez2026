'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Code,
  Globe,
  Plus,
  BarChart,
  ShoppingCart,
  BookOpen,
  LucideIcon,
} from "lucide-react"
import { Project } from "../types/index"

interface ProjectCardProps {
  project: Project
  index: number
}

const iconMap: Record<Project["icon"], LucideIcon> = {
  code: Code,
  globe: Globe,
  plus: Plus,
  chart: BarChart,
  shop: ShoppingCart,
  blog: BookOpen,
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = iconMap[project.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{
        backgroundColor: 'var(--color-primary)',   // fondo verde
        borderRadius: 'var(--radius-card)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    >
      {/* Ícono */}
      <Icon size={32} color="#FFFFFF" />

      {/* Título */}
      <h3
        style={{
          fontSize: '28px',
          fontFamily: 'var(--font-title)',
          margin: 0,
          color: '#FFFFFF',
        }}
      >
        {project.title}
      </h3>

      {/* Contenedor con línea roja + párrafo */}
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
        <div
          style={{
            width: '4px',
            backgroundColor: '#F35A53',
            marginRight: '12px',
            borderRadius: '2px',
            alignSelf: 'stretch',
          }}
        />
        <p
          style={{
            fontSize: '20px',
            fontFamily: 'var(--font-body)',
            margin: 0,
            color: '#FFFFFF',
            lineHeight: 1.5,
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Botón */}
      <Link
        href={`/proyecto/${project.slug}`}
        style={{
          marginTop: 'auto',
          padding: '8px 16px',
          backgroundColor: '#F35A53',
          color: '#FFFFFF',
          borderRadius: 8,
          fontSize: '18px',
          fontFamily: 'var(--font-body)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        Ver proyecto
      </Link>
    </motion.div>
  )
}