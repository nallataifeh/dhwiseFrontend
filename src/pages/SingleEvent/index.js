import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Button, Img, Text, List } from "components";

const SingleEventPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-sfprodisplay md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex-1 h-[1024px] md:h-[1610px] sm:h-[1610px] md:px-[20px] sm:px-[20px] relative w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[10px] h-[100%] items-center justify-between m-[auto] w-[100%]">
            <Line className="bg-white_A700_7e md:flex-1 sm:flex-1 h-[128px] md:h-[5px] sm:h-[5px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 md:w-[100%] sm:w-[100%] w-[5px]" />
            <div className="bg-white_A700 h-[1024px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[auto]"></div>
          </div>
          <div className="absolute flex flex-col gap-[40px] h-[max-content] inset-y-[0] items-start justify-start left-[7%] my-[auto] w-[50%]">
            <Button
              className="flex items-center justify-center text-center"
              leftIcon={
                <Img
                  src="images/img_arrowleft_18X18.svg"
                  className="mr-[10px] text-center"
                  alt="arrow_left"
                />
              }
              shape="RoundedBorder12"
              size="7xl"
              variant="FillGray100"
            >
              <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_500 text-left">
                Back
              </div>
            </Button>
            <div className="flex flex-col font-inter gap-[40px] items-center justify-start w-[100%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 flex-row gap-[10px] items-center justify-between sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                      alt="Avatar"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Gunther Ackner
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3 days ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-end p-[6px] w-[auto]">
                      <Img
                        src="images/img_reply.svg"
                        className="h-[14px] w-[14px]"
                        alt="reply"
                      />
                      <Text
                        className="font-medium ml-[4px] text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Share
                      </Text>
                    </div>
                    <Button
                      className="flex items-center justify-center my-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[3px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="2xl"
                      variant="FillGreen400"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                        Interested
                      </div>
                    </Button>
                    <Img
                      src="images/img_eye.svg"
                      className="h-[38px] w-[38px]"
                      alt="eye"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_image_13.png"
                  className="h-[330px] sm:h-[auto] mt-[40px] object-cover rounded-radius8 w-[100%]"
                  alt="Image"
                />
                <Text
                  className="mt-[46px] text-gray_900 text-left w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  2019 DUB Show at Los Angeles Auto Show
                </Text>
                <div className="flex flex-row gap-[90px] items-center justify-start mt-[29px] md:w-[100%] sm:w-[100%] w-[66%]">
                  <div className="flex flex-row gap-[10px] items-center justify-between w-[47%]">
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="lgIcn"
                      variant="icbFillGray100"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="h-[18px]"
                        alt="clock"
                      />
                    </Button>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        12 December, 2019{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        From 9:00am to 6:00pm
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[10px] items-center justify-between w-[32%]">
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="lgIcn"
                      variant="icbFillGray100"
                    >
                      <Img
                        src="images/img_reply_48X48.svg"
                        className="h-[18px]"
                        alt="reply One"
                      />
                    </Button>
                    <div className="flex flex-col gap-[6px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        $60 - $90
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        +30% Taxes
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pr-[4px] py-[4px] w-[100%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Event Description
                </Text>
                <Text
                  className="font-normal leading-[22.00px] mt-[25px] not-italic text-gray_500 text-left sm:w-[100%] w-[97%]"
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
                <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start mb-[3px] mt-[32px] md:w-[100%] sm:w-[100%] w-[60%]">
                  <div className="bg-gray_100_90 h-[20px] md:h-[auto] sm:h-[auto] relative rounded-radius4 sm:w-[100%] w-[11%]">
                    <Text
                      className="font-normal font-sfprodisplay ml-[7px] my-[auto] not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Car
                    </Text>
                    <Button
                      className="absolute cursor-pointer font-inter font-normal h-[max-content] inset-[0] justify-center m-[auto] min-w-[38px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray10090"
                    >
                      Car
                    </Button>
                  </div>
                  <Text
                    className="bg-gray_100_90 font-normal h-[20px] justify-center not-italic pl-[7px] pr-[4px] py-[3px] rounded-radius4 text-gray_500 text-left w-[82px]"
                    as="h6"
                    variant="h6"
                  >
                    Los Angeles
                  </Text>
                  <Button
                    className="cursor-pointer font-normal min-w-[70px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Exhibition
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[44px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Auto
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[44px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    DUB
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[49px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                    shape="RoundedBorder4"
                    size="sm"
                    variant="FillGray10090"
                  >
                    Show
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row gap-[10px] h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[0] w-[36%]">
            <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
            <div className="bg-gray_900 flex flex-col gap-[49px] items-end justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] sm:w-[100%] w-[33%]">
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
              <div className="flex flex-col font-inter md:gap-[40px] sm:gap-[40px] gap-[64px] items-center justify-start mb-[28px] md:w-[100%] sm:w-[100%] w-[97%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Address
                  </Text>
                  <Img
                    src="images/img_image_240X340.png"
                    className="h-[240px] sm:h-[auto] mt-[33px] object-cover rounded-radius8 w-[100%]"
                    alt="Image One"
                  />
                  <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                      <Button
                        className="flex h-[48px] items-center justify-center w-[48px]"
                        shape="icbRoundedBorder12"
                        size="lgIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_map.svg"
                          className="h-[18px]"
                          alt="map"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-end pr-[4px] py-[4px] w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Los Angeles, CA
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          189 The Grove Dr
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium min-w-[82px] text-[14px] text-center text-white_A700 w-[auto]"
                      shape="RoundedBorder4"
                      size="3xl"
                      variant="OutlineGray50099"
                    >
                      Directions
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[44px] items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Friends Interested
                  </Text>
                  <List
                    className="flex-col gap-[30px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Img
                        src="images/img_avatar_8.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Two"
                      />
                      <Text
                        className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[160px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Img
                        src="images/img_avatar.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Three"
                      />
                      <Text
                        className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[160px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Img
                        src="images/img_avatar_1.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Four"
                      />
                      <Text
                        className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[160px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Img
                        src="images/img_avatar_9.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Five"
                      />
                      <Text
                        className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[160px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark Three"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Img
                        src="images/img_avatar_10.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Six"
                      />
                      <Text
                        className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[160px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillGreen400"
                      >
                        <Img
                          src="images/img_send_20X20.svg"
                          className="h-[14px]"
                          alt="send"
                        />
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEventPage;
