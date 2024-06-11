import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditFood() {
  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  const { id } = useParams();

  const menu = useRef("");
  const img = useRef("");
  const qty = useRef("");
  const oldprice = useRef("");
  const newprice = useRef("");
  const description = useRef("");
  const date = useRef("");

  useEffect(() => {
    axios.get(`http://localhost:8000/Addfood/${id}`).then((response) => {
      setData(response.data);
      menu.current.value = response.data.menu;
      img.current.value = response.data.img;
      qty.current.value = response.data.qty;
      oldprice.current.value = response.data.oldprice;
      newprice.current.value = response.data.newprice;
      description.current.value = response.data.description;
      date.current.value = response.data.date;
    });
  }, [id]);

  const UpdateFood = (event) => {
    event.preventDefault();

    let update = {
      menu: menu.current.value,
      img: img.current.value,
      qty: qty.current.value,
      oldprice: oldprice.current.value,
      newprice: newprice.current.value,
      description: description.current.value,
      date: date.current.value,
    };

    axios.put(`http://localhost:8000/Addfood/${id}`, update).then(() => {
      Swal.fire({
        title: "Food is Updated",
        text: "Congratulations Food Edited Successfully",
        icon: "success",
      });
    });
    Navigate("/")
  };

  return (
    <>
      <section className="">
        <div className=" max-w-[100px] mx-auto">
          <form action="">
            <div>
              <label htmlFor="">Menu</label>
              <br />
              <input
                type="text"
                placeholder="Enter Food Menu"
                ref={menu}
                className="border-gray-800 border"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="">Image</label>
              <br />
              <input
                type="text"
                placeholder="Enter Food Image"
                ref={img}
                className="border-gray-800 border"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="">Quantity</label>
              <br />
              <input
                type="text"
                placeholder="Enter Food Quantity"
                ref={qty}
                className="border-gray-800 border"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="">Old Price</label>
              <br />
              <input
                type="text"
                placeholder="Enter Old Price"
                ref={oldprice}
                className="border-gray-800 border"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="">New Price</label>
              <br />
              <input
                type="text"
                placeholder="Enter New Price"
                ref={newprice}
                className="border-gray-800 border"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="">Description</label>
              <br />
              <input
                type="text"
                placeholder="Enter Food Description"
                ref={description}
                className="border-gray-800 border"
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="">Date</label>
              <br />
              <input
                type="date"
                placeholder="Enter Date"
                ref={date}
                className="border-gray-800 border"
                autoComplete="off"
                required
              />
            </div>
            <button
              type="submit"
              onClick={UpdateFood}
              className="bg-green-700 text-white w-full mt-3 cursor-pointer"
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default EditFood;
