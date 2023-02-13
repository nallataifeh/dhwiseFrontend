import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Button, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DirectMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[45px] sm:gap-[45px] items-center justify-between w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[45px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <Sidebar className="flex flex-col md:hidden sm:hidden w-[165px]" />
            <div className="flex flex-1 flex-col gap-[40px] items-center justify-start w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[63px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                <div className="flex flex-row gap-[15px] items-center justify-between md:w-[100%] sm:w-[100%] w-[98%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex w-[auto]"
                    name="Search"
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
                    shape="srcRoundedBorder12"
                    size="lgSrc"
                    variant="srcFillWhiteA700"
                  ></Input>
                  <Button
                    className="flex h-[48px] items-center justify-center my-[5px] w-[48px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillGreen400"
                  >
                    <Img
                      src="images/img_laptop_14X14.svg"
                      className="h-[22px]"
                      alt="laptop"
                    />
                  </Button>
                </div>
                <div className="flex flex-col font-inter gap-[42px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Inbox
                  </Text>
                  <div className="flex flex-row items-start justify-start md:w-[100%] sm:w-[100%] w-[84%]">
                    <div className="flex flex-col gap-[7px] items-center justify-start mt-[3px] w-[39%]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Direct Messages
                      </Text>
                      <Line className="bg-gray_900 h-[2px] w-[100%]" />
                    </div>
                    <Text
                      className="font-bold ml-[20px] mt-[3px] text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Group Chat
                    </Text>
                    <Text
                      className="font-bold ml-[23px] text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Archived
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-inter gap-[20px] items-center justify-start w-[100%]">
                <List
                  className="flex-col gap-[40px] grid items-center md:w-[100%] sm:w-[100%] w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-[auto]">
                      <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar"
                        />
                        <div className="absolute h-[12px] md:h-[auto] sm:h-[auto] right-[0] top-[0] w-[30%]">
                          <div className="bg-gray_100 h-[12px] m-[auto] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[7px] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] items-end justify-start mt-[3px] pl-[4px] pt-[4px] w-[auto]">
                      <Text
                        className="font-inter font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3:03pm
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[17px]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-[auto]">
                      <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                        <Img
                          src="images/img_image_11.png"
                          className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar One"
                        />
                        <div className="absolute h-[12px] md:h-[auto] sm:h-[auto] right-[0] top-[0] w-[30%]">
                          <div className="bg-gray_100 h-[12px] m-[auto] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[7px] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] items-end justify-start mt-[3px] pl-[4px] pt-[4px] w-[auto]">
                      <Text
                        className="font-inter font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3:03pm
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[17px]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-[auto]">
                      <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                        <Img
                          src="images/img_image_9.png"
                          className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar Two"
                        />
                        <div className="absolute h-[12px] md:h-[auto] sm:h-[auto] right-[0] top-[0] w-[30%]">
                          <div className="bg-gray_100 h-[12px] m-[auto] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[7px] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] items-end justify-start mt-[3px] pl-[4px] pt-[4px] w-[auto]">
                      <Text
                        className="font-inter font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        3:03pm
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[17px]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </List>
                <div className="bg-white_A700 flex flex-row items-center justify-between p-[20px] rounded-radius12 w-[100%]">
                  <div className="flex flex-row gap-[13px] items-end justify-start w-[auto]">
                    <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[25%]">
                      <Img
                        src="images/img_avatar_18.png"
                        className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-radius12 w-[48px]"
                        alt="Avatar Three"
                      />
                      <div className="absolute h-[12px] md:h-[auto] sm:h-[auto] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_100 h-[12px] m-[auto] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[7px] w-[71%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Yesterday
                  </Text>
                </div>
                <List
                  className="flex-col gap-[40px] grid items-center md:w-[100%] sm:w-[100%] w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-[auto]">
                      <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                        <Img
                          src="images/img_avatar_6.png"
                          className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar Four"
                        />
                        <div className="absolute h-[12px] md:h-[auto] sm:h-[auto] right-[0] top-[0] w-[30%]">
                          <div className="bg-gray_100 h-[12px] m-[auto] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[7px] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal mt-[7px] not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Yesterday
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-[auto]">
                      <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                        <Img
                          src="images/img_avatar_21.png"
                          className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar Five"
                        />
                        <div className="absolute h-[12px] md:h-[auto] sm:h-[auto] right-[0] top-[0] w-[30%]">
                          <div className="bg-gray_100 h-[12px] m-[auto] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[7px] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal mt-[6px] not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Oct 26
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-[auto]">
                      <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                        <Img
                          src="images/img_avatar_19.png"
                          className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar Six"
                        />
                        <div className="absolute h-[12px] md:h-[auto] sm:h-[auto] right-[0] top-[0] w-[30%]">
                          <div className="bg-gray_100 h-[12px] m-[auto] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[7px] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] items-end justify-start mt-[3px] pl-[3px] pt-[3px] w-[auto]">
                      <Text
                        className="font-inter font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Oct 26
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[17px]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row gap-[13px] items-end justify-between w-[auto]">
                      <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                        <Img
                          src="images/img_image_8.png"
                          className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar Seven"
                        />
                        <div className="absolute h-[12px] md:h-[auto] sm:h-[auto] right-[0] top-[0] w-[30%]">
                          <div className="bg-gray_100 h-[12px] m-[auto] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 h-[10px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] w-[10px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start mb-[3px] mt-[7px] w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] items-end justify-start mt-[3px] pl-[3px] pt-[3px] w-[auto]">
                      <Text
                        className="font-inter font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Oct 26
                      </Text>
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay text-[10px] text-center text-white_A700 tracking-ls1 uppercase w-[17px]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-gray_500_48 h-[128px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
            <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-end justify-end p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[20px] items-center justify-end mt-[5px] md:w-[100%] sm:w-[100%] w-[17%]">
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
                  alt="Avatar Eight"
                />
              </div>
              <div className="flex flex-col font-inter items-start justify-start w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                  <div className="flex flex-row gap-[15px] items-center justify-between md:w-[100%] sm:w-[100%] w-[30%]">
                    <div
                      className="bg-cover bg-no-repeat md:h-[15px] sm:h-[15px] h-[58px] pb-[42px] sm:pl-[20px] md:pl-[40px] pl-[42px] relative rounded-radius16 w-[58px]"
                      style={{
                        backgroundImage: "url('images/img_avatar.png')",
                      }}
                    >
                      <Img
                        src="images/img_settings_15X15.svg"
                        className="absolute h-[15px] right-[0] top-[0] w-[15px]"
                        alt="settings Two"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Online
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_user_32X32.svg"
                    className="h-[32px] md:ml-[0] sm:ml-[0] ml-[254px] w-[32px]"
                    alt="user One"
                  />
                  <Img
                    src="images/img_call.svg"
                    className="h-[25px] md:ml-[0] sm:ml-[0] ml-[40px] w-[25px]"
                    alt="call"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[25px] md:ml-[0] sm:ml-[0] ml-[40px] w-[25px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_eye.svg"
                    className="h-[25px] md:ml-[0] sm:ml-[0] ml-[40px] w-[25px]"
                    alt="eye"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[70px] md:w-[100%] sm:w-[100%] w-[43%]">
                  <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Nine"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                      <div className="flex flex-row items-start justify-start pr-[3px] pt-[3px] md:w-[100%] sm:w-[100%] w-[57%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anne Carry
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </div>
                      <div className="bg-gray_100 flex flex-row items-center justify-between p-[10px] rounded-radius12 w-[100%]">
                        <Button
                          className="flex h-[38px] items-center justify-center w-[38px]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillLightblue20033"
                        >
                          <Img
                            src="images/img_forward.svg"
                            className="h-[18px]"
                            alt="forward"
                          />
                        </Button>
                        <Line className="bg-gray_500_7e h-[4px] my-[17px] rounded-radius2 w-[auto]" />
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          0:06
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[40px] grid mt-[49px] md:w-[100%] sm:w-[100%] w-[84%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Ten"
                      />
                      <div className="flex flex-col gap-[14px] items-start justify-start mb-[8px] w-[auto]">
                        <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[72%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar_48X48.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Eleven"
                      />
                      <div className="flex flex-col gap-[14px] items-start justify-start mb-[8px] w-[auto]">
                        <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[72%]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-row gap-[15px] items-start justify-between mt-[40px] w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Twelve"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                      <div className="flex flex-row items-start justify-start pr-[3px] pt-[3px] md:w-[100%] sm:w-[100%] w-[57%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Anne Carry
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </div>
                      <div className="bg-gray_100 flex flex-row items-center justify-between p-[10px] rounded-radius12 w-[100%]">
                        <Button
                          className="flex h-[38px] items-center justify-center w-[38px]"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillLightblue20033"
                        >
                          <Img
                            src="images/img_forward.svg"
                            className="h-[18px]"
                            alt="forward One"
                          />
                        </Button>
                        <Line className="bg-gray_500_7e h-[4px] my-[17px] rounded-radius2 w-[auto]" />
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          0:06
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[49px] pb-[3px] pr-[3px] md:w-[100%] sm:w-[100%] w-[84%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Thirteen"
                    />
                    <div className="flex flex-col gap-[14px] items-start justify-start mb-[8px] w-[79%]">
                      <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[72%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Yes, I saw his post yesterday
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[29%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Fourteen"
                    />
                    <Img
                      src="images/img_signal.svg"
                      className="h-[13px] w-[37%]"
                      alt="signal"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row gap-[15px] items-center justify-between mt-[45px] w-[100%]">
                  <Button
                    className="flex h-[48px] items-center justify-center md:mt-[0] sm:mt-[0] my-[5px] w-[48px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_minimize_48X48.svg"
                      className="h-[22px]"
                      alt="minimize"
                    />
                  </Button>
                  <Input
                    className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex md:w-[100%] sm:w-[100%] w-[auto]"
                    name="Field"
                    placeholder="Start typing…"
                    suffix={
                      <Img
                        src="images/img_user_1.svg"
                        className="ml-[35px] my-[auto]"
                        alt="user"
                      />
                    }
                    shape="RoundedBorder12"
                    size="6xl"
                    variant="FillGray100"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectMessagePage;
