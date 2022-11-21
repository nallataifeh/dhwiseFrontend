import React from "react";

import { Stack, Column, Text, Button, Row, Img, Input } from "components";

const PasswordRecoveryPage = () => {
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
            Remember your password?
          </Text>
          <Button
            className="font-bold xl:mb-[115px] 2xl:mb-[130px] 3xl:mb-[156px] lg:mb-[92px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
            shape="CircleBorder29"
            size="xl"
            variant="FillIndigoA200"
          >
            Lognin
          </Button>
        </Column>
        <Row className="absolute items-center justify-between right-[0] w-[45%]">
          <div className="bg-white_A700_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
          <Column className="bg-white_A700 3xl:p-[108px] lg:p-[64px] xl:p-[80px] 2xl:p-[90px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[98%]">
            <Img
              src="images/img_question.svg"
              className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:w-[29px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
              alt="question"
            />
            <Column className="justify-start lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] w-[55%]">
              <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                Password Recovery
              </Text>
              <Text className="Enteryouremai" as="h5" variant="h5">
                Enter your email to recover your password
              </Text>
            </Column>
            <Column className="justify-start lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[76%]">
              <Text className="columnlabel" as="h6" variant="h6">
                Email
              </Text>
              <Input
                className="placeholder:text-gray_500 email"
                wrapClassName="2xl:mt-[14px] 3xl:mt-[16px] flex lg:mt-[9px] w-[100%] xl:mt-[12px]"
                type="email"
                name="email"
                placeholder="anne.carry@mail.com"
                suffix={
                  <Img
                    src="images/img_television.svg"
                    className="mr-[1px] lg:w-[12px] lg:h-[13px] lg:ml-[24px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                    alt="television"
                  />
                }
                shape="RoundedBorder8"
                variant="OutlineGray5006c"
              ></Input>
            </Column>
            <Button
              className="font-bold lg:mb-[332px] xl:mb-[416px] 2xl:mb-[468px] 3xl:mb-[561px] lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[76%]"
              shape="CircleBorder29"
              size="xl"
              variant="FillIndigoA200"
            >
              Send Email
            </Button>
          </Column>
        </Row>
      </Stack>
    </>
  );
};

export default PasswordRecoveryPage;
