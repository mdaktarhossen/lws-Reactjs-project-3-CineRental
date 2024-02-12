import MovieList from "./COMPONENTS/MOVIE/MovieList";
import MovieHeder from "./COMPONENTS/MovieHeder";
import SideBar from "./COMPONENTS/SideBar";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <MovieHeder />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieList />
      </main>
      <Footer />
    </>
  );
}
