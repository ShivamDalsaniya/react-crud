import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/Addfood`).then((response) => {
      setData(response.data);
    });
  }, [data]);

  const menu = useRef("");
  const img = useRef("");
  const qty = useRef("");
  const oldprice = useRef("");
  const newprice = useRef("");
  const description = useRef("");
  const date = useRef("");

  const handleFood = (e) => {
    e.preventDefault();
    let ins = {
      menu: menu.current.value,
      img: img.current.value,
      qty: qty.current.value,
      oldprice: oldprice.current.value,
      newprice: newprice.current.value,
      description: description.current.value,
      date: date.current.value,
    };
    axios.post(`http://localhost:8000/Addfood`, ins).then(() => {
      Swal.fire({
        title: "Wow",
        text: "Congratulations Your Data Added Successfully",
        icon: "success",
      });
    });
    e.target.reset();
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex">
      <div className="w-1/4 bg-gray-700 p-8">
        <h2 className="text-xl font-bold mb-4">Nandni Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block">
              Manage Customers
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Add FoodMenu
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Add Food
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Add Events
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Add Chefs
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Manage Contacts
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Manage Reviews
            </a>
          </li>
          <li>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-8 bg-white text-black">
        <h2 className="text-xl font-bold mb-4 border p-2 border-gray-300">
          Dashboard Admin Setting
        </h2>
        <form className="space-y-4" onSubmit={handleFood}>
          <div className=" justify-between">
            <div className="">
              <label
                htmlFor="foodMenu"
                className="block text-sm font-medium text-black"
              >
                Enter Food Menu
              </label>
              <input
                type="text"
                ref={menu}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="foodImageURL"
              className="block text-sm font-medium text-black"
            >
              Enter food image URL *
            </label>
            <input
              type="text"
              ref={img}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className=" ">
            <div className="">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-black"
              >
                select qty
              </label>
              <input
                type="text"
                ref={qty}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="oldPrice"
                className="block text-sm font-medium text-black"
              >
                Enter Old Price
              </label>
              <input
                type="text"
                ref={oldprice}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="newPrice"
              className="block text-sm font-medium text-black"
            >
              Enter New Price
            </label>
            <input
              type="text"
              ref={newprice}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-black"
            >
              Descriptions
            </label>
            <input
              type="text"
              ref={description}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="addedDate"
              className="block text-sm font-medium text-black"
            >
              Added date
            </label>
            <input
              type="date"
              ref={date}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              AddFood
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset
            </button>
          </div>
        </form>
        <p className="mt-4 text-gray-500 text-center">
          Copyright &copy; 2023 All right reserved certified company
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
