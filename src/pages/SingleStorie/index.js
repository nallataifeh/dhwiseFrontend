import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Input, Img, Button, Text } from "components";

const SingleStoriePage = () => {
  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex-1 h-[1024px] md:h-[1610px] sm:h-[1610px] md:px-[20px] sm:px-[20px] relative w-[100%]">
          <div className="h-[1024px] md:h-[1610px] sm:h-[1610px] m-[auto] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row gap-[10px] h-[100%] items-center justify-start m-[auto] pl-[5px] w-[100%]">
              <Line className="bg-white_A700_66 md:flex-1 sm:flex-1 h-[128px] md:h-[5px] sm:h-[5px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 md:w-[100%] sm:w-[100%] w-[5px]" />
              <div className="bg-gray_900 h-[1024px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[99%]"></div>
            </div>
            <div className="absolute bottom-[4%] flex flex-col md:gap-[40px] sm:gap-[40px] gap-[763px] items-center justify-start left-[15%] w-[43%]">
              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                <div className="bg-white_A700 h-[5px] rounded-radius2 w-[32%]"></div>
                <div className="bg-white_A700_66 h-[5px] rounded-radius2 w-[32%]"></div>
                <div className="bg-white_A700_66 h-[5px] rounded-radius2 w-[32%]"></div>
              </div>
              <div className="bg-gray_900_6c border-2 border-gray_500_6c border-solid flex sm:flex-col flex-row gap-[21px] items-center justify-between p-[9px] rounded-radius4 w-[100%]">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[7px] items-center justify-start sm:w-[100%] w-[auto]">
                  <Input
                    className="font-medium p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="sm:w-[100%] w-[95%]"
                    name="FrameSeven"
                    placeholder="Write a comment…"
                    size="md"
                    variant="FillGray900"
                  ></Input>
                  <Img
                    src="images/img_send_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="send"
                  />
                </div>
                <Img
                  src="images/img_iconemoji.svg"
                  className="h-[20px] mr-[6px] w-[20px]"
                  alt="IconEmoji"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-sfprodisplay gap-[40px] items-start justify-start left-[9%] top-[4%] w-[55%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[3px] md:w-[100%] sm:w-[100%] w-[89%]">
              <Button
                className="flex items-center justify-center text-center"
                leftIcon={
                  <Img
                    src="images/img_arrowleft.svg"
                    className="mr-[10px] text-center"
                    alt="arrow_left"
                  />
                }
                shape="RoundedBorder12"
                size="7xl"
                variant="FillWhiteA70033"
              >
                <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                  Back
                </div>
              </Button>
              <div className="flex flex-row font-inter gap-[10px] items-center justify-between w-[auto]">
                <Text
                  className="font-medium text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Sara Scholz
                </Text>
                <Img
                  src="images/img_avatar.png"
                  className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <Button
                className="flex h-[48px] items-center justify-center w-[48px]"
                shape="icbRoundedBorder12"
                size="lgIcn"
                variant="icbOutlineWhiteA70033"
              >
                <Img
                  src="images/img_arrowleft_48X48.svg"
                  className=""
                  alt="arrowleft"
                />
              </Button>
              <Img
                src="images/img_image_768X540.png"
                className="md:flex-1 sm:flex-1 h-[768px] sm:h-[auto] object-cover rounded-radius8 md:w-[100%] sm:w-[100%] w-[auto]"
                alt="Image"
              />
              <Button
                className="flex h-[48px] items-center justify-center w-[48px]"
                shape="icbRoundedBorder12"
                size="lgIcn"
                variant="icbOutlineWhiteA70033_1"
              >
                <Img
                  src="images/img_arrowright_48X48.svg"
                  className=""
                  alt="arrowright One"
                />
              </Button>
            </div>
          </div>
          <div className="absolute bg-white_A700 flex flex-col gap-[48px] h-[max-content] inset-y-[0] justify-start my-[auto] p-[40px] sm:px-[20px] right-[0] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[32%]">
            <div className="flex flex-row font-sfprodisplay gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] sm:w-[100%] w-[37%]">
              <Button
                className="cursor-pointer font-bold h-[48px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]"
                shape="RoundedBorder12"
                size="5xl"
                variant="FillLightblue200"
              >
                1
              </Button>
              <Img
                src="images/img_avatar_48X48.png"
                className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                alt="Avatar One"
              />
            </div>
            <Text
              className="font-inter mb-[820px] md:ml-[0] sm:ml-[0] ml-[5px] mr-[182px] text-gray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Next Stories
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStoriePage;
