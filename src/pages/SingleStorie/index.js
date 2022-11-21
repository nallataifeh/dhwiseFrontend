import React from "react";

import { Row, Stack, Line, Column, Input, Img, Button, Text } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const SingleStoriePage = () => {
  return (
    <>
      <Row className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] ml-[1px] w-[88%]">
          <Stack className="absolute 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[100%]">
            <Row className="absolute items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] w-[100%]">
              <Line className="bg-white_A700_66 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[5px]" />
              <div className="bg-gray_900 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[99%]"></div>
            </Row>
            <Column className="absolute bottom-[4%] items-center justify-start left-[15%] w-[42%]">
              <Row className="items-center w-[89%]">
                <div className="bg-white_A700 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius2 w-[31%]"></div>
                <div className="bg-white_A700_66 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] rounded-radius2 w-[31%]"></div>
                <div className="bg-white_A700_66 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] rounded-radius2 w-[31%]"></div>
              </Row>
              <Row className="bg-gray_900_6c border-2 border-gray_500_6c border-solid items-center justify-between lg:mt-[542px] xl:mt-[678px] 2xl:mt-[763px] 3xl:mt-[916px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[100%]">
                <Row className="items-center w-[91%]">
                  <Input
                    className="font-medium p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    wrapClassName="w-[94%]"
                    name="FrameSeven"
                    placeholder="Write a comment…"
                    size="sm"
                    variant="FillGray900"
                  ></Input>
                  <Img
                    src="images/img_send_20X20.svg"
                    className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    alt="send"
                  />
                </Row>
                <Img
                  src="images/img_iconemoji.svg"
                  className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="IconEmoji"
                />
              </Row>
            </Column>
          </Stack>
          <Column className="absolute font-sfprodisplay justify-start left-[9%] top-[4%] w-[55%]">
            <Row className="items-center ml-[3px] w-[88%]">
              <Button
                className="flex items-center justify-center text-center w-[17%]"
                leftIcon={
                  <Img
                    src="images/img_arrowleft.svg"
                    className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[7px] xl:w-[16px] xl:h-[17px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[10px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[12px]"
                    alt="arrow_left"
                  />
                }
                shape="RoundedBorder12"
                size="xl"
                variant="FillWhiteA70033"
              >
                <div className="bg-transparent font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                  Back
                </div>
              </Button>
              <Row className="font-inter items-center justify-between lg:ml-[273px] xl:ml-[342px] 2xl:ml-[385px] 3xl:ml-[462px] w-[21%]">
                <Text
                  className="font-medium text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Sara Scholz
                </Text>
                <Img
                  src="images/img_avatar.png"
                  className="Avatar"
                  alt="Avatar"
                />
              </Row>
            </Row>
            <Row className="items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
              <Button
                className="flex items-center justify-center mail_One1"
                shape="icbRoundedBorder12"
                size="lgIcn"
                variant="icbOutlineWhiteA70033"
              >
                <Img
                  src="images/img_arrowleft_48X48.svg"
                  className="flex items-center justify-center"
                  alt="arrowleft"
                />
              </Button>
              <Img
                src="images/img_image_768X540.png"
                className="lg:h-[547px] xl:h-[684px] 2xl:h-[769px] 3xl:h-[923px] rounded-radius8 w-[78%]"
                alt="Image"
              />
              <Button
                className="flex items-center justify-center mail_One1"
                shape="icbRoundedBorder12"
                size="lgIcn"
                variant="icbOutlineWhiteA70033_1"
              >
                <Img
                  src="images/img_arrowright_48X48.svg"
                  className="flex items-center justify-center"
                  alt="arrowright One"
                />
              </Button>
            </Row>
          </Column>
          <Column className="absolute bg-white_A700 justify-start lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] right-[0] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[31%]">
            <Row className="font-sfprodisplay items-center justify-end ml-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[36%]">
              <Button
                className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center mail_One1"
                shape="RoundedBorder12"
                size="lg"
                variant="FillLightblue200"
              >
                1
              </Button>
              <Img
                src="images/img_avatar_48X48.png"
                className="Avatar_One"
                alt="Avatar One"
              />
            </Row>
            <Text
              className="font-inter lg:mb-[583px] xl:mb-[729px] 2xl:mb-[820px] 3xl:mb-[984px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[129px] xl:mr-[161px] 2xl:mr-[182px] 3xl:mr-[218px] lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-gray_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Next Stories
            </Text>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default SingleStoriePage;
