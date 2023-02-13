import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Img, Text, Button } from "components";

const VideoFullScreenPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex flex-1 md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-between max-w-[1270px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <Line className="bg-white_A700_7e md:flex-1 sm:flex-1 h-[128px] md:h-[5px] sm:h-[5px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[5px]" />
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 sm:flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[647px] items-center justify-end p-[39px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[auto]"
            style={{ backgroundImage: "url('images/img_group1512.png')" }}
          >
            <div className="flex flex-col gap-[45px] items-start justify-start mt-[21px] md:w-[100%] sm:w-[100%] w-[97%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex sm:flex-1 flex-row gap-[10px] items-center justify-between sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_avatar.png"
                    className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                    alt="Avatar"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Edward Ford
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      5min ago
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-row items-center justify-between sm:w-[100%] w-[auto]">
                  <Button
                    className="flex items-center justify-center my-[4px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_favorite_2.svg"
                        className="mr-[6px] text-center"
                        alt="favorite"
                      />
                    }
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                      326
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center my-[4px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_laptop_14X14.svg"
                        className="mr-[6px] text-center"
                        alt="laptop"
                      />
                    }
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                      148
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center my-[4px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_reply_14X14.svg"
                        className="mr-[5px] text-center"
                        alt="reply"
                      />
                    }
                    shape="RoundedBorder4"
                    size="xl"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                      Share
                    </div>
                  </Button>
                  <Img
                    src="images/img_overflowmenu_38X38.svg"
                    className="h-[38px] w-[38px]"
                    alt="overflowmenu"
                  />
                </div>
              </div>
              <Text
                className="leading-[36.00px] text-left text-white_A700"
                as="h1"
                variant="h1"
              >
                Tropical Fresh Tourism Is Back In Full Swing
                <br />
                In Cancun Mexico
              </Text>
            </div>
            <div className="flex flex-col gap-[32px] items-center justify-start mb-[6px] w-[100%]">
              <div className="flex flex-col gap-[27px] items-center justify-start w-[100%]">
                <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between mt-[2px] w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    01:23
                  </Text>
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    05:46
                  </Text>
                </div>
                <div className="h-[8px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                  <div className="absolute bg-white_A700_33 bottom-[0] h-[8px] inset-x-[0] mx-[auto] rounded-radius395 w-[100%]"></div>
                  <div
                    className="absolute h-[8px] left-[0] overflow-hidden top-[0] w-[60%]"
                    name="Group1397"
                  >
                    <div className="w-full h-full absolute bg-white_A700_a2 rounded-[3.95px]"></div>
                    <div
                      className="h-full absolute bg-light_blue_200  rounded-[3.95px]"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex flex-row items-center justify-between w-[auto]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[30px] w-[30px]"
                    alt="trash"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="h-[30px] w-[30px]"
                    alt="volume"
                  />
                  <div
                    className="h-[8px] my-[11px] overflow-hidden relative w-[auto]"
                    name="Volume One"
                  >
                    <div className="w-full h-full absolute bg-white_A700_33 rounded-[3.95px]"></div>
                    <div
                      className="h-full absolute bg-white_A700  rounded-[4px]"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row gap-[31px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_settings_18X18.svg"
                    className="h-[30px] w-[30px]"
                    alt="settings Two"
                  />
                  <Img
                    src="images/img_minimize.svg"
                    className="h-[30px] w-[29px]"
                    alt="minimize"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoFullScreenPage;
