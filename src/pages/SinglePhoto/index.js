import React from "react";

import { Line, Button, Img, Text, Input } from "components";
import Sidebar from "components/Sidebar";

const SinglePhotoPage = () => {
  return (
    <>
      <div className="bg-blue_A700 font-sfprodisplay h-[1024px] mx-[auto] relative w-[100%]">
        <div className="absolute flex md:flex-col sm:flex-col flex-row gap-[10px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] pl-[5px] md:px-[20px] sm:px-[20px] right-[0] w-[89%]">
          <Line className="bg-gray_500_7e h-[128px] md:h-[5px] sm:h-[5px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 md:w-[100%] sm:w-[100%] w-[5px]" />
          <div className="bg-gray_900 h-[1024px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[99%]"></div>
        </div>
        <div className="absolute flex flex-col gap-[144px] md:gap-[40px] sm:gap-[40px] items-center justify-start left-[17%] md:px-[20px] sm:px-[20px] top-[4%] w-[49%]">
          <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] sm:w-[100%] w-[96%]">
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
                Edward Ford
              </Text>
              <Img
                src="images/img_avatar.png"
                className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
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
              src="images/img_photo4.png"
              className="md:flex-1 sm:flex-1 h-[540px] sm:h-[auto] object-cover rounded-radius8 md:w-[100%] sm:w-[100%] w-[auto]"
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
                alt="arrowright"
              />
            </Button>
          </div>
        </div>
        <div className="absolute flex sm:flex-col flex-row gap-[10px] h-[max-content] inset-y-[0] items-center justify-between my-[auto] md:px-[20px] sm:px-[20px] right-[0] w-[32%]">
          <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
          <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[843px] items-end justify-end p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[auto]">
            <div className="flex flex-row gap-[20px] items-center justify-end mt-[5px] md:w-[100%] sm:w-[100%] w-[33%]">
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
            <div className="bg-gray_100 flex flex-row font-inter gap-[10px] items-center justify-start p-[5px] rounded-radius4 md:w-[100%] sm:w-[100%] w-[96%]">
              <Input
                className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="flex sm:w-[100%] w-[87%]"
                name="FrameEight"
                placeholder="Write a comment…"
                suffix={
                  <Img
                    src="images/img_user_1.svg"
                    className="ml-[35px] my-[auto]"
                    alt="user"
                  />
                }
                size="lg"
                variant="FillGray100"
              ></Input>
              <Img
                src="images/img_send.svg"
                className="h-[14px] w-[14px]"
                alt="send"
              />
            </div>
          </div>
        </div>
        <Sidebar className="absolute flex flex-col md:hidden sm:hidden inset-y-[0] left-[0] my-[auto] md:px-[20px] sm:px-[20px] w-[12%]" />
      </div>
    </>
  );
};

export default SinglePhotoPage;
