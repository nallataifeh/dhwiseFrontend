import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const NotificationsPage = () => {
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
          <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start mt-[30px] p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex flex-row gap-[15px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_avatar.png"
                  className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                  alt="Avatar"
                />
                <Text
                  className="font-medium text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  What are you thinking?{" "}
                </Text>
              </div>
              <Img
                src="images/img_eye.svg"
                className="h-[38px] w-[38px]"
                alt="eye"
              />
            </div>
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex flex-row gap-[15px] items-center justify-between w-[auto]">
                <Button
                  className="flex h-[38px] items-center justify-center w-[38px]"
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
                  className="flex h-[38px] items-center justify-center w-[38px]"
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
                  className="flex h-[38px] items-center justify-center w-[38px]"
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
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[121px] text-[14px] text-center text-white_A700 w-[auto]"
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
        <div className="flex flex-1 sm:flex-col flex-row gap-[10px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[30px] pl-[5px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-gray_500_33 h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[2%]"></div>
          <div className="bg-gray_900 flex sm:flex-1 flex-col gap-[45px] items-end justify-start p-[27px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[18px] md:w-[100%] sm:w-[100%] w-[34%]">
              <Button
                className="flex h-[48px] items-center justify-center w-[48px]"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillGray900"
              >
                <Img
                  src="images/img_close.svg"
                  className="h-[22px]"
                  alt="close"
                />
              </Button>
              <div
                className="bg-cover bg-no-repeat h-[48px] md:h-[auto] sm:h-[auto] relative rounded-radius12 w-[48px]"
                style={{ backgroundImage: "url('images/img_group1436.png')" }}
              >
                <Img
                  src="images/img_avatar_48X48.png"
                  className="absolute h-[48px] inset-[0] justify-center m-[auto] object-cover rounded-radius12 w-[48px]"
                  alt="Avatar One"
                />
              </div>
            </div>
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[63px] items-start justify-start mb-[41px] mr-[13px] pt-[4px] md:w-[100%] sm:w-[100%] w-[97%]">
              <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[53%]">
                <Text
                  className="font-sfprodisplay text-left text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Notifications
                </Text>
                <Button
                  className="cursor-pointer font-inter font-normal min-w-[35px] not-italic text-[12px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillRedA200"
                >
                  03
                </Button>
              </div>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-row items-center justify-start w-[100%]">
                  <div className="bg-red_A200 h-[8px] my-[20px] rounded-radius50 w-[8px]"></div>
                  <Img
                    src="images/img_avatar_17.png"
                    className="h-[28px] md:h-[auto] sm:h-[auto] ml-[10px] object-cover rounded-radius10 w-[28px]"
                    alt="Avatar Two"
                  />
                  <div className="flex flex-row items-start justify-center ml-[10px] py-[2px] w-[43%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Gunther Ackner
                    </Text>
                    <Text
                      className="font-normal ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    src="images/img_5.png"
                    className="h-[49px] md:h-[auto] sm:h-[auto] ml-[86px] object-cover rounded-radius8 w-[49px]"
                    alt="Photo"
                  />
                </div>
                <div className="flex flex-col gap-[23px] justify-start w-[100%]">
                  <div className="flex flex-row gap-[10px] items-start justify-between w-[100%]">
                    <div className="bg-red_A200 h-[8px] mb-[28px] mt-[10px] rounded-radius50 w-[8px]"></div>
                    <Img
                      src="images/img_avatar_18.png"
                      className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                      alt="Avatar Three"
                    />
                    <div className="flex flex-col gap-[8px] items-start justify-start mt-[4px] w-[auto]">
                      <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[56%]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-normal ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        sent you a friend request
                      </Text>
                    </div>
                    <Button
                      className="flex h-[38px] items-center justify-center mb-[2px] mt-[6px] w-[38px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA70033"
                    >
                      <Img
                        src="images/img_camera_38X38.svg"
                        className="h-[18px]"
                        alt="camera Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[56px] md:w-[100%] sm:w-[100%] w-[48%]">
                    <Button
                      className="flex items-center justify-center text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="xl"
                      variant="FillGreen400"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                        Add
                      </div>
                    </Button>
                    <div className="bg-gray_900_6c flex flex-row items-center justify-end p-[4px] rounded-radius4 w-[50%]">
                      <Img
                        src="images/img_close.svg"
                        className="h-[14px] w-[14px]"
                        alt="close One"
                      />
                      <Text
                        className="font-medium ml-[4px] mt-[5px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Ignore
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[10px] items-start justify-between pb-[2px] w-[100%]">
                  <div className="bg-red_A200 h-[8px] mb-[28px] mt-[10px] rounded-radius50 w-[8px]"></div>
                  <Img
                    src="images/img_avatar_19.png"
                    className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                    alt="Avatar Four"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start mt-[4px] w-[auto]">
                    <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[56%]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-normal ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        4min
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      sent you a friend request
                    </Text>
                  </div>
                  <Button
                    className="flex h-[38px] items-center justify-center mb-[2px] mt-[6px] w-[38px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillWhiteA70033"
                  >
                    <Img
                      src="images/img_favorite_2.svg"
                      className="h-[18px]"
                      alt="favorite One"
                    />
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[95%]">
                  <Img
                    src="images/img_avatar_7.png"
                    className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                    alt="Avatar Five"
                  />
                  <div className="flex flex-row items-start justify-center ml-[10px] py-[2px] w-[46%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Gunther Ackner
                    </Text>
                    <Text
                      className="font-normal ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    src="images/img_5.png"
                    className="h-[49px] md:h-[auto] sm:h-[auto] ml-[86px] object-cover rounded-radius8 w-[49px]"
                    alt="Photo One"
                  />
                </div>
                <List
                  className="flex-col gap-[40px] grid md:ml-[0] sm:ml-[0] ml-[18px] md:w-[100%] sm:w-[100%] w-[95%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[23px] justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                        alt="Avatar Six"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start mt-[4px] w-[auto]">
                        <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[56%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          sent you a friend request
                        </Text>
                      </div>
                      <div className="bg-white_A700_33 md:h-[26px] sm:h-[26px] h-[38px] mb-[2px] mt-[6px] p-[10px] relative rounded-radius12 w-[auto]">
                        <Img
                          src="images/img_camera_38X38.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] w-[19px]"
                          alt="camera Three"
                        />
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center md:ml-[0] ml-[38px] mr-[197px] sm:ml-[0] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="2xl"
                      variant="FillGray900"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                        Added
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[23px] justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_20.png"
                        className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                        alt="Avatar Seven"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start mt-[4px] w-[auto]">
                        <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[56%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          sent you a friend request
                        </Text>
                      </div>
                      <div className="bg-white_A700_33 md:h-[26px] sm:h-[26px] h-[38px] mb-[2px] mt-[6px] p-[10px] relative rounded-radius12 w-[auto]">
                        <Img
                          src="images/img_camera_38X38.svg"
                          className="absolute h-[18px] inset-[0] justify-center m-[auto] w-[19px]"
                          alt="camera Four"
                        />
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center md:ml-[0] ml-[38px] mr-[197px] sm:ml-[0] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="2xl"
                      variant="FillGray900"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                        Added
                      </div>
                    </Button>
                  </div>
                </List>
                <div className="flex flex-row items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[95%]">
                  <Img
                    src="images/img_image_11.png"
                    className="h-[28px] md:h-[auto] sm:h-[auto] mt-[10px] object-cover rounded-radius10 w-[28px]"
                    alt="Avatar Eight"
                  />
                  <div className="flex flex-row items-start justify-center ml-[10px] mt-[14px] py-[2px] w-[46%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Gunther Ackner
                    </Text>
                    <Text
                      className="font-normal ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    src="images/img_5.png"
                    className="h-[44px] md:h-[auto] sm:h-[auto] ml-[86px] object-cover rounded-radius8 w-[16%]"
                    alt="Photo Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
