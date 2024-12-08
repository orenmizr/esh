import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import { CategoryPage } from './pages/CategoryPage';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:category" element={<CategoryPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}
export default App
