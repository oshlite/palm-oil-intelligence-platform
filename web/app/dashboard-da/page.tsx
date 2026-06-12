import Link from 'next/link'
import { ArrowLeft, TrendingUp, ExternalLink } from 'lucide-react'

export default function DashboardDAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-slate-50 py-12">
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
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Data Analytics Dashboard</h1>
          </div>
          <p className="text-xl text-slate-600">
            Detailed data analysis, statistical metrics, and deep-dive insights into CPO production patterns.
          </p>
        </div>

        {/* Dashboard Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Analytics Features</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span>Statistical summaries and distributions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span>Correlation and regression analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span>Anomaly detection and outlier analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span>Time series decomposition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold mt-1">✓</span>
                <span>Seasonal trend identification</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md p-6 border border-purple-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Statistical Metrics</h3>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="text-sm font-medium text-purple-700">Mean Production</p>
                <p className="text-2xl font-bold text-slate-900">-</p>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="text-sm font-medium text-purple-700">Std Deviation</p>
                <p className="text-2xl font-bold text-slate-900">-</p>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <p className="text-sm font-medium text-purple-700">Trend Strength</p>
                <p className="text-2xl font-bold text-slate-900">-</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tableau Dashboard Embed */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Analysis Visualizations</h2>
          
          <div className="bg-slate-100 rounded-lg p-8 text-center border-2 border-dashed border-slate-300 mb-6">
            <div className="text-slate-500 space-y-4">
              <p className="text-lg font-medium">Tableau Data Analytics Dashboard Embedded</p>
              <p className="text-sm">
                The detailed data analytics Tableau dashboard would be embedded here. 
                Replace the URL below with your actual analytics dashboard link.
              </p>
              <div className="mt-6 p-4 bg-purple-50 rounded border border-purple-200">
                <p className="text-sm text-purple-700">
                  <strong>To embed your Tableau dashboard:</strong> Update the iframe src with your public Tableau URL
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-slate-50 rounded-lg p-6 border border-purple-200">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <ExternalLink size={20} /> Open Full Analytics Dashboard
            </h3>
            <p className="text-slate-600 mb-4">
              Access the complete Tableau data analytics dashboard with statistical visualizations and drill-down analysis.
            </p>
            <a
              href="https://public.tableau.com/app/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Open Analytics Dashboard <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Analysis Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Seasonal Patterns</h3>
            <p className="text-slate-600 mb-4">
              CPO production shows clear seasonal patterns throughout the year. Our analysis identifies:
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Peak production months</li>
              <li>• Low production periods</li>
              <li>• Year-over-year comparisons</li>
              <li>• Cyclical trends</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Growth Analysis</h3>
            <p className="text-slate-600 mb-4">
              Long-term growth trends and production capacity analysis:
            </p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Year-over-year growth rates</li>
              <li>• Quarterly performance trends</li>
              <li>• Capacity utilization metrics</li>
              <li>• Forecasted growth trajectory</li>
            </ul>
          </div>
        </div>

        {/* Navigation to Related Pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/dashboard-bi" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-green-400 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition">
                Business Intelligence Dashboard
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Business metrics and KPIs overview.
              </p>
              <span className="text-green-600 font-semibold text-sm">View →</span>
            </div>
          </Link>

          <Link href="/insights" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-orange-400 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition">
                Insights & Recommendations
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Key findings and actionable recommendations.
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
