import { useNavigate } from "react-router-dom";
import MenuTabs from "../components/Menu-tabs";
import { TRAINING } from "../constants/menu";
import { useState } from "react";

export default function Training() {
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const navigateToTraining = () => {
    if (selectedValue === "") {
      return;
    }
    if (selectedValue === "Social Engineering") {
      navigate("/social-engineering");
    } else if (selectedValue === "Phishing") {
      navigate("/phishing");
    } else if (selectedValue === "Encryption") {
      navigate("/encryption");
    } else if (selectedValue === "Virtual Private Network") {
      navigate("/vpn");
    } else if (selectedValue === "Two-Factor Authentication") {
      navigate("/tfa");
    } else {
      navigate("/malware");
    }
  };

  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div>
            <p
              onClick={() => navigate("/menu")}
              className="absolute top-[25px] left-[55px] text-[#0056D2] cursor-pointer"
            >
              {" "}
              {`<<< Go Back`}
            </p>
          </div>
          <div className="shadow-[1px_1px_7px_1px_rgba(218,218,218,1)] my-[60px]">
            <div className="flex flex-col items-center justify-center py-[60px] gap-[40px]">
              {TRAINING.map((menu) => {
                return (
                  <MenuTabs
                    key={menu.title}
                    title={menu.title}
                    module={menu.module}
                    clickFunction={handleButtonClick}
                    selectedValue={selectedValue}
                  />
                );
              })}
            </div>
            <div className="flex justify-center pb-[40px]">
              <div className="w-[80%] flex justify-end">
                <button
                  className={`text-white w-max py-[19px] px-[48px] rounded-[16px] ${
                    selectedValue === ""
                      ? "cursor-not-allowed bg-gray-300"
                      : "bg-[#0056D2]"
                  }`}
                  onClick={navigateToTraining}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
