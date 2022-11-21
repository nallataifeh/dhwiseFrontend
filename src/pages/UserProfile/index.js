import React from "react";

import { Column, Row, Button, Img, Text, List, Stack } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const UserProfilePage = () => {
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
            <Stack className="xl:h-[1150px] 2xl:h-[1293px] 3xl:h-[1552px] lg:h-[919px] w-[98%]">
              <Row className="absolute bg-white_A700 items-center justify-between lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] top-[0] w-[100%]">
                <Row className="items-start 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] py-[2px] w-[39%]">
                  <Column className="justify-start mt-[1px] w-[26%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Posts
                    </Text>
                    <div className="bg-gray_900 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[55%]"></div>
                  </Column>
                  <Text className="NavigationTab2" as="h5" variant="h5">
                    Photos
                  </Text>
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
                  <Text
                    className="bg-light_blue_200 flex items-center lg:pl-[19px] xl:pl-[24px] 2xl:pl-[27px] 3xl:pl-[32px] xl:pr-[11px] 2xl:pr-[13px] 3xl:pr-[15px] lg:pr-[9px] rounded-radius12 text-white_A700 w-[48px]"
                    as="h2"
                    variant="h2"
                  >
                    1
                  </Text>
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="Avatar_One"
                    alt="Avatar Four"
                  />
                </Row>
              </Row>
              <List
                className="absolute bottom-[0] lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 inset-x-[0] min-h-[auto] mx-[auto] w-[88%]"
                orientation="horizontal"
              >
                <Column className="items-center justify-start lg:mb-[56px] xl:mb-[71px] 2xl:mb-[80px] 3xl:mb-[96px] w-[100%]">
                  <Column className="bg-white_A700 border-2 border-gray_500_33 border-solid items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_6.png"
                          className="Image_Eight"
                          alt="Image"
                        />
                        <Column className="pr-[2px] py-[2px] w-[68%]">
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
                        alt="overflowmenu One"
                      />
                    </Row>
                    <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <Img
                        src="images/img_cardmobile_3.png"
                        className="Image_Two"
                        alt="Image One"
                      />
                      <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[94%]">
                        <Text className="Title2" as="h4" variant="h4">
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text className="description" as="h5" variant="h5">
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </Column>
                      <Text className="Post5" as="h6" variant="h6">
                        Read More
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[24%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="favorite1"
                          alt="favorite"
                        />
                        <Text className="Likes1" as="h5" variant="h5">
                          326
                        </Text>
                      </Row>
                      <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[23%]">
                        <Img
                          src="images/img_location.svg"
                          className="location1"
                          alt="location"
                        />
                        <Text className="Comments1" as="h5" variant="h5">
                          148
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[28%]">
                        <Text className="Share" as="h5" variant="h5">
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="reply"
                          alt="reply"
                        />
                      </Row>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border-2 border-gray_500_33 border-solid items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_6.png"
                          className="Image_Eight"
                          alt="Image Two"
                        />
                        <Column className="pr-[2px] py-[2px] w-[68%]">
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
                        alt="overflowmenu One"
                      />
                    </Row>
                    <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <Img
                        src="images/img_image_150X272.png"
                        className="Image_Two"
                        alt="Image Three"
                      />
                      <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                        <Text
                          className="lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] text-gray_900 w-[90%]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-medium lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] text-gray_500 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </Column>
                      <Text className="Post6" as="h6" variant="h6">
                        Read More
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Row className="items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[24%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="favorite"
                          alt="favorite One"
                        />
                        <Text className="Likes" as="h5" variant="h5">
                          326
                        </Text>
                      </Row>
                      <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[23%]">
                        <Img
                          src="images/img_location.svg"
                          className="location"
                          alt="location One"
                        />
                        <Text className="Comments" as="h5" variant="h5">
                          148
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[28%]">
                        <Text className="Likes" as="h5" variant="h5">
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="reply_Two"
                          alt="reply One"
                        />
                      </Row>
                    </Row>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Column className="bg-white_A700 border-2 border-gray_500_33 border-solid items-center justify-start lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_6.png"
                          className="Image_Eight"
                          alt="Image Two"
                        />
                        <Column className="pr-[2px] py-[2px] w-[68%]">
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
                        alt="overflowmenu Two"
                      />
                    </Row>
                    <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <Img
                        src="images/img_image_150X290.png"
                        className="Image_Two"
                        alt="Image One One"
                      />
                      <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[94%]">
                        <Text className="Title2" as="h4" variant="h4">
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text className="description" as="h5" variant="h5">
                          <span className="text-gray_500 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                            <br />
                          </span>
                          <span className="text-gray_500 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            warm and sunny California.warm and sunny California.
                          </span>
                        </Text>
                      </Column>
                      <Text className="Post5" as="h6" variant="h6">
                        Read More
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                      <Row className="items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[24%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="favorite1"
                          alt="favorite One"
                        />
                        <Text className="Likes1" as="h5" variant="h5">
                          326
                        </Text>
                      </Row>
                      <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[23%]">
                        <Img
                          src="images/img_location.svg"
                          className="location1"
                          alt="location One"
                        />
                        <Text className="Comments1" as="h5" variant="h5">
                          148
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[28%]">
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
                  <Column className="bg-white_A700 border-2 border-gray_500_33 border-solid items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius12 w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_6.png"
                          className="Image_Eight"
                          alt="Image Two One"
                        />
                        <Column className="pr-[2px] py-[2px] w-[68%]">
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
                        alt="overflowmenu One One"
                      />
                    </Row>
                    <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                      <Img
                        src="images/img_image_18.png"
                        className="Image_Two"
                        alt="Image Three One"
                      />
                      <Column className="justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                        <Text
                          className="text-gray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-medium lg:leading-[14px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] text-gray_500 w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          <span className="text-gray_500 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                            <br />
                          </span>
                          <span className="text-gray_500 font-inter lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                            warm and sunny California.warm and sunny California.
                          </span>
                        </Text>
                      </Column>
                      <Text className="Post6" as="h6" variant="h6">
                        Read More
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                      <Row className="items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[24%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="favorite"
                          alt="favorite One One"
                        />
                        <Text className="Likes" as="h5" variant="h5">
                          326
                        </Text>
                      </Row>
                      <Row className="items-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[23%]">
                        <Img
                          src="images/img_location.svg"
                          className="location"
                          alt="location One One"
                        />
                        <Text className="Comments" as="h5" variant="h5">
                          148
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:ml-[41px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[70px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[28%]">
                        <Text className="Likes" as="h5" variant="h5">
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="reply_Two"
                          alt="reply One One"
                        />
                      </Row>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Stack>
          </Row>
        </Row>
      </Column>
    </>
  );
};

export default UserProfilePage;
