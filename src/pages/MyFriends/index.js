import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MyFriendsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[65px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[13px] items-center justify-start p-[12px] rounded-radius12 w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
              wrapClassName="flex md:w-[100%] sm:w-[100%] w-[89%]"
              name="FrameOne"
              placeholder="Search in social…"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer mr-[15px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#8f92a1"
                    className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="smSrc"
              variant="srcFillWhiteA700"
            ></Input>
            <Text
              className="font-bold text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              Filters
            </Text>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start pt-[3px] w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-start justify-between pr-[2px] pt-[2px] w-[100%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h1"
                variant="h1"
              >
                My Friends
              </Text>
              <div className="flex flex-row items-center justify-center mr-[6px] mt-[4px] w-[auto]">
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Filter
                </Text>
                <Img
                  src="images/img_filter.svg"
                  className="h-[14px] ml-[3px] w-[14px]"
                  alt="filter"
                />
              </div>
            </div>
            <div className="md:gap-[20px] sm:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_13.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar One"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_22.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar Two"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_38X38.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar Three"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_10.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar Four"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_3.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar Five"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_58X58.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar Six"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_4.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar Seven"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[14px] items-center justify-end p-[37px] sm:px-[20px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_23.png"
                  className="h-[58px] md:h-[auto] sm:h-[auto] mt-[3px] object-cover rounded-radius18 w-[58px]"
                  alt="Avatar Eight"
                />
                <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Billy Green
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    @BillyGreen
                  </Text>
                  <Button
                    className="flex items-center justify-center mt-[16px] text-center"
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
                      Freinds
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 sm:flex-col flex-row font-sfprodisplay gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[30px] pl-[5px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[2%]"></div>
          <div className="bg-gray_900 flex sm:flex-1 flex-col gap-[49px] justify-end p-[30px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <div className="flex flex-row gap-[20px] items-center justify-end md:ml-[0] sm:ml-[0] ml-[214px] mr-[10px] mt-[15px] md:w-[100%] sm:w-[100%] w-[35%]">
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
                alt="Avatar Nine"
              />
            </div>
            <div className="flex flex-col font-inter gap-[43px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[15px] mr-[20px] md:w-[100%] sm:w-[100%] w-[90%]">
              <Text
                className="text-left text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                Who to Follow
              </Text>
              <List
                className="flex-col gap-[30px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Ten"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_38X38.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Eleven"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera One"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_1.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Twelve"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Two"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_2.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Thirteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Three"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_4.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Fourteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Four"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_15.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Fifteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Five"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_24.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Sixteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Six"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_25.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Seventeen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Seven"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_23.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Eighteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Eight"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_22.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Nineteen"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Nine"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_26.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Twenty"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Ten"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_10.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar TwentyOne"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button
                    className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_camera_2.svg"
                      className="h-[14px]"
                      alt="camera Eleven"
                    />
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFriendsPage;
