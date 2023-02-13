import React from "react";

import Sidebar from "components/Sidebar";
import { Text, Img, Button, Input, Line } from "components";

const SettingsPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <Sidebar className="flex flex-col md:hidden sm:hidden w-[165px]" />
            <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Account Informations
              </Text>
              <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-start mt-[64px] md:w-[100%] sm:w-[100%] w-[86%]">
                <Img
                  src="images/img_avatar.png"
                  className="h-[128px] md:h-[auto] sm:h-[auto] object-cover rounded-radius36 w-[128px]"
                  alt="Avatar"
                />
                <div className="flex flex-col gap-[23px] items-start justify-start sm:w-[100%] w-[71%]">
                  <Text
                    className="text-gray_500 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Profile Picture
                  </Text>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button
                      className="cursor-pointer font-bold font-inter min-w-[180px] text-[14px] text-center text-white_A700 w-[auto]"
                      shape="CircleBorder29"
                      size="8xl"
                      variant="FillLightblue200"
                    >
                      Replace
                    </Button>
                    <Button
                      className="flex items-center justify-center text-center"
                      leftIcon={
                        <Img
                          src="images/img_trash_18X18.svg"
                          className="mr-[7px] text-center"
                          alt="trash"
                        />
                      }
                      shape="RoundedBorder12"
                      size="7xl"
                      variant="OutlineGray50066"
                    >
                      <div className="bg-transparent cursor-pointer font-bold font-sfprodisplay text-[14px] text-left text-red_A200">
                        Delete
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="mt-[62px] text-gray_500 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Basic Information
              </Text>
              <div className="md:gap-[20px] sm:gap-[20px] gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[36px] w-[100%]">
                <div className="flex flex-1 flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    name
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="Group1445"
                    placeholder="Anne Carry"
                    shape="RoundedBorder8"
                    size="3xl"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    username
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="Group1444"
                    placeholder="annecarry"
                    suffix={
                      <Img
                        src="images/img_television.svg"
                        className="ml-[35px] my-[auto]"
                        alt="television"
                      />
                    }
                    shape="RoundedBorder8"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Email
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    name="email"
                    placeholder="anne.carry@mail.com"
                    shape="RoundedBorder8"
                    size="3xl"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-[14px] items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    birthday
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="month"
                    placeholder="January 25, 1991"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="ml-[35px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                  ></Input>
                </div>
              </div>
              <Line className="bg-gray_500_6c h-[1px] mt-[40px] w-[100%]" />
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly mt-[43px] w-[100%]">
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[14px] items-start justify-start md:w-[100%] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Country
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex sm:w-[100%] w-[91%]"
                    name="Group1440"
                    placeholder="United States"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="ml-[35px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                    size="2xl"
                  ></Input>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[14px] items-start justify-start md:w-[100%] sm:w-[100%] w-[48%]">
                  <Text
                    className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    state
                  </Text>
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="Group1439"
                    placeholder="California"
                    suffix={
                      <Img
                        src="images/img_checkmark_18X18.svg"
                        className="ml-[35px] my-[auto]"
                        alt="checkmark"
                      />
                    }
                    shape="RoundedBorder8"
                    size="2xl"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-[14px] items-start justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[48%]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  City
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="flex w-[100%]"
                  name="Group1441"
                  placeholder="San Francisco"
                  suffix={
                    <Img
                      src="images/img_checkmark_18X18.svg"
                      className="ml-[35px] my-[auto]"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder8"
                  size="2xl"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-bold min-w-[180px] mt-[64px] text-[14px] text-center text-white_A700 w-[auto]"
                shape="CircleBorder29"
                size="8xl"
                variant="FillGreen400"
              >
                Save Changes
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row gap-[10px] items-center justify-start pl-[5px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[1%]"></div>
            <div className="bg-gray_900 flex flex-col gap-[51px] justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[98%]">
              <div className="h-[48px] md:h-[53px] sm:h-[53px] md:ml-[0] sm:ml-[0] ml-[299px] mt-[5px] relative md:w-[100%] sm:w-[100%] w-[28%]">
                <Img
                  src="images/img_group1436.png"
                  className="absolute h-[48px] inset-y-[0] my-[auto] object-cover right-[0] rounded-radius12 w-[48px]"
                  alt="Image"
                />
                <div className="bg-light_blue_200 flex flex-col h-[100%] items-center justify-start my-[auto] p-[13px] rounded-radius12 w-[48px]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    1
                  </Text>
                </div>
                <div className="absolute flex flex-row font-sfprodisplay gap-[20px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                  <Button
                    className="cursor-pointer font-bold h-[48px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]"
                    shape="RoundedBorder12"
                    size="5xl"
                    variant="FillLightblue200"
                  >
                    1
                  </Button>
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                    alt="Avatar One"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[40px] items-start justify-start mb-[288px] md:ml-[0] sm:ml-[0] ml-[5px] mr-[204px] md:w-[100%] sm:w-[100%] w-[50%]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Settings
                </Text>
                <div className="flex flex-col font-sfprodisplay gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[74%]">
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_user_48X48.svg"
                        className="h-[22px]"
                        alt="user One"
                      />
                    </Button>
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      My Account
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_notification.svg"
                        className="h-[22px]"
                        alt="notification"
                      />
                    </Button>
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Notifications
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_clock_48X48.svg"
                        className="h-[22px]"
                        alt="clock"
                      />
                    </Button>
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Activity History
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_alarm_48X48.svg"
                        className="h-[22px]"
                        alt="alarm"
                      />
                    </Button>
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Billing and Payment
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_lock.svg"
                        className="h-[22px]"
                        alt="lock"
                      />
                    </Button>
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Security & Privacy
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] sm:w-[100%] w-[48%]">
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50066"
                    >
                      <Img
                        src="images/img_settings_1.svg"
                        className="h-[22px]"
                        alt="settings Three"
                      />
                    </Button>
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
