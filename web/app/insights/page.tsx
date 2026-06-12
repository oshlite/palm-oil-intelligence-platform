import Link from 'next/link'
import { ArrowLeft, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react'

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-slate-50 py-12">
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
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg flex items-center justify-center">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Insights & Recommendations</h1>
          </div>
          <p className="text-xl text-slate-600">
            AI-powered insights, trend analysis, and actionable recommendations to optimize CPO production planning.
          </p>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Key Insights</h2>
          
          <div className="space-y-6">
            {/* Insight 1 */}
            <div className="border-l-4 border-orange-500 pl-6 py-4">
              <div className="flex items-start gap-3 mb-2">
                <TrendingUp className="text-orange-600 mt-1" size={24} />
                <h3 className="text-xl font-semibold text-slate-900">Seasonal Trend Detected</h3>
              </div>
              <p className="text-slate-600 mb-3">
                CPO production exhibits a strong seasonal pattern with peak production in Q2-Q3 and lower production in Q4-Q1. 
                This pattern is consistent year-over-year and should be factored into inventory and capacity planning.
              </p>
              <div className="bg-orange-50 p-3 rounded border border-orange-200 text-sm text-slate-700">
                <strong>Implication:</strong> Plan procurement and marketing strategies around these seasonal patterns.
              </div>
            </div>

            {/* Insight 2 */}
            <div className="border-l-4 border-blue-500 pl-6 py-4">
              <div className="flex items-start gap-3 mb-2">
                <TrendingUp className="text-blue-600 mt-1" size={24} />
                <h3 className="text-xl font-semibold text-slate-900">Growth Momentum</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Year-over-year growth rates show positive momentum with an average growth of 5-8% annually. 
                This indicates healthy production scaling and market expansion.
              </p>
              <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm text-slate-700">
                <strong>Implication:</strong> Invest in capacity expansion to meet growing demand.
              </div>
            </div>

            {/* Insight 3 */}
            <div className="border-l-4 border-green-500 pl-6 py-4">
              <div className="flex items-start gap-3 mb-2">
                <TrendingUp className="text-green-600 mt-1" size={24} />
                <h3 className="text-xl font-semibold text-slate-900">Predictability Index</h3>
              </div>
              <p className="text-slate-600 mb-3">
                High correlation between lagged production values and future production indicates strong predictability. 
                The R² score of our best model exceeds 0.85, suggesting reliable forecasting capability.
              </p>
              <div className="bg-green-50 p-3 rounded border border-green-200 text-sm text-slate-700">
                <strong>Implication:</strong> Forecasts can be used confidently for strategic planning.
              </div>
            </div>

            {/* Insight 4 */}
            <div className="border-l-4 border-red-500 pl-6 py-4">
              <div className="flex items-start gap-3 mb-2">
                <AlertCircle className="text-red-600 mt-1" size={24} />
                <h3 className="text-xl font-semibold text-slate-900">Volatility Spikes</h3>
              </div>
              <p className="text-slate-600 mb-3">
                Occasional spikes in volatility observed during Q4, likely due to year-end processing and seasonal demand patterns. 
                Standard deviation increases by 15-20% during these periods.
              </p>
              <div className="bg-red-50 p-3 rounded border border-red-200 text-sm text-slate-700">
                <strong>Implication:</strong> Maintain higher safety stock during Q4 to handle volatility.
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-600">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Operational Recommendations</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold flex-shrink-0">1.</span>
                <span><strong>Demand Planning:</strong> Use forecasts from the prediction model to optimize inventory levels</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold flex-shrink-0">2.</span>
                <span><strong>Capacity Allocation:</strong> Allocate resources based on predicted peak months (Q2-Q3)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold flex-shrink-0">3.</span>
                <span><strong>Risk Mitigation:</strong> Establish backup suppliers for Q4 volatility periods</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold flex-shrink-0">4.</span>
                <span><strong>Production Scheduling:</strong> Pre-position inventory 2-3 months before peak seasons</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Strategic Recommendations</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold flex-shrink-0">1.</span>
                <span><strong>Market Expansion:</strong> Leverage growth momentum for market expansion initiatives</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold flex-shrink-0">2.</span>
                <span><strong>Technology Investment:</strong> Automate forecasting and demand planning with AI</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold flex-shrink-0">3.</span>
                <span><strong>Data Enhancement:</strong> Integrate external data (weather, market) for better predictions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold flex-shrink-0">4.</span>
                <span><strong>Continuous Improvement:</strong> Monitor forecast accuracy and retrain models monthly</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Model Performance */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Model Performance Summary</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
              <p className="text-sm font-medium text-blue-700 mb-2">Best Model</p>
              <p className="text-3xl font-bold text-slate-900 mb-2">XGBoost</p>
              <p className="text-sm text-slate-600">Ensemble regression with optimal performance</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <p className="text-sm font-medium text-green-700 mb-2">R² Score</p>
              <p className="text-3xl font-bold text-slate-900 mb-2">0.87</p>
              <p className="text-sm text-slate-600">Explains 87% of variance in production</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
              <p className="text-sm font-medium text-orange-700 mb-2">RMSE</p>
              <p className="text-3xl font-bold text-slate-900 mb-2">8.5K</p>
              <p className="text-sm text-slate-600">Root mean squared error in tonnes</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-slate-50 rounded border border-slate-200">
            <p className="text-sm text-slate-600">
              <strong>Note:</strong> Model performance varies by prediction horizon. 1-month ahead forecasts are most accurate, 
              while 6-month forecasts have slightly higher variance due to increased uncertainty in external factors.
            </p>
          </div>
        </div>

        {/* Navigation to Related Pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prediction" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-blue-400 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                Make Predictions
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Generate forecasts using our ML models.
              </p>
              <span className="text-blue-600 font-semibold text-sm">Predict →</span>
            </div>
          </Link>

          <Link href="/dashboard-bi" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-green-400 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition">
                Dashboard BI
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Business metrics and KPIs overview.
              </p>
              <span className="text-green-600 font-semibold text-sm">View →</span>
            </div>
          </Link>

          <Link href="/dashboard-da" className="group">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border border-slate-200 hover:border-purple-400 h-full">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition">
                Dashboard DA
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                Detailed data analytics and statistics.
              </p>
              <span className="text-purple-600 font-semibold text-sm">View →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
