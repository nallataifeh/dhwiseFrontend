import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Text, Line, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const EventsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[40px] sm:gap-[40px] gap-[65px] items-start mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex flex-1 flex-col items-start justify-end md:mt-[0] sm:mt-[0] mt-[40px] pb-[30px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[13px] items-center justify-start p-[12px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[97%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
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
          <Text
            className="mt-[63px] text-gray_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Events
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mr-[auto] mt-[42px] py-[2px] md:w-[100%] sm:w-[100%] w-[62%]">
            <div className="flex flex-col gap-[6px] items-start justify-start sm:mt-[0] mt-[2px] sm:w-[100%] w-[18%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Anytime
              </Text>
              <Line className="bg-gray_900 h-[2px] md:ml-[0] sm:ml-[0] ml-[4px] w-[61%]" />
            </div>
            <Text
              className="font-bold sm:mt-[0] mt-[2px] text-gray_500 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Today
            </Text>
            <Text
              className="font-bold sm:ml-[0] ml-[26px] text-gray_500 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Tomorrow
            </Text>
            <Text
              className="font-bold sm:ml-[0] ml-[22px] text-gray_500 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              This Week
            </Text>
            <Text
              className="font-bold sm:ml-[0] ml-[22px] text-gray_500 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              This Month
            </Text>
            <Text
              className="font-bold sm:ml-[0] ml-[22px] text-gray_500 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Select
            </Text>
          </div>
          <div className="md:gap-[20px] sm:gap-[20px] gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[40px] w-[100%]">
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center p-[29px] sm:px-[20px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_180X320.png"
                className="h-[180px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                alt="Image"
              />
              <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                  <Button
                    className="cursor-pointer font-bold h-[48px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder15"
                    size="5xl"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      December, 2019
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="h-[38px] w-[38px]"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-[20px] pr-[6px] pt-[6px] md:w-[100%] sm:w-[100%] w-[101%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Fashion Meetup
                </Text>
                <Text
                  className="font-medium text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Starts at 9:00am in Los Angeles
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center"
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
                <div className="flex font-sfprodisplay h-[28px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                  <div className="flex h-[28px] md:h-[auto] sm:h-[auto] my-[auto] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[28px] my-[auto] object-cover rounded-radius8 w-[28px]"
                      alt="Avatar"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-radius8 w-[28px] z-[1]"
                      alt="Avatar One"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[28px] ml-[-5px] my-[auto] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]"
                    shape="RoundedBorder8"
                    size="4xl"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col items-start justify-center p-[29px] sm:px-[20px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_13.png"
                className="h-[180px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                alt="Image One"
              />
              <div className="flex flex-row font-inter items-start justify-between mt-[20px] pb-[3px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                  <Button
                    className="cursor-pointer font-bold h-[48px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder15"
                    size="5xl"
                    variant="OutlineGray5006c"
                  >
                    10
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Wednesday
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      December, 2019
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="h-[38px] mt-[5px] w-[38px]"
                  alt="overflowmenu One"
                />
              </div>
              <Text
                className="font-inter leading-[30.00px] mt-[27px] text-gray_900 text-left sm:w-[100%] w-[75%]"
                as="h3"
                variant="h3"
              >
                2019 DUB Show at Los Angeles Auto Show
              </Text>
              <Text
                className="font-medium font-sfprodisplay mt-[15px] text-gray_500 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Starts at 9:00am in Los Angeles
              </Text>
              <div className="flex flex-row font-inter items-start justify-between mt-[25px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center"
                  leftIcon={
                    <Img
                      src="images/img_checkmark_14X14.svg"
                      className="mr-[3px] text-center"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="2xl"
                  variant="OutlineGray50033"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-gray_900 text-left">
                    Interested
                  </div>
                </Button>
                <div className="flex font-sfprodisplay h-[28px] md:h-[30px] sm:h-[30px] mt-[2px] relative w-[auto]">
                  <div className="flex h-[28px] md:h-[auto] sm:h-[auto] my-[auto] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[28px] my-[auto] object-cover rounded-radius8 w-[28px]"
                      alt="Avatar One"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-radius8 w-[28px] z-[1]"
                      alt="Avatar One One"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[28px] ml-[-5px] my-[auto] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]"
                    shape="RoundedBorder8"
                    size="4xl"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center p-[29px] sm:px-[20px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_14.png"
                className="h-[180px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                alt="Image Two"
              />
              <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                  <Button
                    className="cursor-pointer font-bold h-[48px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder15"
                    size="4xl"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      December, 2019
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="h-[38px] w-[38px]"
                  alt="overflowmenu Two"
                />
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[101%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Fashion Meetup
                </Text>
                <Text
                  className="font-medium text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Starts at 9:00am in Los Angeles
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="mr-[3px] text-center"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillGreen400"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-center text-white_A700">
                    Interested
                  </div>
                </Button>
                <div className="flex font-sfprodisplay h-[28px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                  <div className="flex h-[28px] md:h-[auto] sm:h-[auto] my-[auto] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[28px] my-[auto] object-cover rounded-radius8 w-[28px]"
                      alt="Avatar Two"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-radius8 w-[28px] z-[1]"
                      alt="Avatar One Two"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[28px] ml-[-5px] my-[auto] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-1 flex-col items-center justify-center p-[29px] sm:px-[20px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_15.png"
                className="h-[180px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                alt="Image Three"
              />
              <div className="flex flex-row items-center justify-between mt-[20px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                  <Button
                    className="cursor-pointer font-bold h-[48px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_900 w-[48px]"
                    shape="RoundedBorder15"
                    size="4xl"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      December, 2019
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="h-[38px] w-[38px]"
                  alt="overflowmenu Three"
                />
              </div>
              <div className="flex flex-col gap-[10px] items-center justify-start mt-[20px] md:w-[100%] sm:w-[100%] w-[101%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Fashion Meetup
                </Text>
                <Text
                  className="font-medium text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Starts at 9:00am in Los Angeles
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between mt-[30px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="mr-[3px] text-center"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillGreen400"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-center text-white_A700">
                    Interested
                  </div>
                </Button>
                <div className="flex font-sfprodisplay h-[28px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                  <div className="flex h-[28px] md:h-[auto] sm:h-[auto] my-[auto] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[28px] my-[auto] object-cover rounded-radius8 w-[28px]"
                      alt="Avatar Three"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-radius8 w-[28px] z-[1]"
                      alt="Avatar One Three"
                    />
                  </div>
                  <Button
                    className="cursor-pointer font-bold h-[28px] ml-[-5px] my-[auto] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]"
                    shape="RoundedBorder8"
                    size="sm"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-row font-sfprodisplay gap-[10px] items-center justify-between md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] my-[448px] rounded-radius2 w-[auto]"></div>
          <div className="bg-gray_900 flex flex-col gap-[52px] items-end justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[auto]">
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] sm:w-[100%] w-[45%]">
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
                alt="Avatar Four"
              />
            </div>
            <div className="flex flex-col font-inter items-start justify-start mb-[45px] pb-[3px] md:w-[100%] sm:w-[100%] w-[97%]">
              <Text
                className="text-left text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                My Next Events
              </Text>
              <List
                className="flex-col gap-[40px] grid items-center mt-[40px] w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-[10px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_140X250.png"
                    className="h-[140px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                    alt="Image Four"
                  />
                  <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                    <div className="flex flex-col gap-[10px] items-start justify-end pr-[2px] py-[2px] w-[85%]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dua Lipa Live Concert
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        December 12, 2019
                      </Text>
                    </div>
                    <Button
                      className="flex h-[28px] items-center justify-center my-[9px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[14px]"
                        alt="checkmark"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[10px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_16.png"
                    className="h-[140px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                    alt="Image Five"
                  />
                  <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                    <div className="flex flex-col gap-[10px] items-start justify-end pr-[2px] py-[2px] w-[85%]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dua Lipa Live Concert
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        December 12, 2019
                      </Text>
                    </div>
                    <Button
                      className="flex h-[28px] items-center justify-center my-[9px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[14px]"
                        alt="checkmark One"
                      />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[10px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_image_17.png"
                    className="h-[140px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                    alt="Image Six"
                  />
                  <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                    <div className="flex flex-col gap-[10px] items-start justify-end pr-[2px] py-[2px] w-[85%]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dua Lipa Live Concert
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        December 12, 2019
                      </Text>
                    </div>
                    <Button
                      className="flex h-[28px] items-center justify-center my-[9px] w-[28px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[14px]"
                        alt="checkmark Two"
                      />
                    </Button>
                  </div>
                </div>
              </List>
              <div className="flex flex-row gap-[8px] items-start justify-start mt-[43px] md:w-[100%] sm:w-[100%] w-[36%]">
                <Text
                  className="font-bold text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  See more
                </Text>
                <Img
                  src="images/img_arrowright_2.svg"
                  className="h-[14px] w-[14px]"
                  alt="arrowright One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
