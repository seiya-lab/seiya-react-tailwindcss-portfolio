import { useState } from "react";
import "./App.css";
import "./components/WorksCard";
import CardNigetabi from "./components/contents/CardNigetabi";
import CardPortfolio from "./components/contents/CardPortfolio";
import CardMakeshihi from "./components/contents/CardMakeshihi";
import CardYokete from "./components/contents/CardYokete";
import CardCancelChecker from "./components/contents/CardCancelChecker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="md:sticky top-0 z-50">
        <header className="text-white border-b border-gray-200 bg-blue-400">
          <div className="flex mx-auto p-1 flex-col md:flex-row items-center">
            <a
              href="#home"
              className="flex md:block mb-2 md:mb-0 justify-center"
            >
              <img
                className="w-24 lg:max-w-lg p-2"
                src="/seiyalogo.png"
              ></img>
            </a>
            <nav className="md:ml-auto text-base">
              <a
                href="#home"
                className="mr-5 hover:text-blue-700 duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="mr-5 hover:text-blue-700 duration-300 font-medium"
              >
                About
              </a>
              <a
                href="#works"
                className="mr-5 hover:text-blue-700 duration-300 font-medium"
              >
                Works
              </a>
              {/* <a href="#works" className="hover:text-blue-700 duration-300 font-medium">Skills</a> */}
            </nav>
          </div>
        </header>
      </div>

      <section className=" bg-navy h-screen" id="home">
        <div className="container mx-auto">
          <h1 className="flex justify-center text-3xl sm:text-6xl text-white font-medium pt-16 mb-2">
              Seiya Tanaka
          </h1>
          <h2 className="flex justify-center text-gray-200 text-lg sm:text-2xl mb-12 leading-relaxed">
            Please Enjoy My Portfolio Site!
          </h2>        
          <div className="flex justify-center">
            <img className="sm:w-64 w-36 hover:-translate-y-2 hover:-rotate-6 duration-300 ease-in-out" src="./usagi_white.svg"></img>
          </div> 
        </div>
      </section>

      <section
        className="text-gray-700 border-t border-gray-200 bg-white"
        id="about"
      >
        <div className="container px-5 pt-20 pb-6 mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-blue-400">
              About Me
            </h1>
            <p className="pb-4">
              大阪公立大学大学院 情報学研究科 基幹情報学専攻 知能情報学分野
              知能メディア処理研究室
            </p>
          </div>
          <div className="leading-relaxed">
            <p>
              兵庫県の但馬という地域で生まれ育ちました。
              現在は大阪に住む大学院生です。
              <br />
              研究室では、「Web検索時のユーザをセンシングするブラウザ拡張機能」の開発をドイツの人工知能研究センター(DFKI)と共同で行っています。
              <br />
              創ることが好きで、アプリケーション、音楽、ゲームなど様々な開発に挑戦中です!
            </p> 
          </div>
        </div>
      </section>

      <section
        className="text-gray-700 border-t border-gray-200 bg-white"
        id="works"
      >
        <div className="container px-5 py-20 mx-auto">
          <div className="flex justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-medal-2"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 3h6l3 7l-6 2l-6 -2z"></path>
              <path d="M12 12l-3 -9"></path>
              <path d="M15 11l-3 -8"></path>
              <path d="M12 19.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z"></path>
            </svg>
          </div>
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-blue-400">
              Works
            </h1>
            <p className="pb-1">これまでに作ったものを何でも載せています</p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap justify-center">
            <CardNigetabi />
            <CardPortfolio />
            <CardMakeshihi />
            <CardYokete />
            <CardCancelChecker />
          </div>
        </div>
      </section>

      <footer className="text-white border-b border-gray-200 bg-blue-400">
        <div className="container flex mx-auto p-4 flex-col md:flex-row items-center">
          <p className="mb-1">©︎ 2023 Seiya Tanaka</p>
          <div className="flex md:ml-auto">
            <a href="https://github.com/seiya-lab" className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a href="mailto:22047seiya@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
