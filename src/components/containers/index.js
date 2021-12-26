import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  padding: 0 95px 0 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
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
    text-transform: capitalize;
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
