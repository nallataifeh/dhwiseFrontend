import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Button, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MessagesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[52px] sm:gap-[52px] items-center justify-between w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <Sidebar className="flex flex-col md:hidden sm:hidden w-[165px]" />
            <div className="flex flex-1 flex-col gap-[40px] items-center justify-start w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[63px] items-center justify-start w-[100%]">
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
                <div className="flex flex-col gap-[42px] items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Inbox
                  </Text>
                  <div className="flex flex-row font-inter items-start justify-start md:w-[100%] sm:w-[100%] w-[84%]">
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
              <List
                className="flex-col font-inter gap-[40px] grid items-center md:w-[100%] sm:w-[100%] w-[98%]"
                orientation="vertical"
              >
                <div className="flex flex-row items-start justify-between w-[100%]">
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
                <div className="flex flex-row items-start justify-between w-[100%]">
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
                <div className="flex flex-row items-start justify-between w-[100%]">
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
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <div className="flex flex-row gap-[13px] items-end justify-between w-[auto]">
                    <div className="h-[48px] md:h-[auto] sm:h-[auto] relative w-[auto]">
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
          <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-gray_500_48 h-[128px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
            <div className="bg-white_A700 flex flex-col gap-[291px] md:gap-[40px] sm:gap-[40px] items-center justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] sm:w-[100%] w-[17%]">
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
              <div className="flex flex-col font-inter gap-[319px] md:gap-[40px] sm:gap-[40px] items-center justify-start mb-[16px] md:w-[100%] sm:w-[100%] w-[62%]">
                <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
                  <div className="bg-gray_100 h-[160px] md:h-[75px] sm:h-[75px] p-[41px] sm:px-[20px] md:px-[40px] relative rounded-radius501 w-[160px]">
                    <Img
                      src="images/img_mail_75X78.svg"
                      className="absolute h-[75px] inset-[0] justify-center m-[auto] w-[49%]"
                      alt="mail One"
                    />
                  </div>
                  <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                    <Text
                      className="text-gray_500 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      It's nice to chat with someone
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Pick a person from left menu and start your conversation
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center md:w-[100%] sm:w-[100%] w-[72%]">
                  <Img
                    src="images/img_download.svg"
                    className="h-[18px] w-[18px]"
                    alt="download"
                  />
                  <Text
                    className="font-medium ml-[5px] text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Social is available for Mac
                  </Text>
                  <Text
                    className="font-medium ml-[5px] text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Download it now
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
