import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar1 from "components/Sidebar1";

import { useNavigate } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const EKYCSignaturePage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  const navigate = useNavigate();

  return (
    <>    
          <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-bluegray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                   Kimlik Doğrulama
                </Text>
                <Text
                  className="text-base text-bluegray-400 text-right w-auto"
                  size="txtInterRegular16"
                >
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[236px] py-12 rounded shadow-bs w-full">
                <div className="flex flex-col gap-[58px] items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                      size="txtInterBold24"
                    >
                      İmza
                    </Text>
                    <Text
                      className="text-bluegray-400 text-center text-sm w-full"
                      size="txtInterRegular14Bluegray400"
                    >
                      Bilgilerin doğru olmasına dikkat ediniz
                    </Text>
                  </div>
                  <div className="bg-gray-50 border-2 border-dashed border-indigo-50 flex flex-col items-end justify-start p-[31px] sm:px-5 rounded w-full">
                    <div className="flex flex-col gap-9 justify-start mt-[79px] w-[95%] md:w-full">
                      <Img
                        className="h-[236px] md:h-auto mr-[46px] object-cover w-[92%]"
                        src="images/img_signatureofka.png"
                        alt="signatureofka"
                      />
                      <div className="flex flex-row gap-6 items-center justify-end md:ml-[0] ml-[450px] w-[23%] md:w-full">
                        <Button className="bg-white-A700 flex items-center justify-center p-3.5 rounded-[26px] shadow-bs w-[53px]">
                          <Img src="images/img_edit.svg" alt="edit" />
                        </Button>
                        <Button className="bg-white-A700 flex items-center justify-center p-3.5 rounded-[26px] shadow-bs w-[53px]">
                          <Img
                            src="images/img_refresh_bluegray_900.svg"
                            alt="refresh"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[270px] py-[15px] rounded-[24px] text-center text-sm text-white-A700" onClick={() => navigate("/ekycsuccessful")}>
                    Süreci Tamamla
                  </Button>
                </div>
              </div>
            </div>
          </div>

    </>
  );
};

export default EKYCSignaturePage;
