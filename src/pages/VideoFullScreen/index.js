import React from "react";

import { Row, Line, Column, Img, Text, Button, Stack } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const VideoFullScreenPage = () => {
  return (
    <>
      <Row className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Row className="items-center justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[88%]">
          <Line className="bg-white_A700_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius25 w-[5px]" />
          <Column
            className="bg-cover bg-repeat items-center lg:p-[27px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[99%]"
            style={{ backgroundImage: "url('images/img_group1512.png')" }}
          >
            <Column className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[97%]">
              <Row className="items-center justify-between w-[100%]">
                <Row className="items-center justify-between w-[12%]">
                  <Img
                    src="images/img_avatar.png"
                    className="Image_Eight"
                    alt="Avatar"
                  />
                  <Column className="w-[57%]">
                    <Text
                      className="font-medium text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Edward Ford
                    </Text>
                    <Text
                      className="lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rowtime1"
                      as="h6"
                      variant="h6"
                    >
                      5min ago
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center justify-between w-[26%]">
                  <Button
                    className="flex items-center justify-center text-center w-[22%]"
                    leftIcon={
                      <Img
                        src="images/img_favorite_2.svg"
                        className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[4px] xl:w-[12px] xl:h-[13px] xl:mr-[5px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[6px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[7px]"
                        alt="favorite"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      326
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center w-[22%]"
                    leftIcon={
                      <Img
                        src="images/img_laptop_14X14.svg"
                        className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[4px] xl:w-[12px] xl:h-[13px] xl:mr-[5px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[6px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[7px]"
                        alt="laptop"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      148
                    </div>
                  </Button>
                  <Button
                    className="flex items-center justify-center text-center w-[26%]"
                    leftIcon={
                      <Img
                        src="images/img_reply_14X14.svg"
                        className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[3px] xl:w-[12px] xl:h-[13px] xl:mr-[4px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[5px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[6px]"
                        alt="reply"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillWhiteA70033"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Share
                    </div>
                  </Button>
                  <Img
                    src="images/img_overflowmenu_38X38.svg"
                    className="overflowmenu"
                    alt="overflowmenu"
                  />
                </Row>
              </Row>
              <Text
                className="lg:leading-[25px] xl:leading-[32px] 2xl:leading-[36px] 3xl:leading-[43px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] text-white_A700 w-[56%]"
                as="h1"
                variant="h1"
              >
                Tropical Fresh Tourism Is Back In Full Swing
                <br />
                In Cancun Mexico
              </Text>
            </Column>
            <Column className="items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[459px] xl:mt-[574px] 2xl:mt-[646px] 3xl:mt-[775px] p-[1px] w-[100%]">
              <Column className="items-center justify-start mt-[1px] pr-[1px] py-[1px] w-[100%]">
                <Row className="items-center justify-between mt-[2px] w-[100%]">
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    01:23
                  </Text>
                  <Text
                    className="font-medium text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    05:46
                  </Text>
                </Row>
                <Stack className="3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mb-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                  <div className="absolute bg-white_A700_33 bottom-[0] 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius395 w-[100%]"></div>
                  <div
                    className="absolute 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] left-[0] overflow-hidden top-[0] w-[60%]"
                    name="Group1397"
                  >
                    <div className="w-full h-full absolute bg-white_A700_a2 rounded-[3.95px]"></div>
                    <div
                      className="h-full absolute bg-light_blue_200  rounded-[3.95px]"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </Stack>
              </Column>
              <Row className="items-center justify-between mb-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Row className="items-center justify-between p-[1px] w-[15%]">
                  <Img
                    src="images/img_trash.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] ml-[1px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                    alt="trash"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] mt-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                    alt="volume"
                  />
                  <div
                    className="3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] mr-[1px] overflow-hidden relative w-[33%]"
                    name="Volume One"
                  >
                    <div className="w-full h-full absolute bg-white_A700_33 rounded-[3.95px]"></div>
                    <div
                      className="h-full absolute bg-white_A700  rounded-[4px]"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                </Row>
                <Row className="items-center justify-between pl-[1px] py-[1px] w-[8%]">
                  <Img
                    src="images/img_settings_18X18.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] my-[1px] lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                    alt="settings Two"
                  />
                  <Img
                    src="images/img_minimize.svg"
                    className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] my-[1px] w-[32%]"
                    alt="minimize"
                  />
                </Row>
              </Row>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default VideoFullScreenPage;
