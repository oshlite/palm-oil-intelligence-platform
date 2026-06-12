import Link from 'next/link'
import { ArrowRight, TrendingUp, BarChart3, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                CPO Production <span className="text-blue-200">Forecasting</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Advanced analytics and machine learning-powered predictions for CPO production planning and optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/prediction"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
                >
                  Start Forecasting <ArrowRight size={20} />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-20">
                <div className="space-y-4">
                  <div className="h-40 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                    <TrendingUp size={60} className="text-blue-200" />
                  </div>
                  <p className="text-center text-blue-100">AI-Powered Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Key Features</h2>
            <p className="text-xl text-slate-600">Everything you need for data-driven forecasting decisions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Accurate Predictions</h3>
              <p className="text-slate-600">
                State-of-the-art ML models trained on historical data for reliable forecasts.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Real-time Analytics</h3>
              <p className="text-slate-600">
                Interactive dashboards with live data visualization and insights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Fast & Efficient</h3>
              <p className="text-slate-600">
                Quick analysis and recommendations to support your business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Access our forecasting tools and dashboards to optimize your CPO production planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prediction"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center gap-2"
            >
              Make a Prediction <ArrowRight size={20} />
            </Link>
            <Link
              href="/dashboard-bi"
              className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition"
            >
              View Dashboard BI
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Explore Our Platform</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Prediction Card */}
            <Link href="/prediction" className="group">
              <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-lg transition h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition">
                  Make Predictions
                </h3>
                <p className="text-slate-600 mb-4">
                  Use our ML models to forecast CPO production for specific dates and scenarios.
                </p>
                <span className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                  Predict Now <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Dashboard BI Card */}
            <Link href="/dashboard-bi" className="group">
              <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-green-400 hover:shadow-lg transition h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition">
                  Dashboard BI
                </h3>
                <p className="text-slate-600 mb-4">
                  Business intelligence views with comprehensive data visualization and metrics.
                </p>
                <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                  View BI <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Dashboard DA Card */}
            <Link href="/dashboard-da" className="group">
              <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-purple-400 hover:shadow-lg transition h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-purple-600 transition">
                  Dashboard DA
                </h3>
                <p className="text-slate-600 mb-4">
                  Data analytics dashboard with detailed insights and performance indicators.
                </p>
                <span className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                  View DA <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Insights Card */}
            <Link href="/insights" className="group">
              <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-orange-400 hover:shadow-lg transition h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-orange-600 transition">
                  Insights & Recommendations
                </h3>
                <p className="text-slate-600 mb-4">
                  AI-generated insights, trends analysis, and actionable recommendations.
                </p>
                <span className="inline-flex items-center gap-2 text-orange-600 font-semibold">
                  Read Insights <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* About Card */}
            <Link href="/about" className="group">
              <div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition">
                  About This Project
                </h3>
                <p className="text-slate-600 mb-4">
                  Learn about the project goals, methodology, and the team behind this platform.
                </p>
                <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
