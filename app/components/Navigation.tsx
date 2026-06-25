'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { buttonPress } from '../utils/animations'
import { NavItem } from '../types'

export default function Navigation() {
  const navItems: NavItem[] = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' }
  ]

  return (
    <nav className="fixed top-8 right-8 z-50 flex gap-4">
      {navItems.map((item) => (
        <motion.div key={item.href} {...buttonPress}>
          <Link
            href={item.href}
            className="px-6 py-3 bg-accent text-light font-kalnia text-lg rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </nav>
  )
}