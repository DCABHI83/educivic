import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgrammesPage } from './pages/ProgrammesPage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { EcosystemPage } from './pages/EcosystemPage';
import { PartnersPage } from './pages/PartnersPage';
import { IndustryNeedPage } from './pages/IndustryNeedPage';
import { CompareProgrammesPage } from './pages/CompareProgrammesPage';
import { StoriesPage } from './pages/StoriesPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { FAQsPage } from './pages/FAQsPage';
import { ContactPage } from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
<ScrollToTop/>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/apply" element={<ApplicationFormPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/insights" element={<IndustryNeedPage />} />
          <Route path="/compare" element={<CompareProgrammesPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/julian-thorne" element={<CaseStudyPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
