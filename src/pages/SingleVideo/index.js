import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Button, Img, Text, List, Input } from "components";

const SingleVideoPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-sfprodisplay md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex-1 h-[1024px] md:h-[1610px] sm:h-[1610px] md:px-[20px] sm:px-[20px] relative w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[10px] h-[100%] items-center justify-between m-[auto] w-[100%]">
            <Line className="bg-white_A700_7e md:flex-1 sm:flex-1 h-[128px] md:h-[5px] sm:h-[5px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 md:w-[100%] sm:w-[100%] w-[5px]" />
            <div className="bg-white_A700 h-[1024px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[auto]"></div>
          </div>
          <div className="absolute flex flex-col gap-[42px] h-[max-content] inset-y-[0] items-center justify-start left-[7%] my-[auto] w-[50%]">
            <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
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
                variant="FillGray100"
              >
                <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_500 text-left">
                  Back
                </div>
              </Button>
              <div className="flex flex-col font-inter gap-[30px] items-center justify-start w-[100%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col gap-[18px] items-center justify-end p-[20px] rounded-radius12 w-[100%]"
                  style={{ backgroundImage: "url('images/img_video.png')" }}
                >
                  <div className="flex flex-col gap-[8px] items-center justify-start mt-[259px] w-[100%]">
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        01:23
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        05:46
                      </Text>
                    </div>
                    <div className="h-[4px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                      <Line className="bg-white_A700_33 h-[4px] m-[auto] rounded-radius2 w-[100%]" />
                      <div
                        className="absolute h-[4px] inset-y-[0] left-[0] my-[auto] overflow-hidden w-[60%]"
                        name="Group1426"
                      >
                        <div className="w-full h-full absolute bg-undefined"></div>
                        <div
                          className="h-full absolute"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[auto]">
                      <Img
                        src="images/img_trash.svg"
                        className="h-[18px] w-[18px]"
                        alt="trash"
                      />
                      <Img
                        src="images/img_volume.svg"
                        className="h-[18px] w-[18px]"
                        alt="volume"
                      />
                      <div
                        className="h-[4px] my-[7px] overflow-hidden relative w-[auto]"
                        name="Volume One"
                      >
                        <div className="w-full h-full absolute bg-white_A700_33 rounded-[2px]"></div>
                        <div
                          className="h-full absolute bg-white_A700  rounded-[2px]"
                          style={{ width: "67%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[18px] items-center justify-between w-[auto]">
                      <Img
                        src="images/img_settings_18X18.svg"
                        className="h-[18px] w-[18px]"
                        alt="settings Two"
                      />
                      <Img
                        src="images/img_minimize.svg"
                        className="h-[18px] w-[18px]"
                        alt="minimize"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 flex-row gap-[10px] items-center justify-between sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_avatar.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                      alt="Avatar"
                    />
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
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
                  <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[5px] items-center justify-start mt-[4px] p-[6px] w-[auto]">
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
                    <div className="flex flex-row gap-[6px] items-center justify-start mt-[4px] p-[5px] w-[auto]">
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
                    <div className="flex flex-row items-center justify-end mt-[3px] p-[6px] w-[auto]">
                      <Img
                        src="images/img_reply.svg"
                        className="h-[14px] w-[14px]"
                        alt="reply"
                      />
                      <Text
                        className="font-medium ml-[4px] text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Share
                      </Text>
                    </div>
                    <Img
                      src="images/img_eye.svg"
                      className="h-[38px] w-[38px]"
                      alt="eye"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[14px] items-start justify-end pr-[3px] pt-[3px] w-[100%]">
                  <div className="flex flex-col gap-[25px] items-start justify-start mt-[2px] md:w-[100%] sm:w-[100%] w-[101%]">
                    <Text
                      className="leading-[36.00px] text-gray_900 text-left sm:w-[100%] w-[85%]"
                      as="h1"
                      variant="h1"
                    >
                      Tropical Fresh Tourism Is Back In Full Swing In Cancun
                      Mexico
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-gray_500 text-left w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Cancun is back, better than ever! Over a hundred Mexico
                      resorts have reopened and the state tourism minister
                      predicts Cancun will draw as many visitors in 2006 as it
                      did two years ago. And the travel deals are great! If you
                      haven’t been, now may be the best time to take a vacation
                      to Cancun.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] items-center justify-start mr-[auto] md:w-[100%] sm:w-[100%] w-[59%]">
                    <Button
                      className="cursor-pointer font-normal min-w-[52px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray50048"
                    >
                      Travel
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[57px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray50048"
                    >
                      Mexico
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[43px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray50048"
                    >
                      Vlog
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[42px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray50048"
                    >
                      Tips
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[65px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray50048"
                    >
                      Vacation
                    </Button>
                    <Button
                      className="cursor-pointer font-normal min-w-[60px] not-italic text-[12px] text-center text-gray_500 w-[auto]"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray50048"
                    >
                      Cancun
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-[23px] items-start justify-start w-[100%]">
              <Text
                className="font-bold text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Related Videos
              </Text>
              <List
                className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col items-center justify-start rounded-radius8 w-[100%]"
                  style={{ backgroundImage: "url('images/img_photo4.png')" }}
                >
                  <div className="bg-gray_900_7e flex flex-col items-center justify-end p-[38px] sm:px-[20px] rounded-radius8 w-[100%]">
                    <Button
                      className="flex h-[38px] items-center justify-center w-[38px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA70066"
                    >
                      <Img
                        src="images/img_play.svg"
                        className="h-[18px]"
                        alt="play"
                      />
                    </Button>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col items-center justify-start rounded-radius8 w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_videoplayerwe.png')",
                  }}
                >
                  <div className="bg-gray_900_7e flex flex-col items-center justify-end p-[38px] sm:px-[20px] rounded-radius8 w-[100%]">
                    <Button
                      className="flex h-[38px] items-center justify-center w-[38px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA70066"
                    >
                      <Img
                        src="images/img_play.svg"
                        className="h-[18px]"
                        alt="play One"
                      />
                    </Button>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col items-center justify-start rounded-radius8 w-[100%]"
                  style={{
                    backgroundImage:
                      "url('images/img_videoplayerwe_115X200.png')",
                  }}
                >
                  <div className="bg-gray_900_7e flex flex-col items-center justify-end p-[38px] sm:px-[20px] rounded-radius8 w-[100%]">
                    <Button
                      className="flex h-[38px] items-center justify-center w-[38px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbFillWhiteA70066"
                    >
                      <Img
                        src="images/img_play.svg"
                        className="h-[18px]"
                        alt="play Two"
                      />
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row gap-[10px] h-[max-content] inset-y-[0] items-center justify-between my-[auto] right-[0] w-[36%]">
            <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
            <div className="bg-gray_900 flex flex-col gap-[49px] items-end justify-end p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[20px] items-center justify-end mt-[5px] md:w-[100%] sm:w-[100%] w-[33%]">
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
              <div className="flex flex-col font-inter md:gap-[40px] sm:gap-[40px] gap-[70px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                <div className="flex flex-col gap-[43px] items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Comments (148)
                  </Text>
                  <List
                    className="flex-col gap-[32px] grid items-center pr-[9px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row items-end justify-evenly w-[auto]">
                          <Img
                            src="images/img_avatar_28X28.png"
                            className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                            alt="Avatar Two"
                          />
                          <Text
                            className="font-medium mb-[4px] mt-[8px] text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] mt-[15px] not-italic text-left text-white_A700 sm:w-[100%] w-[96%]"
                        as="h5"
                        variant="h5"
                      >
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[13px] md:w-[100%] sm:w-[100%] w-[14%]">
                        <Img
                          src="images/img_favorite_14X14.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite One"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="h-[14px] w-[14px]"
                          alt="laptop"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row items-end justify-evenly w-[auto]">
                          <Img
                            src="images/img_image_7.png"
                            className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                            alt="Avatar Three"
                          />
                          <Text
                            className="font-medium mb-[4px] mt-[8px] text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] mt-[15px] not-italic text-left text-white_A700 sm:w-[100%] w-[96%]"
                        as="h5"
                        variant="h5"
                      >
                        Awesome Edward, remeber that five tips for low cost{" "}
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[15px] md:w-[100%] sm:w-[100%] w-[14%]">
                        <Img
                          src="images/img_favorite_1.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite Two"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="h-[14px] w-[14px]"
                          alt="laptop One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row items-end justify-evenly w-[auto]">
                          <Img
                            src="images/img_avatar_6.png"
                            className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                            alt="Avatar Four"
                          />
                          <Text
                            className="font-medium mb-[4px] mt-[8px] text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] mt-[15px] not-italic text-left text-white_A700 sm:w-[100%] w-[96%]"
                        as="h5"
                        variant="h5"
                      >
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[13px] md:w-[100%] sm:w-[100%] w-[14%]">
                        <Img
                          src="images/img_favorite_14X14.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite Three"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="h-[14px] w-[14px]"
                          alt="laptop Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row items-end justify-evenly w-[auto]">
                          <Img
                            src="images/img_image_68X68.png"
                            className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                            alt="Avatar Five"
                          />
                          <Text
                            className="font-medium mb-[4px] mt-[8px] text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] mt-[15px] not-italic text-left text-white_A700 sm:w-[100%] w-[96%]"
                        as="h5"
                        variant="h5"
                      >
                        Awesome Edward, remeber that five tips for low cost{" "}
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[15px] md:w-[100%] sm:w-[100%] w-[14%]">
                        <Img
                          src="images/img_favorite_1.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite Four"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="h-[14px] w-[14px]"
                          alt="laptop Three"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row items-end justify-evenly w-[auto]">
                          <Img
                            src="images/img_avatar_7.png"
                            className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[28px]"
                            alt="Avatar Six"
                          />
                          <Text
                            className="font-medium mb-[4px] mt-[8px] text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Billy Green
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          20min ago
                        </Text>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] mt-[15px] not-italic text-left text-white_A700 sm:w-[100%] w-[96%]"
                        as="h5"
                        variant="h5"
                      >
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[13px] md:w-[100%] sm:w-[100%] w-[14%]">
                        <Img
                          src="images/img_favorite_14X14.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite Five"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="h-[14px] w-[14px]"
                          alt="laptop Four"
                        />
                      </div>
                    </div>
                  </List>
                </div>
                <div className="bg-white_A700 flex flex-row gap-[25px] items-center justify-start p-[11px] rounded-radius4 w-[100%]">
                  <Input
                    className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex ml-[4px] sm:w-[100%] w-[82%]"
                    name="FrameFive"
                    placeholder="Write a comment…"
                    suffix={
                      <Img
                        src="images/img_user_2.svg"
                        className="ml-[35px] my-[auto]"
                        alt="user"
                      />
                    }
                    size="sm"
                  ></Input>
                  <Img
                    src="images/img_send.svg"
                    className="h-[14px] w-[14px]"
                    alt="send"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVideoPage;
