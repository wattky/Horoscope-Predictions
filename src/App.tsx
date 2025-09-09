import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import DailyDashboard from './pages/DailyDashboard.jsx';
import DailyHoroscope from './pages/DailyHoroscope.jsx';
import TodaysOverview from './pages/TodaysOverview.jsx';
import TomorrowsForecast from './pages/TomorrowsForecast.jsx';
import CosmicCalendar from './pages/CosmicCalendar.jsx';
import PersonalizedAI from './pages/PersonalizedAI.jsx';
import WeeklyHoroscope from './pages/WeeklyHoroscope.jsx';
import MonthlyHoroscope from './pages/MonthlyHoroscope.jsx';
import YearlyHoroscope from './pages/YearlyHoroscope.jsx';
import BigThree from './pages/BigThree.jsx';
import NatalChart from './pages/NatalChart.jsx';
import Transits from './pages/Transits.jsx';
import Progressions from './pages/Progressions.jsx';
import AstroGlossary from './pages/AstroGlossary.jsx';
import FixedStars from './pages/FixedStars.jsx';
import AstroCartography from './pages/AstroCartography.jsx';
import HandReading from './pages/HandReading.jsx';
import LuckyNumbers from './pages/LuckyNumbers.jsx';
import Tarot from './pages/Tarot.jsx';
import InstantMatch from './pages/InstantMatch.jsx';
import CompatibilityMatrix from './pages/CompatibilityMatrix.jsx';
import MatchExplanation from './pages/MatchExplanation.jsx';
import FriendCompatibility from './pages/FriendCompatibility.jsx';
import FamilyCompatibility from './pages/FamilyCompatibility.jsx';
import GroupCompatibility from './pages/GroupCompatibility.jsx';
import Rituals from './pages/Rituals.jsx';
import MoodTracker from './pages/MoodTracker.jsx';
import CommunityFeed from './pages/CommunityFeed.jsx';
import Premium from './pages/Premium.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import ZodiacOverview from './pages/ZodiacOverview.jsx';
import ZodiacElements from './pages/ZodiacElements.jsx';
import ZodiacModalities from './pages/ZodiacModalities.jsx';
import ZodiacPolarities from './pages/ZodiacPolarities.jsx';
import ZodiacTraits from './pages/ZodiacTraits.jsx';
import AriesProfile from './pages/AriesProfile.jsx';
import TaurusProfile from './pages/TaurusProfile.jsx';
import GeminiProfile from './pages/GeminiProfile.jsx';
import CancerProfile from './pages/CancerProfile.jsx';
import LeoProfile from './pages/LeoProfile.jsx';
import VirgoProfile from './pages/VirgoProfile.jsx';
import LibraProfile from './pages/LibraProfile.jsx';
import ScorpioProfile from './pages/ScorpioProfile.jsx';
import SagittariusProfile from './pages/SagittariusProfile.jsx';
import CapricornProfile from './pages/CapricornProfile.jsx';
import AquariusProfile from './pages/AquariusProfile.jsx';
import PiscesProfile from './pages/PiscesProfile.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DailyDashboard />} />
          <Route path="/daily-horoscope" element={<DailyHoroscope />} />
          <Route path="/todays-overview" element={<TodaysOverview />} />
          <Route path="/tomorrows-forecast" element={<TomorrowsForecast />} />
          <Route path="/cosmic-calendar" element={<CosmicCalendar />} />
          <Route path="/ai-insights" element={<PersonalizedAI />} />
          <Route path="/zodiac-overview" element={<ZodiacOverview />} />
          <Route path="/zodiac-elements" element={<ZodiacElements />} />
          <Route path="/zodiac-modalities" element={<ZodiacModalities />} />
          <Route path="/zodiac-polarities" element={<ZodiacPolarities />} />
          <Route path="/zodiac-traits" element={<ZodiacTraits />} />
          <Route path="/zodiac/aries" element={<AriesProfile />} />
          <Route path="/zodiac/taurus" element={<TaurusProfile />} />
          <Route path="/zodiac/gemini" element={<GeminiProfile />} />
          <Route path="/zodiac/cancer" element={<CancerProfile />} />
          <Route path="/zodiac/leo" element={<LeoProfile />} />
          <Route path="/zodiac/virgo" element={<VirgoProfile />} />
          <Route path="/zodiac/libra" element={<LibraProfile />} />
          <Route path="/zodiac/scorpio" element={<ScorpioProfile />} />
          <Route path="/zodiac/sagittarius" element={<SagittariusProfile />} />
          <Route path="/zodiac/capricorn" element={<CapricornProfile />} />
          <Route path="/zodiac/aquarius" element={<AquariusProfile />} />
          <Route path="/zodiac/pisces" element={<PiscesProfile />} />
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
  );
}

export default App;