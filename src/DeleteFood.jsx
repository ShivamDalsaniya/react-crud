import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DeleteFood() {
  const [data, setData] = useState([]);
  const { id } = useParams("");
  const Navigate = useNavigate("");

  useEffect(() => {
    axios.delete(`http://localhost:8000/Addfood/${id}`).then((response) => {
      setData(response.data);
      Swal.fire({
        title: "Food is Deleted",
        text: "Your Food deleted successfully",
        icon: "error",
      });
    });
    Navigate("/")
  });

  return (
    <>
      <section></section>
    </>
  );
}

export default DeleteFood;
