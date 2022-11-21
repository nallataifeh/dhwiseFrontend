import React from "react";

import { Column, Row, Input, Img, Text, List, Stack, Button } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const MyProfilePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Row className="items-start justify-between w-[69%]">
            <Sidebar className="w-[17%]" />
            <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[77%]">
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
              <Column className="bg-gray_100 items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-start justify-between my-[0] w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[46%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-center justify-between w-[66%]">
                          <Img
                            src="images/img_image_6.png"
                            className="Image_Eight"
                            alt="Image"
                          />
                          <Column className="pr-[2px] py-[2px] w-[70%]">
                            <Text
                              className="font-bold text-gray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Katherine Cole
                            </Text>
                            <Text className="time_Three" as="h6" variant="h6">
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
                      <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                        <Img
                          src="images/img_image_150X290.png"
                          className="Image_Two"
                          alt="Image One"
                        />
                        <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[98%]">
                          <Text className="Title2" as="h4" variant="h4">
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
                          </Text>
                          <Text className="description" as="h5" variant="h5">
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                          </Text>
                        </Column>
                        <Text className="Post5" as="h6" variant="h6">
                          Read More
                        </Text>
                      </Column>
                      <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[22%]">
                          <Img
                            src="images/img_favorite.svg"
                            className="favorite1"
                            alt="favorite"
                          />
                          <Text className="Likes1" as="h5" variant="h5">
                            326
                          </Text>
                        </Row>
                        <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[22%]">
                          <Img
                            src="images/img_location.svg"
                            className="location1"
                            alt="location"
                          />
                          <Text className="Comments1" as="h5" variant="h5">
                            148
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[26%]">
                          <Text className="Share" as="h5" variant="h5">
                            Share
                          </Text>
                          <Img
                            src="images/img_reply.svg"
                            className="reply"
                            alt="reply"
                          />
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 font-sfprodisplay justify-end lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[50%]">
                      <Text
                        className="mt-[3px] text-gray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Photos
                      </Text>
                      <Column className="font-inter justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                        <Column className="lg:h-[228px] xl:h-[285px] 2xl:h-[321px] 3xl:h-[385px] items-center justify-start rounded-radius12 w-[100%]">
                          <Row className="items-center justify-between rounded-radius12 w-[100%]">
                            <Img
                              src="images/img_5.png"
                              className="Image_Two1"
                              alt="Image Two"
                            />
                            <Img
                              src="images/img_image_221X221.png"
                              className="Image_Two1"
                              alt="Image Three"
                            />
                            <Img
                              src="images/img_image_19.png"
                              className="Image_Two1"
                              alt="Image Four"
                            />
                          </Row>
                          <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius12 w-[100%]">
                            <Img
                              src="images/img_photo4.png"
                              className="Image_Two1"
                              alt="Image Five"
                            />
                            <Img
                              src="images/img_image_20.png"
                              className="Image_Two1"
                              alt="Image Six"
                            />
                            <Img
                              src="images/img_photo1.png"
                              className="Image_Two1"
                              alt="Image Seven"
                            />
                          </Row>
                          <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius12 w-[100%]">
                            <Img
                              src="images/img_image_21.png"
                              className="Image_Two1"
                              alt="Image Eight"
                            />
                            <Img
                              src="images/img_image_22.png"
                              className="Image_Two1"
                              alt="Image Nine"
                            />
                            <Img
                              src="images/img_image_23.png"
                              className="Image_Two1"
                              alt="Image Ten"
                            />
                          </Row>
                        </Column>
                        <Stack className="border-2 border-gray_500_6c border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius4 w-[30%]">
                          <Text className="Label" as="h5" variant="h5">
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowright_14X14.svg"
                            className="absolute inset-y-[0] my-[auto] right-[3%] location"
                            alt="arrowright One"
                          />
                        </Stack>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between my-[0] w-[100%]">
                    <Column className="bg-white_A700 items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[46%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-center justify-between w-[66%]">
                          <Img
                            src="images/img_image_6.png"
                            className="Image_Eight"
                            alt="Image One"
                          />
                          <Column className="pr-[2px] py-[2px] w-[70%]">
                            <Text
                              className="font-bold text-gray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Katherine Cole
                            </Text>
                            <Text className="time_Three" as="h6" variant="h6">
                              5min ago
                            </Text>
                          </Column>
                        </Row>
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="overflowmenu"
                          alt="overflowmenu One"
                        />
                      </Row>
                      <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                        <Img
                          src="images/img_cardmobile_3.png"
                          className="Image_Two"
                          alt="Image One One"
                        />
                        <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                          <Text
                            className="lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] text-gray_900 w-[95%]"
                            as="h4"
                            variant="h4"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
                          </Text>
                          <Text
                            className="font-medium lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_500 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                          </Text>
                        </Column>
                        <Text className="Post6" as="h6" variant="h6">
                          Read More
                        </Text>
                      </Column>
                      <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                        <Row className="items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[22%]">
                          <Img
                            src="images/img_favorite.svg"
                            className="favorite"
                            alt="favorite One"
                          />
                          <Text className="Likes" as="h5" variant="h5">
                            326
                          </Text>
                        </Row>
                        <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[22%]">
                          <Img
                            src="images/img_location.svg"
                            className="location"
                            alt="location One"
                          />
                          <Text className="Comments" as="h5" variant="h5">
                            148
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[26%]">
                          <Text className="Likes" as="h5" variant="h5">
                            Share
                          </Text>
                          <Img
                            src="images/img_reply.svg"
                            className="reply_Two"
                            alt="reply One"
                          />
                        </Row>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 font-sfprodisplay justify-end lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[50%]">
                      <Text
                        className="mt-[3px] text-gray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Videos
                      </Text>
                      <Row className="font-inter items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                        <Column
                          className="bg-cover bg-repeat items-center rounded-radius8 w-[38%]"
                          style={{
                            backgroundImage: "url('images/img_group1512.png')",
                          }}
                        >
                          <Stack className="bg-gray_900_7e lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="play"
                              alt="play"
                            />
                          </Stack>
                        </Column>
                        <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] pr-[4px] pt-[4px] w-[59%]">
                          <Text
                            className="font-bold lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] text-gray_900 w-[91%]"
                            as="h5"
                            variant="h5"
                          >
                            Tropical Fresh Tourism Is Back In Full Swing In{" "}
                          </Text>
                          <Text className="Date" as="h5" variant="h5">
                            2 days ago
                          </Text>
                        </Column>
                      </Row>
                      <Row className="font-inter items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                        <Column
                          className="bg-cover bg-repeat items-center rounded-radius8 w-[38%]"
                          style={{
                            backgroundImage: "url('images/img_image_15.png')",
                          }}
                        >
                          <Stack className="bg-gray_900_7e lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="play"
                              alt="play One"
                            />
                          </Stack>
                        </Column>
                        <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] pr-[4px] pt-[4px] w-[59%]">
                          <Text
                            className="font-bold lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] text-gray_900 w-[96%]"
                            as="h5"
                            variant="h5"
                          >
                            How Timberland created the visual campaign of the{" "}
                          </Text>
                          <Text className="Date" as="h5" variant="h5">
                            2 days ago
                          </Text>
                        </Column>
                      </Row>
                      <Row className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                        <Column
                          className="bg-cover bg-repeat items-center rounded-radius8 w-[38%]"
                          style={{
                            backgroundImage: "url('images/img_image_18.png')",
                          }}
                        >
                          <Stack className="bg-gray_900_7e lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="play"
                              alt="play Two"
                            />
                          </Stack>
                        </Column>
                        <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] pr-[2px] py-[2px] w-[59%]">
                          <Text
                            className="font-bold font-inter lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] mt-[1px] text-gray_900 w-[87%]"
                            as="h5"
                            variant="h5"
                          >
                            Take your mobile photography to the next{" "}
                          </Text>
                          <Text
                            className="font-sfprodisplay Date"
                            as="h5"
                            variant="h5"
                          >
                            2 days ago
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Column>
          </Row>
          <Row className="font-sfprodisplay items-center justify-between pl-[1px] w-[27%]">
            <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-gray_900 items-end lg:p-[27px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[96%]">
              <Row className="items-center justify-end ml-[auto] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[40%]">
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
                  alt="Avatar"
                />
              </Row>
              <Column className="font-inter items-center justify-start lg:mb-[29px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] 3xl:mt-[102px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[85px] w-[98%]">
                <Column className="items-center justify-start pb-[2px] px-[2px] w-[75%]">
                  <Img
                    src="images/img_avatar.png"
                    className="Avatar13"
                    alt="Avatar One"
                  />
                  <Text
                    className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-white_A700 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Edward Ford
                  </Text>
                  <Text className="Fullname" as="h5" variant="h5">
                    @edwardford
                  </Text>
                </Column>
                <Row className="items-center justify-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[70%]">
                  <Row className="items-center justify-end pr-[2px] py-[2px] w-[41%]">
                    <Text
                      className="my-[1px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      518
                    </Text>
                    <Text
                      className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] my-[1px] text-gray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Posts
                    </Text>
                  </Row>
                  <Row className="items-center justify-end lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] pr-[2px] py-[2px] w-[47%]">
                    <Text
                      className="my-[1px] text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      22k
                    </Text>
                    <Text
                      className="ml-[3px] my-[1px] text-gray_500 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Friends
                    </Text>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Button
                      className="font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[76%]"
                      shape="CircleBorder29"
                      size="xl"
                      variant="FillGreen400"
                    >
                      Edit Profile
                    </Button>
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50033"
                    >
                      <Img
                        src="images/img_overflowmenu_1.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                        alt="overflowmenu Two"
                      />
                    </Button>
                  </Row>
                  <Column className="justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[68%]">
                    <Text
                      className="font-bold text-white_A700 tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic text-white_A700_cc w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Travel, Adventure & Lifestyle
                      <br />
                      Photographer & Digital Influencer
                      <br />
                      Nikon Ambassador
                      <br />
                      {`Let's Work:`}
                      <br />
                      ed.ford@mail.com
                    </Text>
                  </Column>
                  <Column className="font-sfprodisplay justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
                    <Text
                      className="text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Friends
                    </Text>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="listavatar_one1">
                        <Img
                          src="images/img_avatar_45X45.png"
                          className="Avatar_One4"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_27.png"
                          className="Avatar_One4"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_avatar_5.png"
                          className="Avatar_One4"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_28.png"
                          className="Avatar_One4"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar_16.png"
                          className="Avatar_One4"
                          alt="Avatar Four"
                        />
                      </Row>
                      <Row className="listavatar_one1">
                        <Img
                          src="images/img_avatar_23.png"
                          className="Avatar_One4"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar_15.png"
                          className="Avatar_One4"
                          alt="Avatar One One"
                        />
                        <Img
                          src="images/img_avatar_25.png"
                          className="Avatar_One4"
                          alt="Avatar Two One"
                        />
                        <Img
                          src="images/img_avatar_14.png"
                          className="Avatar_One4"
                          alt="Avatar Three One"
                        />
                        <Img
                          src="images/img_avatar_3.png"
                          className="Avatar_One4"
                          alt="Avatar Four One"
                        />
                      </Row>
                      <Row className="listavatar_one1">
                        <Img
                          src="images/img_avatar_4.png"
                          className="Avatar_One4"
                          alt="Avatar Four"
                        />
                        <Img
                          src="images/img_avatar_13.png"
                          className="Avatar_One4"
                          alt="Avatar One Two"
                        />
                        <Img
                          src="images/img_avatar_9.png"
                          className="Avatar_One4"
                          alt="Avatar Two Two"
                        />
                        <Img
                          src="images/img_avatar_1.png"
                          className="Avatar_One4"
                          alt="Avatar Three Two"
                        />
                        <Img
                          src="images/img_avatar_10.png"
                          className="Avatar_One4"
                          alt="Avatar Four Two"
                        />
                      </Row>
                    </List>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default MyProfilePage;
