import React from "react";

import { Row, Line, Column, Input, Img, Text, Button, Grid } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";

const StoriesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-gray_100 font-inter items-start mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Row className="items-start justify-between lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[88%]">
          <Line className="bg-white_A700_66 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] lg:mt-[318px] xl:mt-[398px] 2xl:mt-[448px] 3xl:mt-[537px] rounded-radius25 w-[5px]" />
          <Column className="bg-gray_900 justify-end lg:pt-[28px] xl:pt-[35px] 2xl:pt-[40px] 3xl:pt-[48px] lg:px-[28px] xl:px-[35px] 2xl:px-[40px] 3xl:px-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[99%]">
            <Row className="items-center justify-between lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] w-[97%]">
              <Row className="bg-white_A700_33 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius12 w-[67%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="placeholder:text-gray_500 email"
                  wrapClassName="flex ml-[2px] mt-[4px] w-[87%]"
                  name="FrameSix"
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
                  size="mdSrc"
                  variant="srcFillGray800"
                ></Input>
                <Text
                  className="font-bold lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] text-gray_500 tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Filters
                </Text>
              </Row>
              <Row className="font-sfprodisplay items-center justify-between w-[10%]">
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
                  className="Image_Eight"
                  alt="Avatar"
                />
              </Row>
            </Row>
            <Text
              className="lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] text-white_A700 w-[auto]"
              as="h1"
              variant="h1"
            >
              Stories
            </Text>
            <Row className="items-start lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] mr-[auto] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] py-[2px] w-[44%]">
              <Column className="justify-start mt-[1px] w-[15%]">
                <Text
                  className="font-bold text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  For You
                </Text>
                <Img
                  src="images/img_dot.svg"
                  className="xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] ml-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[64%]"
                  alt="Dot"
                />
              </Column>
              <Text
                className="font-bold mt-[2px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Following
              </Text>
              <Text
                className="font-bold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[2px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Popular
              </Text>
              <Text
                className="font-bold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] mt-[1px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Featured
              </Text>
              <Text
                className="font-bold lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[1px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Live
              </Text>
              <Text
                className="font-bold lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[2px] text-white_A700_99 w-[auto]"
                as="h5"
                variant="h5"
              >
                Continue Watching
              </Text>
            </Row>
            <Grid className="font-sfprodisplay lg:gap-[28px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-4 lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[97%]">
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius8 w-[100%]"
                style={{ backgroundImage: "url('images/img_photo4.png')" }}
              >
                <Column className="bg-gradient1  items-center justify-end lg:p-[29px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image.png"
                    className="Image5"
                    alt="Image"
                  />
                  <Text className="User3" as="h4" variant="h4">
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius8 w-[100%]"
                style={{ backgroundImage: "url('images/img_cardmobile.png')" }}
              >
                <Column className="bg-gradient1  items-center justify-end lg:p-[29px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_68X68.png"
                    className="Image5"
                    alt="Image One"
                  />
                  <Text className="User3" as="h4" variant="h4">
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_380X255.png')",
                }}
              >
                <Column className="bg-gradient1  items-center justify-end lg:p-[29px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_7.png"
                    className="Image5"
                    alt="Image Two"
                  />
                  <Text className="User3" as="h4" variant="h4">
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_1.png')",
                }}
              >
                <Column className="bg-gradient1  items-center justify-end lg:p-[29px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_8.png"
                    className="Image5"
                    alt="Image Three"
                  />
                  <Text className="User3" as="h4" variant="h4">
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_2.png')",
                }}
              >
                <Column className="bg-gradient1  items-center justify-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_9.png"
                    className="Image_Four"
                    alt="Image Four"
                  />
                  <Text className="User4" as="h4" variant="h4">
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_3.png')",
                }}
              >
                <Column className="bg-gradient1  items-center justify-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_10.png"
                    className="Image_Four"
                    alt="Image Five"
                  />
                  <Text className="User4" as="h4" variant="h4">
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_4.png')",
                }}
              >
                <Column className="bg-gradient1  items-center justify-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_11.png"
                    className="Image_Four"
                    alt="Image Six"
                  />
                  <Text className="User4" as="h4" variant="h4">
                    Edward Ford
                  </Text>
                </Column>
              </Column>
              <Column
                className="bg-cover bg-repeat items-center justify-start rounded-radius8 w-[100%]"
                style={{
                  backgroundImage: "url('images/img_cardmobile_5.png')",
                }}
              >
                <Column className="bg-gradient1  items-center justify-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_image_12.png"
                    className="Image_Four"
                    alt="Image Seven"
                  />
                  <Text className="User4" as="h4" variant="h4">
                    Edward Ford
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Row>
      </Row>
    </>
  );
};

export default StoriesPage;
