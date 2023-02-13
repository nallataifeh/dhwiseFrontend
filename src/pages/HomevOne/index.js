import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const HomevOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex flex-1 flex-col items-center justify-end md:ml-[0] sm:ml-[0] ml-[65px] md:mt-[0] sm:mt-[0] mt-[40px] md:px-[20px] sm:px-[20px] w-[100%]">
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
          <div className="bg-white_A700 flex flex-col gap-[34px] justify-end mt-[40px] sm:pl-[20px] pl-[30px] py-[30px] rounded-radius12 w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between mr-[30px] mt-[4px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[96%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Featured Stories
              </Text>
              <div className="bg-gray_500_36 md:h-[14px] sm:h-[14px] h-[30px] p-[7px] relative rounded-radius12 w-[auto]">
                <Text
                  className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-gray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  See more
                </Text>
                <Img
                  src="images/img_arrowright_14X14.svg"
                  className="absolute h-[14px] inset-y-[0] my-[auto] right-[10%] rounded-radius50 w-[14px]"
                  alt="arrowright One"
                />
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-end md:ml-[0] sm:ml-[0] ml-[10px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[99%]">
              <Button
                className="flex h-[45px] items-center justify-center md:mt-[0] sm:mt-[0] my-[10px] w-[45px]"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillLightblue20033"
              >
                <Img
                  src="images/img_plus.svg"
                  className="h-[22px]"
                  alt="plus"
                />
              </Button>
              <List
                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 grid-cols-7 md:ml-[0] sm:ml-[0] ml-[30px] md:w-[100%] sm:w-[100%] w-[80%]"
                orientation="horizontal"
              >
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-white_A700 border-solid md:h-[54px] sm:h-[54px] h-[65px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] object-cover rounded-radius12 w-[54px]"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-white_A700 border-solid md:h-[54px] sm:h-[54px] h-[65px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X54.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] object-cover rounded-radius12 w-[54px]"
                      alt="Image One"
                    />
                  </div>
                </div>
                <div className="border-2 border-gray_500_66 border-solid md:h-[54px] sm:h-[54px] h-[65px] p-[5px] relative rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_image_1.png"
                    className="absolute h-[54px] inset-[0] justify-center m-[auto] object-cover rounded-radius12 w-[54px]"
                    alt="Image Two"
                  />
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-white_A700 border-solid md:h-[54px] sm:h-[54px] h-[65px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] object-cover rounded-radius12 w-[54px]"
                      alt="Image Three"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-white_A700 border-solid md:h-[54px] sm:h-[54px] h-[65px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_3.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] object-cover rounded-radius12 w-[54px]"
                      alt="Image Four"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-white_A700 border-solid md:h-[54px] sm:h-[54px] h-[65px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_4.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] object-cover rounded-radius12 w-[54px]"
                      alt="Image Five"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-white_A700 border-solid md:h-[54px] sm:h-[54px] h-[65px] p-[5px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_5.png"
                      className="absolute h-[54px] inset-[0] justify-center m-[auto] object-cover rounded-radius12 w-[54px]"
                      alt="Image Six"
                    />
                  </div>
                </div>
              </List>
              <div className="bg-gradient  md:ml-[0] md:w-[100%] ml-[20px] p-[2px] relative rounded-radius12 sm:ml-[0] sm:w-[100%] w-[7%] ">
                <div className="bg-white_A700 border-solid md:h-[54px] sm:h-[54px] h-[65px] pl-[5px] py-[5px] relative rounded-radius12">
                  <Img
                    src="images/img_image_54X44.png"
                    className="absolute h-[54px] inset-y-[0] my-[auto] object-cover right-[0] rounded-radius12 w-[88%]"
                    alt="Image Seven"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-start mt-[30px] p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start w-[100%]">
              <Img
                src="images/img_avatar.png"
                className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                alt="Avatar"
              />
              <Input
                className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="md:ml-[0] md:w-[100%] ml-[6px] sm:ml-[0] sm:w-[100%] w-[88%]"
                name="language"
                placeholder="What are you thinking? "
                shape="RoundedBorder19"
                size="4xl"
              ></Input>
              <Img
                src="images/img_eye.svg"
                className="h-[38px] md:ml-[0] sm:ml-[0] ml-[2px] w-[38px]"
                alt="eye"
              />
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
              <Button
                className="flex h-[38px] items-center justify-center md:mt-[0] sm:mt-[0] my-[10px] w-[38px]"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillGray100"
              >
                <Img
                  src="images/img_camera.svg"
                  className="h-[18px]"
                  alt="camera"
                />
              </Button>
              <Button
                className="flex h-[38px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[15px] md:mt-[0] sm:mt-[0] my-[10px] w-[38px]"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillGray100"
              >
                <Img
                  src="images/img_videocamera.svg"
                  className="h-[18px]"
                  alt="videocamera"
                />
              </Button>
              <Button
                className="flex h-[38px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[15px] md:mt-[0] sm:mt-[0] my-[10px] w-[38px]"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillGray100"
              >
                <Img
                  src="images/img_plus_38X38.svg"
                  className="h-[18px]"
                  alt="plus One"
                />
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[121px] md:ml-[0] sm:ml-[0] ml-[435px] text-[14px] text-center text-white_A700 w-[auto]"
                shape="CircleBorder29"
                size="8xl"
                variant="FillIndigoA200"
              >
                Share
              </Button>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col items-start justify-start mt-[30px] p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                <Img
                  src="images/img_image_48X48.png"
                  className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                  alt="Image Eight"
                />
                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-gray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Dustin Housto
                  </Text>
                  <Text
                    className="font-normal mb-[2px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    5min ago
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_overflowmenu.svg"
                className="h-[38px] w-[38px]"
                alt="overflowmenu"
              />
            </div>
            <Text
              className="font-medium mt-[29px] text-gray_500 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Whether its a driving tour, a cruise or a bus, leaf viewing is a
              great way to spend a fall vacation 😂
            </Text>
            <div className="flex md:flex-col sm:flex-col flex-row font-sfprodisplay gap-[15px] items-center justify-start mt-[21px] w-[100%]">
              <Img
                src="images/img_photo1.png"
                className="md:flex-1 sm:flex-1 h-[305px] sm:h-[auto] object-cover rounded-radius8 md:w-[100%] sm:w-[100%] w-[50%]"
                alt="PhotoOne"
              />
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[48%]">
                <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_photo2.png"
                    className="h-[145px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[auto]"
                    alt="PhotoTwo"
                  />
                  <Img
                    src="images/img_photo3.png"
                    className="h-[145px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[auto]"
                    alt="PhotoThree"
                  />
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                  <Img
                    src="images/img_photo4.png"
                    className="h-[145px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[auto]"
                    alt="PhotoFour"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-center p-[53px] sm:px-[20px] md:px-[40px] rounded-radius8 w-[auto]"
                    style={{ backgroundImage: "url('images/img_5.png')" }}
                  >
                    <Button
                      className="flex items-center justify-center my-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_camera_14X14.svg"
                          className="mr-[6px] text-center"
                          alt="camera"
                        />
                      }
                      shape="RoundedBorder4"
                      size="xl"
                      variant="FillWhiteA700"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-gray_900 text-left">
                        15
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start mt-[40px] w-[100%]">
              <div className="flex flex-row font-inter gap-[5px] items-center justify-start p-[5px] w-[10%]">
                <Img
                  src="images/img_favorite.svg"
                  className="h-[14px] w-[14px]"
                  alt="favorite"
                />
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  326
                </Text>
              </div>
              <div className="flex flex-row font-inter gap-[6px] items-center justify-start ml-[15px] p-[5px] w-[9%]">
                <Img
                  src="images/img_location.svg"
                  className="h-[14px] w-[14px]"
                  alt="location"
                />
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  148
                </Text>
              </div>
              <Button
                className="flex items-center justify-center ml-[482px] text-center"
                rightIcon={
                  <Img
                    src="images/img_reply.svg"
                    className="ml-[3px] text-center"
                    alt="reply"
                  />
                }
                shape="RoundedBorder4"
                size="md"
                variant="FillGray1006c"
              >
                <div className="bg-transparent cursor-pointer font-medium font-sfprodisplay text-[14px] text-gray_900 text-left">
                  Share
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 sm:flex-col flex-row font-sfprodisplay gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[30px] pl-[5px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[2%]"></div>
          <div className="bg-gray_900 flex sm:flex-1 flex-col gap-[45px] items-end justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] sm:w-[100%] w-[37%]">
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
            <div className="flex flex-col font-inter items-center justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
              <div className="bg-red_A200 md:h-[137px] sm:h-[137px] h-[174px] pt-[21px] relative rounded-radius12 w-[100%]">
                <div className="bg-gray_900_33 h-[19px] mb-[-3px] ml-[auto] mr-[118px] rounded-radius50 w-[19px] z-[1]"></div>
                <Text
                  className="mb-[-8.67px] ml-[20px] mt-[2px] text-left text-white_A700 w-[auto] z-[1]"
                  as="h3"
                  variant="h3"
                >
                  Go Premium!
                </Text>
                <div className="flex flex-col gap-[28px] items-start justify-start mb-[undefinedpx] ml-[20px] mt-[auto] w-[75%] z-[1]">
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-left text-white_A700"
                    as="h5"
                    variant="h5"
                  >
                    Try premium membership and enjoy
                    <br />a full experience of our community.
                  </Text>
                  <div className="bg-gray_900_33 md:h-[14px] sm:h-[14px] h-[30px] p-[7px] relative rounded-radius12 w-[42%]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_1.svg"
                      className="absolute h-[14px] inset-y-[0] my-[auto] right-[10%] rounded-radius50 w-[14px]"
                      alt="arrowright Two"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[auto] mx-[auto] w-[100%]">
                  <div className="bg-green_400 h-[87px] mb-[50px] rounded-radius435 w-[auto]"></div>
                  <Img
                    src="images/img_oval.png"
                    className="h-[92px] md:h-[auto] sm:h-[auto] mt-[45px] object-cover w-[auto]"
                    alt="Oval One"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[64px] pb-[3px] w-[100%]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Who to Follow
                </Text>
                <List
                  className="flex-col gap-[30px] grid items-center mt-[43px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Two"
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
                        src="images/img_camera_28X28.svg"
                        className="h-[14px]"
                        alt="camera Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar_38X38.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Three"
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
                        src="images/img_camera_28X28.svg"
                        className="h-[14px]"
                        alt="camera Three"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar_1.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Four"
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
                        src="images/img_camera_28X28.svg"
                        className="h-[14px]"
                        alt="camera Four"
                      />
                    </Button>
                  </div>
                </List>
                <div className="flex flex-row gap-[8px] items-start justify-start mt-[45px] md:w-[100%] sm:w-[100%] w-[29%]">
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
                    alt="arrowright Three"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[44px] items-start justify-start mt-[63px] w-[100%]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Friends
                </Text>
                <List
                  className="flex-col gap-[30px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Img
                      src="images/img_avatar_2.png"
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
                      className="flex h-[28px] items-center justify-center ml-[135px] my-[5px] w-[28px]"
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
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Img
                      src="images/img_avatar_3.png"
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
                      className="flex h-[28px] items-center justify-center ml-[135px] my-[5px] w-[28px]"
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
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Img
                      src="images/img_avatar_4.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Seven"
                    />
                    <Text
                      className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      MadeInAmerica
                    </Text>
                    <Button
                      className="flex h-[28px] items-center justify-center ml-[135px] my-[5px] w-[28px]"
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
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomevOnePage;
