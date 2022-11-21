import React from "react";

import { Row, Column, Input, Img, Text, Stack, Button, List } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const HomevOnePage = () => {
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
            <Row className="items-start w-[100%]">
              <Img
                src="images/img_avatar.png"
                className="Avatar"
                alt="Avatar"
              />
              <Input
                className="placeholder:text-gray_500 Group1405"
                wrapClassName="2xl:ml-[6px] 3xl:ml-[7px] lg:ml-[4px] w-[88%] xl:ml-[5px]"
                name="language"
                placeholder="What are you thinking? "
                shape="RoundedBorder19"
                size="3xl"
              ></Input>
              <Img
                src="images/img_eye.svg"
                className="ml-[2px] overflowmenu"
                alt="eye"
              />
            </Row>
            <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
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
                className="flex items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] overflowmenu"
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
                className="flex items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] overflowmenu"
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
              <Button
                className="font-bold lg:ml-[309px] xl:ml-[386px] 2xl:ml-[435px] 3xl:ml-[522px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[17%]"
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
        <Row className="font-sfprodisplay items-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] w-[29%]">
          <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-gray_900 items-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[96%]">
            <Row className="items-center justify-end ml-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[36%]">
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
            <Column className="font-inter items-center justify-start mb-[2px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[98%]">
              <Stack className="bg-red_A200 lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius12 w-[100%]">
                <Row className="absolute bottom-[0] items-start justify-between w-[100%]">
                  <div className="bg-green_400 3xl:h-[105px] lg:h-[62px] xl:h-[78px] 2xl:h-[88px] rounded-radius435 w-[18%]"></div>
                  <Img
                    src="images/img_oval.png"
                    className="3xl:h-[111px] lg:h-[66px] xl:h-[82px] 2xl:h-[93px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[52%]"
                    alt="Oval One"
                  />
                </Row>
                <div className="absolute bg-gray_900_33 lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] right-[37%] rounded-radius50 top-[0] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"></div>
                <Text
                  className="absolute left-[6%] text-white_A700 top-[1%] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Go Premium!
                </Text>
                <Column className="absolute bottom-[11%] justify-start left-[6%] w-[75%]">
                  <Text className="columndescription" as="h5" variant="h5">
                    Try premium membership and enjoy
                    <br />a full experience of our community.
                  </Text>
                  <Stack className="bg-gray_900_33 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius12 w-[41%]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[3%] my-[auto] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_1.svg"
                      className="absolute inset-y-[0] my-[auto] right-[3%] rounded-radius50 location"
                      alt="arrowright Two"
                    />
                  </Stack>
                </Column>
              </Stack>
              <Column className="justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] pb-[3px] w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Who to Follow
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listavatar_two">
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar"
                      alt="Avatar Two"
                    />
                    <Column className="justify-end pr-[2px] py-[2px] w-[73%]">
                      <Text className="Username" as="h5" variant="h5">
                        Cammy Hedling
                      </Text>
                      <Text className="Subtitle" as="h6" variant="h6">
                        Los Angeles, CA
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillIndigoA200"
                    >
                      <Img
                        src="images/img_camera_28X28.svg"
                        className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                        alt="camera Two"
                      />
                    </Button>
                  </Row>
                  <Row className="listavatar_two">
                    <Img
                      src="images/img_avatar_38X38.png"
                      className="Avatar"
                      alt="Avatar Three"
                    />
                    <Column className="justify-end pr-[2px] py-[2px] w-[73%]">
                      <Text className="Username" as="h5" variant="h5">
                        Cammy Hedling
                      </Text>
                      <Text className="Subtitle" as="h6" variant="h6">
                        Los Angeles, CA
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillIndigoA200"
                    >
                      <Img
                        src="images/img_camera_28X28.svg"
                        className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                        alt="camera Three"
                      />
                    </Button>
                  </Row>
                  <Row className="listavatar_two">
                    <Img
                      src="images/img_avatar_1.png"
                      className="Avatar"
                      alt="Avatar Four"
                    />
                    <Column className="justify-end pr-[2px] py-[2px] w-[73%]">
                      <Text className="Username" as="h5" variant="h5">
                        Cammy Hedling
                      </Text>
                      <Text className="Subtitle" as="h6" variant="h6">
                        Los Angeles, CA
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillIndigoA200"
                    >
                      <Img
                        src="images/img_camera_28X28.svg"
                        className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                        alt="camera Four"
                      />
                    </Button>
                  </Row>
                </List>
                <Row className="items-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[29%]">
                  <Text className="SeeMore" as="h6" variant="h6">
                    See more
                  </Text>
                  <Img
                    src="images/img_arrowright_2.svg"
                    className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] location"
                    alt="arrowright Three"
                  />
                </Row>
              </Column>
              <Column className="justify-start lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Friends
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listavatar_five">
                    <Img
                      src="images/img_avatar_2.png"
                      className="Avatar"
                      alt="Avatar Five"
                    />
                    <Text className="User" as="h5" variant="h5">
                      MadeInAmerica
                    </Text>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
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
                      src="images/img_avatar_3.png"
                      className="Avatar"
                      alt="Avatar Six"
                    />
                    <Text className="User" as="h5" variant="h5">
                      MadeInAmerica
                    </Text>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
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
                      src="images/img_avatar_4.png"
                      className="Avatar"
                      alt="Avatar Seven"
                    />
                    <Text className="User" as="h5" variant="h5">
                      MadeInAmerica
                    </Text>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbFillWhiteA70033"
                    >
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                        alt="checkmark Two"
                      />
                    </Button>
                  </Row>
                </List>
              </Column>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default HomevOnePage;
