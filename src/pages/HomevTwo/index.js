import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Text, Button, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const HomevTwoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex flex-1 flex-col gap-[40px] items-center justify-end md:ml-[0] sm:ml-[0] ml-[65px] md:mt-[0] sm:mt-[0] mt-[40px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[13px] items-center justify-start p-[12px] rounded-radius12 w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
              wrapClassName="flex md:w-[100%] sm:w-[100%] w-[89%]"
              name="FrameOne"
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
              size="smSrc"
              variant="srcFillWhiteA700"
            ></Input>
            <Text
              className="font-bold text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
              as="h6"
              variant="h6"
            >
              Filters
            </Text>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[30px] items-start justify-start md:w-[100%] sm:w-[100%] w-[54%]">
              <div className="bg-white_A700 flex flex-col gap-[7px] items-center justify-start p-[30px] sm:px-[20px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[93%]">
                <div className="flex flex-row items-start justify-start w-[100%]">
                  <Img
                    src="images/img_avatar.png"
                    className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                    alt="Avatar"
                  />
                  <Input
                    className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="ml-[5px] sm:w-[100%] w-[87%]"
                    name="language"
                    placeholder="What are you thinking? "
                    shape="RoundedBorder19"
                    size="xl"
                  ></Input>
                </div>
                <div className="flex flex-row items-start justify-start w-[100%]">
                  <Button
                    className="flex h-[28px] items-center justify-center mt-[2px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_camera_1.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                  <Button
                    className="flex h-[28px] items-center justify-center ml-[10px] mt-[2px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_videocamera.svg"
                      className="h-[14px]"
                      alt="videocamera"
                    />
                  </Button>
                  <Button
                    className="flex h-[28px] items-center justify-center ml-[10px] mt-[2px] w-[28px]"
                    shape="icbRoundedBorder8"
                    size="smIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_plus_28X28.svg"
                      className="h-[14px]"
                      alt="plus"
                    />
                  </Button>
                  <div className="bg-indigo_A200 md:h-[14px] sm:h-[14px] h-[30px] ml-[141px] p-[7px] relative rounded-radius4 w-[24%]">
                    <Text
                      className="absolute font-medium h-[max-content] inset-y-[0] left-[13%] my-[auto] text-left text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Share
                    </Text>
                    <Img
                      src="images/img_arrowright_1.svg"
                      className="absolute h-[14px] inset-y-[0] my-[auto] right-[13%] w-[14px]"
                      alt="arrowright One"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-end p-[8px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[93%]">
                <div className="flex flex-row items-center justify-between mt-[22px] md:w-[100%] sm:w-[100%] w-[88%]">
                  <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                    <Img
                      src="images/img_image.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                      alt="Image"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                      <Text
                        className="font-bold text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Edward Ford
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
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-col gap-[20px] items-center justify-start mt-[34px] md:w-[100%] sm:w-[100%] w-[88%]">
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Tourism Is Back In Full Swing In Cancun Mexico
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                    style={{ backgroundImage: "url('images/img_video.png')" }}
                  >
                    <div className="bg-gray_900_66 flex flex-col items-center justify-start p-[71px] sm:px-[20px] md:px-[40px] rounded-radius8 w-[100%]">
                      <Button
                        className="flex h-[38px] items-center justify-center w-[38px]"
                        shape="icbRoundedBorder12"
                        size="mdIcn"
                        variant="icbFillWhiteA70099"
                      >
                        <Img
                          src="images/img_play.svg"
                          className="h-[18px]"
                          alt="play"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-[30px] md:w-[100%] sm:w-[100%] w-[88%]">
                  <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[auto]">
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
                    <div className="flex flex-row gap-[6px] items-center justify-start p-[5px] w-[auto]">
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
                  </div>
                  <div className="flex flex-row items-center justify-center p-[7px] w-[auto]">
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
                <div className="border-2 border-gray_500_33 border-solid flex flex-row gap-[15px] items-center justify-start mt-[20px] p-[11px] rounded-radius4 md:w-[100%] sm:w-[100%] w-[88%]">
                  <Input
                    className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                    wrapClassName="flex ml-[4px] sm:w-[100%] w-[88%]"
                    name="FrameFive"
                    placeholder="Write a comment…"
                    suffix={
                      <Img
                        src="images/img_user_14X14.svg"
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
                <List
                  className="flex-col gap-[30px] grid items-center mt-[20px] md:w-[100%] sm:w-[100%] w-[87%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex flex-row items-end justify-evenly w-[auto]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[28px]"
                          alt="Avatar One"
                        />
                        <Text
                          className="font-medium mb-[4px] mt-[8px] text-gray_900 text-left w-[auto]"
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
                      className="font-normal leading-[22.00px] mt-[15px] not-italic text-gray_500 text-left w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start mt-[13px] md:w-[100%] sm:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_14X14.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite One"
                      />
                      <Img
                        src="images/img_location.svg"
                        className="h-[14px] w-[14px]"
                        alt="location One"
                      />
                    </div>
                  </div>
                  <Line className="self-center border-gray_500_33 border-2 border-solid w-[100%] justify-start items-center p-[11px] rounded-radius4" />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex flex-row items-end justify-evenly w-[auto]">
                        <Img
                          src="images/img_avatar_28X28.png"
                          className="h-[28px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[28px]"
                          alt="Avatar Two"
                        />
                        <Text
                          className="font-medium mb-[4px] mt-[8px] text-gray_900 text-left w-[auto]"
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
                      className="font-normal mt-[14px] not-italic text-gray_500 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start mt-[35px] md:w-[100%] sm:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_14X14.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite Two"
                      />
                      <Img
                        src="images/img_location.svg"
                        className="h-[14px] w-[14px]"
                        alt="location Two"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] sm:w-[100%] w-[47%]">
              <div className="bg-white_A700 flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                    <Img
                      src="images/img_image_6.png"
                      className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                      alt="Image One"
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
                    src="images/img_image_150X290.png"
                    className="h-[150px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                    alt="Image Two"
                  />
                  <div className="flex flex-col gap-[19px] items-center justify-start mt-[24px] w-[100%]">
                    <Text
                      className="leading-[22.00px] text-gray_900 text-left sm:w-[100%] w-[97%]"
                      as="h4"
                      variant="h4"
                    >
                      The Best Fashion Instagrams of the Week: Céline Dion,
                      Lizzo, and More
                    </Text>
                    <Text
                      className="font-medium leading-[20.00px] text-gray_500 text-left w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      If you are looking for a break from the cold, take a cue
                      from Lizzo: This week, the singer headed to Disneyland in
                      warm and sunny California.
                    </Text>
                  </div>
                  <Text
                    className="font-bold mt-[12px] text-indigo_A200 text-left tracking-ls1 uppercase w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Read More
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-start mt-[20px] w-[100%]">
                  <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[23%]">
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[14px] my-[2px] w-[14px]"
                      alt="favorite Three"
                    />
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      326
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[22%]">
                    <Img
                      src="images/img_location.svg"
                      className="h-[14px] my-[3px] w-[14px]"
                      alt="location Three"
                    />
                    <Text
                      className="font-medium my-[2px] text-gray_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      148
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-center ml-[77px] p-[7px] w-[26%]">
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
              <div className="bg-white_A700 flex flex-col gap-[25px] items-start justify-start p-[23px] sm:px-[20px] rounded-radius12 w-[100%]">
                <div className="flex flex-col gap-[30px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[7px] mt-[7px] md:w-[100%] sm:w-[100%] w-[96%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                      <Img
                        src="images/img_image_48X48.png"
                        className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                        alt="Image Three"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                        <Text
                          className="font-bold text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Dustin Houston
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
                  <Text
                    className="font-medium text-gray_500 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Whether its a driving tour 😂
                  </Text>
                </div>
                <div className="flex flex-row font-sfprodisplay gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                  <Img
                    src="images/img_photo1.png"
                    className="h-[160px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[69%]"
                    alt="image Four"
                  />
                  <div className="flex flex-col gap-[10px] items-center justify-start w-[28%]">
                    <Img
                      src="images/img_photo2.png"
                      className="h-[75px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                      alt="image Five"
                    />
                    <div
                      className="bg-cover bg-no-repeat flex flex-row gap-[6px] items-center justify-start p-[22px] sm:px-[20px] rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_photo4.png')",
                      }}
                    >
                      <Img
                        src="images/img_settings_14X14.svg"
                        className="h-[14px] my-[8px] w-[14px]"
                        alt="settings Two"
                      />
                      <Text
                        className="font-medium my-[8px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        17
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-inter items-center justify-between mb-[7px] md:ml-[0] sm:ml-[0] ml-[7px] md:w-[100%] sm:w-[100%] w-[96%]">
                  <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[auto]">
                      <Img
                        src="images/img_favorite.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite Four"
                      />
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        326
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start p-[5px] w-[auto]">
                      <Img
                        src="images/img_location.svg"
                        className="h-[14px] w-[14px]"
                        alt="location Four"
                      />
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        148
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center p-[5px] w-[auto]">
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
                      alt="reply Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 sm:flex-col flex-row font-sfprodisplay gap-[10px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[30px] overflow-auto pl-[5px] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
          <div className="h-[1024px] md:h-[349px] sm:h-[349px] relative sm:w-[100%] w-[auto]">
            <div className="absolute bg-gray_900 flex flex-col gap-[227px] md:gap-[40px] sm:gap-[40px] h-[max-content] inset-y-[0] justify-end left-[0] my-[auto] p-[30px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[93%]">
              <div className="flex flex-row gap-[20px] items-center justify-end md:ml-[0] sm:ml-[0] ml-[214px] mr-[10px] mt-[15px] md:w-[100%] sm:w-[100%] w-[35%]">
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
              <div className="flex flex-col font-inter md:gap-[40px] sm:gap-[40px] gap-[66px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[15px] mr-[20px] md:w-[100%] sm:w-[100%] w-[90%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Who to Follow
                  </Text>
                  <List
                    className="flex-col gap-[30px] grid items-center mt-[43px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Four"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button
                        className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillIndigoA200"
                      >
                        <Img
                          src="images/img_camera_2.svg"
                          className="h-[14px]"
                          alt="camera One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_5.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Five"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button
                        className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillIndigoA200"
                      >
                        <Img
                          src="images/img_camera_2.svg"
                          className="h-[14px]"
                          alt="camera Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_4.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Six"
                      />
                      <div className="flex flex-col gap-[5px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button
                        className="flex h-[28px] items-center justify-center my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillIndigoA200"
                      >
                        <Img
                          src="images/img_camera_2.svg"
                          className="h-[14px]"
                          alt="camera Three"
                        />
                      </Button>
                    </div>
                  </List>
                  <div className="flex flex-row items-start justify-start mt-[43px] md:w-[100%] sm:w-[100%] w-[30%]">
                    <Text
                      className="font-bold mt-[2px] text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_2.svg"
                      className="h-[18px] ml-[4px] w-[18px]"
                      alt="arrowright Two"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] h-[305px] items-start justify-start w-[305px]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Trend Topics
                  </Text>
                  <List
                    className="flex-col gap-[30px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay h-[38px] text-[14px] text-center text-white_A700 w-[38px]"
                        shape="RoundedBorder12"
                        size="5xl"
                        variant="FillGreen400"
                      >
                        #1
                      </Button>
                      <Text
                        className="font-inter font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[125px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay h-[38px] text-[14px] text-center text-white_A700 w-[38px]"
                        shape="RoundedBorder12"
                        size="5xl"
                        variant="FillGreen400"
                      >
                        #2
                      </Button>
                      <Text
                        className="font-inter font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[125px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay h-[38px] text-[14px] text-center text-white_A700 w-[38px]"
                        shape="RoundedBorder12"
                        size="5xl"
                        variant="FillGreen400"
                      >
                        #3
                      </Button>
                      <Text
                        className="font-inter font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[125px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark Two"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Button
                        className="cursor-pointer font-bold font-sfprodisplay h-[38px] text-[14px] text-center text-white_A700 w-[38px]"
                        shape="RoundedBorder12"
                        size="6xl"
                        variant="FillGreen400"
                      >
                        #4
                      </Button>
                      <Text
                        className="font-inter font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[125px] my-[5px] w-[28px]"
                        shape="icbRoundedBorder8"
                        size="smIcn"
                        variant="icbFillWhiteA70033"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[14px]"
                          alt="checkmark Three"
                        />
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-inter gap-[44px] items-start justify-start right-[0] top-[14%] w-[90%]">
              <Text
                className="text-left text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                Featured Stories
              </Text>
              <List
                className="sm:flex-col flex-row gap-[20px] grid grid-cols-6 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-gray_100 border-solid md:h-[40px] sm:h-[40px] h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] object-cover rounded-radius9 w-[40px]"
                      alt="Image Six"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-gray_100 border-solid md:h-[40px] sm:h-[40px] h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X54.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] object-cover rounded-radius9 w-[40px]"
                      alt="Image Seven"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-gray_100 border-solid md:h-[40px] sm:h-[40px] h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_2.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] object-cover rounded-radius9 w-[40px]"
                      alt="Image Eight"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-gray_100 border-solid md:h-[40px] sm:h-[40px] h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_54X44.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] object-cover rounded-radius9 w-[40px]"
                      alt="Image Nine"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-gray_100 border-solid md:h-[40px] sm:h-[40px] h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_3.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] object-cover rounded-radius9 w-[40px]"
                      alt="Image Ten"
                    />
                  </div>
                </div>
                <div className="bg-gradient  p-[2px] relative rounded-radius12 w-[100%] ">
                  <div className="bg-gray_100 border-solid md:h-[40px] sm:h-[40px] h-[48px] p-[4px] relative rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_image_40X40.png"
                      className="absolute h-[40px] inset-[0] justify-center m-[auto] object-cover rounded-radius9 w-[40px]"
                      alt="Image Eleven"
                    />
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

export default HomevTwoPage;
