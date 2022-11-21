import React from "react";

import {
  Row,
  Stack,
  Line,
  Column,
  Img,
  Button,
  Text,
  List,
  Input,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";

const VideoChatPage = () => {
  return (
    <>
      <Row className="bg-gray_100 font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[88%]">
          <Row className="absolute items-center justify-between left-[0] w-[72%]">
            <Line className="bg-white_A700_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius25 w-[5px]" />
            <Column
              className="bg-cover bg-repeat lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[98%]"
              style={{ backgroundImage: "url('images/img_group1428.png')" }}
            >
              <Img
                src="images/img_image_199X160.png"
                className="lg:h-[142px] xl:h-[178px] 2xl:h-[200px] 3xl:h-[239px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] rounded-radius12 w-[20%]"
                alt="Image"
              />
              <Row className="items-center lg:ml-[160px] xl:ml-[201px] 2xl:ml-[226px] 3xl:ml-[271px] lg:mr-[213px] xl:mr-[266px] 2xl:mr-[300px] 3xl:mr-[360px] lg:mt-[473px] xl:mt-[592px] 2xl:mt-[666px] 3xl:mt-[799px] w-[36%]">
                <Button
                  className="flex lg:h-[56px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] items-center justify-center lg:w-[55px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_iconmicoff.svg"
                    className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                    alt="IconMicOff"
                  />
                </Button>
                <Button
                  className="flex lg:h-[56px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] items-center justify-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:w-[55px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillWhiteA70033"
                >
                  <Img
                    src="images/img_minimize_78X78.svg"
                    className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                    alt="minimize"
                  />
                </Button>
                <Button
                  className="flex lg:h-[56px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] items-center justify-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:w-[55px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillRedA200"
                >
                  <Img
                    src="images/img_alarm.svg"
                    className="flex items-center justify-center lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px]"
                    alt="alarm"
                  />
                </Button>
              </Row>
            </Column>
          </Row>
          <Column className="absolute bg-white_A700 items-end justify-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] right-[0] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[34%]">
            <Row className="items-center justify-end lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[33%]">
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
            <Column className="justify-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[97%]">
              <Row className="font-sfprodisplay items-center justify-between w-[97%]">
                <Row className="items-end justify-between w-[62%]">
                  <Stack
                    className="bg-cover bg-repeat lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:pl-[29px] xl:pl-[37px] 2xl:pl-[42px] 3xl:pl-[50px] rounded-radius12 lg:w-[41px] xl:w-[51px] 2xl:w-[58px] 3xl:w-[69px]"
                    style={{ backgroundImage: "url('images/img_avatar.png')" }}
                  >
                    <Img
                      src="images/img_settings_15X15.svg"
                      className="absolute lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] right-[0] top-[0] lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                      alt="settings Two"
                    />
                  </Stack>
                  <Column className="justify-start mb-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[64%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Marriet Miles
                    </Text>
                    <Text className="Enteryouremai" as="h5" variant="h5">
                      Ongoing Call…
                    </Text>
                  </Column>
                </Row>
                <Img
                  src="images/img_eye.svg"
                  className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[17px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                  alt="eye"
                />
              </Row>
              <Column className="font-inter justify-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[87%]">
                <Row className="items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="Avatar"
                    alt="Avatar One"
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
                      alt="Avatar Two"
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
                      alt="Avatar Three"
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
                    alt="Avatar Four"
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
                    alt="Avatar Five"
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
                    alt="Avatar Six"
                  />
                  <div className="bg-gray_500_cc lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] rounded-radius50 lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"></div>
                  <div className="bg-gray_500_99 lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] rounded-radius50 lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"></div>
                  <div className="bg-gray_500_33 lg:h-[5px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] rounded-radius50 lg:w-[4px] xl:w-[6px] 2xl:w-[7px] 3xl:w-[8px]"></div>
                </Row>
              </Column>
              <Input
                className="font-inter placeholder:text-gray_500 email"
                wrapClassName="2xl:mt-[55px] 3xl:mt-[66px] flex lg:mt-[39px] w-[100%] xl:mt-[48px]"
                name="WriteBox"
                placeholder="Start typing…"
                prefix={
                  <Img
                    src="images/img_plus_38X38.svg"
                    className="bg-gray_500_33 lg:w-[12px] lg:h-[13px] lg:ml-[6px] lg:mr-[7px] xl:w-[16px] xl:h-[17px] xl:mx-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[9px] 2xl:mr-[10px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[10px] 3xl:mr-[12px] rounded-radius50 my-[auto]"
                    alt="plus"
                  />
                }
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
            </Column>
          </Column>
        </Stack>
      </Row>
    </>
  );
};

export default VideoChatPage;
