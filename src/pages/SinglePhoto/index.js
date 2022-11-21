import React from "react";

import { Stack, Row, Line, Column, Button, Img, Text, Input } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const SinglePhotoPage = () => {
  return (
    <>
      <Stack className="bg-blue_A700 font-sfprodisplay 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] mx-[auto] w-[100%]">
        <Row className="absolute items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] right-[0] w-[89%]">
          <Line className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[5px]" />
          <div className="bg-gray_900 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[99%]"></div>
        </Row>
        <Column className="absolute items-center justify-start left-[17%] top-[4%] w-[48%]">
          <Row className="items-center justify-between w-[96%]">
            <Button
              className="flex items-center justify-center text-center w-[15%]"
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
            <Row className="font-inter items-center justify-between w-[19%]">
              <Text
                className="font-medium text-white_A700 w-[auto]"
                as="h5"
                variant="h5"
              >
                Edward Ford
              </Text>
              <Img
                src="images/img_avatar.png"
                className="Avatar"
                alt="Avatar"
              />
            </Row>
          </Row>
          <Row className="items-center justify-between lg:mt-[102px] xl:mt-[128px] 2xl:mt-[144px] 3xl:mt-[172px] w-[100%]">
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
              src="images/img_photo4.png"
              className="lg:h-[384px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] rounded-radius8 w-[73%]"
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
                alt="arrowright"
              />
            </Button>
          </Row>
        </Column>
        <Row className="absolute items-center justify-between right-[0] w-[31%]">
          <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-white_A700 items-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[97%]">
            <Row className="items-center justify-end lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[33%]">
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
            <Row className="bg-gray_100 font-inter items-center 3xl:mt-[1012px] lg:mt-[599px] xl:mt-[749px] 2xl:mt-[843px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[96%]">
              <Input
                className="placeholder:text-gray_500 email"
                wrapClassName="flex w-[86%]"
                name="FrameEight"
                placeholder="Write a comment…"
                suffix={
                  <Img
                    src="images/img_user_1.svg"
                    className="lg:w-[9px] lg:h-[10px] lg:ml-[24px] lg:mr-[3px] xl:w-[12px] xl:h-[13px] xl:ml-[31px] xl:mr-[4px] 2xl:w-[14px] 2xl:h-[15px] 2xl:ml-[35px] 2xl:mr-[5px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[42px] 3xl:mr-[6px] my-[auto]"
                    alt="user"
                  />
                }
                size="md"
                variant="FillGray100"
              ></Input>
              <Img
                src="images/img_send.svg"
                className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] location"
                alt="send"
              />
            </Row>
          </Column>
        </Row>
        <Sidebar className="absolute left-[0] w-[11%]" />
      </Stack>
    </>
  );
};

export default SinglePhotoPage;
