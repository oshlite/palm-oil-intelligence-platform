'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-200 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
                <span className="text-white font-black text-sm">CPO</span>
              </div>
              <span className="font-black text-lg gradient-text">Forecasting</span>
            </div>
            <p className="text-sm text-slate-400">
              Advanced forecasting platform for CPO production analysis and prediction powered by AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link href="/prediction" className="text-slate-400 hover:text-blue-400 transition duration-300">Prediction</Link></li>
              <li><Link href="/insights" className="text-slate-400 hover:text-blue-400 transition duration-300">Insights</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-blue-400 transition duration-300">About</Link></li>
            </ul>
          </div>

          {/* Data */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Analytics</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/dashboard-bi" className="text-slate-400 hover:text-blue-400 transition duration-300">Dashboard BI</Link></li>
              <li><Link href="/dashboard-da" className="text-slate-400 hover:text-blue-400 transition duration-300">Dashboard DA</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition duration-300">Documentation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-300 group glow-blue" aria-label="Email">
                <Mail size={18} className="text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-300 group glow-blue" aria-label="GitHub">
                <Github size={18} className="text-slate-300 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition duration-300 group glow-blue" aria-label="LinkedIn">
                <Linkedin size={18} className="text-slate-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {currentYear} CPO Production Forecasting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
