import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  // background-color: black;
  -ms-overflow-style: none;
  scrollbar-width: none;

  background-image: url(${process.env
    .PUBLIC_URL}/images/단과대항전배경.png); /* 배경 이미지 경로 설정 */
  background-size: cover; /* 배경 이미지 크기 조절 */
  background-position: center; /* 배경 이미지 위치 조절 */

  /* 미디어 쿼리 적용 */
  /* pc화면에서 너비를 390로 고정합니다*/
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const BodyWrapper = styled.div`
  min-height: calc(100vh - 151px); //푸터 공간 확보
`;

const Body = styled.div``;

const Footer = styled.div`
  height: 150px;
  position: relative;
  border: none;
  margin: 0;
  // position: fixed; /* 푸터를 화면 하단에 고정 */
  // bottom: 0; /* 화면 하단에 고정 */
  // background-color: black;
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

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 10px;
  align-items: center;
`;

const Back = styled.div`
  width: 24px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #fff;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const None = styled.div`
  width: 24px;
  height: 24px;
`;

const TopBox = styled.div`
  position: relative;
  margin-top: 10px;
`;

const TopTitle = styled.div`
  color: #fff;
  font-weight: bold;
  position: relative;
  margin-top: -34px;
`;

const Check = styled.button`
  position: relative;
  padding: 14px 33px 13px 33px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d1fff7;
  background: rgba(134, 228, 212, 0.25);
  margin-top: 20px;

  color: #fff;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const College = styled.select`
  padding: 11px 14px 11px 18px;
  border-radius: 10px;
  border: 1px solid #d1fff7;
  background: #fff;
  width: 285px;
  height: 70px;
  margin-top: 50px;
  outline: none;
  appearance: none;
  background: url("${process.env.PUBLIC_URL}/images/down-one.png") no-repeat
    right 14px center;
  background-color: white;
  background-size: 48px 48px; /* 원하는 너비와 높이로 설정하세요 */
`;

const InputBox = styled.div`
  width: 390px;
  margin: auto;
`;

const Input = styled.input`
  width: 261px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #d1fff7;
  background: #fff;
  margin-top: 20px;
  outline: none;
  padding-left: 22px;
`;

const Explain = styled.div`
  color: #fff;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Participation = styled.button`
  position: relative;
  padding: 14px 33px 13px 33px;
  border-radius: 10px;
  border: 1px solid #d1fff7;
  background: rgba(134, 228, 212, 0.25);

  color: #fff;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 70px;
`;

const TopBox2 = styled.div`
  position: relative;
  margin: auto;
  width: 350px;
  margin-bottom: 5px;
`;
const ImgBox = styled.div`
  position: relative;
  left: -12.5px;
`;
const TopText = styled.div`
  position: relative;
  top: -98px;
  left: -3px;
`;

const RankNum = styled.div`
  position: absolute;
  color: #fff;
  margin-left: 42px;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const RankUniv = styled.div`
  position: absolute;
  margin-left: 132px;
  color: #fff;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const RankPercent = styled.div`
  position: absolute;
  margin-left: 290px;
  margin-top: -2px;
  color: #fff;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Battle = () => {
  const navigate = useNavigate();
  const [selectedCollege, setSelectedCollege] = useState(""); // 선택한 단과대학 상태
  const [stuId, setStuId] = useState(""); // 학번 상태

  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  const checkRanking = () => {
    navigate(`/CompetDetail`);
  };

  // 연동 코드 (여기서 부터 추가!!!)
  const [postList, setPostList] = useState([]); // 배열에 받아서 저장
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // API 호출
        const response = await axios.get("http://127.0.0.1:8000/competition/");
        setPostList(response.data.collegeRank); //collegeRank 배열 저장
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>잠시만 기다려주세요^_^</div>;
  }

  const onParticipationClick = async () => {
    try {
      // 선택한 단과대학과 학번을 서버로 보내기
      const response = await axios.post("http://127.0.0.1:8000/student-info/", {
        college: selectedCollege,
        stuId,
      });

      // 서버 응답 처리
      console.log("서버 응답:", response.data);
      navigate(`/CompetDetail`);

      // // POST 요청이 성공한 경우에만 다른 페이지로 이동
      // if (response.status === 200 && response.data.success) {
      //   // 이동 처리
      //   navigate(`/CompetDetail`);
      // }
    } catch (error) {
      // 오류 처리
      console.error("데이터 전송 오류:", error);
      alert("올바른 학번을 입력하세요");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <TopBar>
          <Back onClick={onClickBtn}>
            <img
              src={`${process.env.PUBLIC_URL}/images/backbtn.png`}
              alt="back"
              width="24px"
            />
          </Back>
          <Title>단과 대항전</Title>
          <None></None>
        </TopBar>
        <BodyWrapper>
          <Body>
            <TopBox>
              <img
                src={`${process.env.PUBLIC_URL}/images/Union.png`}
                alt="back"
                width="197.451px"
                height="39.774px"
              />
              <TopTitle>현재 참여율 TOP 3 단과대</TopTitle>
            </TopBox>
            <div>
              <TopBox2>
                <ImgBox>
                  <img src={`${process.env.PUBLIC_URL}/images/1stdept.svg`} />
                </ImgBox>
                <TopText>
                  <RankNum>{postList[0] && postList[0].rank}등</RankNum>
                  <RankUniv>{postList[0] && postList[0].college}</RankUniv>
                  <RankPercent>
                    {postList[0] && postList[0].participationRate}%
                  </RankPercent>
                </TopText>
              </TopBox2>
              <TopBox2>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/images/2nddept.svg`} />
                </div>
                <TopText>
                  <RankNum>{postList[1] && postList[1].rank}등</RankNum>
                  <RankUniv>{postList[1] && postList[1].college}</RankUniv>
                  <RankPercent>
                    {postList[1] && postList[1].participationRate}%
                  </RankPercent>
                </TopText>
              </TopBox2>
              <TopBox2>
                <div>
                  <img src={`${process.env.PUBLIC_URL}/images/3rddept.svg`} />
                </div>
                <TopText>
                  <RankNum>{postList[2] && postList[2].rank}등</RankNum>
                  <RankUniv>{postList[2] && postList[2].college}</RankUniv>
                  <RankPercent>
                    {postList[2] && postList[2].participationRate}%
                  </RankPercent>
                </TopText>
              </TopBox2>
            </div>
            <Check onClick={checkRanking}>순위 확인하기</Check>
            <InputBox>
              <College
                value={selectedCollege}
                onChange={(e) => setSelectedCollege(e.target.value)}
              >
                <option value="" disabled selected>
                  단과대학을 선택하세요
                </option>
                <option value="college1">인문대학</option>
                <option value="college2">사회과학대학</option>
                <option value="college3">자연정보과학대학</option>
                <option value="college4">약학대학</option>
                <option value="college5">예술대학</option>
                <option value="college6">디자인대학</option>
                <option value="college7">공연예술대학</option>
                <option value="college8">문화지식융합대학</option>
                <option value="college9">미래인재융합대학</option>
              </College>
              <Input
                type="text"
                placeholder="학번"
                id="number"
                value={stuId}
                onChange={(e) => setStuId(e.target.value)}
              ></Input>
            </InputBox>
            <Explain>
              참여율로 순위가 집계되며 축제기간동안 1회 참여 가능합니다.
            </Explain>
            <Participation onClick={onParticipationClick}>
              참여하기
            </Participation>
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
export default Battle;
