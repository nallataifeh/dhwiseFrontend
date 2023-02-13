import React from "react";

import { Img, Button } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-indigo_A200 flex flex-col items-center justify-start p-[45px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Img
            src="images/img_settings.svg"
            className="h-[48px] w-[48px]"
            alt="settings"
          />
          <Button
            className="flex h-[48px] items-center justify-center mt-[101px] w-[48px]"
            shape="icbRoundedBorder12"
            size="mdIcn"
            variant="icbFillWhiteA700"
          >
            <Img src="images/img_home.svg" className="h-[24px]" alt="home" />
          </Button>
          <Button
            className="flex h-[48px] items-center justify-center mt-[40px] w-[48px]"
            shape="icbRoundedBorder12"
            size="mdIcn"
            variant="icbFillWhiteA70033"
          >
            <Img
              src="images/img_calendar.svg"
              className="h-[24px]"
              alt="calendar"
            />
          </Button>
          <Button
            className="flex h-[48px] items-center justify-center mt-[40px] w-[48px]"
            shape="icbRoundedBorder12"
            size="mdIcn"
            variant="icbFillWhiteA70033"
          >
            <Img src="images/img_mail.svg" className="h-[24px]" alt="mail" />
          </Button>
          <Button
            className="flex h-[48px] items-center justify-center mt-[40px] w-[48px]"
            shape="icbRoundedBorder12"
            size="mdIcn"
            variant="icbFillWhiteA70033"
          >
            <Img src="images/img_user.svg" className="h-[24px]" alt="user" />
          </Button>
          <Button
            className="flex h-[48px] items-center justify-center mt-[40px] w-[48px]"
            shape="icbRoundedBorder12"
            size="mdIcn"
            variant="icbFillWhiteA70033"
          >
            <Img
              src="images/img_settings_48X48.svg"
              className="h-[24px]"
              alt="settings One"
            />
          </Button>
          <Button
            className="flex h-[48px] items-center justify-center mb-[15px] mt-[322px] w-[48px]"
            shape="icbRoundedBorder12"
            size="lgIcn"
            variant="icbOutlineWhiteA70033"
          >
            <Img
              src="images/img_arrowright.svg"
              className="h-[18px]"
              alt="arrowright"
            />
          </Button>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
