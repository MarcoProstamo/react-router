import Navbar from "../components/Navbar";

export default function defaultLayout() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Navbar />
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
