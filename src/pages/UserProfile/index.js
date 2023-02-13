import React from "react";

import Sidebar from "components/Sidebar";
import { Button, Img, Text, List } from "components";

const UserProfilePage = () => {
  return (
    <>
      <div className="bg-gray_100 flex flex-col font-sfprodisplay items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <Sidebar className="flex flex-col md:hidden sm:hidden w-[165px]" />
            <div className="flex flex-1 flex-col gap-[40px] items-start justify-start w-[100%]">
              <Button
                className="flex items-center justify-center text-center"
                leftIcon={
                  <Img
                    src="images/img_arrowleft_18X18.svg"
                    className="mr-[10px] text-center"
                    alt="arrow_left"
                  />
                }
                shape="RoundedBorder12"
                size="7xl"
                variant="FillGray50033"
              >
                <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_500 text-left">
                  Back
                </div>
              </Button>
              <div className="bg-white_A700 flex flex-col font-inter gap-[30px] items-center justify-center p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[10px] md:w-[100%] sm:w-[100%] w-[72%]">
                  <div className="flex flex-col items-center justify-start pb-[2px] px-[2px] w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[108px] md:h-[auto] sm:h-[auto] object-cover rounded-radius36 w-[108px]"
                      alt="Avatar"
                    />
                    <Text
                      className="mt-[13px] text-gray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Edward Ford
                    </Text>
                    <Text
                      className="font-normal mt-[12px] not-italic text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      @edwardford
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[22px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-start pr-[2px] py-[2px] w-[auto]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        518
                      </Text>
                      <Text
                        className="text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Posts
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-center justify-start w-[auto]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        22k
                      </Text>
                      <Text
                        className="text-gray_500 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Friends
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-sfprodisplay items-start justify-start mb-[10px] w-[100%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button
                      className="flex items-center justify-center text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark.svg"
                          className="mr-[8px] text-center"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder12"
                      size="7xl"
                      variant="FillGreen400"
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                        Freinds
                      </div>
                    </Button>
                    <Img
                      src="images/img_mail_48X48.svg"
                      className="h-[48px] w-[48px]"
                      alt="mail One"
                    />
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50033"
                    >
                      <Img
                        src="images/img_overflowmenu_48X48.svg"
                        className="h-[22px]"
                        alt="overflowmenu"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col font-inter gap-[19px] items-start justify-start mt-[43px] md:w-[100%] sm:w-[100%] w-[70%]">
                    <Text
                      className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-gray_500 text-left"
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
                  </div>
                  <div className="flex flex-col font-sfprodisplay gap-[22px] items-start justify-start mt-[64px] w-[100%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Friends
                    </Text>
                    <List
                      className="flex-col gap-[15px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_avatar_45X45.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_avatar_27.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar One"
                        />
                        <Img
                          src="images/img_avatar_5.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_28.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar_16.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Four"
                        />
                      </div>
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_avatar_23.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Two"
                        />
                        <Img
                          src="images/img_avatar_15.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar One One"
                        />
                        <Img
                          src="images/img_avatar_25.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Two One"
                        />
                        <Img
                          src="images/img_avatar_14.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Three One"
                        />
                        <Img
                          src="images/img_avatar_3.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Four One"
                        />
                      </div>
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                        <Img
                          src="images/img_avatar_4.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Three"
                        />
                        <Img
                          src="images/img_avatar_13.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar One Two"
                        />
                        <Img
                          src="images/img_avatar_9.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Two Two"
                        />
                        <Img
                          src="images/img_avatar_1.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Three Two"
                        />
                        <Img
                          src="images/img_avatar_10.png"
                          className="h-[45px] md:h-[auto] sm:h-[auto] object-cover rounded-radius14 w-[45px]"
                          alt="Avatar Four Two"
                        />
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 md:flex-col sm:flex-col flex-row font-inter gap-[10px] items-start justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-gray_500_66 h-[128px] mb-[716px] md:mt-[0] sm:mt-[0] mt-[448px] rounded-radius2 w-[auto]"></div>
            <div className="h-[1292px] md:h-[2330px] sm:h-[2330px] relative md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="absolute bg-white_A700 flex sm:flex-col flex-row sm:gap-[40px] inset-x-[0] items-center justify-between mx-[auto] p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] top-[0] w-[100%]">
                <div className="flex sm:flex-1 flex-row items-start justify-start sm:ml-[0] ml-[10px] py-[2px] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[9px] items-start justify-start w-[27%]">
                    <Text
                      className="font-bold text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Posts
                    </Text>
                    <div className="bg-gray_900 h-[2px] w-[55%]"></div>
                  </div>
                  <Text
                    className="font-bold text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Photos
                  </Text>
                  <Text
                    className="font-bold ml-[33px] text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Videos
                  </Text>
                  <Text
                    className="font-bold ml-[25px] text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Events
                  </Text>
                </div>
                <div className="flex sm:flex-1 flex-row font-sfprodisplay gap-[20px] items-center justify-center mb-[891px] sm:mt-[0] mt-[5px] sm:w-[100%] w-[auto]">
                  <Text
                    className="bg-light_blue_200 h-[48px] sm:pl-[20px] pl-[27px] pr-[13px] py-[12px] rounded-radius12 text-left text-white_A700 w-[48px]"
                    as="h2"
                    variant="h2"
                  >
                    1
                  </Text>
                  <Img
                    src="images/img_avatar_48X48.png"
                    className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                    alt="Avatar Four"
                  />
                </div>
              </div>
              <List
                className="absolute bottom-[0] sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 inset-x-[0] justify-center mx-[auto] w-[89%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[30px] items-center justify-start mb-[80px] sm:ml-[0] w-[100%]">
                  <div className="bg-white_A700 border-2 border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                        <Img
                          src="images/img_image_6.png"
                          className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Image"
                        />
                        <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Katherine Cole
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            5min ago
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                      <Img
                        src="images/img_cardmobile_3.png"
                        className="h-[150px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                        alt="Image One"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[96%]">
                        <Text
                          className="leading-[22.00px] text-gray_900 text-left sm:w-[100%] w-[97%]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] text-gray_500 text-left w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </div>
                      <Text
                        className="font-bold mt-[12px] text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[20px] w-[100%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[24%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[14px] my-[2px] w-[14px]"
                          alt="favorite"
                        />
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[14px] my-[3px] w-[14px]"
                          alt="location"
                        />
                        <Text
                          className="font-medium my-[2px] text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[7px] w-[28%]">
                        <Text
                          className="font-medium ml-[2px] text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="h-[14px] mx-[2px] w-[14px]"
                          alt="reply"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-2 border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                        <Img
                          src="images/img_image_6.png"
                          className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Image Two"
                        />
                        <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Katherine Cole
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            5min ago
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                      <Img
                        src="images/img_image_150X272.png"
                        className="h-[150px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                        alt="Image Three"
                      />
                      <div className="flex flex-col gap-[15px] items-start justify-start mt-[24px] w-[100%]">
                        <Text
                          className="leading-[22.00px] text-gray_900 text-left sm:w-[100%] w-[91%]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] text-gray_500 text-left w-[100%]"
                          as="h5"
                          variant="h5"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </div>
                      <Text
                        className="font-bold mt-[9px] text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[24%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite One"
                        />
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[14px] w-[14px]"
                          alt="location One"
                        />
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[5px] w-[28%]">
                        <Text
                          className="font-medium ml-[5px] text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="h-[14px] mr-[6px] w-[14px]"
                          alt="reply One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-center justify-start sm:ml-[0] w-[100%]">
                  <div className="bg-white_A700 border-2 border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                        <Img
                          src="images/img_image_6.png"
                          className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Image Two"
                        />
                        <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Katherine Cole
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            5min ago
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu Two"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                      <Img
                        src="images/img_image_150X290.png"
                        className="h-[150px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                        alt="Image One One"
                      />
                      <div className="flex flex-col gap-[19px] items-start justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[96%]">
                        <Text
                          className="leading-[22.00px] text-gray_900 text-left sm:w-[100%] w-[97%]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] text-gray_500 text-left"
                          as="h5"
                          variant="h5"
                        >
                          <span className="text-gray_500 text-[14px] font-inter">
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                            <br />
                          </span>
                          <span className="text-gray_500 text-[14px] font-inter">
                            warm and sunny California.warm and sunny California.
                          </span>
                        </Text>
                      </div>
                      <Text
                        className="font-bold mt-[12px] text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[20px] w-[100%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[24%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[14px] my-[2px] w-[14px]"
                          alt="favorite One"
                        />
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[14px] my-[3px] w-[14px]"
                          alt="location One"
                        />
                        <Text
                          className="font-medium my-[2px] text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[7px] w-[28%]">
                        <Text
                          className="font-medium ml-[2px] text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="h-[14px] mx-[2px] w-[14px]"
                          alt="reply One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-2 border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                        <Img
                          src="images/img_image_6.png"
                          className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Image Two One"
                        />
                        <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                          <Text
                            className="font-bold text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Katherine Cole
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            5min ago
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu.svg"
                        className="h-[38px] w-[38px]"
                        alt="overflowmenu One One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                      <Img
                        src="images/img_image_18.png"
                        className="h-[150px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                        alt="Image Three One"
                      />
                      <div className="flex flex-col gap-[40px] items-start justify-start mt-[22px] w-[100%]">
                        <Text
                          className="text-gray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-medium leading-[20.00px] text-gray_500 text-left"
                          as="h5"
                          variant="h5"
                        >
                          <span className="text-gray_500 text-[14px] font-inter">
                            If you are looking for a break from the cold, take a
                            cue from Lizzo: This week, the singer headed to
                            Disneyland in warm and sunny California.
                            <br />
                          </span>
                          <span className="text-gray_500 text-[14px] font-inter">
                            warm and sunny California.warm and sunny California.
                          </span>
                        </Text>
                      </div>
                      <Text
                        className="font-bold mt-[9px] text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[24%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite One One"
                        />
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[14px] w-[14px]"
                          alt="location One One"
                        />
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[5px] w-[28%]">
                        <Text
                          className="font-medium ml-[5px] text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply.svg"
                          className="h-[14px] mr-[6px] w-[14px]"
                          alt="reply One One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
