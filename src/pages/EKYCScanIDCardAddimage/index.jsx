import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar1 from "components/Sidebar1";

import { useNavigate } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const idCardOptionsList = [
  { label: "TC Kimlik Kartı", value: "tckimlik" },
  { label: "Sürücü Belgesi", value: "surucubelgesi" },
  { label: "Pasaport", value: "pasaport" },
];

const EKYCScanIDCardAddimagePage = () => {
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
              <div className="bg-white-A700 flex flex-col items-center justify-center sm:px-5 px-8 py-12 rounded shadow-bs w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <div className="flex flex-col gap-10 items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                          size="txtInterBold24"
                        >
                          Kimlik fotoğrafınızı yükleyin
                        </Text>
                        <Text
                          className="text-bluegray-400 text-center text-sm w-full"
                          size="txtInterRegular14Bluegray400"
                        >
                          Yüklediğiniz resim dosyasının net ve bulanık olmamasına dikkat edin.
                        </Text>
                      </div>
                      <SelectBox
                        className="bg-white-A700 border border-indigo-50 border-solid font-medium px-5 py-[17px] rounded text-base text-bluegray-800 text-left w-full"
                        placeholderClassName="text-bluegray-800"
                        indicator={
                          <Img
                            className="h-1.5 w-[11px]"
                            src="images/img_arrowdown_bluegray_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group_One"
                        options={idCardOptionsList}
                        isSearchable={false}
                        placeholder="ID Card"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start w-full">
                      <div className="border-2 border-indigo-50 border-solid flex flex-1 flex-col h-[359px] md:h-auto items-center justify-center p-8 sm:px-5 rounded w-full">
                        <Img
                          className="h-[291px] md:h-auto object-cover rounded-[16px] w-full"
                          src="images/img_image5.png"
                          alt="imageFive"
                        />
                      </div>
                      <div className="border-2 border-indigo-50 border-solid flex flex-1 flex-col h-[359px] md:h-auto items-center justify-center p-8 sm:px-5 rounded w-full">
                        <Img
                          className="h-[291px] md:h-auto object-cover rounded-[16px] w-full"
                          src="images/img_image5.png"
                          alt="imageSix"
                        />
                      </div>
                    </div>
                  </div>
                  <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[270px] py-[15px] rounded-[24px] text-center text-sm text-white-A700" onClick={() => navigate("/ekycintroductionsteptwo")}>
                    İlerle
                  </Button>
                </div>
              </div>
            </div>
          </div>

    </>
  );
};

export default EKYCScanIDCardAddimagePage;
