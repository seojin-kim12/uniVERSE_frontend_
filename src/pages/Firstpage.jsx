import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
// 스크롤 애니메이션을 넣기 위해 import함
// yarn add aos 설치하기
import AOS from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200vh;
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

const Body = styled.div`
  // 첫번째 행성(타임테이블)은 고정이므로 이렇게 애니메이션 적용
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  .timetable_som {
    position: relative;
    animation: fadeInRight 1s;
  }
  .timetable_spaceship {
    position: relative;
    animation: fadeInRight 1.5s;
  }
`;

const Firstpage = () => {
  const navigate = useNavigate();

  const onClickTimetable = () => {
    navigate("/Timetable");
  };

  const onClickMap = () => {
    navigate("/mappage1");
  };

  const onClickTalk = () => {
    navigate("/Guestbook");
  };

  const onClickCompetition = () => {
    navigate("/Battle");
  };

  const onClickIntroduce = () => {
    navigate("/Festival");
  };

  //스크롤 애니메이션 추가하기 위해 넣음
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <motion.div
      /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Body>
          <div className="logo" style={{ height: "190px" }}>
            {/* 로고 부분 */}
            <img
              className="blur-image"
              src={`${process.env.PUBLIC_URL}/images/main_logo.svg`}
              alt="timetable_font"
              style={{
                width: "300px",
                position: "absolute",
                zIndex: 2,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </div>

          <div style={{ height: "70px" }}></div>
          {/* 타임 테이블 행성 */}
          <div
            className="timetable"
            style={{ height: "250px", marginTop: "-50px" }}
          >
            <div data-aos="fade-up">
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
                  onClick={onClickTimetable}
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
          </div>

          <div style={{ height: "80px" }}></div>
          {/* 맵 행성 */}
          <div className="map" style={{ height: "250px", marginTop: "40px" }}>
            <div data-aos="fade-up">
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
                  onClick={onClickMap}
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
            </div>
            <div
              className="map_som"
              style={{ marginTop: "-40px" }}
              data-aos="fade-left"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/map_som.svg`}
                alt="솜솜이"
                style={{
                  position: "relative",
                  width: "100px",
                  right: "-100px",
                  top: "-320px",
                  cursor: "pointer",
                }}
                data-aos="fade-up"
              />
            </div>
          </div>

          <div style={{ height: "80px" }}></div>
          {/* 솜톡 행성 */}
          <div className="talk" style={{ height: "250px", marginTop: "20px" }}>
            <div data-aos="fade-up">
              <div className="talk_planet">
                <img
                  src={`${process.env.PUBLIC_URL}/images/talk_planet.svg`}
                  alt="행성"
                  style={{
                    position: "relative",
                    width: "650px",
                    left: "-100px",
                    cursor: "pointer",
                  }}
                  onClick={onClickTalk}
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
            </div>
          </div>
          <div
            className="talk_som"
            style={{ marginTop: "-100px" }}
            data-aos="fade-left"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/talk_som.svg`}
              alt="솜솜이"
              style={{
                position: "relative",
                width: "140px",
                right: "-98px",
                top: "-50px",
                cursor: "pointer",
              }}
              data-aos="fade-up"
            />
          </div>

          <div style={{ height: "50px" }}></div>
          {/* 단과대항전 행성 */}
          <div
            className="competition"
            style={{ height: "250px", marginTop: "230px" }}
          >
            <div data-aos="fade-up">
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
                  onClick={onClickCompetition}
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
            </div>
            <div
              className="competition_som"
              style={{ marginTop: "-100px" }}
              data-aos="fade-right"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/competiton_som.svg`}
                alt="솜솜이"
                style={{
                  position: "relative",
                  width: "97px",
                  right: "50px",
                  top: "-210px",
                  cursor: "pointer",
                }}
                data-aos="fade-up"
              />
            </div>
            <div
              className="competition_spaceship"
              style={{ marginTop: "-100px" }}
              data-aos="fade-left"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/competiton_spaceship.svg`}
                alt="우주선"
                style={{
                  position: "relative",
                  width: "50px",
                  right: "-115px",
                  top: "-235px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div style={{ height: "80px" }}></div>
          {/* 소개 행성 */}
          <div
            className="introduce"
            style={{ height: "250px", marginTop: "-20px" }}
          >
            <div data-aos="fade-up">
              <div className="introduce_planet">
                <img
                  src={`${process.env.PUBLIC_URL}/images/introduce_planet.svg`}
                  alt="행성"
                  style={{
                    position: "relative",
                    width: "550px",
                    right: "80px",
                    cursor: "pointer",
                  }}
                  onClick={onClickIntroduce}
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
            </div>
            <div
              className="introduce_som"
              style={{ marginTop: "-200px" }}
              data-aos="fade-right"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/introduce_som.svg`}
                alt="솜솜이"
                style={{
                  position: "relative",
                  width: "75px",
                  right: "90px",
                  top: "-250px",
                  cursor: "pointer",
                }}
                data-aos="fade-up"
              />
            </div>
            <div
              className="introduce_spaceship"
              style={{ marginTop: "-200px" }}
              data-aos="fade-left"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/introduce_spaceship.svg`}
                alt="우주선"
                style={{
                  position: "relative",
                  width: "100px",
                  right: "-90px",
                  top: "-10px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div style={{ height: "300px" }}></div>
        </Body>
      </Container>
    </motion.div>
  );
};
export default Firstpage;
