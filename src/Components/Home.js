import Navbar from "./Nav";
import { useCategory } from "../hooks/useCategory";
import url from "../config";
import { useStore } from "../Contexts/store-context";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
export default function Home() {
  const { categories, showLoader } = useStore();

  useCategory("get", `${url}categories`);

  return (
    <>
      <div className="container" id="home">
        <Navbar />
        <div className="content">
          <main className="main-content">
            <div className="text-container">
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="music"
              />
            </div>
            <div className="categories">
              {showLoader && (
                <div className="loader">
                  {" "}
                  <Spinner type="Audio" color="#c4b5fd" height={60} />{" "}
                </div>
              )}
              {categories.map((category) => {
                return (
                  <div className="card " id="card" key={category._id}>
                    <div className="thumbnail">
                      <img src={category.image} alt="card" />
                      <Link to={`/categories/${category._id}`}>
                        <div className="overlay">
                          <span>{category.name}</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
