# CPO Production Forecasting Platform

A professional web platform for CPO (Crude Palm Oil) production forecasting using machine learning and advanced analytics.

## 🎯 Project Overview

The CPO Production Forecasting Platform is a comprehensive solution designed to:
- Predict CPO production using state-of-the-art ML models
- Provide business intelligence dashboards with real-time analytics
- Generate actionable insights and recommendations
- Support data-driven decision making for production planning

## 📋 Features

- **Home Page**: Overview and navigation hub
- **Prediction Page**: Generate forecasts using ML models with historical data inputs
- **Dashboard BI**: Business intelligence metrics and KPIs (Tableau integration)
- **Dashboard DA**: Data analytics with detailed statistical analysis
- **Insights & Recommendations**: AI-powered insights and strategic recommendations
- **About Page**: Project information and team details

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Visualization**: Recharts, Tableau
- **Backend Ready**: API integration ready

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
web/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   ├── prediction/        # Prediction page
│   ├── dashboard-bi/      # Business Intelligence dashboard
│   ├── dashboard-da/      # Data Analytics dashboard
│   ├── insights/          # Insights & Recommendations page
│   └── about/             # About page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Navigation bar
│   └── Footer.tsx         # Footer component
├── styles/               # Global styles
│   └── globals.css       # Tailwind CSS imports
├── lib/                  # Utility functions
├── public/               # Static assets
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## 🔗 ML Models Integration

The platform integrates with trained ML models from the parent project:
- **Location**: `../models/`
- **Available models**:
  - `best_model.pkl` - Best performing ensemble model
  - `xgboost.pkl` - XGBoost regression model
  - `random_forest.pkl` - Random Forest model
  - `linear_regression.pkl` - Linear Regression baseline
  - `scaler_standard.pkl` - StandardScaler for feature normalization

## 📊 Tableau Dashboard Integration

The platform includes placeholders for Tableau dashboards:
- **Dashboard BI**: Business Intelligence view
- **Dashboard DA**: Data Analytics view

To integrate your Tableau dashboards:
1. Create public dashboards in Tableau
2. Get the embed URL from Tableau
3. Update the dashboard pages with your URLs

## 🎨 Design Features

- **Professional styling** with gradient backgrounds and modern components
- **Responsive design** for desktop, tablet, and mobile
- **Interactive elements** with hover effects and smooth transitions
- **Color-coded sections** for easy navigation and visual distinction
- **Accessibility** with semantic HTML and proper ARIA labels

## 🔄 Navigation Flow

```
Home
├── Prediction → Forecasting tool
├── Dashboard BI → Business metrics
├── Dashboard DA → Technical analytics
├── Insights → Recommendations
└── About → Project details
```

## ⚙️ Environment Variables

Create a `.env.local` file if needed:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 📝 Pages Description

### Home Page
- Hero section with call-to-action
- Feature highlights
- Navigation cards to all major sections

### Prediction Page
- Form for entering historical production values
- Supports lag features (1, 3, 6, 12 months)
- Real-time prediction generation
- Result display with confidence information

### Dashboard BI
- Business intelligence metrics
- KPI monitoring
- Performance indicators
- Tableau dashboard embed placeholder

### Dashboard DA
- Statistical analysis
- Detailed metrics
- Trend analysis
- Data analytics Tableau embed

### Insights Page
- Key findings from analysis
- Strategic and operational recommendations
- Model performance metrics
- Actionable insights

### About Page
- Project overview and goals
- Technical stack details
- Methodology explanation
- Team information
- Project statistics

## 🔄 Continuous Development

To add more features:
1. Create new page files in the `app/` directory
2. Add navigation items in `Navigation.tsx`
3. Follow the existing component patterns
4. Use Tailwind CSS for styling

## 📞 Support & Contact

For more information about the CPO Production Forecasting project, please refer to the parent directory documentation.

## 📄 License

This project is part of the CPO Production Forecasting initiative.

---

**Status**: ✅ Ready for development and integration with ML backend
