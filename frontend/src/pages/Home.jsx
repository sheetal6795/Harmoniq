import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import ChatbotPreview from "../components/ChatbotPreview";
import MoodTracker from "../components/MoodTracker";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ChatbotPreview />
      <MoodTracker />
      <Footer />
    </>
  );
}

export default Home;