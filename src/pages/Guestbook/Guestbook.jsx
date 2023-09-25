import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import "./CustomScrollbar.css";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SUIT';
    src: url('${process.env.PUBLIC_URL}/fonts/SUIT-Variable.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-color: #180952;
  -ms-overflow-style: none;
  scrollbar-width: none;

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

const Backbtn = styled.div`
  position: relative;

  margin-top: 33px;
  margin-right: 315px;

  z-index: 5;
  :hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  position: relative;

  color: #fff;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  weight: 10px;

  margin-top: -34px;
`;

const CommentWrapper = styled.div`
  position: relative;
  margin-top: 10px;
`;

const CommentBoxLine = styled.div`
  position: relative;
  margin: auto;

  border: {
    /*1px solid #fff;*/
  }
  height: 472px;
  min-width: 315px;
  max-width: 330px;
  width: 70%;
  margin-top: -510px;

  overflow-x: hidden;
  overflow-y: auto;

  .comment-som {
    color: #fff;
    font-family: SUIT;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 15px;
    margin-left: -155px;
  }

  .comment-text {
    color: #fff;
    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    margin-top: 7px;
    margin-left: 14px;
    margin-bottom: 3px;

    white-space: normal;
    word-break: break-word;
    text-align: left;
  }
`;

const CommentBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 65px;
  margin-bottom: 5px;
`;

const CommentInput = styled.textarea`
  position: relative;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #fff;
  font-family: SUIT;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  background-color: transparent;

  width: 250px;
  height: 40px;

  margin-top: -53px;
  margin-left: -53px;
  margin-bottom: 30px;

  resize: none;

  &::placeholder {
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

const Send = styled.div`
  position: relative;
  margin: auto 0;

  margin-left: 270px;
  margin-top: -75px;
  margin-bottom: 15px;
`;

const StyledImage = styled.img`
  position: relative;
  width: 80px;
  height: 70px;

  margin-top: 10px;
  margin-left: -242px;
  margin-right: 10px;
`;

const StyledBox = styled.div`
  position: relative;

  border-radius: 0px;
  width: 75%;
  min-height: 62px;
  max-width: 250px;
  border: 1.5px solid transparent;
  border-image: linear-gradient(180deg, #9d9bf5, #ff98df) 1;
  background: linear-gradient(
    270deg,
    rgba(191, 155, 245, 0.2) 64.55%,
    rgba(191, 155, 245, 0) 100%
  );

  margin-top: -67px;
  margin-left: 73px;
`;

const Guestbook = () => {
  const navigate = useNavigate();
  const GoBack = () => {
    navigate("/");
  };

  const [comment, setComment] = useState("");
  const [commentsWithSomBox, setCommentsWithSomBox] = useState([]);

  const commentRefs = useRef([]); // 새 댓글에 포커스 맞추기

  useEffect(() => {
    // StyledBox 내용이 길어질 때마다 높이를 조절
    const boxes = document.querySelectorAll(".comment-box");
    boxes.forEach((box) => {
      box.style.height = "auto"; // 초기 높이 설정
      box.style.height = `${box.scrollHeight}px`; // 내용에 맞게 높이 조절
    });
    if (commentRefs.current) {
      commentRefs.current.scrollTo(0, commentRefs.current.scrollHeight); // 스크롤 자동 이동
    }
  }, [commentsWithSomBox]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/guestbook/", {
          content: comment,
        });
        if (response.status === 200) {
          const comments = response.data; // 서버에서 받아온 댓글 목록
          setCommentsWithSomBox(comments); // 댓글 목록을 상태에 설정
        } else {
          console.error("댓글 목록을 불러오는데 실패했습니다.");
        }
      } catch (error) {
        console.error("댓글 목록을 불러오는 중 오류가 발생했습니다.", error);
      }
    }

    fetchComments(); // 함수 실행
  }, []); // 빈 배열을 전달하여 컴포넌트가 로드될 때 한 번만 실행되도록 설정

  const addComment = async () => {
    if (comment.trim() !== "") {
      try {
        const response = await axios.post("http://127.0.0.1:8000/guestbook/", {
          content: comment,
        });

        if (response.status === 200) {
          // 성공적으로 댓글이 생성된 경우
          console.log("댓글이 성공적으로 생성되었습니다.");
          const newComment = {
            text: comment,
            image: "./images/somsom.png",
          };
          setCommentsWithSomBox([...commentsWithSomBox, newComment]);
          setComment(""); // 입력 필드 비우기
        } else {
          console.error("댓글 생성에 실패했습니다.");
        }
      } catch (error) {
        console.error("댓글 생성 중 오류가 발생했습니다.", error);
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Backbtn>
          <img
            src={`${process.env.PUBLIC_URL}/images/backbtn.png`}
            alt="backbtn"
            width="26px"
            onClick={GoBack}
          />
        </Backbtn>
        <Title>방명록</Title>
        <CommentWrapper>
          <img
            src={`${process.env.PUBLIC_URL}/images/cmtwrapper.png`}
            alt="cmtwrapper"
            width="75%"
            height="540px"
            style={{
              minWidth: "360px",
              maxWidth: "425px",
              maxHeight: "900px",
            }}
          />
          <CommentBoxLine ref={commentRefs}>
            {commentsWithSomBox.map((item, index) => (
              <div key={index}>
                <StyledImage src={item.image} alt={`comment-image-${index}`} />
                <StyledBox alt={`comment-box-${index}`}>
                  <div className="comment-som">SomSom</div>
                  <div className="comment-text">{item.text}</div>
                </StyledBox>
              </div>
            ))}
          </CommentBoxLine>
        </CommentWrapper>
        <CommentBox>
          <img
            src={`${process.env.PUBLIC_URL}/images/cmtbox.png`}
            alt="cmtbox"
            width="70%"
            style={{ minWidth: "337px", maxWidth: "400px", marginTop: "-5px" }}
          />
          <CommentInput
            type="text"
            placeholder={"댓글을 입력하세요."}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addComment();
              }
            }}
          />
        </CommentBox>
        <Send onClick={addComment}>
          <img
            src={`${process.env.PUBLIC_URL}/images/send.png`}
            alt="send"
            width="35px"
          />
        </Send>
      </Container>
    </>
  );
};
export default Guestbook;
