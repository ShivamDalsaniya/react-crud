import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllFood() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/Addfood`).then((response) => {
      setData(response.data);
    });
  });

  return (
    <>
      <section>
        <div className="grid grid-cols-4 justify-between gap-x-2">
          {data &&
            data.map((item, index) => {
              return (
                <>
                  <di>
                    <div className="mx-2 w-auto">
                      <div className="border border-gray-800 mt-2">
                        {item.menu}
                      </div>
                      <div className="mt-2">
                        <img src={item.img} alt="" className="h-[200px] w-[300px]" />
                      </div>
                      <div className="border border-gray-800 mt-2">
                        {item.qty}
                      </div>
                      <div className="border border-gray-800 mt-2">
                        {item.oldprice}
                      </div>
                      <div className="border border-gray-800 mt-2">
                        {item.newprice}
                      </div>
                      <div className="border border-gray-800 mt-2">
                        {item.description}
                      </div>
                      <div className="border border-gray-800 mt-2">
                        {item.date}
                      </div>

                      <button
                        onClick={() => Navigate(`/edit/${item.id}`)}
                        className="bg-green-500 text-white p-2 mt-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => Navigate(`/delete/${item.id}`)}
                        className="bg-red-500 text-white p-2 ms-2"
                      >
                        Delete
                      </button>
                    </div>
                  </di>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default AllFood;
