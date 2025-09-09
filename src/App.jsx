import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import DailyHoroscope from './pages/DailyHoroscope';
import WeeklyHoroscope from './pages/WeeklyHoroscope';
import MonthlyHoroscope from './pages/MonthlyHoroscope';
import YearlyHoroscope from './pages/YearlyHoroscope';
import BigThree from './pages/BigThree';
import NatalChart from './pages/NatalChart';
import Transits from './pages/Transits';
import Progressions from './pages/Progressions';
import AstroGlossary from './pages/AstroGlossary';
import FixedStars from './pages/FixedStars';
import AstroCartography from './pages/AstroCartography';
import HandReading from './pages/HandReading';
import LuckyNumbers from './pages/LuckyNumbers';
import Tarot from './pages/Tarot';
import InstantMatch from './pages/InstantMatch';
import CompatibilityMatrix from './pages/CompatibilityMatrix';
import MatchExplanation from './pages/MatchExplanation';
import FriendCompatibility from './pages/FriendCompatibility';
import FamilyCompatibility from './pages/FamilyCompatibility';
import GroupCompatibility from './pages/GroupCompatibility';
import Rituals from './pages/Rituals';
import MoodTracker from './pages/MoodTracker';
import CommunityFeed from './pages/CommunityFeed';
import Premium from './pages/Premium';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily-horoscope" element={<DailyHoroscope />} />
            <Route path="/weekly-horoscope" element={<WeeklyHoroscope />} />
            <Route path="/monthly-horoscope" element={<MonthlyHoroscope />} />
            <Route path="/yearly-horoscope" element={<YearlyHoroscope />} />
            <Route path="/big-three" element={<BigThree />} />
            <Route path="/natal-chart" element={<NatalChart />} />
            <Route path="/transits" element={<Transits />} />
            <Route path="/progressions" element={<Progressions />} />
            <Route path="/astro-glossary" element={<AstroGlossary />} />
            <Route path="/fixed-stars" element={<FixedStars />} />
            <Route path="/astro-cartography" element={<AstroCartography />} />
            <Route path="/hand-reading" element={<HandReading />} />
            <Route path="/lucky-numbers" element={<LuckyNumbers />} />
            <Route path="/tarot" element={<Tarot />} />
            <Route path="/instant-match" element={<InstantMatch />} />
            <Route path="/compatibility-matrix" element={<CompatibilityMatrix />} />
            <Route path="/match-explanation" element={<MatchExplanation />} />
            <Route path="/friend-compatibility" element={<FriendCompatibility />} />
            <Route path="/family-compatibility" element={<FamilyCompatibility />} />
            <Route path="/group-compatibility" element={<GroupCompatibility />} />
            <Route path="/rituals" element={<Rituals />} />
            <Route path="/mood-tracker" element={<MoodTracker />} />
            <Route path="/community" element={<CommunityFeed />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;