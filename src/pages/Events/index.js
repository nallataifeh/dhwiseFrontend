import React from "react";

import {
  Row,
  Column,
  Input,
  Img,
  Text,
  Line,
  Grid,
  Button,
  Stack,
  List,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const EventsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-start mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Column className="justify-end lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] w-[55%]">
          <Row className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius12 w-[96%]">
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
          <Text
            className="lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] text-gray_900 w-[auto]"
            as="h1"
            variant="h1"
          >
            Events
          </Text>
          <Row className="items-start mr-[auto] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] py-[2px] w-[61%]">
            <Column className="justify-start mt-[2px] w-[17%]">
              <Text
                className="font-bold text-gray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Anytime
              </Text>
              <Line className="bg-gray_900 h-[2px] ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[60%]" />
            </Column>
            <Text
              className="font-bold mt-[2px] text-gray_500 w-[auto]"
              as="h5"
              variant="h5"
            >
              Today
            </Text>
            <Text
              className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] NavigationTab2"
              as="h5"
              variant="h5"
            >
              Tomorrow
            </Text>
            <Text className="Label_Three2" as="h5" variant="h5">
              This Week
            </Text>
            <Text className="Label_Three2" as="h5" variant="h5">
              This Month
            </Text>
            <Text className="Label_Three2" as="h5" variant="h5">
              Select
            </Text>
          </Row>
          <Grid className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
            <Column className="bg-white_A700 items-center justify-center lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_180X320.png"
                className="Image9"
                alt="Image"
              />
              <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Row className="items-center justify-between w-[45%]">
                  <Button
                    className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center mail_One1"
                    shape="RoundedBorder15"
                    size="lg"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <Column className="w-[59%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text className="december,Counter" as="h6" variant="h6">
                      December, 2019
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="overflowmenu"
                  alt="overflowmenu"
                />
              </Row>
              <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[99%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Fashion Meetup
                </Text>
                <Text className="Enteryouremai" as="h5" variant="h5">
                  Starts at 9:00am in Los Angeles
                </Text>
              </Column>
              <Row className="items-center justify-between mb-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center w-[31%]"
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
                    Interested
                  </div>
                </Button>
                <Stack className="font-sfprodisplay lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] w-[23%]">
                  <Stack className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] left-[0] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar4"
                      alt="Avatar"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar_One2"
                      alt="Avatar One"
                    />
                  </Stack>
                  <Button
                    className="absolute font-bold lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] right-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </Stack>
              </Row>
            </Column>
            <Column className="bg-white_A700 justify-center lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_13.png"
                className="ml-[1px] Image9"
                alt="Image One"
              />
              <Row className="font-inter items-start justify-between ml-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pb-[3px] w-[99%]">
                <Row className="items-center justify-between w-[45%]">
                  <Button
                    className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center mail_One1"
                    shape="RoundedBorder15"
                    size="lg"
                    variant="OutlineGray5006c"
                  >
                    10
                  </Button>
                  <Column className="w-[59%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Wednesday
                    </Text>
                    <Text className="december,Counter" as="h6" variant="h6">
                      December, 2019
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] overflowmenu"
                  alt="overflowmenu One"
                />
              </Row>
              <Text
                className="font-inter lg:leading-[21px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] text-gray_900 w-[75%]"
                as="h3"
                variant="h3"
              >
                2019 DUB Show at Los Angeles Auto Show
              </Text>
              <Text
                className="font-medium font-sfprodisplay ml-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                Starts at 9:00am in Los Angeles
              </Text>
              <Row className="font-inter items-start justify-between mb-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center w-[31%]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark_14X14.svg"
                      className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineGray50033"
                >
                  <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                    Interested
                  </div>
                </Button>
                <Stack className="font-sfprodisplay lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] mt-[2px] w-[23%]">
                  <Stack className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] left-[0] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar4"
                      alt="Avatar One"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar_One2"
                      alt="Avatar One One"
                    />
                  </Stack>
                  <Button
                    className="absolute font-bold lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] right-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </Stack>
              </Row>
            </Column>
            <Column className="bg-white_A700 items-center justify-center lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_14.png"
                className="Image9"
                alt="Image Two"
              />
              <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Row className="items-center justify-between w-[45%]">
                  <Button
                    className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center mail_One1"
                    shape="RoundedBorder15"
                    size="md"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <Column className="w-[59%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text className="december,Counter_Two" as="h6" variant="h6">
                      December, 2019
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="overflowmenu"
                  alt="overflowmenu Two"
                />
              </Row>
              <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Fashion Meetup
                </Text>
                <Text
                  className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Starts at 9:00am in Los Angeles
                </Text>
              </Column>
              <Row className="items-center justify-between mb-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center w-[31%]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGreen400"
                >
                  <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                    Interested
                  </div>
                </Button>
                <Stack className="font-sfprodisplay lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] w-[23%]">
                  <Stack className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] left-[0] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar4"
                      alt="Avatar Two"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar_One2"
                      alt="Avatar One Two"
                    />
                  </Stack>
                  <Button
                    className="absolute font-bold lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] right-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </Stack>
              </Row>
            </Column>
            <Column className="bg-white_A700 items-center justify-center lg:p-[20px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius12 w-[100%]">
              <Img
                src="images/img_image_15.png"
                className="Image9"
                alt="Image Three"
              />
              <Row className="items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Row className="items-center justify-between w-[45%]">
                  <Button
                    className="font-bold lg:text-[15px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center mail_One1"
                    shape="RoundedBorder15"
                    size="md"
                    variant="OutlineGray50033"
                  >
                    10
                  </Button>
                  <Column className="w-[59%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Monday
                    </Text>
                    <Text className="rowtime" as="h6" variant="h6">
                      December, 2019
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_overflowmenu.svg"
                  className="overflowmenu"
                  alt="overflowmenu Three"
                />
              </Row>
              <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Fashion Meetup
                </Text>
                <Text
                  className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Starts at 9:00am in Los Angeles
                </Text>
              </Column>
              <Row className="items-center justify-between mb-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Button
                  className="flex items-center justify-center text-center w-[31%]"
                  leftIcon={
                    <Img
                      src="images/img_checkmark.svg"
                      className="mr-[3px] text-center lg:w-[9px] lg:h-[10px] xl:w-[12px] xl:h-[13px] 2xl:w-[14px] 2xl:h-[15px] 3xl:w-[16px] 3xl:h-[17px]"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillGreen400"
                >
                  <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                    Interested
                  </div>
                </Button>
                <Stack className="font-sfprodisplay lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] w-[23%]">
                  <Stack className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] left-[0] w-[69%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar4"
                      alt="Avatar Three"
                    />
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar_One2"
                      alt="Avatar One Three"
                    />
                  </Stack>
                  <Button
                    className="absolute font-bold lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] right-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="RoundedBorder8"
                    size="md"
                    variant="FillGray900"
                  >
                    +9
                  </Button>
                </Stack>
              </Row>
            </Column>
          </Grid>
        </Column>
        <Row className="font-sfprodisplay items-center justify-between lg:ml-[46px] xl:ml-[57px] 2xl:ml-[65px] 3xl:ml-[78px] pl-[1px] w-[25%]">
          <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-gray_900 items-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[96%]">
            <Row className="items-center justify-end ml-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[45%]">
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
                alt="Avatar Four"
              />
            </Row>
            <Column className="font-inter justify-start lg:mb-[32px] xl:mb-[40px] 2xl:mb-[45px] 3xl:mb-[54px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] pb-[3px] w-[97%]">
              <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                My Next Events
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]"
                orientation="vertical"
              >
                <Column className="Cards">
                  <Img
                    src="images/img_image_140X250.png"
                    className="Image_Four1"
                    alt="Image Four"
                  />
                  <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                    <Column className="pr-[2px] py-[2px] w-[83%]">
                      <Text className="Username" as="h5" variant="h5">
                        Dua Lipa Live Concert
                      </Text>
                      <Text className="Date" as="h5" variant="h5">
                        December 12, 2019
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                </Column>
                <Column className="Cards">
                  <Img
                    src="images/img_image_16.png"
                    className="Image_Four1"
                    alt="Image Five"
                  />
                  <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                    <Column className="pr-[2px] py-[2px] w-[83%]">
                      <Text className="Username" as="h5" variant="h5">
                        Dua Lipa Live Concert
                      </Text>
                      <Text className="Date" as="h5" variant="h5">
                        December 12, 2019
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                </Column>
                <Column className="Cards">
                  <Img
                    src="images/img_image_17.png"
                    className="Image_Four1"
                    alt="Image Six"
                  />
                  <Row className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]">
                    <Column className="pr-[2px] py-[2px] w-[83%]">
                      <Text className="Username" as="h5" variant="h5">
                        Dua Lipa Live Concert
                      </Text>
                      <Text className="Date" as="h5" variant="h5">
                        December 12, 2019
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                </Column>
              </List>
              <Row className="items-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[36%]">
                <Text className="SeeMore" as="h6" variant="h6">
                  See more
                </Text>
                <Img
                  src="images/img_arrowright_2.svg"
                  className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] location"
                  alt="arrowright One"
                />
              </Row>
            </Column>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default EventsPage;
