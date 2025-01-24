import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';
import HomePage from './views/pages/HomePage';
import ContactPage from './views/pages/ContactPage';
import HistoryPage from './views/pages/HistoryPage';
import ExtraActivitiesPage from './views/pages/ExtraActivitiesPage';
import AdmissionPage from './views/pages/AdmissionPage';
import PIEPage from './views/pages/PIEPage';
import PEIPage from './views/pages/academic/PEIPage';
import EvaluationCalendarPage from './views/pages/academic/EvaluationCalendarPage';
import ReadingPlanPage from './views/pages/academic/ReadingPlanPage';
import ProtocolsPage from './views/pages/academic/ProtocolsPage';
import RegulationsPage from './views/pages/academic/RegulationsPage';
import SchedulePage from './views/pages/academic/SchedulePage';
import SuppliesPage from './views/pages/academic/SuppliesPage';
import AcademiesPage from './views/pages/academic/AcademiesPage';

import { getMenuItems } from './controllers/MenuController';

function App() {
  const menuItems = getMenuItems();

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar menuItems={menuItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admision" element={<AdmissionPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/nosotros/historia" element={<HistoryPage />} />
            <Route path="/nosotros/actividades-extra" element={<ExtraActivitiesPage />} />
            <Route path="/pie" element={<PIEPage />} />
            <Route path="/coordinacion/pei" element={<PEIPage />} />
            <Route path="/coordinacion/calendario-evaluacion" element={<EvaluationCalendarPage />} />
            <Route path="/coordinacion/plan-lector" element={<ReadingPlanPage />} />
            <Route path="/coordinacion/protocolos" element={<ProtocolsPage />} />
            <Route path="/coordinacion/reglamentos" element={<RegulationsPage />} />
            <Route path="/coordinacion/horarios" element={<SchedulePage />} />
            <Route path="/coordinacion/lista-utiles" element={<SuppliesPage />} />
            <Route path="/coordinacion/academias" element={<AcademiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;