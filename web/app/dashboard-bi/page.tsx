import Link from 'next/link'
import { ArrowLeft, BarChart3, ExternalLink } from 'lucide-react'

export default function DashboardBIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
              <BarChart3 className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Business Intelligence Dashboard</h1>
          </div>
          <p className="text-xl text-slate-600">
            Comprehensive business metrics, KPIs, and performance indicators for CPO production analysis.
          </p>
        </div>

        {/* Dashboard Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Dashboard Features</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Real-time production metrics and KPIs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Monthly and yearly trends analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Comparative performance indicators</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Interactive filtering and drill-down capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold mt-1">✓</span>
                <span>Export data and reports functionality</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Metrics Tracked</h3>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="text-sm font-medium text-green-700">Total Production</p>
                <p className="text-2xl font-bold text-slate-900">-</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="text-sm font-medium text-green-700">Average per Month</p>
                <p className="text-2xl font-bold text-slate-900">-</p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="text-sm font-medium text-green-700">Growth Rate</p>
                <p className="text-2xl font-bold text-slate-900">-</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau Dashboard Embed */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Interactive Dashboard</h2>
          
          <div className="bg-slate-100 rounded-lg p-8 text-center border-2 border-dashed border-slate-300 mb-6">
            <div className="text-slate-500 space-y-4">
              <p className="text-lg font-medium">Tableau Dashboard Embedded</p>
              <p className="text-sm">
                The interactive Tableau dashboard would be embedded here. 
                Replace the URL below with your actual Tableau dashboard link.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
                <p className="text-sm text-blue-700">
                  <strong>To embed your Tableau dashboard:</strong> Update the iframe src with your public Tableau URL
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 border border-blue-200">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <ExternalLink size={20} /> Open Full Dashboard
            </h3>
            <p className="text-slate-600 mb-4">
              Access the complete interactive Tableau dashboard with all filters and drill-down capabilities.
            </p>
            <a
              href="https://public.tableau.com/app/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Open Tableau Dashboard <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Navigation to Related Pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/dashboard-da" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-purple-400 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition">
                Data Analytics Dashboard
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Technical analysis and detailed data metrics.
              </p>
              <span className="text-purple-600 font-semibold text-sm">View →</span>
            </div>
          </Link>

          <Link href="/insights" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-orange-400 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition">
                Insights & Recommendations
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                AI-powered insights and actionable recommendations.
              </p>
              <span className="text-orange-600 font-semibold text-sm">View →</span>
            </div>
          </Link>

          <Link href="/prediction" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-blue-400 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                Make Predictions
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Generate forecasts using ML models.
              </p>
              <span className="text-blue-600 font-semibold text-sm">Predict →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
