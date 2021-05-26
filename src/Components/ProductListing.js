import Navbar from "./Nav";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function ProductListing() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}
