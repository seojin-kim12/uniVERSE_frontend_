import React, { useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
// 스크롤 애니메이션을 넣기 위해 import함
// yarn add aos 설치하기
import AOS from "aos";
import "aos/dist/aos.css";
import "./Star.css"; // CSS 파일 임포트

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200vh;
  position: relative;
  text-align: center;
  background-image: url("/images/main_back.svg");
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
  position: relative; /* 부모 요소로부터 상대적인 위치로 설정 */
  z-index: 1; /* 배경 이미지 위로 올리기 위한 z-index 설정 */

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

  // 로고 부분 애니메이션 추가
  @keyframes fadeInup {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0); /* Y 축 값 수정 */
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  .logo {
    position: relative;
    animation: fadeInup 1s;
  }
`;

// 별 클래스
class Starr {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.time = 0;
  }
  set() {
    this.x = Math.random() * 1500; //가로영역
    this.y = Math.random() * 2500; //세로 영역
    this.size = Math.random() * 20; // 별 크기
    this.time = Math.random() * 7;

    const background = document.getElementById("main");
    const starDiv = document.createElement("div");
    starDiv.className = "star"; // CSS 클래스 이름 설정

    starDiv.style.left = this.x + "px";
    starDiv.style.top = this.y + "px";
    starDiv.style.width = this.size + "px";
    starDiv.style.height = this.size + "px";

    background.appendChild(starDiv);
  }
}

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

  // 별 애니메이션
  useEffect(() => {
    for (let i = 0; i < 70; i++) {
      // 별 개수 여기서 조정하면 돼요!!
      const newStar = new Starr();
      newStar.set();
    }
  }, []);

  return (
    <motion.div
      /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container id="main">
        <Body>
          <div className="logo" style={{ height: "190px", marginTop: "30px" }}>
            {/* 로고 부분 */}
            <img
              className="blur-image"
              src="/images/main_logo.svg"
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

          <div style={{ height: "80px" }}></div>
          {/* 타임 테이블 행성 */}
          <div
            className="timetable"
            style={{ height: "250px", marginTop: "-50px" }}
          >
            <div className="timetable_planet">
              <img
                src="/images/timetable_planet.png"
                alt="행성"
                style={{
                  position: "relative",
                  width: "400px",
                  left: "-70px",
                  top: "10px",
                  cursor: "pointer",
                }}
                onClick={onClickTimetable}
                data-aos="fade-up"
              />
            </div>
            <div className="timetable_name">
              <img
                src="/images/timetable_name.svg"
                alt="네임택"
                style={{
                  position: "relative",
                  width: "150px",
                  left: "72px",
                  top: "-185px",
                  cursor: "pointer",
                }}
                onClick={onClickTimetable}
                data-aos="fade-up"
              />
            </div>
            <div className="timetable_som">
              <img
                src="/images/timetable_som.png"
                alt="타임테이블 솜솜이"
                style={{
                  position: "relative",
                  width: "65px",
                  left: "30px",
                  top: "-320px",
                  cursor: "pointer",
                }}
                data-aos="fade-right"
              />
            </div>
            <div className="timetable_spaceship">
              <img
                src="/images/timetable_spaceship.png"
                alt="타임테이블 우주선"
                style={{
                  position: "relative",
                  width: "60px",
                  left: "110px",
                  top: "-440px",
                  cursor: "pointer",
                }}
                data-aos="fade-right"
              />
            </div>
          </div>

          <div style={{ height: "80px" }}></div>
          {/* 맵 행성 */}
          <div className="map" style={{ height: "250px", marginTop: "40px" }}>
            <div className="map_planet">
              <img
                src="/images/map_planet.png"
                alt="행성"
                style={{
                  position: "relative",
                  width: "350px",
                  right: "-105px",
                  cursor: "pointer",
                }}
                onClick={onClickMap}
                data-aos="fade-up"
              />
            </div>
            <div className="map_name">
              <img
                src="/images/map_name.svg"
                alt="네임택"
                style={{
                  position: "relative",
                  width: "150px",
                  left: "-20px",
                  top: "-210px",
                  cursor: "pointer",
                }}
                onClick={onClickMap}
                data-aos="fade-up"
              />
            </div>

            <div className="map_som" style={{ marginTop: "-40px" }}>
              <img
                src="/images/map_som.png"
                alt="솜솜이"
                style={{
                  position: "relative",
                  width: "65px",
                  right: "-100px",
                  top: "-335px",
                  cursor: "pointer",
                }}
                data-aos="fade-right"
              />
            </div>
          </div>

          <div style={{ height: "120px" }}></div>
          {/* 솜톡 행성 */}
          <div className="talk" style={{ height: "250px", marginTop: "-30px" }}>
            <div className="talk_planet">
              <img
                src="/images/talk_planet2.png"
                alt="행성"
                style={{
                  position: "relative",
                  left: "-100px",
                  top: "-20px",
                  cursor: "pointer",
                }}
                onClick={onClickTalk}
                data-aos="fade-up"
              />
            </div>
            <div className="talk_name">
              <img
                src="/images/talk_name.svg"
                alt="네임택"
                style={{
                  position: "relative",
                  width: "150px",
                  left: "80px",
                  top: "-340px",
                  cursor: "pointer",
                }}
                onClick={onClickTalk}
                data-aos="fade-up"
              />
            </div>

            <div className="talk_som">
              <img
                src="/images/talk_som.png"
                alt="솜솜이"
                style={{
                  position: "relative",
                  width: "106px",
                  right: "-90px",
                  top: "-529px",
                  cursor: "pointer",
                }}
                data-aos="fade-left"
              />
            </div>
          </div>

          <div style={{ height: "200px" }}></div>
          {/* 단과대항전 행성 */}
          <div
            className="competition"
            style={{ height: "250px", marginTop: "100px" }}
          >
            <div className="competition_planet">
              <img
                src="/images/competition_planet.png"
                alt="행성"
                style={{
                  position: "relative",
                  width: "280px",
                  right: "-100px",
                  cursor: "pointer",
                }}
                onClick={onClickCompetition}
                data-aos="fade-up"
              />
            </div>
            <div className="competition_name">
              <img
                src="/images/competiton_name.svg"
                alt="네임택"
                style={{
                  position: "relative",
                  width: "180px",
                  left: "-60px",
                  top: "-170px",
                  cursor: "pointer",
                }}
                onClick={onClickCompetition}
                data-aos="fade-up"
              />
            </div>

            <div className="competition_som" style={{ marginTop: "-100px" }}>
              <img
                src="/images/competiton_som.png"
                alt="솜솜이"
                style={{
                  position: "relative",
                  width: "65px",
                  right: "50px",
                  top: "-210px",
                  cursor: "pointer",
                }}
                data-aos="fade-right"
              />
            </div>
            <div
              className="competition_spaceship"
              style={{ marginTop: "-100px" }}
            >
              <img
                src="/images/competiton_spaceship.png"
                alt="우주선"
                style={{
                  position: "relative",
                  width: "50px",
                  right: "-115px",
                  top: "-235px",
                  cursor: "pointer",
                }}
                data-aos="fade-left"
              />
            </div>
          </div>

          <div style={{ height: "80px" }}></div>
          {/* 소개 행성 */}
          <div
            className="introduce"
            style={{ height: "250px", marginTop: "0px" }}
          >
            <div className="introduce_planet">
              <img
                src="/images/introduce_planet.png"
                alt="행성"
                style={{
                  position: "relative",
                  width: "550px",
                  right: "80px",
                  cursor: "pointer",
                }}
                onClick={onClickIntroduce}
                data-aos="fade-top"
              />
            </div>
            <div className="introduce_name">
              <img
                src="/images/introduce_name.svg"
                alt="네임택"
                style={{
                  position: "relative",
                  width: "170px",
                  left: "80px",
                  top: "-345px",
                  cursor: "pointer",
                }}
                onClick={onClickIntroduce}
                data-aos="fade-top"
              />
            </div>
            <div className="introduce_som" style={{ marginTop: "-200px" }}>
              <img
                src="/images/introduce_som.png"
                alt="솜솜이"
                style={{
                  position: "relative",
                  width: "75px",
                  right: "90px",
                  top: "-250px",
                  cursor: "pointer",
                }}
                data-aos="fade-right"
              />
            </div>
            <div
              className="introduce_spaceship"
              style={{ marginTop: "-200px" }}
            >
              <img
                src="/images/introduce_spaceship.png"
                alt="우주선"
                style={{
                  position: "relative",
                  width: "100px",
                  right: "-90px",
                  top: "-10px",
                  cursor: "pointer",
                }}
                data-aos="fade-left"
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
