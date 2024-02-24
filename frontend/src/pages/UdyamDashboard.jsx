import React from "react";
import Bg_about from "../assets/Bg_about2.png";
import { useSelector } from "react-redux";
import CustomTable from "../components/CustomTable";
import { Button } from "@mui/material";
import { textAlign } from "@mui/system";
function UdyamDashboard() {
  const { user, error } = useSelector((state) => state.user);
  const heading = "Notifications";
  const columns = ["Task Code", "Title"];
  const data = [
    ["Row 1 Data 1", "Row 1 Data 2"],
    ["Row 2 Data 1", "Row 2 Data 2"],
    ["Row 3 Data 1", "Row 3 Data 2"],
  ];
  const customStyle = {
    borderRadius: "20px",
    padding: "30px",
    backgroundColor: "#E0F1E5",
    width: "40vw",
  };
  const CustomTextArea = (props) => {
    return (
      <input
        {...props}
        style={{
          width: "110%",
          height: "50px",
          padding: "20px ",
          backgroundColor: "#E0F1E5",
          borderRadius: "25px",
          outline: "none",
          resize: "none",
          textAlign: "center",
          color: "black",
          border: "none",
          margin: "none",
        }}
      />
    );
  };
  return (
    <>
      <div className="landingPageCover">
        <img
          src={Bg_about}
          width="100vw"
          alt="landing"
          className="landingPageCover__animation"
        />
      </div>
      <div
        className="block1"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBlock: "150px",
          marginInline: "200px",
        }}
      >
        <div
          className="subblock1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "40px",
          }}
        >
          <h1>
            Good Morning,{" "}
            <span style={{ color: "green" }}>
              {user ? user.name : "UdyamSathi"}
            </span>
          </h1>
          <div className="table1">
            <CustomTable
              heading={heading}
              columns={columns}
              data={data}
              style={customStyle}
            />
          </div>
        </div>
        <div
          className="subblock2"
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              width: "50%",
              textAlign: "justify",
              fontSize: "12px",
              fontWeight: "400",
              marginTop: "50px",
            }}
          >
            “It is only when we take chances, when our lives improve. The
            initial and the most difficult risk that we need to take is to
            become honest. —Walter Anderson”
          </p>
          <div
            className="Udyaminput"
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <CustomTextArea
              id="customTextArea"
              name="customTextArea"
              rows="1"
              type="text"
              placeholder={"Enter Task Code"}
            />
            <CustomTextArea
              id="customTextArea"
              name="customTextArea"
              rows="1"
              type="file"
              placeholder={"Upload your File "}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                color: "white",
                padding: "10px 60px",
                borderRadius: "20px",
                fontWeight: "400",
                textTransform: "inherit",
                border: "none",
                width: "40%",
                background:
                  "linear-gradient(90deg, rgba(46,132,70,1) 0%, rgba(0,100,0,1) 100%);",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div
        className="block2"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginInline: "150px",
          marginBottom: "150px",
        }}
      >
        <h1>
          <span style={{ color: "green" }}>#1 </span>UdyamSathi Rank{" "}
        </h1>
        <p>
          This rank for Udyamsathi will help our ambassadors to secure higher
          initiatives and benefits.
        </p>
        <div className="table1">
          <CustomTable
            heading={heading}
            columns={columns}
            data={data}
            style={{
              borderRadius: "20px",
              padding: "30px",
              backgroundColor: "#E0F1E5",
              width: "80vw",
              height: "60vh",
              marginTop: "40px",
            }}
          />
        </div>
      </div>
      <div
        className="block3"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginInline: "150px",
          marginBottom: "100px",
        }}
      >
        <h1>
          Deatiled <span style={{ color: "green" }}>Report </span>{" "}
        </h1>

        <p>This is the detailed report of the Udyamsathi.</p>
        <div className="table1">
          <CustomTable
            heading={heading}
            columns={columns}
            data={data}
            style={{
              borderRadius: "20px",
              padding: "30px",
              backgroundColor: "#E0F1E5",
              width: "80vw",

              marginTop: "40px",
            }}
          />
        </div>
        <div
          className="matrices"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2vw",
            marginTop: "40px",
          }}
        >
          <div className="matrices1">
            <CustomTable
              heading={heading}
              columns={columns}
              data={data}
              style={{
                borderRadius: "20px",
                padding: "30px",
                backgroundColor: "#E0F1E5",
                width: "39vw",
              }}
            />
          </div>
          <div className="matrices2">
            <CustomTable
              heading={heading}
              columns={columns}
              data={data}
              style={{
                borderRadius: "20px",
                padding: "30px",
                backgroundColor: "#E0F1E5",
                width: "39vw",
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="block3"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginInline: "150px",
          marginBottom: "100px",
        }}
      >
        <div
          className="nos"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "55", color: "green" }}>05</h1>
          <p style={{ textAlign: "center", width: "80%" }}>
            Number of Enterprises Reached
          </p>
        </div>
        <div
          className="nos"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "55", color: "green" }}>05</h1>
          <p style={{ textAlign: "center", width: "80%" }}>
            Number of Enterprises Reached
          </p>
        </div>
        <div
          className="nos"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "55", color: "green" }}>05</h1>
          <p style={{ textAlign: "center", width: "80%" }}>
            Number of Enterprises Reached
          </p>
        </div>
        <div
          className="nos"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "55", color: "green" }}>05</h1>
          <p style={{ textAlign: "center", width: "80%" }}>
            Number of Enterprises Reached
          </p>
        </div>
        <div
          className="nos"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "55", color: "green" }}>05</h1>
          <p style={{ textAlign: "center", width: "80%" }}>
            Number of Enterprises Reached
          </p>
        </div>
      </div>
    </>
  );
}

export default UdyamDashboard;
