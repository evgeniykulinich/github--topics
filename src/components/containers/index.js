import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  width: 100vw;
  padding: 0 95px 0 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LinkCard = styled(Link)`
  color: black;
  text-decoration: none;
  min-width: 250px;
  width: calc(33% - 15px);
  padding: 30px;
  height: 250px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  transform: scale(1);
  transition: 0.2s all linear;
  align-items: center;
  border: 1px solid #d8dee4;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  > img {
    width: 74px;
    height: 74px;
    margin-bottom: 20px;
  }
  > h3 {
    margin-bottom: 10px;
    font-weight: normal;
    &:hover {
      color: #6c6cd2;
    }
  }
  > p {
    text-align: center;
    color: #57606a;
    font-size: 14px;
    line-height: 1.5em;
  }
`;

export const Cap = styled.div`
  width: 74px;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddf4ff;
  border-radius: 5px;
  color: grey;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const TopicName = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 30px 0;
  > h1 {
    font-weight: 500;
  }
`;

export const TopicInfo = styled.div`
  display: flex;
  align-items: flex-start;
  width: 700px;
  border: 1px solid #d0d7de;
  height: fit-content;
  padding: 20px;
  border-radius: 5px;
  margin-right: 20px;
  > img {
    width: 100px;
    height: 100px;
  }
  > p {
    width: 560px;
    margin-right: 10px;
    line-height: 1.5em;
    font-size: 14px;
    font-family: "Quicksand", sans-serif;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Btn = styled.button`
  width: fit-content;
  padding: 0 10px;
  margin: 0 5px 5px 0;
  height: 24px;
  color: #0969da;
  background-color: #ddf4ff;
  border: none;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #0969da;
  }
`;

export const ReposInfo = styled.div`
  width: 700px;
  padding-bottom: 5px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  margin-bottom: 25px;
  overflow: hidden;
  > img {
    height: 300px;
    width: inherit;
    margin: 0;
  }
`;

export const ReposName = styled.span`
  font-size: 24px;
  color: #57606a;
`;

export const FirstReposName = styled.span`
  color: #0969da;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const SecondReposName = styled(FirstReposName)`
  font-weight: 500;
`;

export const ReposStar = styled(Row)`
  height: 32px;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #d0d7de;
  border-radius: 7px;
  cursor: pointer;
  > span {
    font-size: 12px;
    font-weight: 500;
    margin-right: 5px;
  }
  > div {
    width: fit-content;
    padding: 3px 10px;
    font-size: 12px;
    font-weight: 500;
    background-color: #eaeaea;
    border-radius: 14px;
  }
`;

export const BtnLoadMore = styled.button`
  width: 700px;
  height: 34px;
  border-radius: 6px;
  margin-bottom: 30px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 500;
  color: #0969da;
  border: 1px solid #d0d7de;
  cursor: pointer;
  &:hover {
    background-color: #f6f8fa;
  }
`;
