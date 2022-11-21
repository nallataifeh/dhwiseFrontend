import React from "react";

import { Row, Column, Input, Img, Text, Grid, Button, List } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const MyFriendsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-center mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Column className="items-center lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] w-[53%]">
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
          <Column className="items-center justify-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] pt-[3px] w-[100%]">
            <Row className="items-start justify-between pr-[2px] pt-[2px] w-[100%]">
              <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                My Friends
              </Text>
              <Row className="items-center justify-center lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mt-[4px] w-[7%]">
                <Text
                  className="font-medium mb-[1px] text-gray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Filter
                </Text>
                <Img
                  src="images/img_filter.svg"
                  className="ml-[3px] mt-[1px] location"
                  alt="filter"
                />
              </Row>
            </Row>
            <Grid className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-3 lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar.png"
                  className="Avatar12"
                  alt="Avatar"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_13.png"
                  className="Avatar12"
                  alt="Avatar One"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_22.png"
                  className="Avatar12"
                  alt="Avatar Two"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_38X38.png"
                  className="Avatar12"
                  alt="Avatar Three"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_10.png"
                  className="Avatar12"
                  alt="Avatar Four"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_3.png"
                  className="Avatar12"
                  alt="Avatar Five"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_58X58.png"
                  className="Avatar12"
                  alt="Avatar Six"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_4.png"
                  className="Avatar12"
                  alt="Avatar Seven"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-end lg:p-[26px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius12 w-[100%]">
                <Img
                  src="images/img_avatar_23.png"
                  className="Avatar12"
                  alt="Avatar Eight"
                />
                <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[53%]">
                  <Text className="text-gray_900 w-[auto]" as="h4" variant="h4">
                    Billy Green
                  </Text>
                  <Text className="december,Counter" as="h6" variant="h6">
                    @BillyGreen
                  </Text>
                  <Button
                    className="2xl:mt-[16px] 3xl:mt-[19px] flex items-center justify-center lg:mt-[11px] text-center w-[99%] xl:mt-[14px]"
                    leftIcon={
                      <Img
                        src="images/img_checkmark.svg"
                        className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGreen400"
                  >
                    <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                      Freinds
                    </div>
                  </Button>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Row className="font-sfprodisplay items-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] w-[29%]">
          <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-gray_900 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[96%]">
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
                alt="Avatar Nine"
              />
            </Row>
            <Column className="font-inter justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mr-[14px] xl:mr-[17px] 2xl:mr-[20px] 3xl:mr-[24px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[90%]">
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
                    alt="Avatar Ten"
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
                      alt="camera"
                    />
                  </Button>
                </Row>
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_38X38.png"
                    className="Avatar"
                    alt="Avatar Eleven"
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
                    src="images/img_avatar_1.png"
                    className="Avatar"
                    alt="Avatar Twelve"
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
                    src="images/img_avatar_2.png"
                    className="Avatar"
                    alt="Avatar Thirteen"
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
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_4.png"
                    className="Avatar"
                    alt="Avatar Fourteen"
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
                      alt="camera Four"
                    />
                  </Button>
                </Row>
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_15.png"
                    className="Avatar"
                    alt="Avatar Fifteen"
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
                      alt="camera Five"
                    />
                  </Button>
                </Row>
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_24.png"
                    className="Avatar"
                    alt="Avatar Sixteen"
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
                      alt="camera Six"
                    />
                  </Button>
                </Row>
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_25.png"
                    className="Avatar"
                    alt="Avatar Seventeen"
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
                      alt="camera Seven"
                    />
                  </Button>
                </Row>
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_23.png"
                    className="Avatar"
                    alt="Avatar Eighteen"
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
                      alt="camera Eight"
                    />
                  </Button>
                </Row>
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_22.png"
                    className="Avatar"
                    alt="Avatar Nineteen"
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
                      alt="camera Nine"
                    />
                  </Button>
                </Row>
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_26.png"
                    className="Avatar"
                    alt="Avatar Twenty"
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
                      alt="camera Ten"
                    />
                  </Button>
                </Row>
                <Row className="listavatar_two">
                  <Img
                    src="images/img_avatar_10.png"
                    className="Avatar"
                    alt="Avatar TwentyOne"
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
                      alt="camera Eleven"
                    />
                  </Button>
                </Row>
              </List>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default MyFriendsPage;
