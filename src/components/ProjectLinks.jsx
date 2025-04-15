import { Link } from "react-router-dom";


const ProjectLinks = () => {
  return (
    <div className="my-4 text-lg flex justify-center">
      <ul className="mx-2 my-8 p-2 list-inside flex flex-1 flex-wrap gap-1">
        <li className="px-4 py-2 list-disc border hover:bg-black hover:text-white rounded-lg w-[30%] flex-grow">
          <Link to="/movieapp"> Movie App</Link>
        </li>

        <li className="px-4 py-2 list-disc border hover:bg-black hover:text-white rounded-lg w-[30%] flex-grow">
          <Link to="/otpcontainer"> OTP Input</Link>
        </li>

        <li className="px-4 py-2 list-disc border hover:bg-black hover:text-white rounded-lg w-[30%] flex-grow">
          <Link to="/productspagination">Products Pagination</Link>
        </li>

        
          <li className="px-4 py-2 list-disc border hover:bg-black hover:text-white rounded-lg w-[30%] flex-grow">
            <Link to="/todoapp">Todo List App</Link>
          </li>
      </ul>
    </div>
  );
};

export default ProjectLinks;

// grid grid-flow-col
