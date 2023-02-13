import React from "react";

import { Text, Button, Img, Input } from "components";

const PasswordRecoveryPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-inter h-[1024px] mx-[auto] relative w-[100%]">
        <div
          className="bg-cover bg-no-repeat flex flex-col items-center justify-center my-[auto] p-[305px] md:px-[20px] sm:px-[20px] w-[58%]"
          style={{ backgroundImage: "url('images/img_group1513.png')" }}
        >
          <Text
            className="mt-[133px] text-left text-white_A700 w-[auto]"
            as="h1"
            variant="h1"
          >
            Hello!
          </Text>
          <Text
            className="font-medium mt-[17px] text-left text-white_A700 w-[auto]"
            as="h5"
            variant="h5"
          >
            Remember your password?
          </Text>
          <Button
            className="cursor-pointer font-bold mb-[130px] min-w-[220px] mt-[30px] text-[14px] text-center text-white_A700 w-[auto]"
            shape="CircleBorder29"
            size="8xl"
            variant="FillIndigoA200"
          >
            Lognin
          </Button>
        </div>
        <div className="flex md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-between ml-[-45px] my-[auto] md:px-[20px] sm:px-[20px] w-[46%] z-[1]">
          <div className="bg-white_A700_7e h-[128px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 w-[auto]"></div>
          <div className="bg-white_A700 flex flex-col items-start justify-start p-[90px] sm:px-[20px] md:px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[auto]">
            <Img
              src="images/img_question.svg"
              className="h-[41px] md:ml-[0] sm:ml-[0] ml-[35px] w-[41px]"
              alt="question"
            />
            <div className="flex flex-col gap-[14px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[35px] mt-[66px] md:w-[100%] sm:w-[100%] w-[57%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Password Recovery
              </Text>
              <Text
                className="font-medium text-gray_500 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Enter your email to recover your password
              </Text>
            </div>
            <div className="flex flex-col gap-[14px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[35px] mt-[63px] md:w-[100%] sm:w-[100%] w-[77%]">
              <Text
                className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <Input
                className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="flex w-[100%]"
                type="email"
                name="email"
                placeholder="anne.carry@mail.com"
                suffix={
                  <Img
                    src="images/img_television.svg"
                    className="ml-[35px] my-[auto]"
                    alt="television"
                  />
                }
                shape="RoundedBorder8"
                variant="OutlineGray5006c"
              ></Input>
            </div>
            <Button
              className="cursor-pointer font-bold mb-[468px] min-w-[350px] md:ml-[0] sm:ml-[0] ml-[35px] mt-[20px] text-[14px] text-center text-white_A700 w-[auto]"
              shape="CircleBorder29"
              size="8xl"
              variant="FillIndigoA200"
            >
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecoveryPage;
