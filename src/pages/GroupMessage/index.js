import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Button, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const GroupMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[45px] sm:gap-[45px] items-center justify-between w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[45px] items-start justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <Sidebar className="flex flex-col md:hidden sm:hidden w-[165px]" />
            <div className="flex flex-1 flex-col gap-[40px] items-start justify-start sm:mt-[0] mt-[40px] w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[63px] justify-start md:w-[100%] sm:w-[100%] w-[95%]">
                <div className="flex flex-row gap-[15px] items-center justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[95%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex sm:w-[100%] w-[82%]"
                    name="Search"
                    placeholder="Search in social…"
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer mr-[15px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#8f92a1"
                          className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
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
                    className="flex h-[48px] items-center justify-center my-[5px] w-[48px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillGreen400"
                  >
                    <Img
                      src="images/img_laptop_14X14.svg"
                      className="h-[22px]"
                      alt="laptop"
                    />
                  </Button>
                </div>
                <div className="flex flex-col font-inter gap-[42px] items-start justify-start mr-[12px] md:w-[100%] sm:w-[100%] w-[97%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Inbox
                  </Text>
                  <div className="flex flex-row gap-[20px] items-start justify-start py-[2px] md:w-[100%] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-bold mt-[2px] text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Direct Messages
                    </Text>
                    <div className="flex flex-col gap-[6px] items-start justify-start mt-[2px] w-[28%]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Group Chat
                      </Text>
                      <Line className="bg-gray_900 h-[2px] w-[96%]" />
                    </div>
                    <Text
                      className="font-bold text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Archived
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex-col gap-[20px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex md:flex-1 sm:flex-1 flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[90%]">
                  <div className="flex flex-row gap-[15px] items-center justify-between w-[auto]">
                    <div className="md:h-[28px] sm:h-[28px] h-[51px] relative w-[51px]">
                      <div className="absolute flex h-[28px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_22.png"
                          className="h-[28px] my-[auto] object-cover rounded-radius8 w-[28px]"
                          alt="Avatar"
                        />
                        <Img
                          src="images/img_image_28X28.png"
                          className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-radius8 w-[28px] z-[1]"
                          alt="Image"
                        />
                      </div>
                      <Button
                        className="absolute bottom-[0] cursor-pointer font-bold h-[28px] inset-x-[0] mx-[auto] text-[10.32px] text-center text-white_A700 w-[28px]"
                        shape="RoundedBorder4"
                        size="3xl"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter gap-[8px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-end justify-start mt-[3px] w-[auto]">
                    <Text
                      className="font-inter font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      3:03pm
                    </Text>
                    <Button
                      className="cursor-pointer font-medium font-sfprodisplay h-[18px] text-[10px] text-center text-white_A700 w-[18px]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[20px] rounded-radius12 w-[100%]">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[auto]">
                    <div className="md:h-[28px] sm:h-[28px] h-[51px] relative w-[51px]">
                      <div className="absolute flex h-[28px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_8.png"
                          className="h-[28px] my-[auto] object-cover rounded-radius8 w-[28px]"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_image_8.png"
                          className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-radius8 w-[28px] z-[1]"
                          alt="Image One"
                        />
                      </div>
                      <Button
                        className="absolute bottom-[0] cursor-pointer font-bold h-[28px] inset-x-[0] mx-[auto] text-[10.32px] text-center text-white_A700 w-[28px]"
                        shape="RoundedBorder4"
                        size="3xl"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter gap-[8px] items-start justify-start w-[70%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[5px] items-end justify-start w-[auto]">
                    <Text
                      className="font-inter font-normal mt-[4px] not-italic text-gray_500 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      3:03pm
                    </Text>
                    <Button
                      className="cursor-pointer font-medium font-sfprodisplay h-[18px] text-[10px] text-center text-white_A700 w-[18px]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </div>
                </div>
                <div className="flex md:flex-1 sm:flex-1 flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[90%]">
                  <div className="flex flex-row font-sfprodisplay gap-[15px] items-center justify-between w-[auto]">
                    <div className="md:h-[28px] sm:h-[28px] h-[51px] relative w-[51px]">
                      <div className="absolute flex h-[28px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_9.png"
                          className="h-[28px] my-[auto] object-cover rounded-radius8 w-[28px]"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_6.png"
                          className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-radius8 w-[28px] z-[1]"
                          alt="Image Two"
                        />
                      </div>
                      <Button
                        className="absolute bottom-[0] cursor-pointer font-bold h-[28px] inset-x-[0] mx-[auto] text-[10.32px] text-center text-white_A700 w-[28px]"
                        shape="RoundedBorder4"
                        size="3xl"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </div>
                    <div className="flex flex-col font-inter gap-[8px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_500 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-inter font-normal mt-[7px] not-italic text-gray_500 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    3:03pm
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-gray_500_48 h-[128px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
            <div className="bg-white_A700 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[60px] items-end justify-end p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[20px] items-center justify-end mt-[5px] md:w-[100%] sm:w-[100%] w-[17%]">
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
                  alt="Avatar Three"
                />
              </div>
              <div className="flex flex-col font-inter items-start justify-start w-[100%]">
                <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between md:w-[100%] sm:w-[100%] w-[43%]">
                    <div className="flex h-[58px] md:h-[auto] sm:h-[auto] relative w-[auto]">
                      <div className="flex h-[58px] md:h-[auto] sm:h-[auto] my-[auto] w-[69%]">
                        <Img
                          src="images/img_avatar_58X58.png"
                          className="h-[58px] my-[auto] object-cover rounded-radius16 w-[58px]"
                          alt="Avatar Four"
                        />
                        <Img
                          src="images/img_avatar_8.png"
                          className="h-[58px] ml-[-10px] my-[auto] object-cover rounded-radius16 w-[58px] z-[1]"
                          alt="Avatar Five"
                        />
                      </div>
                      <Text
                        className="bg-gray_900 flex h-[58px] items-center justify-center ml-[-10px] my-[auto] rounded-radius16 text-center text-white_A700 w-[58px] z-[1]"
                        as="h3"
                        variant="h3"
                      >
                        +4
                      </Text>
                    </div>
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Beach Trip
                    </Text>
                  </div>
                  <Img
                    src="images/img_call.svg"
                    className="h-[25px] md:ml-[0] sm:ml-[0] ml-[240px] w-[25px]"
                    alt="call"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[25px] md:ml-[0] sm:ml-[0] ml-[40px] w-[25px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_eye.svg"
                    className="h-[25px] md:ml-[0] sm:ml-[0] ml-[40px] w-[25px]"
                    alt="eye"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[70px] md:w-[100%] sm:w-[100%] w-[46%]">
                  <List
                    className="flex-col gap-[40px] grid md:w-[100%] sm:w-[100%] w-[79%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[15px] items-start justify-between my-[0] pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar_38X38.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Six"
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
                    <div className="flex flex-row gap-[15px] items-start justify-between my-[0] pb-[3px] pr-[3px] w-[100%]">
                      <Img
                        src="images/img_avatar_1.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Seven"
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
                      src="images/img_avatar_48X48.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Eight"
                    />
                    <div className="flex flex-col gap-[12px] items-start justify-start mt-[2px] w-[auto]">
                      <div className="flex flex-row items-start justify-start md:w-[100%] sm:w-[100%] w-[53%]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Gunther Ackner
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-between rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_photo2.png"
                          className="h-[80px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[80px]"
                          alt="PhotoTwo"
                        />
                        <Img
                          src="images/img_photo3.png"
                          className="h-[80px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[80px]"
                          alt="PhotoThree"
                        />
                        <Img
                          src="images/img_5.png"
                          className="h-[80px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[80px]"
                          alt="PhotoFive"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[49px] md:w-[100%] sm:w-[100%] w-[95%]">
                    <Img
                      src="images/img_avatar_8.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Nine"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[83%]">
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
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[49px] pb-[3px] pr-[3px] md:w-[100%] sm:w-[100%] w-[79%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                      alt="Avatar Ten"
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
                </div>
                <div className="flex md:flex-col sm:flex-col flex-row gap-[15px] items-center justify-between mt-[91px] w-[100%]">
                  <Button
                    className="flex h-[48px] items-center justify-center md:mt-[0] sm:mt-[0] my-[5px] w-[48px]"
                    shape="icbRoundedBorder12"
                    size="mdIcn"
                    variant="icbFillIndigoA200"
                  >
                    <Img
                      src="images/img_minimize_48X48.svg"
                      className="h-[22px]"
                      alt="minimize"
                    />
                  </Button>
                  <Input
                    className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex md:w-[100%] sm:w-[100%] w-[auto]"
                    name="Field"
                    placeholder="Start typing…"
                    suffix={
                      <Img
                        src="images/img_user_1.svg"
                        className="ml-[35px] my-[auto]"
                        alt="user"
                      />
                    }
                    shape="RoundedBorder12"
                    size="6xl"
                    variant="FillGray100"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupMessagePage;
