import React from "react";

import { Row, Column, Input, Img, Text, Stack, Button, List } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const NotificationsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-start mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Column className="items-center justify-end lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[53%]">
          <Row className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="placeholder:text-gray_500 email"
              wrapClassName="flex my-[1px] w-[89%]"
              name="FrameOne"
              placeholder="Search in social…"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[1px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[16px] xl:h-[17px] xl:mr-[13px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[15px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[18px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#8f92a1"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[15px] xl:w-[16px] xl:h-[17px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="smSrc"
              variant="srcFillWhiteA700"
            ></Input>
            <Text className="Search" as="h6" variant="h6">
              Filters
            </Text>
          </Row>
          <Column className="bg-white_A700 justify-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:pl-[21px] xl:pl-[26px] 2xl:pl-[30px] 3xl:pl-[36px] lg:py-[21px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] rounded-radius12 w-[100%]">
            <Row className="items-center justify-between lg:mr-[21px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] mt-[4px] rounded-radius12 w-[96%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Featured Stories
              </Text>
              <Stack className="bg-gray_500_36 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius12 w-[14%]">
                <Text className="Label" as="h5" variant="h5">
                  See more
                </Text>
                <Img
                  src="images/img_arrowright_14X14.svg"
                  className="absolute inset-y-[0] my-[auto] right-[3%] rounded-radius50 location"
                  alt="arrowright One"
                />
              </Stack>
            </Row>
            <Row className="items-center justify-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] rounded-radius12 w-[99%]">
              <Button
                className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillLightblue20033"
              >
                <Img
                  src="images/img_plus.svg"
                  className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                  alt="plus"
                />
              </Button>
              <List
                className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-7 min-h-[auto] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[80%]"
                orientation="horizontal"
              >
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="list">
                    <Img
                      src="images/img_image.png"
                      className="Image"
                      alt="Image"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="list">
                    <Img
                      src="images/img_image_54X54.png"
                      className="Image"
                      alt="Image One"
                    />
                  </Stack>
                </div>
                <Stack className="border-2 border-gray_500_66 border-solid lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_image_1.png"
                    className="Image"
                    alt="Image Two"
                  />
                </Stack>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="list">
                    <Img
                      src="images/img_image_2.png"
                      className="Image"
                      alt="Image Three"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="list">
                    <Img
                      src="images/img_image_3.png"
                      className="Image"
                      alt="Image Four"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="list">
                    <Img
                      src="images/img_image_4.png"
                      className="Image"
                      alt="Image Five"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="list">
                    <Img
                      src="images/img_image_5.png"
                      className="Image"
                      alt="Image Six"
                    />
                  </Stack>
                </div>
              </List>
              <div className="2xl:ml-[20px] 3xl:ml-[24px] bg-gradient  lg:ml-[14px] p-[2px] rounded-radius12 w-[7%] xl:ml-[17px] ">
                <Stack className="bg-white_A700 border-solid lg:h-[47px] xl:h-[58px] 2xl:h-[66px] 3xl:h-[79px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] rounded-radius12">
                  <Img
                    src="images/img_image_54X44.png"
                    className="absolute lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] inset-y-[0] my-[auto] right-[0] rounded-radius12 w-[88%]"
                    alt="Image Seven"
                  />
                </Stack>
              </div>
            </Row>
          </Column>
          <Column className="bg-white_A700 items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Row className="items-center w-[28%]">
                <Img
                  src="images/img_avatar.png"
                  className="Avatar"
                  alt="Avatar"
                />
                <Text
                  className="font-medium lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  What are you thinking?{" "}
                </Text>
              </Row>
              <Img
                src="images/img_eye.svg"
                className="overflowmenu"
                alt="eye"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
              <Row className="items-center justify-between w-[21%]">
                <Button
                  className="flex items-center justify-center overflowmenu"
                  shape="icbRoundedBorder12"
                  size="mdIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_camera.svg"
                    className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                    alt="camera"
                  />
                </Button>
                <Button
                  className="flex items-center justify-center overflowmenu"
                  shape="icbRoundedBorder12"
                  size="mdIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_videocamera.svg"
                    className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                    alt="videocamera"
                  />
                </Button>
                <Button
                  className="flex items-center justify-center overflowmenu"
                  shape="icbRoundedBorder12"
                  size="mdIcn"
                  variant="icbFillGray100"
                >
                  <Img
                    src="images/img_plus_38X38.svg"
                    className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                    alt="plus One"
                  />
                </Button>
              </Row>
              <Button
                className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[17%]"
                shape="CircleBorder29"
                size="xl"
                variant="FillIndigoA200"
              >
                Share
              </Button>
            </Row>
          </Column>
          <Column className="bg-white_A700 justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
            <Row className="items-center justify-between w-[100%]">
              <Row className="items-center justify-between w-[22%]">
                <Img
                  src="images/img_image_48X48.png"
                  className="Image_Eight"
                  alt="Image Eight"
                />
                <Column className="pr-[1px] py-[1px] w-[63%]">
                  <Text className="Name" as="h5" variant="h5">
                    Dustin Housto
                  </Text>
                  <Text className="mb-[2px] time4" as="h6" variant="h6">
                    5min ago
                  </Text>
                </Column>
              </Row>
              <Img
                src="images/img_overflowmenu.svg"
                className="overflowmenu"
                alt="overflowmenu"
              />
            </Row>
            <Text className="CardDekstop1" as="h5" variant="h5">
              Whether its a driving tour, a cruise or a bus, leaf viewing is a
              great way to spend a fall vacation 😂
            </Text>
            <Row className="font-sfprodisplay items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
              <Img
                src="images/img_photo1.png"
                className="lg:h-[217px] xl:h-[272px] 2xl:h-[306px] 3xl:h-[367px] rounded-radius8 w-[50%]"
                alt="PhotoOne"
              />
              <Column className="items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[48%]">
                <Row className="items-center justify-between w-[100%]">
                  <Img
                    src="images/img_photo2.png"
                    className="PhotoTwo"
                    alt="PhotoTwo"
                  />
                  <Img
                    src="images/img_photo3.png"
                    className="PhotoTwo"
                    alt="PhotoThree"
                  />
                </Row>
                <Row className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                  <Img
                    src="images/img_photo4.png"
                    className="PhotoTwo"
                    alt="PhotoFour"
                  />
                  <Column
                    className="bg-cover bg-repeat items-center lg:p-[37px] xl:p-[47px] 2xl:p-[53px] 3xl:p-[63px] rounded-radius8 w-[48%]"
                    style={{ backgroundImage: "url('images/img_5.png')" }}
                  >
                    <Button
                      className="flex items-center justify-center my-[4px] text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_camera_14X14.svg"
                          className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[4px] xl:w-[12px] xl:h-[13px] xl:mr-[5px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[6px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[7px]"
                          alt="camera"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillWhiteA700"
                    >
                      <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        15
                      </div>
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
              <Row className="font-inter items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[9%]">
                <Img
                  src="images/img_favorite.svg"
                  className="favorite"
                  alt="favorite"
                />
                <Text className="Likes" as="h5" variant="h5">
                  326
                </Text>
              </Row>
              <Row className="font-inter items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[9%]">
                <Img
                  src="images/img_location.svg"
                  className="location"
                  alt="location"
                />
                <Text className="Comments" as="h5" variant="h5">
                  148
                </Text>
              </Row>
              <Button
                className="2xl:ml-[482px] 3xl:ml-[578px] flex items-center justify-center lg:ml-[342px] text-center w-[11%] xl:ml-[428px]"
                rightIcon={
                  <Img
                    src="images/img_reply.svg"
                    className="ml-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                    alt="reply"
                  />
                }
                shape="RoundedBorder4"
                size="sm"
                variant="FillGray1006c"
              >
                <div className="bg-transparent font-medium font-sfprodisplay xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                  Share
                </div>
              </Button>
            </Row>
          </Column>
        </Column>
        <Row className="items-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] w-[29%]">
          <div className="bg-gray_500_33 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-gray_900 items-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[96%]">
            <Row className="items-center justify-end ml-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[34%]">
              <Button
                className="flex items-center justify-center mail_One1"
                shape="icbRoundedBorder12"
                size="mdIcn"
                variant="icbFillGray900"
              >
                <Img
                  src="images/img_close.svg"
                  className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                  alt="close"
                />
              </Button>
              <Stack
                className="bg-cover bg-repeat Avatar_One"
                style={{ backgroundImage: "url('images/img_group1436.png')" }}
              >
                <Img
                  src="images/img_avatar_48X48.png"
                  className="absolute Image_Eight"
                  alt="Avatar One"
                />
              </Stack>
            </Row>
            <Column className="justify-start lg:mb-[29px] xl:mb-[36px] 2xl:mb-[41px] 3xl:mb-[49px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] lg:mr-[9px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] pt-[4px] w-[96%]">
              <Row className="items-center w-[52%]">
                <Text
                  className="font-sfprodisplay text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Notifications
                </Text>
                <Button
                  className="font-inter font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[20%]"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillRedA200"
                >
                  03
                </Button>
              </Row>
              <Column className="justify-start lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]">
                <Row className="items-center w-[100%]">
                  <div className="bg-red_A200 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                  <Img
                    src="images/img_avatar_17.png"
                    className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] Avatar_Two"
                    alt="Avatar Two"
                  />
                  <Row className="items-start justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] py-[2px] w-[43%]">
                    <Text className="Username2" as="h5" variant="h5">
                      Gunther Ackner
                    </Text>
                    <Text className="time_One1" as="h6" variant="h6">
                      4min
                    </Text>
                  </Row>
                  <Img
                    src="images/img_5.png"
                    className="lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] rounded-radius8 lg:w-[34px] xl:w-[43px] 2xl:w-[49px] 3xl:w-[58px]"
                    alt="Photo"
                  />
                </Row>
                <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <div className="bg-red_A200 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Img
                      src="images/img_avatar_18.png"
                      className="Avatar_Two"
                      alt="Avatar Three"
                    />
                    <Column className="justify-start mt-[4px] w-[69%]">
                      <Row className="items-start pr-[2px] py-[2px] w-[55%]">
                        <Text className="Username2" as="h5" variant="h5">
                          Marriet Miles
                        </Text>
                        <Text className="time_Two1" as="h6" variant="h6">
                          4min
                        </Text>
                      </Row>
                      <Text className="columnusername_one" as="h5" variant="h5">
                        sent you a friend request
                      </Text>
                    </Column>
                    <Button
                      className="flex items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] overflowmenu"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA70033"
                    >
                      <Img
                        src="images/img_camera_38X38.svg"
                        className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                        alt="camera Two"
                      />
                    </Button>
                  </Row>
                  <Row className="items-center lg:ml-[39px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[47%]">
                    <Button
                      className="flex items-center justify-center text-center w-[41%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillGreen400"
                    >
                      <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        Add
                      </div>
                    </Button>
                    <Row className="bg-gray_900_6c items-center justify-end lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] p-[4px] rounded-radius4 w-[49%]">
                      <Img
                        src="images/img_close.svg"
                        className="location"
                        alt="close One"
                      />
                      <Text
                        className="font-medium mb-[1px] ml-[4px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Ignore
                      </Text>
                    </Row>
                  </Row>
                </Column>
                <Row className="items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pb-[2px] w-[100%]">
                  <div className="bg-red_A200 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                  <Img
                    src="images/img_avatar_19.png"
                    className="Avatar_Two"
                    alt="Avatar Four"
                  />
                  <Column className="justify-start mt-[4px] w-[69%]">
                    <Row className="items-start pr-[2px] py-[2px] w-[55%]">
                      <Text className="Username2" as="h5" variant="h5">
                        Marriet Miles
                      </Text>
                      <Text className="time_Two1" as="h6" variant="h6">
                        4min
                      </Text>
                    </Row>
                    <Text className="columnusername_one" as="h5" variant="h5">
                      sent you a friend request
                    </Text>
                  </Column>
                  <Button
                    className="flex items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] overflowmenu"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillWhiteA70033"
                  >
                    <Img
                      src="images/img_favorite_2.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="favorite One"
                    />
                  </Button>
                </Row>
                <Row className="items-center justify-end ml-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[95%]">
                  <Img
                    src="images/img_avatar_7.png"
                    className="Avatar_Two"
                    alt="Avatar Five"
                  />
                  <Row className="items-start justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] py-[2px] w-[45%]">
                    <Text className="Username2" as="h5" variant="h5">
                      Gunther Ackner
                    </Text>
                    <Text className="time_One1" as="h6" variant="h6">
                      4min
                    </Text>
                  </Row>
                  <Img
                    src="images/img_5.png"
                    className="lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] rounded-radius8 lg:w-[34px] xl:w-[43px] 2xl:w-[49px] 3xl:w-[58px]"
                    alt="Photo One"
                  />
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[95%]"
                  orientation="vertical"
                >
                  <Column className="Cards">
                    <Row className="items-start justify-between w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="Avatar_Two"
                        alt="Avatar Six"
                      />
                      <Column className="justify-start mt-[4px] w-[72%]">
                        <Row className="items-start pr-[2px] py-[2px] w-[55%]">
                          <Text className="Username2" as="h5" variant="h5">
                            Marriet Miles
                          </Text>
                          <Text className="time_Two1" as="h6" variant="h6">
                            4min
                          </Text>
                        </Row>
                        <Text
                          className="columnusername_one"
                          as="h5"
                          variant="h5"
                        >
                          sent you a friend request
                        </Text>
                      </Column>
                      <Stack className="bg-white_A700_33 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius12 w-[13%]">
                        <Img
                          src="images/img_camera_38X38.svg"
                          className="absolute lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] w-[48%]"
                          alt="camera Three"
                        />
                      </Stack>
                    </Row>
                    <Button
                      className="2xl:ml-[38px] 2xl:mt-[22px] 3xl:ml-[45px] 3xl:mt-[26px] flex items-center justify-center lg:ml-[27px] lg:mt-[15px] text-center w-[25%] xl:ml-[33px] xl:mt-[19px]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillGray900"
                    >
                      <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        Added
                      </div>
                    </Button>
                  </Column>
                  <Column className="Cards">
                    <Row className="items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_20.png"
                        className="Avatar_Two"
                        alt="Avatar Seven"
                      />
                      <Column className="justify-start mt-[4px] w-[72%]">
                        <Row className="items-start pr-[2px] py-[2px] w-[55%]">
                          <Text className="Username2" as="h5" variant="h5">
                            Marriet Miles
                          </Text>
                          <Text className="time_Two1" as="h6" variant="h6">
                            4min
                          </Text>
                        </Row>
                        <Text
                          className="columnusername_one"
                          as="h5"
                          variant="h5"
                        >
                          sent you a friend request
                        </Text>
                      </Column>
                      <Stack className="bg-white_A700_33 lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px] rounded-radius12 w-[13%]">
                        <Img
                          src="images/img_camera_38X38.svg"
                          className="absolute lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] inset-[0] justify-center m-[auto] w-[48%]"
                          alt="camera Four"
                        />
                      </Stack>
                    </Row>
                    <Button
                      className="2xl:ml-[38px] 2xl:mt-[22px] 3xl:ml-[45px] 3xl:mt-[26px] flex items-center justify-center lg:ml-[27px] lg:mt-[15px] text-center w-[25%] xl:ml-[33px] xl:mt-[19px]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[4px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillGray900"
                    >
                      <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        Added
                      </div>
                    </Button>
                  </Column>
                </List>
                <Row className="items-start justify-end ml-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[95%]">
                  <Img
                    src="images/img_image_11.png"
                    className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] Avatar_Two"
                    alt="Avatar Eight"
                  />
                  <Row className="items-start justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] py-[2px] w-[45%]">
                    <Text className="Username2" as="h5" variant="h5">
                      Gunther Ackner
                    </Text>
                    <Text className="time_One1" as="h6" variant="h6">
                      4min
                    </Text>
                  </Row>
                  <Img
                    src="images/img_5.png"
                    className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] rounded-radius8 w-[16%]"
                    alt="Photo Two"
                  />
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default NotificationsPage;
