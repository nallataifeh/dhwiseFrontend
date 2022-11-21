import React from "react";

import {
  Row,
  Column,
  Input,
  Img,
  Text,
  Button,
  Stack,
  List,
  Line,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const HomevTwoPage = () => {
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
          <Row className="items-center justify-evenly lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
            <Column className="w-[54%]">
              <Column className="bg-white_A700 items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[93%]">
                <Row className="items-start w-[99%]">
                  <Img
                    src="images/img_avatar.png"
                    className="Avatar"
                    alt="Avatar"
                  />
                  <Input
                    className="placeholder:text-gray_500 Group1405"
                    wrapClassName="2xl:ml-[5px] 3xl:ml-[6px] lg:ml-[3px] w-[86%] xl:ml-[4px]"
                    name="language"
                    placeholder="What are you thinking? "
                    shape="RoundedBorder19"
                    size="lg"
                  ></Input>
                </Row>
                <Row className="items-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]">
                  <Button
                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mt-[2px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_camera_1.svg"
                      className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                      alt="camera"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                      alt="videocamera"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_plus_28X28.svg"
                      className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                      alt="plus"
                    />
                  </Button>
                  <Stack className="bg-indigo_A200 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[100px] xl:ml-[125px] 2xl:ml-[141px] 3xl:ml-[169px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius4 w-[23%]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[4%] my-[auto] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Share
                    </Text>
                    <Img
                      src="images/img_arrowright_1.svg"
                      className="absolute inset-y-[0] my-[auto] right-[4%] location"
                      alt="arrowright One"
                    />
                  </Stack>
                </Row>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius12 w-[93%]">
                <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[88%]">
                  <Row className="items-center justify-between w-[49%]">
                    <Img
                      src="images/img_image.png"
                      className="Image_Eight"
                      alt="Image"
                    />
                    <Column className="pr-[2px] py-[2px] w-[63%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Edward Ford
                      </Text>
                      <Text className="mb-[1px] duration" as="h6" variant="h6">
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
                <Column className="items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[88%]">
                  <Text
                    className="font-medium text-gray_500 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Tourism Is Back In Full Swing In Cancun Mexico
                  </Text>
                  <Column
                    className="bg-cover bg-repeat items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-radius8 w-[100%]"
                    style={{ backgroundImage: "url('images/img_video.png')" }}
                  >
                    <Column className="bg-gray_900_66 items-center justify-start lg:p-[50px] xl:p-[63px] 2xl:p-[71px] 3xl:p-[85px] rounded-radius8 w-[100%]">
                      <Button
                        className="flex items-center justify-center overflowmenu"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbFillWhiteA70099"
                      >
                        <Img
                          src="images/img_play.svg"
                          className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                          alt="play"
                        />
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[88%]">
                  <Row className="items-center justify-between w-[43%]">
                    <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[47%]">
                      <Img
                        src="images/img_favorite.svg"
                        className="favorite1"
                        alt="favorite"
                      />
                      <Text className="Likes1" as="h5" variant="h5">
                        326
                      </Text>
                    </Row>
                    <Row className="items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[46%]">
                      <Img
                        src="images/img_location.svg"
                        className="location1"
                        alt="location"
                      />
                      <Text className="Comments1" as="h5" variant="h5">
                        148
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center justify-center lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[23%]">
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
                <Row className="border-2 border-gray_500_33 border-solid items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[88%]">
                  <Input
                    className="placeholder:text-gray_500 email"
                    wrapClassName="flex ml-[4px] w-[87%]"
                    name="FrameFive"
                    placeholder="Write a comment…"
                    suffix={
                      <Img
                        src="images/img_user_14X14.svg"
                        className="lg:w-[9px] lg:h-[10px] lg:ml-[24px] lg:mr-[3px] xl:w-[12px] xl:h-[13px] xl:ml-[31px] xl:mr-[4px] 2xl:w-[14px] 2xl:h-[15px] 2xl:ml-[35px] 2xl:mr-[5px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[42px] 3xl:mr-[6px] my-[auto]"
                        alt="user"
                      />
                    }
                    size="sm"
                  ></Input>
                  <Img src="images/img_send.svg" className="send" alt="send" />
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[87%]"
                  orientation="vertical"
                >
                  <Column className="justify-start lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                    <Row className="items-center justify-between w-[98%]">
                      <Row className="items-end justify-evenly w-[34%]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] rounded-radius8 lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          alt="Avatar One"
                        />
                        <Text className="rowavatar" as="h5" variant="h5">
                          Billy Green
                        </Text>
                      </Row>
                      <Text className="rowtime" as="h6" variant="h6">
                        20min ago
                      </Text>
                    </Row>
                    <Text
                      className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic text-gray_500 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[14%]">
                      <Img
                        src="images/img_favorite_14X14.svg"
                        className="location"
                        alt="favorite One"
                      />
                      <Img
                        src="images/img_location.svg"
                        className="send"
                        alt="location One"
                      />
                    </Row>
                  </Column>
                  <Line className="self-center w-[100%] border-gray_500_33 border-2 border-solid items-center lg:mt-[14px] lg:p-[7px] xl:mt-[17px] xl:p-[9px] 2xl:mt-[20px] 2xl:p-[11px] 3xl:mt-[24px] 3xl:p-[13px] rounded-radius4" />
                  <Column className="justify-start lg:my-[10px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] w-[100%]">
                    <Row className="items-center justify-between w-[98%]">
                      <Row className="items-end justify-evenly w-[34%]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] rounded-radius8 lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          alt="Avatar Two"
                        />
                        <Text className="rowavatar" as="h5" variant="h5">
                          Billy Green
                        </Text>
                      </Row>
                      <Text className="rowtime" as="h6" variant="h6">
                        20min ago
                      </Text>
                    </Row>
                    <Text className="columnavatar1" as="h5" variant="h5">
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <Row className="items-center lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[14%]">
                      <Img
                        src="images/img_favorite_14X14.svg"
                        className="location"
                        alt="favorite Two"
                      />
                      <Img
                        src="images/img_location.svg"
                        className="send"
                        alt="location Two"
                      />
                    </Row>
                  </Column>
                </List>
              </Column>
            </Column>
            <Column className="items-center w-[46%]">
              <Column className="bg-white_A700 items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
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
                    src="images/img_image_150X290.png"
                    className="Image_Two"
                    alt="Image Two"
                  />
                  <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[98%]">
                    <Text className="Title2" as="h4" variant="h4">
                      The Best Fashion Instagrams of the Week: Céline Dion,
                      Lizzo, and More
                    </Text>
                    <Text className="description" as="h5" variant="h5">
                      If you are looking for a break from the cold, take a cue
                      from Lizzo: This week, the singer headed to Disneyland in
                      warm and sunny California.
                    </Text>
                  </Column>
                  <Text
                    className="font-bold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-indigo_A200 tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Read More
                  </Text>
                </Column>
                <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[22%]">
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite1"
                      alt="favorite Three"
                    />
                    <Text className="Likes1" as="h5" variant="h5">
                      326
                    </Text>
                  </Row>
                  <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[22%]">
                    <Img
                      src="images/img_location.svg"
                      className="location1"
                      alt="location Three"
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
                      alt="reply One"
                    />
                  </Row>
                </Row>
              </Column>
              <Column className="bg-white_A700 justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius12 w-[100%]">
                <Column className="justify-start lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Row className="items-center justify-between w-[60%]">
                      <Img
                        src="images/img_image_48X48.png"
                        className="Image_Eight"
                        alt="Image Three"
                      />
                      <Column className="pr-[2px] py-[2px] w-[67%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Dustin Houston
                        </Text>
                        <Text className="time_Three" as="h6" variant="h6">
                          5min ago
                        </Text>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="overflowmenu"
                      alt="overflowmenu Two"
                    />
                  </Row>
                  <Text className="columnname_four" as="h5" variant="h5">
                    Whether its a driving tour 😂
                  </Text>
                </Column>
                <Row className="font-sfprodisplay items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[95%]">
                  <Img
                    src="images/img_photo1.png"
                    className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius8 w-[69%]"
                    alt="image Four"
                  />
                  <Column className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[28%]">
                    <Img
                      src="images/img_photo2.png"
                      className="lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] rounded-radius8 w-[100%]"
                      alt="image Five"
                    />
                    <Row
                      className="bg-cover bg-repeat items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_photo4.png')",
                      }}
                    >
                      <Img
                        src="images/img_settings_14X14.svg"
                        className="lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] location"
                        alt="settings Two"
                      />
                      <Text
                        className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        17
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Row className="font-inter items-center justify-between lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[95%]">
                  <Row className="items-center justify-between w-[48%]">
                    <Row className="items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[47%]">
                      <Img
                        src="images/img_favorite.svg"
                        className="favorite"
                        alt="favorite Four"
                      />
                      <Text className="Likes" as="h5" variant="h5">
                        326
                      </Text>
                    </Row>
                    <Row className="items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[46%]">
                      <Img
                        src="images/img_location.svg"
                        className="location"
                        alt="location Four"
                      />
                      <Text className="Comments" as="h5" variant="h5">
                        148
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center justify-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[26%]">
                    <Text className="Likes" as="h5" variant="h5">
                      Share
                    </Text>
                    <Img
                      src="images/img_reply.svg"
                      className="reply_Two"
                      alt="reply Two"
                    />
                  </Row>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
        <Row className="font-sfprodisplay items-center justify-between lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] overflow-auto lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] w-[29%]">
          <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
          <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[100%]">
            <Column className="absolute bg-gray_900 justify-end left-[0] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[92%]">
              <Row className="items-center justify-end lg:ml-[152px] xl:ml-[190px] 2xl:ml-[214px] 3xl:ml-[256px] 2xl:mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[34%]">
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
                  alt="Avatar Three"
                />
              </Row>
              <Column className="font-inter items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mr-[14px] xl:mr-[17px] 2xl:mr-[20px] 3xl:mr-[24px] lg:mt-[161px] xl:mt-[201px] 2xl:mt-[227px] 3xl:mt-[272px] w-[90%]">
                <Column className="justify-start pb-[1px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
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
                        alt="Avatar Four"
                      />
                      <Column className="justify-end pr-[2px] py-[2px] w-[72%]">
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
                          src="images/img_camera_2.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="camera One"
                        />
                      </Button>
                    </Row>
                    <Row className="listavatar_two">
                      <Img
                        src="images/img_avatar_5.png"
                        className="Avatar"
                        alt="Avatar Five"
                      />
                      <Column className="justify-end pr-[2px] py-[2px] w-[72%]">
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
                          src="images/img_camera_2.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="camera Two"
                        />
                      </Button>
                    </Row>
                    <Row className="listavatar_two">
                      <Img
                        src="images/img_avatar_4.png"
                        className="Avatar"
                        alt="Avatar Six"
                      />
                      <Column className="justify-end pr-[2px] py-[2px] w-[72%]">
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
                          src="images/img_camera_2.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="camera Three"
                        />
                      </Button>
                    </Row>
                  </List>
                  <Row className="items-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[30%]">
                    <Text
                      className="font-bold mt-[2px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_2.svg"
                      className="ml-[4px] trash"
                      alt="arrowright Two"
                    />
                  </Row>
                </Column>
                <Column className="lg:h-[217px] xl:h-[272px] 2xl:h-[306px] 3xl:h-[367px] justify-start lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Trend Topics
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listavatar_five">
                      <Button
                        className="font-bold font-sfprodisplay xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center overflowmenu"
                        shape="RoundedBorder12"
                        size="lg"
                        variant="FillGreen400"
                      >
                        #1
                      </Button>
                      <Text className="User2" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[88px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                      <Button
                        className="font-bold font-sfprodisplay xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center overflowmenu"
                        shape="RoundedBorder12"
                        size="lg"
                        variant="FillGreen400"
                      >
                        #2
                      </Button>
                      <Text className="User2" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[88px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                      <Button
                        className="font-bold font-sfprodisplay xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center overflowmenu"
                        shape="RoundedBorder12"
                        size="lg"
                        variant="FillGreen400"
                      >
                        #3
                      </Button>
                      <Text className="User2" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[88px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                    <Row className="listavatar_five">
                      <Button
                        className="font-bold font-sfprodisplay xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center overflowmenu"
                        shape="RoundedBorder12"
                        size="lg"
                        variant="FillGreen400"
                      >
                        #4
                      </Button>
                      <Text className="User2" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[88px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px]"
                          alt="checkmark Three"
                        />
                      </Button>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Column>
            <Column className="absolute font-inter justify-start right-[0] top-[14%] w-[90%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                Featured Stories
              </Text>
              <List
                className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-6 min-h-[auto] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] px-[4px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="Image_Six"
                      alt="Image Six"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] px-[4px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X54.png"
                      className="Image_Six"
                      alt="Image Seven"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] px-[4px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="Image_Six"
                      alt="Image Eight"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] px-[4px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X44.png"
                      className="Image_Six"
                      alt="Image Nine"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] px-[4px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_3.png"
                      className="Image_Six"
                      alt="Image Ten"
                    />
                  </Stack>
                </div>
                <div className="bg-gradient  p-[2px] rounded-radius12 w-[100%] ">
                  <Stack className="bg-gray_100 border-solid lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] px-[4px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_40X40.png"
                      className="Image_Six"
                      alt="Image Eleven"
                    />
                  </Stack>
                </div>
              </List>
            </Column>
          </Stack>
        </Row>
      </Row>
    </>
  );
};

export default HomevTwoPage;
