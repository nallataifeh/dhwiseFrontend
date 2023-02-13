import React from "react";

import { Text, Button, Img, Input } from "components";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { post1 } from "service/api";
import useForm from "hooks/useForm";

const LoginPage = () => {
  const [apiData1, setapiData1] = React.useState();
  const formValidationSchema = yup
    .object()
    .shape({
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter valid email"),
      password: yup.string().required("Password is required"),
    });
  const form = useForm(
    { email: "", password: "" },
    {
      validate: true,
      validateSchema: formValidationSchema,
      validationOnChange: true,
    }
  );
  const navigate = useNavigate();

  function callApi1(data) {
    const req = { data: { ...data } };

    post1(req)
      .then((res) => {
        setapiData1(res);

        localStorage.setItem("access", JSON.stringify(res?.access));

        localStorage.setItem("userId", JSON.stringify(res?.id));

        localStorage.setItem("refresh", JSON.stringify(res?.refresh));

        localStorage.setItem("email", JSON.stringify(res?.email));

        navigate("/homevone");
      })
      .catch((err) => {
        console.error(err);
        navigate("/signup");
      });
  }

  return (
    <>
      <div className="bg-gray_100 flex font-inter h-[1024px] mx-[auto] pr-[12px] relative w-[100%]">
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
            Don’t have an account yer?
          </Text>
          <Button
            className="common-pointer cursor-pointer font-bold mb-[130px] min-w-[220px] mt-[30px] text-[14px] text-center text-white_A700 w-[auto]"
            onClick={() => navigate("/signup")}
            shape="CircleBorder29"
            size="8xl"
            variant="FillIndigoA200"
          >
            Create an account
          </Button>
        </div>
        <div className="flex md:flex-col sm:flex-col flex-row gap-[10px] items-center justify-center ml-[-57px] my-[auto] md:px-[20px] sm:px-[20px] w-[46%] z-[1]">
          <div className="bg-white_A700_7e h-[128px] md:mt-[0] sm:mt-[0] my-[448px] rounded-radius2 w-[1%]"></div>
          <div className="bg-white_A700 flex flex-col justify-start p-[100px] sm:px-[20px] md:px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] sm:w-[100%] w-[98%]">
            <Img
              src="images/img_question.svg"
              className="h-[41px] md:ml-[0] sm:ml-[0] ml-[36px] w-[41px]"
              alt="question"
            />
            <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[37px] mt-[53px] md:w-[100%] sm:w-[100%] w-[38%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Welcome Back!{" "}
              </Text>
              <Text
                className="font-medium text-gray_500 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Sign in to continue{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-[34px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[37px] mr-[53px] mt-[60px] pt-[3px] md:w-[100%] sm:w-[100%] w-[80%]">
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
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
                  onChange={(e) => {
                    form.handleChange("email", e.target.value);
                  }}
                  errors={form?.errors?.email}
                  value={form?.values?.email}
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
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_900 text-left tracking-ls1 uppercase w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Password
                </Text>
                <Input
                  className="font-medium p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="flex w-[100%]"
                  type="password"
                  onChange={(e) => {
                    form.handleChange("password", e.target.value);
                  }}
                  errors={form?.errors?.password}
                  value={form?.values?.password}
                  name="Group1400"
                  placeholder="Password@123"
                  suffix={
                    <Img
                      src="images/img_eye.svg"
                      className="ml-[35px] my-[auto]"
                      alt="eye"
                    />
                  }
                  shape="RoundedBorder8"
                  variant="OutlineGray5006c"
                ></Input>
              </div>
            </div>
            <Text
              className="font-normal md:ml-[0] sm:ml-[0] ml-[268px] mt-[25px] not-italic text-indigo_A200 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Forgot Password?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[350px] md:ml-[0] sm:ml-[0] ml-[37px] mr-[53px] mt-[30px] text-[14px] text-center text-white_A700 w-[auto]"
              onClick={() => {
                form.handleSubmit(callApi1);
              }}
              shape="CircleBorder29"
              size="8xl"
              variant="FillIndigoA200"
            >
              Login
            </Button>
            <div className="flex flex-col gap-[34px] justify-start mb-[4px] md:ml-[0] sm:ml-[0] ml-[37px] mr-[53px] mt-[33px] md:w-[100%] sm:w-[100%] w-[80%]">
              <Text
                className="font-normal md:ml-[0] sm:ml-[0] ml-[117px] not-italic text-gray_500 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Or connect with socials
              </Text>
              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="bg-indigo_600 flex flex-row items-center justify-center p-[20px] rounded-radius29 w-[100%]">
                  <Img
                    src="images/img_facebook.svg"
                    className="h-[18px] ml-[67px] w-[18px]"
                    alt="facebook"
                  />
                  <Text
                    className="font-bold ml-[3px] mr-[58px] text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Connect with Facebook
                  </Text>
                </div>
                <Button
                  className="flex items-center justify-center text-center"
                  leftIcon={
                    <Img
                      src="images/img_icon_apple.svg"
                      className="mr-[5px] text-center"
                      alt="Icon/Apple"
                    />
                  }
                  shape="CircleBorder29"
                  size="7xl"
                  variant="FillGray900"
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                    Connect with Apple
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center text-center"
                  leftIcon={
                    <Img
                      src="images/img_google.svg"
                      className="mr-[4px] text-center"
                      alt="google"
                    />
                  }
                  shape="CircleBorder29"
                  size="7xl"
                  variant="OutlineGray50066"
                >
                  <div className="bg-transparent cursor-pointer font-bold text-[14px] text-gray_900 text-left">
                    Connect with Google+
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
