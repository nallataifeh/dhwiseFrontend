import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Img, Button, Text, List, Input } from "components";

const VideoChatPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-sfprodisplay md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex flex-1 h-[1024px] md:h-[1199px] sm:h-[1199px] md:ml-[0] sm:ml-[0] ml-[5px] md:px-[20px] sm:px-[20px] relative w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-between my-[auto] w-[73%]">
            <Line className="bg-white_A700_7e h-[128px] md:h-[5px] sm:h-[5px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[5px]" />
            <div
              className="bg-cover bg-no-repeat flex flex-col md:gap-[40px] sm:gap-[40px] gap-[667px] justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[auto]"
              style={{ backgroundImage: "url('images/img_group1428.png')" }}
            >
              <Img
                src="images/img_image_199X160.png"
                className="h-[199px] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[5px] object-cover rounded-radius12 md:w-[100%] sm:w-[100%] w-[20%]"
                alt="Image"
              />
              <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[226px] mr-[300px] md:w-[100%] sm:w-[100%] w-[36%]">
                <Button
                  className="flex h-[78px] items-center justify-center w-[78px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_iconmicoff.svg"
                    className="h-[36px]"
                    alt="IconMicOff"
                  />
                </Button>
                <Button
                  className="flex h-[78px] items-center justify-center w-[78px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillWhiteA70033"
                >
                  <Img
                    src="images/img_minimize_78X78.svg"
                    className="h-[36px]"
                    alt="minimize"
                  />
                </Button>
                <Button
                  className="flex h-[78px] items-center justify-center w-[78px]"
                  shape="icbRoundedBorder24"
                  size="xlIcn"
                  variant="icbFillRedA200"
                >
                  <Img
                    src="images/img_alarm.svg"
                    className="h-[36px]"
                    alt="alarm"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-end justify-end ml-[-75px] my-[auto] p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[34%] z-[1]">
            <div className="flex flex-row gap-[20px] items-center justify-end mt-[5px] md:w-[100%] sm:w-[100%] w-[34%]">
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
                alt="Avatar"
              />
            </div>
            <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[98%]">
              <div className="flex flex-row font-sfprodisplay items-center justify-between md:w-[100%] sm:w-[100%] w-[97%]">
                <div className="flex flex-row gap-[15px] items-end justify-between w-[auto]">
                  <div
                    className="bg-cover bg-no-repeat md:h-[15px] sm:h-[15px] h-[58px] pb-[42px] sm:pl-[20px] md:pl-[40px] pl-[42px] relative rounded-radius12 w-[58px]"
                    style={{ backgroundImage: "url('images/img_avatar.png')" }}
                  >
                    <Img
                      src="images/img_settings_15X15.svg"
                      className="absolute h-[15px] right-[0] top-[0] w-[15px]"
                      alt="settings Two"
                    />
                  </div>
                  <div className="flex flex-col gap-[14px] items-start justify-start mt-[5px] w-[auto]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Marriet Miles
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Ongoing Call…
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_eye.svg"
                  className="h-[25px] w-[25px]"
                  alt="eye"
                />
              </div>
              <div className="flex flex-col font-inter items-start justify-start mt-[60px] md:w-[100%] sm:w-[100%] w-[88%]">
                <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar One"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                    <div className="flex flex-row items-start justify-start pr-[3px] pt-[3px] md:w-[100%] sm:w-[100%] w-[57%]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Anne Carry
                      </Text>
                      <Text
                        className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        4min
                      </Text>
                    </div>
                    <div className="bg-gray_100 flex flex-row items-center justify-between p-[10px] rounded-radius12 w-[100%]">
                      <Button
                        className="flex h-[38px] items-center justify-center w-[38px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbFillLightblue20033"
                      >
                        <Img
                          src="images/img_forward.svg"
                          className="h-[18px]"
                          alt="forward"
                        />
                      </Button>
                      <Line className="bg-gray_500_7e h-[4px] my-[17px] rounded-radius2 w-[auto]" />
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        0:06
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col gap-[40px] grid mt-[49px] md:w-[100%] sm:w-[100%] w-[84%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Two"
                    />
                    <div className="flex flex-col gap-[14px] items-start justify-start mb-[8px] w-[auto]">
                      <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[72%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Yes, I saw his post yesterday
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Three"
                    />
                    <div className="flex flex-col gap-[14px] items-start justify-start mb-[8px] w-[auto]">
                      <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[72%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Yes, I saw his post yesterday
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-[15px] items-start justify-between mt-[40px] w-[100%]">
                  <Img
                    src="images/img_avatar.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Four"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                    <div className="flex flex-row items-start justify-start pr-[3px] pt-[3px] md:w-[100%] sm:w-[100%] w-[57%]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Anne Carry
                      </Text>
                      <Text
                        className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        4min
                      </Text>
                    </div>
                    <div className="bg-gray_100 flex flex-row items-center justify-between p-[10px] rounded-radius12 w-[100%]">
                      <Button
                        className="flex h-[38px] items-center justify-center w-[38px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbFillLightblue20033"
                      >
                        <Img
                          src="images/img_forward.svg"
                          className="h-[18px]"
                          alt="forward One"
                        />
                      </Button>
                      <Line className="bg-gray_500_7e h-[4px] my-[17px] rounded-radius2 w-[auto]" />
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        0:06
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[49px] pb-[3px] pr-[3px] md:w-[100%] sm:w-[100%] w-[84%]">
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Five"
                  />
                  <div className="flex flex-col gap-[14px] items-start justify-start mb-[8px] w-[79%]">
                    <div className="flex flex-row items-start justify-start pr-[2px] py-[2px] md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-normal ml-[5px] not-italic text-gray_500 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        4min
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Yes, I saw his post yesterday
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start mt-[30px] md:w-[100%] sm:w-[100%] w-[29%]">
                  <Img
                    src="images/img_avatar.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar Six"
                  />
                  <div className="bg-gray_500_cc h-[7px] ml-[15px] my-[15px] rounded-radius50 w-[7px]"></div>
                  <div className="bg-gray_500_99 h-[7px] mb-[12px] ml-[5px] mt-[19px] rounded-radius50 w-[7px]"></div>
                  <div className="bg-gray_500_33 h-[7px] mb-[9px] ml-[5px] mt-[22px] rounded-radius50 w-[7px]"></div>
                </div>
              </div>
              <Input
                className="font-inter font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="flex mt-[55px] w-[100%]"
                name="WriteBox"
                placeholder="Start typing…"
                prefix={
                  <div className="h-[38px] mr-[10px] w-[38px] bg-gray_500_33 p-[10px] rounded-radius12 flex justify-center items-center">
                    <Img
                      src="images/img_plus_38X38.svg"
                      className="my-[auto]"
                      alt="plus"
                    />
                  </div>
                }
                suffix={
                  <Img
                    src="images/img_user_1.svg"
                    className="ml-[35px] my-[auto]"
                    alt="user"
                  />
                }
                shape="RoundedBorder12"
                size="7xl"
                variant="FillGray100"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoChatPage;
