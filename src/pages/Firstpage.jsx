import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-image: url(${process.env.PUBLIC_URL}/images/main_back.svg);
  background-size: cover;
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: center;

  /* 미디어 쿼리 적용 */
  /* pc화면에서 너비를 390로 고정합니다*/
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    width: 0; /* 스크롤바 너비를 0으로 설정하여 숨김 */
  }

  /* 스크롤바의 드래그 및 마우스 휠 스크롤 비활성화 */
  overflow: hidden;
`;
const BodyWrapper = styled.div`
  max-height: calc(130vh - 151px); //푸터 공간 확보
  overflow: hidden;
`;

const Body = styled.div`
  .scrollbox {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: calc(130vh - 151px);
    width: 390px;

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
`;

const Firstpage = () => {
  return (
    <motion.div
      /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <BodyWrapper>
          <Body>
            <div className="scrollbox">
              <div className="logo" style={{ height: "190px" }}>
                {/* 로고 부분 */}
                <img
                  className="blur-image"
                  src={`${process.env.PUBLIC_URL}/images/main_logo.svg`}
                  alt="timetable_font"
                  style={{
                    width: "250px",
                    position: "absolute",
                    zIndex: 2,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />
              </div>

              {/* 타임 테이블 행성 */}
              <div
                className="timetable_planet"
                style={{ height: "250px", marginTop: "-50px" }}
              >
                <div className="timetable_planet">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/timetable_planet.svg`}
                    alt="행성"
                    style={{
                      position: "relative",
                      width: "400px",
                      left: "-70px",
                      top: "10px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="timetable_name">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/timetable_name.svg`}
                    alt="네임택"
                    style={{
                      position: "relative",
                      width: "150px",
                      left: "72px",
                      top: "-185px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="timetable_som">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/timetable_som.svg`}
                    alt="타임테이블 솜솜이"
                    style={{
                      position: "relative",
                      width: "65px",
                      left: "30px",
                      top: "-320px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="timetable_spaceship">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/timetable_spaceship.svg`}
                    alt="타임테이블 우주선"
                    style={{
                      position: "relative",
                      width: "60px",
                      left: "110px",
                      top: "-440px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              {/* 맵 행성 */}
              <div
                className="map_planet"
                style={{ height: "250px", marginTop: "40px" }}
              >
                <div className="map_planet">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/map_planet.svg`}
                    alt="행성"
                    style={{
                      position: "relative",
                      width: "350px",
                      right: "-105px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="map_name">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/map_name.svg`}
                    alt="네임택"
                    style={{
                      position: "relative",
                      width: "150px",
                      left: "-20px",
                      top: "-210px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="map_som">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/map_som.svg`}
                    alt="솜솜이"
                    style={{
                      position: "relative",
                      width: "100px",
                      right: "-95px",
                      top: "-350px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              {/* 솜톡 행성 */}
              <div
                className="talk_planet"
                style={{ height: "250px", marginTop: "-60px" }}
              >
                <div className="talk_planet">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/talk_planet.svg`}
                    alt="행성"
                    style={{
                      position: "relative",
                      width: "650px",
                      left: "-250px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="talk_name">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/talk_name.svg`}
                    alt="네임택"
                    style={{
                      position: "relative",
                      width: "150px",
                      left: "80px",
                      top: "-340px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="talk_som">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/talk_som.svg`}
                    alt="솜솜이"
                    style={{
                      position: "relative",
                      width: "140px",
                      right: "-98px",
                      top: "-570px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              {/* 단과대항전 행성 */}
              <div
                className="competition_planet"
                style={{ height: "250px", marginTop: "280px" }}
              >
                <div className="competition_planet">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/competition_planet.svg`}
                    alt="행성"
                    style={{
                      position: "relative",
                      width: "280px",
                      right: "-100px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="competition_name">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/competiton_name.svg`}
                    alt="네임택"
                    style={{
                      position: "relative",
                      width: "180px",
                      left: "-60px",
                      top: "-170px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="competition_som">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/competiton_som.svg`}
                    alt="솜솜이"
                    style={{
                      position: "relative",
                      width: "97px",
                      right: "50px",
                      top: "-310px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="competition_spaceship">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/competiton_spaceship.svg`}
                    alt="우주선"
                    style={{
                      position: "relative",
                      width: "50px",
                      right: "-115px",
                      top: "-435px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>

              {/* 소개 행성 */}
              <div
                className="introduce_planet"
                style={{ height: "250px", marginTop: "-20px" }}
              >
                <div className="introduce_planet">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/introduce_planet.svg`}
                    alt="행성"
                    style={{
                      position: "relative",
                      width: "550px",
                      right: "150px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="introduce_name">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/introduce_name.svg`}
                    alt="네임택"
                    style={{
                      position: "relative",
                      width: "170px",
                      left: "80px",
                      top: "-345px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div className="introduce_som" style={{ marginTop: "-50px" }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/introduce_som.svg`}
                    alt="솜솜이"
                    style={{
                      position: "relative",
                      width: "75px",
                      right: "90px",
                      top: "-400px",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="introduce_spaceship"
                  style={{ marginTop: "-50px" }}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/introduce_spaceship.svg`}
                    alt="우주선"
                    style={{
                      position: "relative",
                      width: "100px",
                      right: "-90px",
                      top: "-310px",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          </Body>
        </BodyWrapper>
      </Container>
    </motion.div>
  );
};
export default Firstpage;
