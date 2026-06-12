import Link from 'next/link'
import { ArrowLeft, Zap, Users, Code2, Target } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-slate-50 py-12">
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
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">About This Project</h1>
          </div>
          <p className="text-xl text-slate-600">
            Comprehensive overview of the CPO Production Forecasting platform, methodology, and the team behind it.
          </p>
        </div>

        {/* Project Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Project Overview</h2>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              The <strong>CPO Production Forecasting Platform</strong> is an advanced analytics solution designed to predict 
              and optimize Crude Palm Oil (CPO) production planning. Built on state-of-the-art machine learning algorithms, 
              this platform provides accurate forecasts and actionable insights for production management.
            </p>

            <p>
              The project leverages historical production data spanning multiple years to identify patterns, seasonal trends, 
              and growth trajectories. By combining multiple ML algorithms and statistical techniques, the platform delivers 
              reliable predictions that support strategic planning and operational optimization.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p><strong>Mission:</strong> To empower businesses with data-driven forecasting capabilities for optimized 
              CPO production planning and resource allocation.</p>
            </div>
          </div>
        </div>

        {/* Project Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-indigo-600" size={24} />
              <h3 className="text-xl font-semibold text-slate-900">Project Goals</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Develop accurate ML models for CPO production forecasting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Provide actionable business intelligence insights</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Enable data-driven decision making in production planning</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Optimize resource allocation based on predictions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">✓</span>
                <span>Support strategic growth and market expansion initiatives</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-indigo-600">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="text-indigo-600" size={24} />
              <h3 className="text-xl font-semibold text-slate-900">Technical Stack</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li>
                <p className="font-semibold text-slate-900">Machine Learning</p>
                <p className="text-sm">XGBoost, Random Forest, Linear Regression</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Frontend</p>
                <p className="text-sm">Next.js, React, Tailwind CSS</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Data Visualization</p>
                <p className="text-sm">Tableau, Recharts, Interactive Dashboards</p>
              </li>
              <li>
                <p className="font-semibold text-slate-900">Data Processing</p>
                <p className="text-sm">Python, Pandas, Scikit-learn, NumPy</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Methodology</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Data Collection & Preprocessing</h3>
                <p className="text-slate-600 mt-2">
                  Gathering historical CPO production data from multiple sources and preprocessing to handle missing values, 
                  outliers, and data normalization.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Feature Engineering</h3>
                <p className="text-slate-600 mt-2">
                  Creating lag features (1-month, 3-month, 6-month, 12-month lagged values) and seasonal indicators 
                  to capture temporal dependencies in production patterns.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Model Development</h3>
                <p className="text-slate-600 mt-2">
                  Training and comparing multiple ML models including XGBoost, Random Forest, and Linear Regression. 
                  Selected the best performing model based on cross-validation metrics.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Validation & Testing</h3>
                <p className="text-slate-600 mt-2">
                  Rigorous testing using time-series cross-validation and holdout test sets to ensure model reliability 
                  and generalization to new data.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white font-bold">5</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Deployment & Monitoring</h3>
                <p className="text-slate-600 mt-2">
                  Deploying the model as a web service and establishing continuous monitoring to track prediction accuracy 
                  and retrain with new data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-indigo-600" size={28} />
            <h2 className="text-2xl font-bold text-slate-900">Project Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                DS
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Data Science Team</h3>
              <p className="text-slate-600 mt-2">
                Responsible for model development, feature engineering, and statistical analysis. 
                Ensures model accuracy and performance optimization.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                WD
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Web Development Team</h3>
              <p className="text-slate-600 mt-2">
                Building the user interface and platform infrastructure. Creates interactive visualizations 
                and dashboards for data presentation.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-slate-600">
              <strong>Collaboration:</strong> This project represents a collaborative effort between data scientists and 
              web developers working together to deliver a comprehensive forecasting platform. Regular meetings and 
              continuous integration ensure seamless coordination.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-blue-600">
            <p className="text-sm font-medium text-slate-600 mb-2">Data Points</p>
            <p className="text-3xl font-bold text-slate-900">240+</p>
            <p className="text-xs text-slate-500 mt-2">Monthly records analyzed</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-indigo-600">
            <p className="text-sm font-medium text-slate-600 mb-2">Model Accuracy</p>
            <p className="text-3xl font-bold text-slate-900">87%</p>
            <p className="text-xs text-slate-500 mt-2">R² Score on test set</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-purple-600">
            <p className="text-sm font-medium text-slate-600 mb-2">Forecast Horizon</p>
            <p className="text-3xl font-bold text-slate-900">6+</p>
            <p className="text-xs text-slate-500 mt-2">Months ahead</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center border-b-4 border-pink-600">
            <p className="text-sm font-medium text-slate-600 mb-2">Models Tested</p>
            <p className="text-3xl font-bold text-slate-900">10+</p>
            <p className="text-xs text-slate-500 mt-2">Different algorithms</p>
          </div>
        </div>

        {/* Documentation & Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Getting Started</h3>
            <ol className="space-y-2 text-slate-600 text-sm">
              <li><strong>1. Home:</strong> Explore the platform overview</li>
              <li><strong>2. Prediction:</strong> Generate your first forecast</li>
              <li><strong>3. Dashboards:</strong> Dive into BI and DA analytics</li>
              <li><strong>4. Insights:</strong> Read key findings and recommendations</li>
            </ol>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Features</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>✓ AI-powered production forecasting</li>
              <li>✓ Interactive data visualizations</li>
              <li>✓ Real-time analytics dashboards</li>
              <li>✓ Actionable business recommendations</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Forecast?</h2>
          <p className="mb-6 text-indigo-100">
            Start exploring the platform with real data and ML-powered predictions.
          </p>
          <Link
            href="/prediction"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Make Your First Prediction
          </Link>
        </div>
      </div>
    </div>
  )
}
