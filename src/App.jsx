import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import "./App.css";

function App() {
  return (
    <>
      <Header siteName="Student Portal" />

      <main style={{ padding: "20px" }}>
        <CourseCard
          name="React Fundamentals"
          code="CS301"
          credits={4}
          grade="A"
        />
      </main>

      <Footer />
    </>
  );
}

export default App;