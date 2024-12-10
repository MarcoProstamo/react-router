import Navbar from "../components/Navbar";

export default function defaultLayout() {
  return (
    <>
      <div className="wrapper" data-bs-theme="dark">
        <header>
          <Navbar />
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
