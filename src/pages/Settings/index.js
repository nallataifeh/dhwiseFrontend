import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Button,
  Grid,
  Input,
  Line,
  Stack,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";

const SettingsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <Row className="items-center justify-between w-[60%]">
            <Sidebar className="w-[19%]" />
            <Column className="w-[73%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Account Informations
              </Text>
              <Row className="items-center lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[85%]">
                <Img
                  src="images/img_avatar.png"
                  className="xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius36 xl:w-[113px] 2xl:w-[128px] 3xl:w-[153px] lg:w-[91px]"
                  alt="Avatar"
                />
                <Column className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[71%]">
                  <Text className="text-gray_500 w-[auto]" as="h4" variant="h4">
                    Profile Picture
                  </Text>
                  <Row className="items-center justify-between lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                    <Button
                      className="font-bold font-inter xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[47%]"
                      shape="CircleBorder29"
                      size="xl"
                      variant="FillLightblue200"
                    >
                      Replace
                    </Button>
                    <Button
                      className="flex items-center justify-center text-center w-[47%]"
                      leftIcon={
                        <Img
                          src="images/img_trash_18X18.svg"
                          className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[4px] xl:w-[16px] xl:h-[17px] xl:mr-[6px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[7px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[8px]"
                          alt="trash"
                        />
                      }
                      shape="RoundedBorder12"
                      size="xl"
                      variant="OutlineGray50066"
                    >
                      <div className="bg-transparent font-bold font-sfprodisplay xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-red_A200">
                        Delete
                      </div>
                    </Button>
                  </Row>
                </Column>
              </Row>
              <Text
                className="lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] text-gray_500 w-[auto]"
                as="h4"
                variant="h4"
              >
                Basic Information
              </Text>
              <Grid className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Text className="columnlabel" as="h6" variant="h6">
                    name
                  </Text>
                  <Input
                    className="placeholder:text-gray_500 Group1405"
                    wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%] xl:mt-[12px]"
                    name="Group1445"
                    placeholder="Anne Carry"
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
                <Column className="justify-start w-[100%]">
                  <Text className="columnlabel" as="h6" variant="h6">
                    username
                  </Text>
                  <Input
                    className="placeholder:text-gray_500 email"
                    wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[9px] w-[100%] xl:mt-[12px]"
                    name="Group1444"
                    placeholder="annecarry"
                    suffix={
                      <Img
                        src="images/img_television.svg"
                        className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                        alt="television"
                      />
                    }
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
                <Column className="justify-start w-[100%]">
                  <Text className="columnlabel" as="h6" variant="h6">
                    Email
                  </Text>
                  <Input
                    className="placeholder:text-gray_500 Group1405"
                    wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%] xl:mt-[12px]"
                    name="email"
                    placeholder="anne.carry@mail.com"
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
                <Column className="justify-start w-[100%]">
                  <Text className="columnlabel" as="h6" variant="h6">
                    birthday
                  </Text>
                  <Input
                    className="placeholder:text-gray_500 email"
                    wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[9px] w-[100%] xl:mt-[12px]"
                    name="month"
                    placeholder="January 25, 1991"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
              </Grid>
              <Line className="bg-gray_500_6c h-[1px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]" />
              <Row className="items-center justify-evenly lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]">
                <Column className="w-[52%]">
                  <Text className="columnlabel" as="h6" variant="h6">
                    Country
                  </Text>
                  <Input
                    className="placeholder:text-gray_500 email"
                    wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[9px] w-[91%] xl:mt-[12px]"
                    name="Group1440"
                    placeholder="United States"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                    size="xl"
                  ></Input>
                </Column>
                <Column className="w-[48%]">
                  <Text className="columnlabel" as="h6" variant="h6">
                    state
                  </Text>
                  <Input
                    className="placeholder:text-gray_500 email"
                    wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[9px] w-[100%] xl:mt-[12px]"
                    name="Group1439"
                    placeholder="California"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                    size="xl"
                  ></Input>
                </Column>
              </Row>
              <Column className="justify-start lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[48%]">
                <Text className="columnlabel" as="h6" variant="h6">
                  City
                </Text>
                <Input
                  className="placeholder:text-gray_500 email"
                  wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[9px] w-[100%] xl:mt-[12px]"
                  name="Group1441"
                  placeholder="San Francisco"
                  suffix={
                    <Img
                      src="images/img_checkmark_18X18.svg"
                      className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder8"
                  size="xl"
                ></Input>
              </Column>
              <Button
                className="font-bold lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[29%]"
                shape="CircleBorder29"
                size="xl"
                variant="FillGreen400"
              >
                Save Changes
              </Button>
            </Column>
          </Row>
          <Row className="items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] w-[36%]">
            <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-gray_900 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[97%]">
              <Stack className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:ml-[212px] xl:ml-[265px] 2xl:ml-[299px] 3xl:ml-[359px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[28%]">
                <Img
                  src="images/img_group1436.png"
                  className="absolute right-[0] Image_Eight"
                  alt="Image"
                />
                <Column className="bg-light_blue_200 items-center justify-start xl:px-[11px] 2xl:px-[13px] 3xl:px-[15px] lg:px-[9px] Avatar9">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    1
                  </Text>
                </Column>
                <Row className="absolute font-sfprodisplay items-center justify-between w-[100%]">
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
                    className="Image_Eight"
                    alt="Avatar One"
                  />
                </Row>
              </Stack>
              <Column className="justify-start lg:mb-[204px] xl:mb-[256px] 2xl:mb-[288px] 3xl:mb-[345px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[145px] xl:mr-[181px] 2xl:mr-[204px] 3xl:mr-[244px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[50%]">
                <Text className="text-white_A700 w-[auto]" as="h3" variant="h3">
                  Settings
                </Text>
                <Column className="font-sfprodisplay justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Row className="items-center w-[73%]">
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_user_48X48.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                        alt="user One"
                      />
                    </Button>
                    <Text className="Button" as="h4" variant="h4">
                      My Account
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[76%]">
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_notification.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                        alt="notification"
                      />
                    </Button>
                    <Text className="Button" as="h4" variant="h4">
                      Notifications
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[85%]">
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_clock_48X48.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                        alt="clock"
                      />
                    </Button>
                    <Text className="Button" as="h4" variant="h4">
                      Activity History
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_alarm_48X48.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                        alt="alarm"
                      />
                    </Button>
                    <Text className="Button" as="h4" variant="h4">
                      Billing and Payment
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[95%]">
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_lock.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                        alt="lock"
                      />
                    </Button>
                    <Text className="Button" as="h4" variant="h4">
                      Security & Privacy
                    </Text>
                  </Row>
                  <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[47%]">
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_settings_1.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                        alt="settings Three"
                      />
                    </Button>
                    <Text className="Button" as="h4" variant="h4">
                      Help
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default SettingsPage;
