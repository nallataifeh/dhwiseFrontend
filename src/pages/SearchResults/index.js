import React from "react";

import {
  Column,
  Row,
  Input,
  Img,
  Text,
  Button,
  Grid,
  Stack,
  List,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const SearchResultsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-end mx-[auto] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Row className="items-start justify-between w-[69%]">
            <Sidebar className="w-[17%]" />
            <Column className="items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[77%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="bg-white_A700 items-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius12 w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-medium p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                    wrapClassName="2xl:ml-[7px] 3xl:ml-[8px] flex lg:ml-[4px] w-[83%] xl:ml-[6px]"
                    name="FrameTwo"
                    placeholder="Nass"
                    prefix={
                      <Img
                        src="images/img_search_18X18.svg"
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[5px] lg:mr-[10px] xl:w-[16px] xl:h-[17px] xl:ml-[7px] xl:mr-[13px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[8px] 2xl:mr-[15px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[9px] 3xl:mr-[18px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#1e1f20"
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
                  <Row className="items-end justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[12%]">
                    <Text className="font-inter Post6" as="h6" variant="h6">
                      Filters
                    </Text>
                    <Button
                      className="font-bold font-sfprodisplay lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      shape="RoundedBorder8"
                      size="md"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </Row>
                </Row>
                <Column className="justify-start lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[100%]">
                  <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                    People
                  </Text>
                  <Grid className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
                    <Row className="bg-white_A700 items-center justify-between lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                      <Row className="items-center justify-center w-[56%]">
                        <Img
                          src="images/img_avatar.png"
                          className="Image_Eight"
                          alt="Avatar"
                        />
                        <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[63%]">
                          <Text
                            className="text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="december,Counter"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex items-center justify-center text-center w-[21%]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[3px] xl:w-[12px] xl:h-[13px] xl:mr-[4px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[5px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[6px]"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                          Add
                        </div>
                      </Button>
                    </Row>
                    <Row className="bg-white_A700 items-center justify-between lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                      <Row className="items-center justify-center w-[56%]">
                        <Img
                          src="images/img_avatar_3.png"
                          className="Image_Eight"
                          alt="Avatar One"
                        />
                        <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[63%]">
                          <Text
                            className="text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="december,Counter"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex items-center justify-center text-center w-[21%]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[3px] xl:w-[12px] xl:h-[13px] xl:mr-[4px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[5px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[6px]"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                          Add
                        </div>
                      </Button>
                    </Row>
                    <Row className="bg-white_A700 items-center justify-between lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                      <Row className="items-center justify-center w-[56%]">
                        <Img
                          src="images/img_avatar_11.png"
                          className="Image_Eight"
                          alt="Avatar Two"
                        />
                        <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[63%]">
                          <Text
                            className="text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="december,Counter"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex items-center justify-center text-center w-[21%]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[3px] xl:w-[12px] xl:h-[13px] xl:mr-[4px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[5px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[6px]"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                          Add
                        </div>
                      </Button>
                    </Row>
                    <Row className="bg-white_A700 items-center justify-between lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                      <Row className="items-center justify-center w-[56%]">
                        <Img
                          src="images/img_avatar_12.png"
                          className="Image_Eight"
                          alt="Avatar Three"
                        />
                        <Column className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[63%]">
                          <Text
                            className="text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="december,Counter"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex items-center justify-center text-center w-[21%]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="text-center lg:w-[9px] lg:h-[10px] lg:mr-[3px] xl:w-[12px] xl:h-[13px] xl:mr-[4px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[5px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[6px]"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                          Add
                        </div>
                      </Button>
                    </Row>
                  </Grid>
                  <Stack className="border-2 border-gray_500_6c border-solid lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius4 w-[13%]">
                    <Text className="Label" as="h5" variant="h5">
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_14X14.svg"
                      className="absolute inset-y-[0] my-[auto] right-[3%] location"
                      alt="arrowright One"
                    />
                  </Stack>
                </Column>
              </Column>
              <Column className="justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                  Posts
                </Text>
                <Row className="items-start justify-between lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[100%]">
                  <Column className="bg-white_A700 items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[48%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center justify-between w-[63%]">
                        <Img
                          src="images/img_image_6.png"
                          className="Image_Eight"
                          alt="Image"
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
                        alt="overflowmenu"
                      />
                    </Row>
                    <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <Img
                        src="images/img_image_150X290.png"
                        className="Image_Two"
                        alt="Image One"
                      />
                      <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
                        <Text
                          className="lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] text-gray_900 w-[94%]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo, and More
                        </Text>
                        <Text
                          className="font-medium lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-gray_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </Column>
                      <Text
                        className="font-bold lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Read More
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Row className="items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[21%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="favorite"
                          alt="favorite"
                        />
                        <Text className="Likes" as="h5" variant="h5">
                          326
                        </Text>
                      </Row>
                      <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[21%]">
                        <Img
                          src="images/img_location.svg"
                          className="location"
                          alt="location"
                        />
                        <Text className="Comments" as="h5" variant="h5">
                          148
                        </Text>
                      </Row>
                      <Row className="items-center justify-center 3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[25%]">
                        <Text className="Likes" as="h5" variant="h5">
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="reply_Two"
                          alt="reply"
                        />
                      </Row>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius12 w-[48%]">
                    <Column className="justify-start lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[96%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-center justify-between w-[57%]">
                          <Img
                            src="images/img_image_48X48.png"
                            className="Image_Eight"
                            alt="Image Two"
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
                          alt="overflowmenu One"
                        />
                      </Row>
                      <Text className="columnname_four" as="h5" variant="h5">
                        Whether its a driving tour 😂
                      </Text>
                    </Column>
                    <Row className="font-sfprodisplay items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[96%]">
                      <Img
                        src="images/img_photo1.png"
                        className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius8 w-[69%]"
                        alt="image Three"
                      />
                      <Column className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[28%]">
                        <Img
                          src="images/img_photo2.png"
                          className="lg:h-[54px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] rounded-radius8 w-[100%]"
                          alt="image Four"
                        />
                        <Row
                          className="bg-cover bg-repeat items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius8 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_photo4.png')",
                          }}
                        >
                          <Img
                            src="images/img_settings_14X14.svg"
                            className="lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] location"
                            alt="settings Two"
                          />
                          <Text
                            className="font-medium lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            17
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="font-inter items-center justify-between lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[96%]">
                      <Row className="items-center justify-between w-[45%]">
                        <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[47%]">
                          <Img
                            src="images/img_favorite.svg"
                            className="favorite1"
                            alt="favorite One"
                          />
                          <Text className="Likes1" as="h5" variant="h5">
                            326
                          </Text>
                        </Row>
                        <Row className="items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[46%]">
                          <Img
                            src="images/img_location.svg"
                            className="location1"
                            alt="location One"
                          />
                          <Text className="Comments1" as="h5" variant="h5">
                            148
                          </Text>
                        </Row>
                      </Row>
                      <Row className="items-center justify-center lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[25%]">
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
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="font-sfprodisplay items-center lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] w-[29%]">
            <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-gray_900 items-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[96%]">
              <Row className="items-center justify-end ml-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[36%]">
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
              <Column className="font-inter items-center justify-start mb-[2px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[98%]">
                <Stack className="bg-red_A200 lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] rounded-radius12 w-[100%]">
                  <Row className="absolute bottom-[0] items-start justify-between w-[100%]">
                    <div className="bg-green_400 3xl:h-[105px] lg:h-[62px] xl:h-[78px] 2xl:h-[88px] rounded-radius435 w-[18%]"></div>
                    <Img
                      src="images/img_oval_92X165.png"
                      className="3xl:h-[111px] lg:h-[66px] xl:h-[82px] 2xl:h-[93px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[52%]"
                      alt="Oval One"
                    />
                  </Row>
                  <div className="absolute bg-gray_900_33 lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] right-[37%] rounded-radius50 top-[0] lg:w-[13px] xl:w-[16px] 2xl:w-[19px] 3xl:w-[22px]"></div>
                  <Text
                    className="absolute left-[6%] text-white_A700 top-[1%] w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Go Premium!
                  </Text>
                  <Column className="absolute bottom-[11%] justify-start left-[6%] w-[75%]">
                    <Text className="columndescription" as="h5" variant="h5">
                      Try premium membership and enjoy
                      <br />a full experience of our community.
                    </Text>
                    <Stack className="bg-gray_900_33 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:px-[4px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius12 w-[41%]">
                      <Text
                        className="absolute font-medium h-[max-content] inset-y-[0] left-[3%] my-[auto] text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        See more
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="absolute inset-y-[0] my-[auto] right-[3%] rounded-radius50 location"
                        alt="arrowright Two"
                      />
                    </Stack>
                  </Column>
                </Stack>
                <Column className="justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] pb-[1px] w-[100%]">
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
                        src="images/img_avatar_13.png"
                        className="Avatar"
                        alt="Avatar Five"
                      />
                      <Column className="justify-end pr-[2px] py-[2px] w-[73%]">
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
                        alt="Avatar Six"
                      />
                      <Column className="justify-end pr-[2px] py-[2px] w-[73%]">
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
                        src="images/img_avatar_4.png"
                        className="Avatar"
                        alt="Avatar Seven"
                      />
                      <Column className="justify-end pr-[2px] py-[2px] w-[73%]">
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
                  </List>
                  <Row className="items-center lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[29%]">
                    <Text
                      className="font-bold text-gray_500 tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_2.svg"
                      className="ml-[4px] trash"
                      alt="arrowright Three"
                    />
                  </Row>
                </Column>
                <Column className="justify-start lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Friends
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listavatar_five">
                      <Img
                        src="images/img_avatar_14.png"
                        className="Avatar"
                        alt="Avatar Eight"
                      />
                      <Text className="User" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                      <Img
                        src="images/img_avatar_15.png"
                        className="Avatar"
                        alt="Avatar Nine"
                      />
                      <Text className="User" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                      <Img
                        src="images/img_avatar_16.png"
                        className="Avatar"
                        alt="Avatar Ten"
                      />
                      <Text className="User" as="h5" variant="h5">
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                  </List>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default SearchResultsPage;
