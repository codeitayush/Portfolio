import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri"
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaPhp } from "react-icons/fa6";
import { FaGitSquare } from "react-icons/fa";
const Technologies = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl">Technologies</h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
<TbBrandJavascript className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
<RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
<AiOutlineConsoleSql className="text-7xl text-red-700"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
<FaPhp className="text-7xl text-green-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
<FaGitSquare className="text-7xl text-sky-700"/>
        </div>
    </div>
  </div>
}

export default Technologies
