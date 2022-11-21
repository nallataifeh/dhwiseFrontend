import React from "react";

import { Column, Row, Button, Img, Text, List, Stack } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const GalleryPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-sfprodisplay items-center justify-end mx-[auto] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Row className="items-center justify-between w-[40%]">
            <Sidebar className="w-[29%]" />
            <Column className="w-[60%]">
              <Button
                className="flex items-center justify-center text-center w-[30%]"
                leftIcon={
                  <Img
                    src="images/img_arrowleft_18X18.svg"
                    className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[7px] xl:w-[16px] xl:h-[17px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[10px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[12px]"
                    alt="arrow_left"
                  />
                }
                shape="RoundedBorder12"
                size="xl"
                variant="FillGray50033"
              >
                <div className="bg-transparent font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                  Back
                </div>
              </Button>
              <Column className="bg-white_A700 font-inter items-center justify-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                <Column className="items-center justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[71%]">
                  <Column className="items-center justify-start pb-[2px] px-[2px] w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Avatar13"
                      alt="Avatar"
                    />
                    <Text
                      className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] text-gray_900 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Edward Ford
                    </Text>
                    <Text className="Fullname" as="h5" variant="h5">
                      @edwardford
                    </Text>
                  </Column>
                  <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Row className="items-center pr-[2px] py-[2px] w-[42%]">
                      <Text
                        className="my-[1px] text-gray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        518
                      </Text>
                      <Text
                        className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Posts
                      </Text>
                    </Row>
                    <Row className="items-center pr-[1px] py-[1px] w-[48%]">
                      <Text
                        className="my-[1px] text-gray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        22k
                      </Text>
                      <Text
                        className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[1px] text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Friends
                      </Text>
                    </Row>
                  </Row>
                </Column>
                <Column className="font-sfprodisplay justify-start 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center w-[52%]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[5px] xl:w-[16px] xl:h-[17px] xl:mr-[7px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[8px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[9px]"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder12"
                      size="xl"
                      variant="FillGreen400"
                    >
                      <div className="bg-transparent font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        Freinds
                      </div>
                    </Button>
                    <Img
                      src="images/img_mail_48X48.svg"
                      className="mail_One1"
                      alt="mail One"
                    />
                    <Button
                      className="flex items-center justify-center mail_One1"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50033"
                    >
                      <Img
                        src="images/img_overflowmenu_48X48.svg"
                        className="flex items-center justify-center lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                        alt="overflowmenu"
                      />
                    </Button>
                  </Row>
                  <Column className="font-inter justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[68%]">
                    <Text className="columnlabel" as="h6" variant="h6">
                      About
                    </Text>
                    <Text
                      className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic text-gray_500 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Travel, Adventure & Lifestyle
                      <br />
                      Photographer & Digital Influencer
                      <br />
                      Nikon Ambassador
                      <br />
                      {`Let's Work:`}
                      <br />
                      ed.ford@mail.com
                    </Text>
                  </Column>
                  <Column className="font-sfprodisplay justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Friends
                    </Text>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="listavatar_one1">
                        <Img
                          src="images/img_avatar_45X45.png"
                          className="Avatar_One4"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_avatar_27.png"
                          className="Avatar_One4"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_avatar_5.png"
                          className="Avatar_One4"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_28.png"
                          className="Avatar_One4"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar_16.png"
                          className="Avatar_One4"
                          alt="Avatar Four"
                        />
                      </Row>
                      <Row className="listavatar_one1">
                        <Img
                          src="images/img_avatar_23.png"
                          className="Avatar_One4"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_15.png"
                          className="Avatar_One4"
                          alt="Avatar One One"
                        />
                        <Img
                          src="images/img_avatar_25.png"
                          className="Avatar_One4"
                          alt="Avatar Two One"
                        />
                        <Img
                          src="images/img_avatar_14.png"
                          className="Avatar_One4"
                          alt="Avatar Three One"
                        />
                        <Img
                          src="images/img_avatar_3.png"
                          className="Avatar_One4"
                          alt="Avatar Four One"
                        />
                      </Row>
                      <Row className="listavatar_one1">
                        <Img
                          src="images/img_avatar_4.png"
                          className="Avatar_One4"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar_13.png"
                          className="Avatar_One4"
                          alt="Avatar One Two"
                        />
                        <Img
                          src="images/img_avatar_9.png"
                          className="Avatar_One4"
                          alt="Avatar Two Two"
                        />
                        <Img
                          src="images/img_avatar_1.png"
                          className="Avatar_One4"
                          alt="Avatar Three Two"
                        />
                        <Img
                          src="images/img_avatar_10.png"
                          className="Avatar_One4"
                          alt="Avatar Four Two"
                        />
                      </Row>
                    </List>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Row>
          <Row className="font-inter items-start justify-between w-[56%]">
            <div className="bg-gray_500_66 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] lg:mt-[318px] xl:mt-[398px] 2xl:mt-[448px] 3xl:mt-[537px] rounded-radius2 w-[1%]"></div>
            <Stack className="2xl:h-[1071px] 3xl:h-[1285px] lg:h-[761px] xl:h-[952px] w-[98%]">
              <Row className="absolute bg-white_A700 items-center justify-between lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] top-[0] w-[100%]">
                <Row className="items-start justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] py-[2px] w-[39%]">
                  <Stack className="lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] mt-[1px] w-[43%]">
                    <Text
                      className="absolute font-bold right-[0] text-gray_900 top-[0] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Photos
                    </Text>
                    <Column className="absolute justify-start right-[3%] w-[97%]">
                      <Text
                        className="font-bold lg:mr-[53px] xl:mr-[66px] 2xl:mr-[75px] 3xl:mr-[90px] text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Posts
                      </Text>
                      <div className="bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[53px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[34%]"></div>
                    </Column>
                  </Stack>
                  <Text
                    className="lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] NavigationTab2"
                    as="h5"
                    variant="h5"
                  >
                    Videos
                  </Text>
                  <Text
                    className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] NavigationTab2"
                    as="h5"
                    variant="h5"
                  >
                    Events
                  </Text>
                </Row>
                <Row className="font-sfprodisplay items-center justify-center 3xl:mb-[1069px] lg:mb-[633px] xl:mb-[792px] 2xl:mb-[891px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[16%]">
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
              </Row>
              <List
                className="absolute bottom-[0] gap-[0] inset-x-[0] min-h-[auto] mx-[auto] rounded-radius12 w-[89%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius12 w-[100%]">
                  <Img src="images/img_5.png" className="Image14" alt="Image" />
                  <Img
                    src="images/img_image_221X221.png"
                    className="Image14"
                    alt="Image One"
                  />
                  <Img
                    src="images/img_image_19.png"
                    className="Image14"
                    alt="Image Two"
                  />
                </Row>
                <Row className="items-center justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_photo4.png"
                    className="Image14"
                    alt="Image One"
                  />
                  <Img
                    src="images/img_image_20.png"
                    className="Image14"
                    alt="Image One One"
                  />
                  <Img
                    src="images/img_photo1.png"
                    className="Image14"
                    alt="Image Two One"
                  />
                </Row>
                <Row className="items-center justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_image_21.png"
                    className="Image14"
                    alt="Image Two"
                  />
                  <Img
                    src="images/img_image_22.png"
                    className="Image14"
                    alt="Image One Two"
                  />
                  <Img
                    src="images/img_image_23.png"
                    className="Image14"
                    alt="Image Two Two"
                  />
                </Row>
                <Row className="items-center justify-between lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_image_768X540.png"
                    className="Image14"
                    alt="Image Three"
                  />
                  <Img
                    src="images/img_photo2.png"
                    className="Image14"
                    alt="Image One Three"
                  />
                  <Img
                    src="images/img_photo3.png"
                    className="Image14"
                    alt="Image Two Three"
                  />
                </Row>
              </List>
            </Stack>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default GalleryPage;
