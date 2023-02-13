import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Input, Img, Text, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const StoriesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex md:flex-col sm:flex-col flex-row font-inter md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[165px]" />
        <div className="flex flex-1 md:flex-col sm:flex-col flex-row gap-[10px] items-start justify-between max-w-[1270px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <Line className="bg-white_A700_66 md:flex-1 sm:flex-1 h-[128px] md:h-[5px] sm:h-[5px] mb-[528px] md:mt-[0] sm:mt-[0] mt-[448px] rounded-radius25 md:w-[100%] sm:w-[100%] w-[5px]" />
          <div className="bg-gray_900 flex md:flex-1 sm:flex-1 flex-col items-start justify-end pt-[40px] sm:px-[20px] px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between md:ml-[0] sm:ml-[0] ml-[35px] md:w-[100%] sm:w-[100%] w-[98%]">
              <div className="bg-white_A700_33 flex md:flex-col sm:flex-col flex-row gap-[25px] items-center justify-start p-[9px] rounded-radius12 md:w-[100%] sm:w-[100%] w-[auto]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[2px] mt-[4px] sm:ml-[0] sm:mt-[0] sm:w-[100%] w-[87%]"
                  name="FrameSix"
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
                  size="mdSrc"
                  variant="srcFillGray800"
                ></Input>
                <Text
                  className="font-bold text-gray_500 text-left tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Filters
                </Text>
              </div>
              <div className="flex flex-row font-sfprodisplay gap-[20px] items-center justify-between md:w-[100%] sm:w-[100%] w-[auto]">
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
            </div>
            <Text
              className="md:ml-[0] sm:ml-[0] ml-[35px] mt-[62px] text-left text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              Stories
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[35px] mr-[auto] mt-[43px] py-[2px] md:w-[100%] sm:w-[100%] w-[45%]">
              <div className="flex flex-col gap-[9px] items-start justify-start sm:w-[100%] w-[15%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  For You
                </Text>
                <Img
                  src="images/img_dot.svg"
                  className="h-[2px] w-[65%]"
                  alt="Dot"
                />
              </div>
              <Text
                className="font-bold sm:mt-[0] mt-[2px] text-left text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Following
              </Text>
              <Text
                className="font-bold sm:ml-[0] ml-[24px] sm:mt-[0] mt-[2px] text-left text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular
              </Text>
              <Text
                className="font-bold sm:ml-[0] ml-[24px] text-left text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Featured
              </Text>
              <Text
                className="font-bold sm:ml-[0] ml-[26px] text-left text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Live
              </Text>
              <Text
                className="font-bold sm:ml-[0] ml-[26px] sm:mt-[0] mt-[2px] text-left text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Continue Watching
              </Text>
            </div>
            <div className="font-sfprodisplay md:gap-[20px] sm:gap-[20px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] md:ml-[0] sm:ml-[0] ml-[35px] mt-[40px] md:w-[100%] sm:w-[100%] w-[98%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{ backgroundImage: "url('images/img_photo4.png')" }}
              >
                <div className="bg-gradient1  flex flex-col gap-[18px] items-center justify-end p-[42px] sm:px-[20px] md:px-[40px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image.png"
                    className="h-[68px] md:h-[auto] sm:h-[auto] mt-[192px] object-cover rounded-radius24 w-[68px]"
                    alt="Image"
                  />
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{ backgroundImage: "url('images/img_cardmobile.png')" }}
              >
                <div className="bg-gradient1  flex flex-col gap-[18px] items-center justify-end p-[42px] sm:px-[20px] md:px-[40px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_68X68.png"
                    className="h-[68px] md:h-[auto] sm:h-[auto] mt-[192px] object-cover rounded-radius24 w-[68px]"
                    alt="Image One"
                  />
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_380X255.png')",
                }}
              >
                <div className="bg-gradient1  flex flex-col gap-[18px] items-center justify-end p-[42px] sm:px-[20px] md:px-[40px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_7.png"
                    className="h-[68px] md:h-[auto] sm:h-[auto] mt-[192px] object-cover rounded-radius24 w-[68px]"
                    alt="Image Two"
                  />
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_1.png')",
                }}
              >
                <div className="bg-gradient1  flex flex-col gap-[18px] items-center justify-end p-[42px] sm:px-[20px] md:px-[40px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_8.png"
                    className="h-[68px] md:h-[auto] sm:h-[auto] mt-[192px] object-cover rounded-radius24 w-[68px]"
                    alt="Image Three"
                  />
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_2.png')",
                }}
              >
                <div className="bg-gradient1  flex flex-col gap-[15px] items-center justify-end p-[40px] sm:px-[20px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_9.png"
                    className="h-[68px] md:h-[auto] sm:h-[auto] mt-[195px] object-cover rounded-radius24 w-[68px]"
                    alt="Image Four"
                  />
                  <Text
                    className="text-center text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_3.png')",
                }}
              >
                <div className="bg-gradient1  flex flex-col gap-[15px] items-center justify-end p-[40px] sm:px-[20px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_10.png"
                    className="h-[68px] md:h-[auto] sm:h-[auto] mt-[195px] object-cover rounded-radius24 w-[68px]"
                    alt="Image Five"
                  />
                  <Text
                    className="text-center text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_4.png')",
                }}
              >
                <div className="bg-gradient1  flex flex-col gap-[15px] items-center justify-end p-[40px] sm:px-[20px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_11.png"
                    className="h-[68px] md:h-[auto] sm:h-[auto] mt-[195px] object-cover rounded-radius24 w-[68px]"
                    alt="Image Six"
                  />
                  <Text
                    className="text-center text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_5.png')",
                }}
              >
                <div className="bg-gradient1  flex flex-col gap-[15px] items-center justify-end p-[40px] sm:px-[20px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_12.png"
                    className="h-[68px] md:h-[auto] sm:h-[auto] mt-[195px] object-cover rounded-radius24 w-[68px]"
                    alt="Image Seven"
                  />
                  <Text
                    className="text-center text-white_A700 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Edward Ford
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoriesPage;
