import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const EKYCSuccessfulPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

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
              <div className="bg-white-A700 flex flex-col h-[796px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[236px] py-12 rounded shadow-bs w-full">
                <div className="flex flex-col gap-[58px] items-center justify-center w-full">
                  <Img
                    className="h-[342px] w-[342px]"
                    src="images/img_thumbsup1.svg"
                    alt="thumbsupOne"
                  />
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                      size="txtInterBold24"
                    >
                      Doğrulama adımlarını tamamladınız.
                    </Text>
                    <Text
                      className="text-bluegray-900 text-center text-sm w-full"
                      size="txtInterRegular14"
                    >
                      Değerlendirme süreçlerinden sonra size bilgi verilecektir.
                    </Text>
                  </div>
                  <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[270px] py-[15px] rounded-[24px] text-center text-sm text-white-A700">
                    Süreci Tamamla
                  </Button>
                </div>
              </div>
            </div>
          </div>

    </>
  );
};

export default EKYCSuccessfulPage;
