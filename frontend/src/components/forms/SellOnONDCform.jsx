// import React, { useState } from "react";
// import "./SellOnONDCForn.css";
// import { Button } from "@mui/material";
// import Swal from "sweetalert2";
// import axios from "axios";
// const SellOnONDCForm = () => {
//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   email: "",
//   //   phoneNum: "",
//   //   eName: "",
//   //   businessAdd: "",
//   //   businessInvolved: "",
//   // });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value,
//   //   });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   axios
//   //     .post(
//   //       "https://script.google.com/macros/s/AKfycbyKWdxq0GstNWaOZobKpFBwHdvNgBP9KXvz-zNLcxwyYs8sQFZRKcUlRwMFxZFhYf7b/exec",
//   //       formData
//   //     )
//   //     .then((response) => {
//   //       if (response.status === 200) {
//   //         Swal.fire("Thank you for Submitting!");
//   //       } else {
//   //         Swal.fire("Request not processed, please try again!");
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //       Swal.fire("An error occurred, please try again later!");
//   //     });
//   // };
//   function Submit(e) {
//     const formEle = document.querySelector("form");
//     const formDatab = new FormData(formEle);
//     fetch(
//       "https://script.google.com/macros/s/AKfycbzkCUwHcshRO2lzwjRres5RERNPNye08APz26QjxzJpwycq1u5fKGa01D_etLZ7_Ewa/exec",
//       {
//         method: "POST",
//         body: formDatab,
//       }
//     )
//       .then(() => {
//         Swal.fire("Thank you for Submitting!");
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire("An error occurred, please try again later!");
//       });
//   }

//   return (
//     <form className="formONDC" onSubmit={(e) => Submit(e)}>
//       <h1
//         className="section_tittle text-center mt-5 mb-4"
//         style={{ color: "green", textAlign: "center", paddingTop: "20px" }}
//       >
//         Registration / पंजीकरण
//       </h1>
//       <label>
//         Name / आपका नाम :
//         <input
//           type="text"
//           name="Name"
//           // value={formData.name}
//           // onChange={handleChange}
//           placeholder="Name"
//         />
//       </label>

//       <label>
//         Email Address / मेल पता :
//         <input
//           type="email"
//           name="Email"
//           // value={formData.email}
//           // onChange={handleChange}
//           placeholder="Email Address"
//         />
//       </label>

//       <label>
//         Phone Number / फ़ोन नंबर:
//         <input
//           type="tel"
//           name="PhoneNum"
//           // value={formData.phone}
//           // onChange={handleChange}
//           placeholder="Phone Number"
//         />
//       </label>

//       <label>
//         Name of your Enterprise / आपके उद्यम का नाम :
//         <input
//           type="text"
//           name="Ename"
//           // value={formData.enterpriseName}
//           // onChange={handleChange}
//           placeholder="Name of enterprise"
//         />
//       </label>

//       <label>
//         Business Address / व्यावसायिक पता :
//         <input
//           type="text"
//           name="BusinessAdd"
//           // value={formData.city}
//           // onChange={handleChange}
//           placeholder="City"
//         />
//       </label>

//       <label>
//         Business you are involved in? / आप किस व्यवसाय से जुड़े हैं?
//         <input
//           type="text"
//           name="BusinessInvolved"
//           // value={formData.sellingCategory}
//           // onChange={handleChange}
//           placeholder="Selling Category"
//         />
//       </label>
//       <div className="btnForm">
//         <Button variant="contained" sx={{ color: "white" }} type="submit">
//           Submit
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default SellOnONDCForm;

import React, { useState } from "react";
import "./SellOnONDCForn.css";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
const SellOnONDCForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    eName: "",
    businessAdd: "",
    businessInvolved: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://www.udyamwell.com/ondc-seller/add-seller", formData)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          Swal.fire("Thankyou for Submitting !");
        } else {
          Swal.fire("Request not processed, please try again !");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("Form submitted:", formData);
  };

  return (
    <form className="formONDC" onSubmit={handleSubmit}>
      <h1
        className="section_tittle text-center mt-5 mb-4"
        style={{ color: "green", textAlign: "center", paddingTop: "20px" }}
      >
        Registration / पंजीकरण
      </h1>
      <label>
        Name / आपका नाम :
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </label>

      <label>
        Email Address / मेल पता :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
      </label>

      <label>
        Phone Number / फ़ोन नंबर:
        <input
          type="tel"
          name="phoneNum"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </label>

      <label>
        Name of your Enterprise / आपके उद्यम का नाम :
        <input
          type="text"
          name="eName"
          value={formData.enterpriseName}
          onChange={handleChange}
          placeholder="Name of enterprise"
        />
      </label>

      <label>
        Business Address / व्यावसायिक पता :
        <input
          type="text"
          name="businessAdd"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
      </label>

      <label>
        Business you are involved in? / आप किस व्यवसाय से जुड़े हैं?
        <input
          type="text"
          name="businessInvolved"
          value={formData.sellingCategory}
          onChange={handleChange}
          placeholder="Selling Category"
        />
      </label>
      <div className="btnForm">
        <Button variant="contained" sx={{ color: "white" }} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SellOnONDCForm;
