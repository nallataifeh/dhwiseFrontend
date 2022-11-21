import React from "react";

import {
  Column,
  Row,
  Input,
  Img,
  Button,
  Text,
  Line,
  List,
  Stack,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const DirectMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <Row className="items-center justify-between w-[42%]">
            <Sidebar className="w-[28%]" />
            <Column className="items-center w-[65%]">
              <Column className="items-center justify-start w-[92%]">
                <Row className="items-center justify-between w-[98%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="placeholder:text-gray_500 email"
                    wrapClassName="flex w-[82%]"
                    name="Search"
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
                    shape="srcRoundedBorder12"
                    size="lgSrc"
                    variant="srcFillWhiteA700"
                  ></Input>
                  <Button
                    className="flex items-center justify-center mail_One1"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillGreen400"
                  >
                    <Img
                      src="images/img_laptop_14X14.svg"
                      className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                      alt="laptop"
                    />
                  </Button>
                </Row>
                <Column className="font-inter justify-start lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                    Inbox
                  </Text>
                  <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] py-[1px] w-[84%]">
                    <Column className="items-center justify-start mt-[3px] w-[38%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Direct Messages
                      </Text>
                      <Line className="bg-gray_900 h-[2px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                    </Column>
                    <Text
                      className="font-bold lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[3px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Group Chat
                    </Text>
                    <Text
                      className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] NavigationTab2"
                      as="h5"
                      variant="h5"
                    >
                      Archived
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="font-inter items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[90%]"
                  orientation="vertical"
                >
                  <Row className="Messages">
                    <Row className="items-end justify-between w-[59%]">
                      <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[24%]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="Avatar9"
                          alt="Avatar"
                        />
                        <Stack className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="justify-start mb-[3px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text className="Message" as="h5" variant="h5">
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="items-end justify-start mt-[3px] pl-[4px] pt-[4px] w-[25%]">
                      <Text className="Right" as="h6" variant="h6">
                        3:03pm
                      </Text>
                      <Button
                        className="font-bold font-sfprodisplay lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 uppercase w-[21%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </Column>
                  </Row>
                  <Row className="Messages">
                    <Row className="items-end justify-between w-[59%]">
                      <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[24%]">
                        <Img
                          src="images/img_image_11.png"
                          className="Avatar9"
                          alt="Avatar One"
                        />
                        <Stack className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="justify-start mb-[3px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text className="Message" as="h5" variant="h5">
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="items-end justify-start mt-[3px] pl-[4px] pt-[4px] w-[25%]">
                      <Text className="Right" as="h6" variant="h6">
                        3:03pm
                      </Text>
                      <Button
                        className="font-bold font-sfprodisplay lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 uppercase w-[21%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </Column>
                  </Row>
                  <Row className="Messages">
                    <Row className="items-end justify-between w-[59%]">
                      <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[24%]">
                        <Img
                          src="images/img_image_9.png"
                          className="Avatar9"
                          alt="Avatar Two"
                        />
                        <Stack className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="justify-start mb-[3px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text className="Message" as="h5" variant="h5">
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="items-end justify-start mt-[3px] pl-[4px] pt-[4px] w-[25%]">
                      <Text className="Right" as="h6" variant="h6">
                        3:03pm
                      </Text>
                      <Button
                        className="font-bold font-sfprodisplay lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 uppercase w-[21%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </Column>
                  </Row>
                </List>
                <Row className="bg-white_A700 items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius12 w-[100%]">
                  <Row className="items-end w-[59%]">
                    <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[24%]">
                      <Img
                        src="images/img_avatar_18.png"
                        className="Avatar9"
                        alt="Avatar Three"
                      />
                      <Stack className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[0] top-[0] w-[30%]">
                        <div className="absolute bg-gray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius758 w-[100%]"></div>
                        <div className="absolute bg-green_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                      </Stack>
                    </Stack>
                    <Column className="justify-start mb-[3px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Billy Green
                      </Text>
                      <Text className="Message" as="h5" variant="h5">
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Text className="mr-[1px] rowtime" as="h6" variant="h6">
                    Yesterday
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[90%]"
                  orientation="vertical"
                >
                  <Row className="pr-[1px] Messages">
                    <Row className="items-end justify-between w-[59%]">
                      <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[24%]">
                        <Img
                          src="images/img_avatar_6.png"
                          className="Avatar9"
                          alt="Avatar Four"
                        />
                        <Stack className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="justify-start mb-[3px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text className="Message" as="h5" variant="h5">
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Text className="duration" as="h6" variant="h6">
                      Yesterday
                    </Text>
                  </Row>
                  <Row className="pr-[1px] Messages">
                    <Row className="items-end justify-between w-[59%]">
                      <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[24%]">
                        <Img
                          src="images/img_avatar_21.png"
                          className="Avatar9"
                          alt="Avatar Five"
                        />
                        <Stack className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="justify-start mb-[3px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text className="Message" as="h5" variant="h5">
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Text className="december,Counter_Two" as="h6" variant="h6">
                      Oct 26
                    </Text>
                  </Row>
                  <Row className="Messages">
                    <Row className="items-end justify-between w-[59%]">
                      <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[24%]">
                        <Img
                          src="images/img_avatar_19.png"
                          className="Avatar9"
                          alt="Avatar Six"
                        />
                        <Stack className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="justify-start mb-[3px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text className="Message" as="h5" variant="h5">
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="items-end justify-start mt-[3px] pl-[3px] pt-[3px] w-[25%]">
                      <Text className="Right" as="h6" variant="h6">
                        Oct 26
                      </Text>
                      <Button
                        className="font-bold font-sfprodisplay lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 uppercase w-[20%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </Column>
                  </Row>
                  <Row className="Messages">
                    <Row className="items-end justify-between w-[59%]">
                      <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] w-[24%]">
                        <Img
                          src="images/img_image_8.png"
                          className="Avatar9"
                          alt="Avatar Seven"
                        />
                        <Stack className="absolute xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] right-[0] top-[0] w-[30%]">
                          <div className="absolute bg-gray_100 xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] rounded-radius758 w-[100%]"></div>
                          <div className="absolute bg-green_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] inset-x-[0] mx-[auto] rounded-radius50 top-[0] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                        </Stack>
                      </Stack>
                      <Column className="justify-start mb-[3px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[70%]">
                        <Text
                          className="font-medium text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Billy Green
                        </Text>
                        <Text className="Message" as="h5" variant="h5">
                          Thank you for sharing
                        </Text>
                      </Column>
                    </Row>
                    <Column className="items-end justify-start mt-[3px] pl-[3px] pt-[3px] w-[25%]">
                      <Text className="Right" as="h6" variant="h6">
                        Oct 26
                      </Text>
                      <Button
                        className="font-bold font-sfprodisplay lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 uppercase w-[20%]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillRedA200"
                      >
                        1
                      </Button>
                    </Column>
                  </Row>
                </List>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-between w-[55%]">
            <div className="bg-gray_500_48 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-white_A700 items-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[98%]">
              <Row className="items-center justify-end lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[17%]">
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
                  alt="Avatar Eight"
                />
              </Row>
              <Column className="font-inter justify-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[99%]">
                <Row className="items-center w-[98%]">
                  <Row className="items-center justify-between w-[30%]">
                    <Stack
                      className="bg-cover bg-repeat lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:pl-[29px] xl:pl-[37px] 2xl:pl-[42px] 3xl:pl-[50px] rounded-radius16 lg:w-[41px] xl:w-[51px] 2xl:w-[58px] 3xl:w-[69px]"
                      style={{
                        backgroundImage: "url('images/img_avatar.png')",
                      }}
                    >
                      <Img
                        src="images/img_settings_15X15.svg"
                        className="absolute lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] top-[0] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                        alt="settings Two"
                      />
                    </Stack>
                    <Column className="w-[64%]">
                      <Text
                        className="text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Online
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_user_32X32.svg"
                    className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[180px] xl:ml-[225px] 2xl:ml-[254px] 3xl:ml-[304px] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                    alt="user One"
                  />
                  <Img src="images/img_call.svg" className="call" alt="call" />
                  <Img
                    src="images/img_videocamera.svg"
                    className="call"
                    alt="videocamera"
                  />
                  <Img src="images/img_eye.svg" className="call" alt="eye" />
                </Row>
                <Column className="justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[43%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="Avatar"
                      alt="Avatar Nine"
                    />
                    <Column className="justify-start w-[82%]">
                      <Row className="items-start pr-[3px] pt-[3px] w-[56%]">
                        <Text className="Name" as="h5" variant="h5">
                          Anne Carry
                        </Text>
                        <Text className="time_Five" as="h6" variant="h6">
                          4min
                        </Text>
                      </Row>
                      <Row className="bg-gray_100 items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius12 w-[100%]">
                        <Button
                          className="flex items-center justify-center overflowmenu"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillLightblue20033"
                        >
                          <Img
                            src="images/img_forward.svg"
                            className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                            alt="forward"
                          />
                        </Button>
                        <Line className="bg-gray_500_7e h-[4px] rounded-radius2 w-[67%]" />
                        <Text className="rowtime" as="h6" variant="h6">
                          0:06
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[83%]"
                    orientation="vertical"
                  >
                    <Row className="listavatar_ten">
                      <Img
                        src="images/img_avatar.png"
                        className="Avatar"
                        alt="Avatar Ten"
                      />
                      <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[78%]">
                        <Row className="items-start pr-[2px] py-[2px] w-[72%]">
                          <Text className="Username_Ten" as="h5" variant="h5">
                            Marriet Miles
                          </Text>
                          <Text className="time_Seven" as="h6" variant="h6">
                            4min
                          </Text>
                        </Row>
                        <Text className="columnavatar1" as="h5" variant="h5">
                          Yes, I saw his post yesterday
                        </Text>
                      </Column>
                    </Row>
                    <Row className="listavatar_ten">
                      <Img
                        src="images/img_avatar_48X48.png"
                        className="Avatar"
                        alt="Avatar Eleven"
                      />
                      <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[78%]">
                        <Row className="items-start pr-[2px] py-[2px] w-[72%]">
                          <Text className="Username_Ten" as="h5" variant="h5">
                            Marriet Miles
                          </Text>
                          <Text className="time_Seven" as="h6" variant="h6">
                            4min
                          </Text>
                        </Row>
                        <Text className="columnavatar1" as="h5" variant="h5">
                          Yes, I saw his post yesterday
                        </Text>
                      </Column>
                    </Row>
                  </List>
                  <Row className="items-start justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar"
                      alt="Avatar Twelve"
                    />
                    <Column className="justify-start w-[82%]">
                      <Row className="items-start pr-[3px] pt-[3px] w-[56%]">
                        <Text className="Name" as="h5" variant="h5">
                          Anne Carry
                        </Text>
                        <Text className="time_Five" as="h6" variant="h6">
                          4min
                        </Text>
                      </Row>
                      <Row className="bg-gray_100 items-center justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius12 w-[100%]">
                        <Button
                          className="flex items-center justify-center overflowmenu"
                          shape="icbRoundedBorder12"
                          size="mdIcn"
                          variant="icbFillLightblue20033"
                        >
                          <Img
                            src="images/img_forward.svg"
                            className="flex items-center justify-center lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                            alt="forward One"
                          />
                        </Button>
                        <Line className="bg-gray_500_7e h-[4px] rounded-radius2 w-[67%]" />
                        <Text className="rowtime" as="h6" variant="h6">
                          0:06
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] pb-[3px] pr-[3px] w-[83%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="Avatar"
                      alt="Avatar Thirteen"
                    />
                    <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[78%]">
                      <Row className="items-start pr-[2px] py-[2px] w-[72%]">
                        <Text className="Username_Ten" as="h5" variant="h5">
                          Marriet Miles
                        </Text>
                        <Text className="time_Seven" as="h6" variant="h6">
                          4min
                        </Text>
                      </Row>
                      <Text className="columnavatar1" as="h5" variant="h5">
                        Yes, I saw his post yesterday
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[28%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar"
                      alt="Avatar Fourteen"
                    />
                    <Img
                      src="images/img_signal.svg"
                      className="lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[37%]"
                      alt="signal"
                    />
                  </Row>
                </Column>
                <Row className="items-center justify-between lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                  <Button
                    className="flex items-center justify-center mail_One1"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_minimize_48X48.svg"
                      className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                      alt="minimize"
                    />
                  </Button>
                  <Input
                    className="placeholder:text-gray_500 email"
                    wrapClassName="flex w-[91%]"
                    name="Field"
                    placeholder="Start typing…"
                    suffix={
                      <Img
                        src="images/img_user_1.svg"
                        className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                        alt="user"
                      />
                    }
                    shape="RoundedBorder12"
                    size="4xl"
                    variant="FillGray100"
                  ></Input>
                </Row>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default DirectMessagePage;
