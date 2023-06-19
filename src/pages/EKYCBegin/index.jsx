import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const EKYCBeginPage = () => {
  const navigate = useNavigate();

  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>

      <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <Text
              className="text-bluegray-900 text-xl w-auto"
              size="txtPoppinsMedium20"
            >
              Kimlik Doğrulama
            </Text>

          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[405px] py-[124px] rounded shadow-bs w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-auto">
              <Img
                className="h-56 w-56"
                src="images/img_paywithcreditcard.svg"
                alt="paywithcreditca"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-auto">
                <div className="flex flex-col gap-3 items-center justify-start w-auto">
                  <Text
                    className="text-bluegray-900 text-center text-lg w-full"
                    size="txtInterBold18"
                  >
                    Kimlik doğrulama
                  </Text>
                  <Text
                    className="leading-[22.00px] max-w-[264px] md:max-w-full text-bluegray-900 text-center text-sm"
                    size="txtInterRegular14"
                  >
                    Kimlik bilgilerinizin doğrulanması aşamalarına geçiniz.
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-deep_orange-300 cursor-pointer flex-row font-bold grid items-center py-[15px] rounded-[24px] text-center text-sm text-white-A700 w-full"
                  onClick={() => navigate("/ekycintroductionstepone")}
                >
                  Şimdi Doğrula
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default EKYCBeginPage;
