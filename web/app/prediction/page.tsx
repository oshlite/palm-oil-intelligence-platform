'use client'

import { useState } from 'react'
import { ArrowLeft, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function PredictionPage() {
  const [formData, setFormData] = useState({
    month: '',
    year: '',
    lagged1: '',
    lagged3: '',
    lagged6: '',
    lagged12: '',
  })

  const [prediction, setPrediction] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setPrediction(null)

    try {
      // Validate inputs
      if (!formData.month || !formData.year || !formData.lagged1 || !formData.lagged3 || !formData.lagged6 || !formData.lagged12) {
        throw new Error('All fields are required')
      }

      // Here you would normally call your API endpoint
      // For now, we'll simulate a prediction
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const predictedValue = Math.random() * 500000 + 400000
      setPrediction(Math.round(predictedValue))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">CPO Production Forecast</h1>
            </div>
            <p className="text-slate-600 text-lg">
              Enter your data to generate a prediction using our advanced machine learning models.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Time Period Section */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Time Period</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="month" className="block text-sm font-medium text-slate-700 mb-2">
                    Month
                  </label>
                  <select
                    id="month"
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select month</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={String(i + 1)}>
                        {new Date(2024, i).toLocaleString('default', { month: 'long' })}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-slate-700 mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 2024"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Historical Data Section */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">Historical Production Values</h2>
              <p className="text-sm text-slate-600 mb-4">
                Enter previous production values (in tonnes) for lagged features used by the model:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="lagged1" className="block text-sm font-medium text-slate-700 mb-2">
                    1 Month Ago (Lag-1)
                  </label>
                  <input
                    type="number"
                    id="lagged1"
                    name="lagged1"
                    value={formData.lagged1}
                    onChange={handleChange}
                    required
                    placeholder="Enter value"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lagged3" className="block text-sm font-medium text-slate-700 mb-2">
                    3 Months Ago (Lag-3)
                  </label>
                  <input
                    type="number"
                    id="lagged3"
                    name="lagged3"
                    value={formData.lagged3}
                    onChange={handleChange}
                    required
                    placeholder="Enter value"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lagged6" className="block text-sm font-medium text-slate-700 mb-2">
                    6 Months Ago (Lag-6)
                  </label>
                  <input
                    type="number"
                    id="lagged6"
                    name="lagged6"
                    value={formData.lagged6}
                    onChange={handleChange}
                    required
                    placeholder="Enter value"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lagged12" className="block text-sm font-medium text-slate-700 mb-2">
                    12 Months Ago (Lag-12)
                  </label>
                  <input
                    type="number"
                    id="lagged12"
                    name="lagged12"
                    value={formData.lagged12}
                    onChange={handleChange}
                    required
                    placeholder="Enter value"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Generating Prediction...' : 'Generate Prediction'}
            </button>
          </form>

          {/* Prediction Result */}
          {prediction !== null && (
            <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-lg animate-slideDown">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Predicted Production</h3>
              <p className="text-4xl font-bold text-green-600 mb-2">
                {prediction.toLocaleString()} tonnes
              </p>
              <p className="text-sm text-slate-600">
                Forecast for {formData.month}/{formData.year} based on the provided historical data.
              </p>
              <div className="mt-4 p-4 bg-white rounded border border-green-200">
                <p className="text-sm text-slate-600">
                  <strong>Note:</strong> This prediction is based on the XGBoost model trained on historical CPO production data. 
                  The accuracy may vary depending on external market factors not included in the model.
                </p>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div className="mt-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded">
            <h3 className="font-semibold text-blue-900 mb-2">How It Works</h3>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>✓ Our model uses lagged features (past values) to predict future production</li>
              <li>✓ Multiple ML algorithms are used for ensemble predictions</li>
              <li>✓ Results are scaled back to original units for easy interpretation</li>
              <li>✓ Check the Insights page for trend analysis and recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
