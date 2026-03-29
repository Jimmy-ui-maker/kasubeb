import About from "@/components/About";
import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import AllStudents from "@/components/StudentList";

export default function Home() {
  return (
    <>
     <Navbar/>
      <MainPage />
      <About />
      <AllStudents />
      <Footer />
    </>
  );
}
