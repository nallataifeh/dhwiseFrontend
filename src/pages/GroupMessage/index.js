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

const GroupMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-sfprodisplay items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <Row className="items-start justify-between w-[42%]">
            <Sidebar className="w-[28%]" />
            <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[65%]">
              <Column className="justify-start w-[95%]">
                <Row className="items-center justify-end ml-[auto] w-[95%]">
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
                    className="flex items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mail_One1"
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
                <Column className="font-inter justify-start xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] lg:mr-[8px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[97%]">
                  <Text className="text-gray_900 w-[auto]" as="h1" variant="h1">
                    Inbox
                  </Text>
                  <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] py-[2px] w-[84%]">
                    <Text
                      className="font-bold mt-[2px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Direct Messages
                    </Text>
                    <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] mt-[2px] w-[27%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Group Chat
                      </Text>
                      <Line className="bg-gray_900 h-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[95%]" />
                    </Column>
                    <Text
                      className="lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] NavigationTab2"
                      as="h5"
                      variant="h5"
                    >
                      Archived
                    </Text>
                  </Row>
                </Column>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-start justify-between mx-[auto] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[90%]">
                  <Row className="items-center justify-between w-[60%]">
                    <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]">
                      <Stack className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_22.png"
                          className="Avatar4"
                          alt="Avatar"
                        />
                        <Img
                          src="images/img_image_28X28.png"
                          className="Avatar_One2"
                          alt="Image"
                        />
                      </Stack>
                      <Button
                        className="absolute bottom-[0] font-bold lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] inset-x-[0] mx-[auto] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </Stack>
                    <Column className="font-inter w-[69%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text className="time4" as="h5" variant="h5">
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="items-end justify-start mt-[3px] pt-[1px] px-[1px] w-[14%]">
                    <Text className="Right1" as="h6" variant="h6">
                      3:03pm
                    </Text>
                    <Button
                      className="font-medium font-sfprodisplay lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center trash"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
                <Row className="bg-white_A700 items-center justify-between 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius12 w-[100%]">
                  <Row className="items-center w-[60%]">
                    <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]">
                      <Stack className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_8.png"
                          className="Avatar4"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_image_8.png"
                          className="Avatar_One2"
                          alt="Image One"
                        />
                      </Stack>
                      <Button
                        className="absolute bottom-[0] font-bold lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] inset-x-[0] mx-[auto] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </Stack>
                    <Column className="font-inter lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[69%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text className="time4" as="h5" variant="h5">
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Column className="items-end pt-[1px] px-[1px] w-[14%]">
                    <Text className="Right1" as="h6" variant="h6">
                      3:03pm
                    </Text>
                    <Button
                      className="font-medium font-sfprodisplay lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center trash"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Column>
                </Row>
                <Row className="items-start justify-between mx-[auto] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] pr-[1px] w-[90%]">
                  <Row className="font-sfprodisplay items-center justify-between w-[60%]">
                    <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:w-[36px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]">
                      <Stack className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] top-[0] w-[100%]">
                        <Img
                          src="images/img_avatar_9.png"
                          className="Avatar4"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_6.png"
                          className="Avatar_One2"
                          alt="Image Two"
                        />
                      </Stack>
                      <Button
                        className="absolute bottom-[0] font-bold lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] inset-x-[0] mx-[auto] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray900"
                      >
                        +9
                      </Button>
                    </Stack>
                    <Column className="font-inter w-[69%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Close Friends
                      </Text>
                      <Text className="time4" as="h5" variant="h5">
                        Thank you for sharing
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-inter duration" as="h6" variant="h6">
                    3:03pm
                  </Text>
                </Row>
              </List>
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
                  alt="Avatar Three"
                />
              </Row>
              <Column className="font-inter justify-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[99%]">
                <Row className="items-center w-[98%]">
                  <Row className="items-center justify-between w-[42%]">
                    <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] w-[53%]">
                      <Stack className="absolute lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] left-[0] w-[69%]">
                        <Img
                          src="images/img_avatar_58X58.png"
                          className="absolute lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] left-[0] rounded-radius16 lg:w-[41px] xl:w-[51px] 2xl:w-[58px] 3xl:w-[69px]"
                          alt="Avatar Four"
                        />
                        <Img
                          src="images/img_avatar_8.png"
                          className="absolute lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] right-[0] rounded-radius16 lg:w-[41px] xl:w-[51px] 2xl:w-[58px] 3xl:w-[69px]"
                          alt="Avatar Five"
                        />
                      </Stack>
                      <Text
                        className="absolute bg-gray_900 flex items-center xl:px-[12px] 2xl:px-[14px] 3xl:px-[16px] lg:px-[9px] right-[0] rounded-radius16 text-white_A700 w-[58px]"
                        as="h3"
                        variant="h3"
                      >
                        +4
                      </Text>
                    </Stack>
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Beach Trip
                    </Text>
                  </Row>
                  <Img
                    src="images/img_call.svg"
                    className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[170px] xl:ml-[213px] 2xl:ml-[240px] 3xl:ml-[288px] lg:w-[17px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="call"
                  />
                  <Img
                    src="images/img_videocamera.svg"
                    className="call"
                    alt="videocamera"
                  />
                  <Img src="images/img_eye.svg" className="call" alt="eye" />
                </Row>
                <Column className="justify-start lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[45%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[79%]"
                    orientation="vertical"
                  >
                    <Row className="listavatar_ten">
                      <Img
                        src="images/img_avatar_38X38.png"
                        className="Avatar"
                        alt="Avatar Six"
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
                        src="images/img_avatar_1.png"
                        className="Avatar"
                        alt="Avatar Seven"
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
                      src="images/img_avatar_48X48.png"
                      className="Avatar"
                      alt="Avatar Eight"
                    />
                    <Column className="justify-start mt-[2px] w-[83%]">
                      <Row className="items-start w-[53%]">
                        <Text
                          className="font-bold text-gray_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Gunther Ackner
                        </Text>
                        <Text
                          className="ml-[1px] mt-[1px] rowtime"
                          as="h6"
                          variant="h6"
                        >
                          4min
                        </Text>
                      </Row>
                      <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius8 w-[100%]">
                        <Img
                          src="images/img_photo2.png"
                          className="PhotoTwo1"
                          alt="PhotoTwo"
                        />
                        <Img
                          src="images/img_photo3.png"
                          className="PhotoTwo1"
                          alt="PhotoThree"
                        />
                        <Img
                          src="images/img_5.png"
                          className="PhotoTwo1"
                          alt="PhotoFive"
                        />
                      </Row>
                    </Column>
                  </Row>
                  <Row className="items-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[95%]">
                    <Img
                      src="images/img_avatar_8.png"
                      className="Avatar"
                      alt="Avatar Nine"
                    />
                    <Column className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[82%]">
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
                  <Row className="items-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] pb-[3px] pr-[3px] w-[79%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="Avatar"
                      alt="Avatar Ten"
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
                </Column>
                <Row className="items-center justify-between 3xl:mt-[109px] lg:mt-[64px] xl:mt-[80px] 2xl:mt-[91px] w-[100%]">
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

export default GroupMessagePage;
