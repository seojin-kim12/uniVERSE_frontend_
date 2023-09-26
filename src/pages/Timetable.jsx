import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
// 다른 페이지로 자연스럽게 넘어가기 위해 추가함
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-image: url(${process.env.PUBLIC_URL}/images/timetable_back.svg);
  background-size: cover;
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: center;

  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BodyWrapper = styled.div`
  min-height: calc(100vh - 145px);
`;

const Body = styled.div`
  .scrollbox {
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }

  // 타임테이블에 애니메이션 넣어주기 위해 추가한 것임
  .date_wed,
  .date_thu,
  .date_fri {
    animation: 0.7s ease-in-out loadEffect1; 
  }

  @keyframes loadEffect1 {
    0%{
      opacity: 0;
      transform: scale(0.7);
  }
  65%{
      opacity: 0.65;
      transform: scale(1.01);
  }
  85%{
      opacity: 0.85;
      transform: scale(0.97);
  }
  100%{
      opacity: 1;
      transform: scale(1);
  }
`;

const Footer = styled.div`
  height: 150px;
  position: relative;
`;

const Left = styled.div`
  position: absolute;
  left: 17%;
  top: -3px;
`;
const FooterContentWrapper = styled.div`
  position: relative;
`;
const Base = styled.div``;
const FooterContent = styled.div`
  width: 300px;
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translate(-50%);
  color: #fff;
  p {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
  }
  .bold {
    font-weight: 700;
  }
  #marginBottom {
    margin-bottom: 2px;
  }
`;
const ManagementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  justify-content: center;
`;
const FestivalWrapper = styled.div`
  margin-top: 25px;
`;
const DevelopmentWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  gap: 17px;
  justify-content: center;
`;
const Line = styled.div`
  height: 0px;
  margin-top: -6px;
`;
const Right = styled.div`
  position: absolute;
  right: 17%;
  top: -3px;
`;

const Timetable = () => {
  // 백버튼 클릭 시 이전 페이지로 넘어감
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate("/");
  };

  // 현재 선택된 요일을 저장하는 state
  const [selectedDay, setSelectedDay] = useState("wed"); // 선택된 요일을 상태로 관리

  // 요일 이미지를 클릭할 때 호출되는 함수
  const handleDayClick = (day) => {
    // 선택된 요일을 업데이트
    setSelectedDay(day);

    // 선택된 요일에 따라 다른 두 요일을 보이거나 숨깁니다.
    switch (day) {
      case "wed":
        document.querySelector(".date_wed").style.display = "block"; // 수요일 표시
        document.querySelector(".date_thu").style.display = "none"; // 목요일 숨김
        document.querySelector(".date_fri").style.display = "none"; // 금요일 숨김
        break;
      case "thu":
        document.querySelector(".date_wed").style.display = "none"; // 수요일 숨김
        document.querySelector(".date_thu").style.display = "block"; // 목요일 표시
        document.querySelector(".date_fri").style.display = "none"; // 금요일 숨김
        break;
      case "fri":
        document.querySelector(".date_wed").style.display = "none"; // 수요일 숨김
        document.querySelector(".date_thu").style.display = "none"; // 목요일 숨김
        document.querySelector(".date_fri").style.display = "block"; // 금요일 표시
        break;
      default:
        break;
    }
  };

  return (
    // 다른 페이지로 자연스럽게 넘어가기 위해 추가함
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <BodyWrapper>
          <Body>
            {/* 이미지가 스크롤되지 않도록 .scrollbox 밖에 배치 */}
            <img
              src={`${process.env.PUBLIC_URL}/images/back_timetable.svg`}
              alt="back"
              style={{
                top: "29px",
                left: "19px",
                position: "absolute",
                cursor: "pointer",
                zIndex: 2, // 이미지를 항상 가장 위에 표시
              }}
              onClick={onClickBack}
            />

            <img
              src={`${process.env.PUBLIC_URL}/images/timetable_font.svg`}
              alt="timetable_font"
              style={{
                top: "29px",
                position: "relative",
                zIndex: 2, // 이미지를 항상 가장 위에 표시
              }}
            />

            <div className="scrollbox">
              {/* 수요일 타임 테이블 부분 */}
              {/* 타임 테이블의 날짜 부분 */}

              <div className="date_wed">
                <img
                  src={`${process.env.PUBLIC_URL}/images/wed_table.svg`}
                  alt="wed"
                  style={{
                    top: "60px",
                    position: "relative",
                    opacity: selectedDay === "wed" ? 1 : 0.5,
                  }}
                />

                <div>
                  {/* 여기서부터는 날짜 이미지들임 */}
                  <img
                    src={`${process.env.PUBLIC_URL}/images/WED_t_b.svg`}
                    alt="수요일"
                    style={{
                      position: "relative",
                      left: "-112px",
                      top: "-507px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("wed")}
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/THU_t.svg`}
                    alt="목요일"
                    style={{
                      position: "relative",
                      top: "-528px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("thu")}
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/FRI_t.svg`}
                    alt="금요일"
                    style={{
                      position: "relative",
                      top: "-547px",
                      left: "100px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("fri")}
                  />
                </div>
              </div>

              {/* 목요일 타임 테이블 부분 */}
              <div className="date_thu">
                <img
                  src={`${process.env.PUBLIC_URL}/images/thu_table.svg`}
                  alt="thu"
                  style={{
                    top: "60px",
                    position: "relative",
                    opacity: selectedDay === "thu" ? 1 : 0.5,
                  }}
                />
                <div>
                  {/* 여기서부터는 날짜 이미지들임 */}
                  <img
                    src={`${process.env.PUBLIC_URL}/images/WED_t.svg`}
                    alt="수요일"
                    style={{
                      position: "relative",
                      left: "-112px",
                      top: "-668px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("wed")}
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/THU_t_b.svg`}
                    alt="목요일"
                    style={{
                      position: "relative",
                      top: "-689px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("thu")}
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/FRI_t.svg`}
                    alt="금요일"
                    style={{
                      position: "relative",
                      top: "-708px",
                      left: "100px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("fri")}
                  />
                </div>
              </div>

              {/* 금요일 타임 테이블 부분 */}
              <div className="date_fri">
                <img
                  src={`${process.env.PUBLIC_URL}/images/fri_table.svg`}
                  alt="fri"
                  style={{
                    top: "60px",
                    position: "relative",
                    opacity: selectedDay === "fri" ? 1 : 0.5,
                  }}
                />
                <div>
                  {/* 여기서부터는 날짜 이미지들임 */}
                  <img
                    src={`${process.env.PUBLIC_URL}/images/WED_t.svg`}
                    alt="수요일"
                    style={{
                      position: "relative",
                      left: "-112px",
                      top: "-928px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("wed")}
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/THU_t.svg`}
                    alt="목요일"
                    style={{
                      position: "relative",
                      top: "-949px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("thu")}
                  />
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/FRI_t_b.svg`}
                    alt="금요일"
                    style={{
                      position: "relative",
                      top: "-968px",
                      left: "100px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDayClick("fri")}
                  />
                </div>
              </div>

              {/* 아래의 코드를 추가하여 thu와 fri를 숨김 */}
              <style>
                {`
              .date_thu,
              .date_fri {
                display: none;
              }
            `}
              </style>
            </div>
          </Body>
        </BodyWrapper>
        <Footer>
          <Left>
            <img
              src={`${process.env.PUBLIC_URL}/images/footer-left.png`}
              width="55px"
              alt="footer"
            />
          </Left>
          <FooterContentWrapper>
            <Base>
              <img
                src={`${process.env.PUBLIC_URL}/images/footer-base.png`}
                width="100%"
                height="148px"
                alt="footer"
              />
            </Base>
            <FooterContent>
              <ManagementWrapper>
                <p className="bold">축제 총 기획</p>
                <p>동덕여대 축제 준비 위원회</p>
              </ManagementWrapper>
              <Line>
                <img
                  src={`${process.env.PUBLIC_URL}/images/footer-line.png`}
                  width="253px"
                  alt="footer"
                />
              </Line>
              <FestivalWrapper>
                <p id="marginBottom">2023 동덕여자대학교 대동제</p>
                <p className="bold">동덕 uniVERSE</p>
              </FestivalWrapper>
              <Line>
                <img
                  src={`${process.env.PUBLIC_URL}/images/footer-line.png`}
                  width="253px"
                  alt="footer"
                />
              </Line>
              <DevelopmentWrapper>
                <p className="bold">축제 웹사이트 제작</p>
                <p>동덕여대 멋쟁이사자처럼</p>
              </DevelopmentWrapper>
            </FooterContent>
          </FooterContentWrapper>
          <Right>
            <img
              src={`${process.env.PUBLIC_URL}/images/footer-right.png`}
              width="55px"
              alt="footer"
            />
          </Right>
        </Footer>
      </Container>
    </motion.div>
  );
};
export default Timetable;
