import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const SearchResultsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
          <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between max-w-[990px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <Sidebar className="flex flex-col md:hidden sm:hidden w-[165px]" />
            <div className="flex flex-1 flex-col md:gap-[40px] sm:gap-[40px] gap-[64px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[40px] w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[67px] items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-start p-[13px] rounded-radius12 w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="flex-1 font-medium p-[0] text-[14px] placeholder:text-gray_900 text-gray_900 text-left w-[100%]"
                    wrapClassName="flex md:ml-[0] md:w-[100%] ml-[7px] sm:ml-[0] sm:w-[100%] w-[84%]"
                    name="FrameTwo"
                    placeholder="Nass"
                    prefix={
                      <Img
                        src="images/img_search_18X18.svg"
                        className="cursor-pointer mr-[15px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#1e1f20"
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
                  <div className="flex md:flex-1 sm:flex-1 flex-row gap-[18px] items-end justify-center md:w-[100%] sm:w-[100%] w-[13%]">
                    <Text
                      className="font-bold font-inter mt-[9px] text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Filters
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-sfprodisplay h-[28px] text-[10.32px] text-center text-white_A700 w-[28px]"
                      shape="RoundedBorder8"
                      size="4xl"
                      variant="FillRedA200"
                    >
                      1
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    People
                  </Text>
                  <div className="md:gap-[20px] sm:gap-[20px] gap-[30px] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[40px] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_avatar.png"
                          className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[65%]">
                          <Text
                            className="text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex items-center justify-center my-[9px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[5px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="xl"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_avatar_3.png"
                          className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar One"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[65%]">
                          <Text
                            className="text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex items-center justify-center my-[9px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[5px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="xl"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_avatar_11.png"
                          className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar Two"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[65%]">
                          <Text
                            className="text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex items-center justify-center my-[9px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[5px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="xl"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[30px] sm:px-[20px] rounded-radius12 w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_avatar_12.png"
                          className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                          alt="Avatar Three"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[65%]">
                          <Text
                            className="text-gray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="flex items-center justify-center my-[9px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[5px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="xl"
                        variant="FillIndigoA200"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="border-2 border-gray_500_6c border-solid h-[30px] md:h-[44px] sm:h-[44px] mt-[30px] p-[7px] relative rounded-radius4 md:w-[100%] sm:w-[100%] w-[13%]">
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
              <div className="flex flex-col gap-[43px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Posts
                </Text>
                <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
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
                      <div className="flex flex-col gap-[19px] items-start justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[97%]">
                        <Text
                          className="leading-[22.00px] text-gray_900 text-left sm:w-[100%] w-[95%]"
                          as="h4"
                          variant="h4"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo, and More
                        </Text>
                        <Text
                          className="font-medium text-gray_500 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </div>
                      <Text
                        className="font-bold mt-[66px] text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[22%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="h-[14px] w-[14px]"
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
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[21%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[14px] w-[14px]"
                          alt="location"
                        />
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[92px] p-[5px] w-[25%]">
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
                          alt="reply"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col gap-[25px] items-center justify-start mb-[124px] p-[23px] sm:px-[20px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[30px] items-start justify-start mt-[7px] md:w-[100%] sm:w-[100%] w-[96%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                          <Img
                            src="images/img_image_48X48.png"
                            className="h-[48px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[48px]"
                            alt="Image Two"
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
                          alt="overflowmenu One"
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
                        alt="image Three"
                      />
                      <div className="flex flex-col gap-[10px] items-center justify-start w-[28%]">
                        <Img
                          src="images/img_photo2.png"
                          className="h-[75px] md:h-[auto] sm:h-[auto] object-cover rounded-radius8 w-[100%]"
                          alt="image Four"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex flex-row gap-[7px] items-center justify-start p-[22px] sm:px-[20px] rounded-radius8 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_photo4.png')",
                          }}
                        >
                          <Img
                            src="images/img_settings_14X14.svg"
                            className="h-[14px] my-[7px] w-[14px]"
                            alt="settings Two"
                          />
                          <Text
                            className="font-medium my-[7px] text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            17
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row font-inter items-center justify-between mb-[7px] md:w-[100%] sm:w-[100%] w-[96%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[auto]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[auto]">
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
                        <div className="flex flex-row gap-[6px] items-center justify-start p-[5px] w-[auto]">
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
                          alt="reply One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row font-sfprodisplay gap-[10px] items-center justify-start pl-[5px] md:px-[20px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="bg-gray_500_7e h-[128px] sm:mt-[0] my-[448px] rounded-radius2 w-[2%]"></div>
            <div className="bg-gray_900 flex flex-col gap-[45px] items-end justify-start p-[40px] sm:px-[20px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] sm:w-[100%] w-[97%]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] sm:w-[100%] w-[37%]">
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
                  alt="Avatar Four"
                />
              </div>
              <div className="flex flex-col font-inter items-center justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                <div className="bg-red_A200 md:h-[137px] sm:h-[137px] h-[174px] pt-[21px] relative rounded-radius12 w-[100%]">
                  <div className="bg-gray_900_33 h-[19px] mb-[-3px] ml-[auto] mr-[118px] rounded-radius50 w-[19px] z-[1]"></div>
                  <Text
                    className="mb-[-8.67px] ml-[20px] mt-[2px] text-left text-white_A700 w-[auto] z-[1]"
                    as="h3"
                    variant="h3"
                  >
                    Go Premium!
                  </Text>
                  <div className="flex flex-col gap-[28px] items-start justify-start mb-[undefinedpx] ml-[20px] mt-[auto] w-[75%] z-[1]">
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700"
                      as="h5"
                      variant="h5"
                    >
                      Try premium membership and enjoy
                      <br />a full experience of our community.
                    </Text>
                    <div className="bg-gray_900_33 md:h-[14px] sm:h-[14px] h-[30px] p-[7px] relative rounded-radius12 w-[42%]">
                      <Text
                        className="absolute font-medium h-[max-content] inset-y-[0] left-[10%] my-[auto] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        See more
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="absolute h-[14px] inset-y-[0] my-[auto] right-[10%] rounded-radius50 w-[14px]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[auto] mx-[auto] w-[100%]">
                    <div className="bg-green_400 h-[87px] mb-[50px] rounded-radius435 w-[auto]"></div>
                    <Img
                      src="images/img_oval_92X165.png"
                      className="h-[92px] md:h-[auto] sm:h-[auto] mt-[45px] object-cover w-[auto]"
                      alt="Oval One"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-[64px] w-[100%]">
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
                        src="images/img_avatar_13.png"
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
                          alt="camera"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_38X38.png"
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
                          alt="camera One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row gap-[10px] items-start justify-between w-[100%]">
                      <Img
                        src="images/img_avatar_4.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Seven"
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
                  </List>
                  <div className="flex flex-row items-center justify-start mt-[43px] md:w-[100%] sm:w-[100%] w-[29%]">
                    <Text
                      className="font-bold text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      See more
                    </Text>
                    <Img
                      src="images/img_arrowright_2.svg"
                      className="h-[18px] ml-[4px] w-[18px]"
                      alt="arrowright Three"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[44px] items-start justify-start mt-[63px] w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Friends
                  </Text>
                  <List
                    className="flex-col gap-[30px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                      <Img
                        src="images/img_avatar_14.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Eight"
                      />
                      <Text
                        className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[135px] my-[5px] w-[28px]"
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
                      <Img
                        src="images/img_avatar_15.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Nine"
                      />
                      <Text
                        className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[135px] my-[5px] w-[28px]"
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
                      <Img
                        src="images/img_avatar_16.png"
                        className="h-[38px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[38px]"
                        alt="Avatar Ten"
                      />
                      <Text
                        className="font-medium ml-[10px] text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        MadeInAmerica
                      </Text>
                      <Button
                        className="flex h-[28px] items-center justify-center ml-[135px] my-[5px] w-[28px]"
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
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResultsPage;
