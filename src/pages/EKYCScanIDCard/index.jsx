import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar1 from "components/Sidebar1";

import { useNavigate } from "react-router-dom";

import { CloseSVG } from "../../assets/images";

const selectTypeOfCardOptionsList = [
  { label: "TC Kimlik Kartı", value: "tckimlik" },
  { label: "Sürücü Belgesi", value: "surucubelgesi" },
  { label: "Pasaport", value: "pasaport" },
];

const EKYCScanIDCardPage = () => {
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
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-center w-full">
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
                        className="bg-white-A700 border border-indigo-50 border-solid font-medium pb-4 pt-[19px] px-5 rounded text-base text-bluegray-800 text-left w-full"
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
                        options={selectTypeOfCardOptionsList}
                        isSearchable={false}
                        placeholder="Kimlik türünü seçiniz"
                      />
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[23px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                      orientation="horizontal"
                    >
                      <div className="border-2 border-indigo-50 border-solid flex flex-1 flex-col h-[359px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[193px] py-[108px] rounded w-full">
                        <div className="flex flex-col gap-[52px] items-center justify-start w-auto">
                          <Text
                            className="text-base text-bluegray-800 text-center w-full"
                            size="txtInterSemiBold16"
                          >
                            Ön Yüz
                          </Text>
                          <div className="flex flex-col gap-6 items-center justify-start w-auto">
                            <Button className="bg-red-52 flex h-14 items-center justify-center p-[18px] rounded-[50%] w-14">
                              <Img
                                className="h-5"
                                src="images/img_plus_deep_orange_300.svg"
                                alt="plus"
                              />
                            </Button>
                            <Text
                              className="leading-[22.00px] max-w-[146px] md:max-w-full text-bluegray-400 text-center text-sm"
                              size="txtInterRegular14Bluegray400"
                            >
                              Resim yüklemek için tıklayınız
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-indigo-50 border-solid flex flex-1 flex-col h-[359px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[193px] py-[108px] rounded w-full">
                        <div className="flex flex-col gap-[52px] items-center justify-start w-auto">
                          <Text
                            className="text-base text-bluegray-800 text-center w-full"
                            size="txtInterSemiBold16"
                          >
                            Arka Yüz
                          </Text>
                          <div className="flex flex-col gap-6 items-center justify-start w-auto">
                            <Button className="bg-red-52 flex h-14 items-center justify-center p-[18px] rounded-[50%] w-14">
                              <Img
                                className="h-5"
                                src="images/img_plus_deep_orange_300.svg"
                                alt="plus"
                              />
                            </Button>
                            <Text
                              className="leading-[22.00px] max-w-[146px] md:max-w-full text-bluegray-400 text-center text-sm"
                              size="txtInterRegular14Bluegray400"
                            >
                              Resim yüklemek için tıklayınız
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[270px] py-[15px] rounded-[24px] text-center text-sm text-white-A700" onClick={() => navigate("/ekycscanidcardaddimage")}>
                    İlerle
                  </Button>
                </div> 
              </div>
            </div>
          </div>

    </>
  );
};

export default EKYCScanIDCardPage;
