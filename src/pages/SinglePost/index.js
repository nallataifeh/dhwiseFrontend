import React from "react";

import {
  Row,
  Stack,
  Line,
  Column,
  Button,
  Img,
  Text,
  List,
  Input,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";

const SinglePostPage = () => {
  return (
    <>
      <Row className="bg-gray_100 font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Sidebar className="w-[11%]" />
        <Stack className="2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] w-[89%]">
          <Row className="absolute items-center justify-between w-[100%]">
            <Line className="bg-white_A700_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[5px]" />
            <div className="bg-white_A700 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[729px] xl:h-[911px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[99%]"></div>
          </Row>
          <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[7%] my-[auto] w-[50%]">
            <Button
              className="flex items-center justify-center text-center w-[16%]"
              leftIcon={
                <Img
                  src="images/img_arrowleft_18X18.svg"
                  className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[7px] xl:w-[16px] xl:h-[17px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[10px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[12px]"
                  alt="arrow_left"
                />
              }
              shape="RoundedBorder12"
              size="xl"
              variant="FillGray100"
            >
              <div className="bg-transparent font-bold xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                Back
              </div>
            </Button>
            <Column className="font-inter items-center justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] pb-[3px] w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Row className="items-center justify-between w-[25%]">
                    <Img
                      src="images/img_avatar.png"
                      className="Image_Eight"
                      alt="Avatar"
                    />
                    <Column className="w-[63%]">
                      <Text
                        className="font-medium text-gray_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Katherine Cole
                      </Text>
                      <Text className="time4" as="h6" variant="h6">
                        5min ago
                      </Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between w-[46%]">
                    <Row className="items-center mt-[4px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[22%]">
                      <Img
                        src="images/img_favorite.svg"
                        className="favorite1"
                        alt="favorite"
                      />
                      <Text className="Likes1" as="h5" variant="h5">
                        326
                      </Text>
                    </Row>
                    <Row className="items-center mt-[4px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[22%]">
                      <Img
                        src="images/img_location.svg"
                        className="location1"
                        alt="location"
                      />
                      <Text className="Comments1" as="h5" variant="h5">
                        148
                      </Text>
                    </Row>
                    <Row className="items-center justify-end mt-[3px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[26%]">
                      <Img
                        src="images/img_reply.svg"
                        className="reply2"
                        alt="reply"
                      />
                      <Text className="Share1" as="h5" variant="h5">
                        Share
                      </Text>
                    </Row>
                    <Img
                      src="images/img_eye.svg"
                      className="overflowmenu"
                      alt="eye"
                    />
                  </Row>
                </Row>
                <Img
                  src="images/img_image_150X290.png"
                  className="lg:h-[235px] xl:h-[294px] 2xl:h-[331px] 3xl:h-[397px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius8 w-[100%]"
                  alt="Image"
                />
              </Column>
              <Column className="items-center justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[100%]">
                <Text
                  className="lg:leading-[25px] xl:leading-[32px] 2xl:leading-[36px] 3xl:leading-[43px] text-gray_900 w-[97%]"
                  as="h1"
                  variant="h1"
                >
                  The Best Fashion Instagrams of the Week: Céline Dion, Lizzo,
                  and More
                </Text>
                <Text
                  className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-gray_500 w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  f you are looking for a break from the cold, take a cue from
                  Lizzo: This week, the singer headed to Disneyland in warm and
                  sunny California. She dressed up for the occasion in pure
                  Minnie Mouse style perfection, including a cartoon merch
                  sweatshirt from the artist Shelby Swain, cycling shorts, and
                  adorable pulled-up polka dot socks. All the way over in
                  Montreal, Céline Dion also had quite the wardrobe moment. For
                  a concert, the singer wore a pair of fringed, XXL-flared
                  cowboy jeans by Ukrainian label Ksenia Schnaider. The
                  Kiev-based designer is responsible for other viral denim
                  creations, like her asymmetrical jeans that launched earlier
                  this year. Fun fact: The daring Dion has worn a pair of those,
                  too!
                  <br />
                  <br />
                  Of course, back in New York, there was Marc Jacobs. The
                  designer has been having quite the year when it comes to
                  flexing his fashion muscles on the ’gram. This week, he
                  channeled The Wizard Of Oz with a full-green look that
                  included some shimmery Sies Marjan pants, and a pair of
                  platform boots to anchor the ensemble.
                </Text>
              </Column>
            </Column>
          </Column>
          <Row className="absolute items-center justify-between right-[0] w-[35%]">
            <div className="bg-gray_500_7e xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius2 w-[1%]"></div>
            <Column className="bg-gray_900 items-end lg:p-[28px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[97%]">
              <Row className="items-center justify-end lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[33%]">
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
                  className="Avatar_One"
                  alt="Avatar One"
                />
              </Row>
              <Column className="font-inter items-center justify-start lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[96%]">
                <Column className="justify-start w-[100%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Comments (148)
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] 3xl:pr-[10px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="Comments2">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-end justify-evenly w-[32%]">
                          <Img
                            src="images/img_avatar_28X28.png"
                            className="Avatar_Two"
                            alt="Avatar Two"
                          />
                          <Text className="rowavatar1" as="h5" variant="h5">
                            Billy Green
                          </Text>
                        </Row>
                        <Text className="rowtime" as="h6" variant="h6">
                          20min ago
                        </Text>
                      </Row>
                      <Text className="columnavatar2" as="h5" variant="h5">
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[14%]">
                        <Img
                          src="images/img_favorite_14X14.svg"
                          className="location"
                          alt="favorite One"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="send"
                          alt="laptop"
                        />
                      </Row>
                    </Column>
                    <Column className="Comments2">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-end justify-evenly w-[32%]">
                          <Img
                            src="images/img_image_7.png"
                            className="Avatar_Two"
                            alt="Avatar Three"
                          />
                          <Text className="rowavatar1" as="h5" variant="h5">
                            Billy Green
                          </Text>
                        </Row>
                        <Text className="rowtime" as="h6" variant="h6">
                          20min ago
                        </Text>
                      </Row>
                      <Text className="columnavatar2" as="h5" variant="h5">
                        Awesome Edward, remeber that five tips for low cost{" "}
                      </Text>
                      <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[14%]">
                        <Img
                          src="images/img_favorite_1.svg"
                          className="location"
                          alt="favorite Two"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="send"
                          alt="laptop One"
                        />
                      </Row>
                    </Column>
                    <Column className="Comments2">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-end justify-evenly w-[32%]">
                          <Img
                            src="images/img_avatar_6.png"
                            className="Avatar_Two"
                            alt="Avatar Four"
                          />
                          <Text className="rowavatar1" as="h5" variant="h5">
                            Billy Green
                          </Text>
                        </Row>
                        <Text className="rowtime" as="h6" variant="h6">
                          20min ago
                        </Text>
                      </Row>
                      <Text className="columnavatar2" as="h5" variant="h5">
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[14%]">
                        <Img
                          src="images/img_favorite_14X14.svg"
                          className="location"
                          alt="favorite Three"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="send"
                          alt="laptop Two"
                        />
                      </Row>
                    </Column>
                    <Column className="Comments2">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-end justify-evenly w-[32%]">
                          <Img
                            src="images/img_image_68X68.png"
                            className="Avatar_Two"
                            alt="Avatar Five"
                          />
                          <Text className="rowavatar1" as="h5" variant="h5">
                            Billy Green
                          </Text>
                        </Row>
                        <Text className="rowtime" as="h6" variant="h6">
                          20min ago
                        </Text>
                      </Row>
                      <Text className="columnavatar2" as="h5" variant="h5">
                        Awesome Edward, remeber that five tips for low cost{" "}
                      </Text>
                      <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[14%]">
                        <Img
                          src="images/img_favorite_1.svg"
                          className="location"
                          alt="favorite Four"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="send"
                          alt="laptop Three"
                        />
                      </Row>
                    </Column>
                    <Column className="Comments2">
                      <Row className="items-center justify-between w-[100%]">
                        <Row className="items-end justify-evenly w-[32%]">
                          <Img
                            src="images/img_avatar_7.png"
                            className="Avatar_Two"
                            alt="Avatar Six"
                          />
                          <Text className="rowavatar1" as="h5" variant="h5">
                            Billy Green
                          </Text>
                        </Row>
                        <Text className="rowtime" as="h6" variant="h6">
                          20min ago
                        </Text>
                      </Row>
                      <Text className="columnavatar2" as="h5" variant="h5">
                        Awesome Edward, remeber that five tips for low cost
                        holidays I sent you?
                      </Text>
                      <Row className="items-center xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[14%]">
                        <Img
                          src="images/img_favorite_14X14.svg"
                          className="location"
                          alt="favorite Five"
                        />
                        <Img
                          src="images/img_laptop.svg"
                          className="send"
                          alt="laptop Four"
                        />
                      </Row>
                    </Column>
                  </List>
                </Column>
                <Row className="bg-white_A700 items-center lg:mt-[49px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[100%]">
                  <Input
                    className="placeholder:text-gray_500 email"
                    wrapClassName="flex ml-[4px] w-[82%]"
                    name="FrameFive"
                    placeholder="Write a comment…"
                    suffix={
                      <Img
                        src="images/img_user_1.svg"
                        className="mr-[4px] lg:w-[9px] lg:h-[10px] lg:ml-[24px] xl:w-[12px] xl:h-[13px] xl:ml-[31px] 2xl:w-[14px] 2xl:h-[15px] 2xl:ml-[35px] 3xl:w-[16px] 3xl:h-[17px] 3xl:ml-[42px] my-[auto]"
                        alt="user"
                      />
                    }
                    size="sm"
                  ></Input>
                  <Img
                    src="images/img_send.svg"
                    className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] location"
                    alt="send"
                  />
                </Row>
              </Column>
            </Column>
          </Row>
        </Stack>
      </Row>
    </>
  );
};

export default SinglePostPage;
