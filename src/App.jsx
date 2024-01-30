import MovieList from "./CINE/MovieList";
import Footer from "./Footer";
import Heder from "./Heder";
import SideBard from "./SideBard";
export default function App() {
  return (
    <>
      <Heder />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBard />
          <MovieList />
        </div>
      </main>
      <Footer />
    </>
  );
}
