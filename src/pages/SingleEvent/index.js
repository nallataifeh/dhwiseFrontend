import React from "react";

import { Row, Stack, Line, Column, Button, Img, Text, List } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const SingleEventPage = () => {
  return (
    <>
      <Row className="bg-gray_100 font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[89%]">
          <Row className="absolute items-center justify-between w-[100%]">
            <Line className="bg-white_A700_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[5px]" />
            <div className="bg-white_A700 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[99%]"></div>
          </Row>
          <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[7%] my-[auto] w-[50%]">
            <Button
              className="flex items-center justify-center text-center w-[16%]"
              leftIcon={
                <Img
                  src="images/img_arrowleft_18X18.svg"
                  className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[7px] xl:w-[16px] xl:h-[17px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[10px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[12px]"
                  alt="arrow_left"
                />
              }
              shape="RoundedBorder12"
              size="xl"
              variant="FillGray100"
            >
              <div className="bg-transparent font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                Back
              </div>
            </Button>
            <Column className="font-inter items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Row className="items-center justify-between w-[26%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Image_Eight"
                      alt="Avatar"
                    />
                    <Column className="w-[65%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Gunther Ackner
                      </Text>
                      <Text className="duration" as="h6" variant="h6">
                        3 days ago
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between w-[38%]">
                    <Row className="items-center justify-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[31%]">
                      <Img
                        src="images/img_reply.svg"
                        className="reply2"
                        alt="reply"
                      />
                      <Text className="Share1" as="h5" variant="h5">
                        Share
                      </Text>
                    </Row>
                    <Button
                      className="flex items-center justify-center text-center w-[41%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillGreen400"
                    >
                      <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        Interested
                      </div>
                    </Button>
                    <Img
                      src="images/img_eye.svg"
                      className="overflowmenu"
                      alt="eye"
                    />
                  </Row>
                </Row>
                <Img
                  src="images/img_image_13.png"
                  className="lg:h-[235px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius8 w-[100%]"
                  alt="Image"
                />
                <Text
                  className="lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] text-gray_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  2019 DUB Show at Los Angeles Auto Show
                </Text>
                <Row className="items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[66%]">
                  <Row className="items-center justify-between w-[47%]">
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="lgIcn"
                      variant="icbFillGray100"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="clock"
                      />
                    </Button>
                    <Column className="w-[70%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        12 December, 2019{" "}
                      </Text>
                      <Text className="december,Counter" as="h6" variant="h6">
                        From 9:00am to 6:00pm
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] w-[32%]">
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="lgIcn"
                      variant="icbFillGray100"
                    >
                      <Img
                        src="images/img_reply_48X48.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="reply One"
                      />
                    </Button>
                    <Column className="pr-[2px] py-[2px] w-[56%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $60 - $90
                      </Text>
                      <Text
                        className="mb-[1px] december,Counter_Two"
                        as="h6"
                        variant="h6"
                      >
                        +30% Taxes
                      </Text>
                    </Column>
                  </Row>
                </Row>
              </Column>
              <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pr-[4px] py-[4px] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                  Event Description
                </Text>
                <Text
                  className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic text-gray_500 w-[96%]"
                  as="h5"
                  variant="h5"
                >
                  For evidence of the double standard, we need look no farther
                  than Arlington, Oregon, where Mayor Carmen Kontur-Gronquist
                  was recalled in a 142-139 vote after the town’s denizens
                  discovered that the mayor’s MySpace page featured photos of
                  her in lingerie. Although Kontur-Gronquist is alleging
                  election fraud and challenging the returns, and even though
                  the mayoral position was unpaid, no one is arguing that her
                  MySpace page did her in.{" "}
                </Text>
                <Row className="items-center mb-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[60%]">
                  <Stack className="bg-gray_100_90 lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] rounded-radius4 w-[10%]">
                    <Text
                      className="absolute font-sfprodisplay h-[max-content] inset-y-[0] left-[18%] my-[auto] rowtime1"
                      as="h6"
                      variant="h6"
                    >
                      Car
                    </Text>
                    <Button
                      className="absolute font-inter font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray10090"
                    >
                      Car
                    </Button>
                  </Stack>
                  <Text
                    className="bg-gray_100_90 font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:pl-[4px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] pr-[4px] py-[3px] rounded-radius4 text-gray_500 w-[82px]"
                    as="h6"
                    variant="h6"
                  >
                    Los Angeles
                  </Text>
                  <Button
                    className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[19%]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Exhibition
                  </Button>
                  <Button
                    className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Auto
                  </Button>
                  <Button
                    className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[12%]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    DUB
                  </Button>
                  <Button
                    className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[13%]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Show
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
          <Row className="absolute items-center justify-between pl-[1px] right-[0] w-[35%]">
            <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-gray_900 items-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[97%]">
              <Row className="items-center justify-end ml-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[33%]">
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
              <Column className="font-inter items-center justify-start lg:mb-[19px] xl:mb-[24px] 2xl:mb-[28px] 3xl:mb-[33px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[96%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Address
                  </Text>
                  <Img
                    src="images/img_image_240X340.png"
                    className="lg:h-[171px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-radius8 w-[100%]"
                    alt="Image One"
                  />
                  <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Row className="items-center justify-between w-[51%]">
                      <Button
                        className="flex items-center justify-center mail_One1"
                        shape="icbRoundedBorder12"
                        size="lgIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_map.svg"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="map"
                        />
                      </Button>
                      <Column className="pr-[4px] py-[4px] w-[67%]">
                        <Text className="Username" as="h5" variant="h5">
                          Los Angeles, CA
                        </Text>
                        <Text className="mt-[3px] rowtime" as="h6" variant="h6">
                          189 The Grove Dr
                        </Text>
                      </Column>
                    </Row>
                    <Button
                      className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[24%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray50099"
                    >
                      Directions
                    </Button>
                  </Row>
                </Column>
                <Column className="justify-start lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Friends Interested
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listavatar_five">
                      <Img
                        src="images/img_avatar_8.png"
                        className="Avatar"
                        alt="Avatar Two"
                      />
                      <Text className="User" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="checkmark"
                        />
                      </Button>
                    </Row>
                    <Row className="listavatar_five">
                      <Img
                        src="images/img_avatar.png"
                        className="Avatar"
                        alt="Avatar Three"
                      />
                      <Text className="User" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="checkmark One"
                        />
                      </Button>
                    </Row>
                    <Row className="listavatar_five">
                      <Img
                        src="images/img_avatar_1.png"
                        className="Avatar"
                        alt="Avatar Four"
                      />
                      <Text className="User" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="checkmark Two"
                        />
                      </Button>
                    </Row>
                    <Row className="listavatar_five">
                      <Img
                        src="images/img_avatar_9.png"
                        className="Avatar"
                        alt="Avatar Five"
                      />
                      <Text className="User" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="checkmark Three"
                        />
                      </Button>
                    </Row>
                    <Row className="listavatar_five">
                      <Img
                        src="images/img_avatar_10.png"
                        className="Avatar"
                        alt="Avatar Six"
                      />
                      <Text className="User" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_send_20X20.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="send"
                        />
                      </Button>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Column>
          </Row>
        </Stack>
      </Row>
    </>
  );
};

export default SingleEventPage;
