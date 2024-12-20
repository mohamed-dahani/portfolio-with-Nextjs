import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";

const main = () => {
  return (
    <main className="bg-white dark:bg-[#18181B] px-10 flex gap-8">
      <div className="backdrop-blur-md bg-red-600 py-9 px-10 rounded-2xl">
        <h1 className="text-white font-semibold text-2xl mb-7">Services</h1>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
            <div className="">
              <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                Front-end dev
              </h1>
              <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                <Link href="">Discover more</Link>
              </button>
            </div>

            <button className="text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors">
              <Link href="">
                <FaCode />
              </Link>
            </button>
          </div>
          <div className="flex items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
            <div className="">
              <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                Back-end dev
              </h1>
              <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                <Link href="">Discover more</Link>
              </button>
            </div>

            <button className="text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors">
              <Link href="">
              <FaDatabase />
              </Link>
            </button>
          </div>
          <div className="flex items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
            <div className="">
              <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                Mobile development
              </h1>
              <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                <Link href="">Discover more</Link>
              </button>
            </div>

            <button className="text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors">
              <Link href="">
              <CiMobile3 />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-md bg-red-600 py-9 px-10 rounded-2xl">
        <h1 className="text-white font-semibold text-2xl mb-7">Follow me on</h1>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
            <div className="">
              <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                Front-end dev
              </h1>
              <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                <Link href="">Discover more</Link>
              </button>
            </div>

            <button className="text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors">
              <Link href="">
                <FaCode />
              </Link>
            </button>
          </div>
          <div className="flex items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
            <div className="">
              <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                Back-end dev
              </h1>
              <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                <Link href="">Discover more</Link>
              </button>
            </div>

            <button className="text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors">
              <Link href="">
              <FaDatabase />
              </Link>
            </button>
          </div>
          <div className="flex items-center gap-8 py-4 px-5 bg-white rounded-xl dark:bg-[#18181B]">
            <div className="">
              <h1 className="text-black font-semibold text-lg mb-6 dark:text-white">
                Mobile development
              </h1>
              <button className="text-white bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-2 px-5 font-bold rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-colors">
                <Link href="">Discover more</Link>
              </button>
            </div>

            <button className="text-black bg-white text-2xl rounded-lg dark:bg-[#3F3F46] dark:text-white shadow-xl p-5 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white transition-colors">
              <Link href="">
              <CiMobile3 />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default main;
