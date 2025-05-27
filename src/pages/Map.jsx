import { Link } from "react-router-dom";

function Map() {
  return (
    <div className="">
      <div className="h-100 flex flex-col gap-10 justify-center items-center">
        <p className="text-5xl font-medium text-center">My Labs Links:</p>
        <ul className="flex justify-center items-center gap-10 text-2xl text-white font-medium">
          
          {/* Lab 1 */}
          <li className=" rounded-2xl py-2 px-3 bg-purple-500">
            <Link to="lab1">Lab 1</Link>
          </li>

          {/* Lab 2 */}
          <li className=" rounded-2xl py-2 px-3 bg-purple-500">
            <Link to="lab2">Lab 2</Link>
          </li>

          {/* Lab 3 */}
          <li className=" rounded-2xl py-2 px-3 bg-purple-500">
            <Link to="lab3">Lab 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Map;
