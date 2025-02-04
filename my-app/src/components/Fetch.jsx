import { useState, useEffect } from "react";
import ZarinpalPayment from "zarinpal-pay";

const Fetch = () => {
  const [photos, setPhotos] = useState([]);

  ///////////////////////
  async function getData() {
    // const url = "http://127.0.0.1:8000/api/category/creat/";
    // try {
    //   const response = await fetch(url, {
    //     mode: "cors",
    //     method: "POST",
    //     headers: {
    //       accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: "test cat 1",
    //       description: "samin 1 description",
    //       picture: "https://cdnfa.com/taadesign/c73a/files/8698077.jpeg",
    //     }),
    //   });
    //   if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //   }

    //   const json = await response.json();
    //   console.log(json);
    // } catch (error) {
    //   console.error(error.message);
    // }
    ////////////////////////////////// get all categories:
    // const url = "http://127.0.0.1:8000/api/category/";
    // try {
    //   const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },

    //   });
    //   if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //   }

    //   const json = await response.json();
    //   console.log(json);
    // } catch (error) {
    //   console.error(error.message);
    // }
    ////////////////////////////////// get single category:
    const url = "http://127.0.0.1:8000/api/category/2";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  ////////////////////////
  useEffect(() => {
    // fetch("http://127.0.0.1:8000/shop/users/")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setPhotos(data);
    //   });
    // getData();
  }, []);
  return (
    <div>
      {/* {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))} */}
      <button onClick={() => getData()}>click me</button>
    </div>
  );
};
export default Fetch;
