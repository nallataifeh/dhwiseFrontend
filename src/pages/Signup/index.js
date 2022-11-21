import React from "react";

import { Stack, Column, Text, Button, Row, Img, Input } from "components";

const SignupPage = () => {
  return (
    <>
      <Stack className="bg-gray_100 font-inter 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] mx-[auto] w-[100%]">
        <Column
          className="absolute bg-cover bg-repeat items-center justify-center left-[0] lg:p-[216px] xl:p-[271px] 2xl:p-[305px] 3xl:p-[366px] w-[58%]"
          style={{ backgroundImage: "url('images/img_group1513.png')" }}
        >
          <Text className="Hello" as="h1" variant="h1">
            Hello!
          </Text>
          <Text className="confirmation" as="h5" variant="h5">
            Already have an account?
          </Text>
          <Button
            className="font-bold xl:mb-[115px] 2xl:mb-[130px] 3xl:mb-[156px] lg:mb-[92px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
            shape="CircleBorder29"
            size="xl"
            variant="FillIndigoA200"
          >
            Login
          </Button>
        </Column>
        <Row className="absolute items-center justify-between right-[0] w-[45%]">
          <div className="bg-white_A700_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-white_A700 lg:p-[34px] xl:p-[42px] 2xl:p-[48px] 3xl:p-[57px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[98%]">
            <Img
              src="images/img_question.svg"
              className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] lg:w-[29px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
              alt="question"
            />
            <Column className="justify-start lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[36%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Create an account
              </Text>
              <Text
                className="font-medium lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-gray_500 w-[auto]"
                as="h5"
                variant="h5"
              >
                Sign up to continue{" "}
              </Text>
            </Column>
            <Column className="items-center justify-start lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] pt-[3px] w-[64%]">
              <Column className="justify-start w-[100%]">
                <Text className="columnlabel" as="h6" variant="h6">
                  name
                </Text>
                <Input
                  className="placeholder:text-gray_500 Group1405"
                  wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%] xl:mt-[12px]"
                  name="Group1405"
                  placeholder="Anne Carry"
                  shape="RoundedBorder8"
                  variant="OutlineGray5006c"
                ></Input>
              </Column>
              <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                <Text className="columnlabel" as="h6" variant="h6">
                  email
                </Text>
                <Input
                  className="placeholder:text-gray_500 email"
                  wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[9px] w-[100%] xl:mt-[12px]"
                  type="email"
                  name="email"
                  placeholder="anne.carry@mail.com"
                  suffix={
                    <Img
                      src="images/img_television_18X18.svg"
                      className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                      alt="television"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="OutlineGray5006c"
                ></Input>
              </Column>
              <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                <Text className="columnlabel" as="h6" variant="h6">
                  Password
                </Text>
                <Input
                  className="placeholder:text-gray_500 email"
                  wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[9px] w-[100%] xl:mt-[12px]"
                  type="password"
                  name="Group1403"
                  placeholder="Password@123"
                  suffix={
                    <Img
                      src="images/img_eye.svg"
                      className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                      alt="eye"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="OutlineGray5006c"
                ></Input>
              </Column>
            </Column>
            <Button
              className="font-bold lg:ml-[54px] xl:ml-[67px] 2xl:ml-[76px] 3xl:ml-[91px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[64%]"
              shape="CircleBorder29"
              size="xl"
              variant="FillIndigoA200"
            >
              Create an account
            </Button>
            <Column className="justify-start lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[64%]">
              <Text className="Socials" as="h6" variant="h6">
                Or connect with socials
              </Text>
              <Column className="items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
                <Row className="bg-indigo_600 items-center justify-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius29 w-[100%]">
                  <Img
                    src="images/img_facebook.svg"
                    className="lg:ml-[47px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] trash"
                    alt="facebook"
                  />
                  <Text className="Content" as="h5" variant="h5">
                    Connect with Facebook
                  </Text>
                </Row>
                <Button
                  className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[14px] text-center w-[100%] xl:mt-[17px]"
                  leftIcon={
                    <Img
                      src="images/img_icon_apple_18X18.svg"
                      className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[3px] xl:w-[16px] xl:h-[17px] xl:mr-[4px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[5px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[6px]"
                      alt="Icon/Apple"
                    />
                  }
                  shape="CircleBorder29"
                  size="xl"
                  variant="FillGray900"
                >
                  <div className="bg-transparent font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                    Connect with Apple
                  </div>
                </Button>
                <Button
                  className="2xl:mt-[20px] 3xl:mt-[24px] flex items-center justify-center lg:mt-[14px] text-center w-[100%] xl:mt-[17px]"
                  leftIcon={
                    <Img
                      src="images/img_google.svg"
                      className="mr-[4px] text-center lg:w-[12px] lg:h-[13px] xl:w-[16px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[19px] 3xl:w-[21px] 3xl:h-[22px]"
                      alt="google"
                    />
                  }
                  shape="CircleBorder29"
                  size="xl"
                  variant="OutlineGray50066"
                >
                  <div className="bg-transparent font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_900">
                    Connect with Google+
                  </div>
                </Button>
              </Column>
            </Column>
          </Column>
        </Row>
      </Stack>
    </>
  );
};

export default SignupPage;
