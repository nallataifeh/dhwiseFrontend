import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MyProfilePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
          <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[990px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <Sidebar className="flex flex-col md:hidden sm:hidden w-[165px]" />
            <div className="flex flex-1 flex-col gap-[40px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[40px] w-[100%]">
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
              <div className="bg-gray_100 flex flex-col items-center justify-start w-[100%]">
                <List
                  className="flex-col gap-[0] md:gap-[20px] sm:gap-[20px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col sm:flex-col flex-row gap-[30px] items-start justify-between my-[0] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[auto]">
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
                          alt="overflowmenu"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                        <Img
                          src="images/img_image_150X290.png"
                          className="h-[150px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                          alt="Image One"
                        />
                        <div className="flex flex-col gap-[19px] items-center justify-start mt-[24px] w-[100%]">
                          <Text
                            className="leading-[22.00px] text-gray_900 text-left sm:w-[100%] w-[97%]"
                            as="h4"
                            variant="h4"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
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
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[23%]">
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
                        <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[22%]">
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
                            alt="reply"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col font-sfprodisplay gap-[32px] items-start justify-end mb-[30px] p-[30px] sm:px-[20px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[auto]">
                      <Text
                        className="mt-[3px] text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Photos
                      </Text>
                      <div className="flex flex-col font-inter gap-[30px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[10px] h-[320px] items-center justify-start rounded-radius12 w-[320px]">
                          <div className="flex flex-row gap-[10px] items-center justify-between rounded-radius12 w-[100%]">
                            <Img
                              src="images/img_5.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Two"
                            />
                            <Img
                              src="images/img_image_221X221.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Three"
                            />
                            <Img
                              src="images/img_image_19.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Four"
                            />
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-between rounded-radius12 w-[100%]">
                            <Img
                              src="images/img_photo4.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Five"
                            />
                            <Img
                              src="images/img_image_20.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Six"
                            />
                            <Img
                              src="images/img_photo1.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Seven"
                            />
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-between rounded-radius12 w-[100%]">
                            <Img
                              src="images/img_image_21.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Eight"
                            />
                            <Img
                              src="images/img_image_22.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Nine"
                            />
                            <Img
                              src="images/img_image_23.png"
                              className="h-[100px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100px]"
                              alt="Image Ten"
                            />
                          </div>
                        </div>
                        <div className="border-2 border-gray_500_6c border-solid md:h-[14px] sm:h-[14px] h-[30px] p-[7px] relative rounded-radius4 sm:w-[100%] w-[31%]">
                          <Text
                            className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-gray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            See more
                          </Text>
                          <Img
                            src="images/img_arrowright_14X14.svg"
                            className="absolute h-[14px] inset-y-[0] my-[auto] right-[10%] w-[14px]"
                            alt="arrowright One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col sm:flex-col flex-row gap-[30px] items-start justify-between my-[0] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:mt-[0] sm:mt-[0] mt-[30px] p-[30px] sm:px-[20px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[auto]">
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
                          src="images/img_cardmobile_3.png"
                          className="h-[150px] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                          alt="Image One One"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start mt-[24px] w-[100%]">
                          <Text
                            className="leading-[22.00px] text-gray_900 text-left sm:w-[100%] w-[95%]"
                            as="h4"
                            variant="h4"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
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
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[23%]">
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
                        <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[22%]">
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
                        <div className="flex flex-row items-center justify-center ml-[77px] p-[5px] w-[26%]">
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
                    <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col font-sfprodisplay items-start justify-end mb-[173px] p-[30px] sm:px-[20px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[380px]">
                      <Text
                        className="mt-[3px] text-gray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Videos
                      </Text>
                      <div className="flex flex-row font-inter gap-[10px] items-center justify-start mt-[32px] w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[38%]"
                          style={{
                            backgroundImage: "url('images/img_group1512.png')",
                          }}
                        >
                          <div className="bg-gray_900_7e md:h-[38px] sm:h-[38px] h-[69px] p-[15px] relative rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="absolute h-[38px] inset-[0] justify-center m-[auto] w-[38px]"
                              alt="play"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-start pr-[4px] pt-[4px] w-[61%]">
                          <Text
                            className="font-bold leading-[20.00px] text-gray_900 text-left sm:w-[100%] w-[92%]"
                            as="h5"
                            variant="h5"
                          >
                            Tropical Fresh Tourism Is Back In Full Swing In{" "}
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row font-inter gap-[10px] items-center justify-start mt-[30px] w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[38%]"
                          style={{
                            backgroundImage: "url('images/img_image_15.png')",
                          }}
                        >
                          <div className="bg-gray_900_7e md:h-[38px] sm:h-[38px] h-[69px] p-[15px] relative rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="absolute h-[38px] inset-[0] justify-center m-[auto] w-[38px]"
                              alt="play One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-start pr-[4px] pt-[4px] w-[61%]">
                          <Text
                            className="font-bold leading-[20.00px] text-gray_900 text-left sm:w-[100%] w-[97%]"
                            as="h5"
                            variant="h5"
                          >
                            How Timberland created the visual campaign of the{" "}
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-start mt-[30px] w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[38%]"
                          style={{
                            backgroundImage: "url('images/img_image_18.png')",
                          }}
                        >
                          <div className="bg-gray_900_7e md:h-[38px] sm:h-[38px] h-[69px] p-[15px] relative rounded-radius8 w-[100%]">
                            <Img
                              src="images/img_play.svg"
                              className="absolute h-[38px] inset-[0] justify-center m-[auto] w-[38px]"
                              alt="play Two"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-end pr-[2px] py-[2px] w-[61%]">
                          <Text
                            className="font-bold font-inter leading-[20.00px] text-gray_900 text-left sm:w-[100%] w-[88%]"
                            as="h5"
                            variant="h5"
                          >
                            Take your mobile photography to the next{" "}
                          </Text>
                          <Text
                            className="font-normal font-sfprodisplay not-italic text-gray_500 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row font-sfprodisplay gap-[10px] items-center justify-between md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
            <div className="bg-gray_900 flex flex-col md:gap-[40px] sm:gap-[40px] gap-[85px] items-end justify-start p-[38px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[7px] md:w-[100%] sm:w-[100%] w-[40%]">
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
              <div className="flex flex-col font-inter gap-[30px] items-center justify-start mb-[42px] md:w-[100%] sm:w-[100%] w-[99%]">
                <div className="flex flex-col items-center justify-start pb-[2px] px-[2px] md:w-[100%] sm:w-[100%] w-[76%]">
                  <Img
                    src="images/img_avatar.png"
                    className="h-[108px] md:h-[auto] sm:h-[auto] object-cover rounded-radius36 w-[108px]"
                    alt="Avatar One"
                  />
                  <Text
                    className="mt-[13px] text-left text-white_A700 w-[auto]"
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
                <div className="flex flex-row gap-[25px] items-center justify-center md:w-[100%] sm:w-[100%] w-[71%]">
                  <div className="flex flex-row items-center justify-end pr-[2px] py-[2px] w-[41%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      518
                    </Text>
                    <Text
                      className="ml-[5px] text-gray_500 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Posts
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-end pr-[2px] py-[2px] w-[47%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      22k
                    </Text>
                    <Text
                      className="ml-[3px] text-gray_500 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Friends
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button
                      className="cursor-pointer font-bold min-w-[217px] text-[14px] text-center text-white_A700 w-[auto]"
                      shape="CircleBorder29"
                      size="8xl"
                      variant="FillGreen400"
                    >
                      Edit Profile
                    </Button>
                    <Button
                      className="flex h-[48px] items-center justify-center w-[48px]"
                      shape="icbRoundedBorder12"
                      size="mdIcn"
                      variant="icbOutlineGray50033"
                    >
                      <Img
                        src="images/img_overflowmenu_1.svg"
                        className="h-[22px]"
                        alt="overflowmenu Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[19px] items-start justify-start mt-[43px] md:w-[100%] sm:w-[100%] w-[70%]">
                    <Text
                      className="font-bold text-left text-white_A700 tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700_cc"
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
                      className="text-left text-white_A700 w-[auto]"
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
                          alt="Avatar Two"
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
                          alt="Avatar Three"
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
                          alt="Avatar Four"
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
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
