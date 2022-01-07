import { Fragment } from "react";
import { gql, useQuery, useApolloClient } from "@apollo/client";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";

import {
  TopicName,
  TopicInfo,
  Cap,
  Row,
  Column,
  Btn,
  ReposInfo,
  ReposName,
  FirstReposName,
  SecondReposName,
  ReposStar,
  BtnLoadMore,
} from "../../components/containers";

const GET_TOPIC_INFO = gql`
  query GetTopicInfo($name: String!, $after: String) {
    topic(name: $name) {
      name
      id
      relatedTopics(first: 2) {
        name
        id
      }
      repositories(
        first: 30
        after: $after
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        totalCount
        nodes {
          name
          description
          stargazerCount
          openGraphImageUrl
          nameWithOwner
          id
          languages(first: 20) {
            nodes {
              name
              id
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export const TopicRepos = () => {
  const { name } = useParams();
  const { loading, data, fetchMore } = useQuery(GET_TOPIC_INFO, {
    variables: { name },
  });
  const [apiData, setApiData] = useState();
  const [btnLoadName, setBtnLoadName] = useState(false);
  const client = useApolloClient();
  const parser = new DOMParser();

  useEffect(() => {
    fetch(`/topics/${name}?page=1`)
      .then((res) => res.text())
      .then((text) => setApiData(text));
  }, []);

  useEffect(() => {
    setBtnLoadName(false);
  }, [data]);

  useEffect(() => {
    return async function clearCache() {
      client.resetStore();
    };
  }, []);

  const { topicName, topicInfo, topicSrc } = useMemo(() => {
    const obj = {
      topicName: null,
      topicInfo: null,
      topicSrc: null,
    };

    const doc = parser.parseFromString(apiData, "text/html");

    obj.topicName = doc.querySelector("h1.h1")?.innerText;
    obj.topicInfo = doc.querySelector(
      "div.markdown-body.f5.mb-2 > p"
    )?.innerText;
    obj.topicSrc = doc
      .querySelector("div.float-sm-right.ml-sm-4 > img")
      ?.getAttribute("src");

    return obj;
  }, [apiData]);

  const setComma = useCallback((num) => num.toLocaleString("en-US"), []);

  const makeValueStarRepos = useCallback((num) => {
    if (num.toString().length <= 3) {
      return num;
    } else {
      return `${Math.round(num / 100) / 10}k`;
    }
  }, []);

  const makeNameRepos = useCallback((string) => {
    const indexDelem = string.indexOf("/");
    const firstName = string.slice(0, indexDelem);
    const secondName = string.slice(indexDelem + 1);
    return (
      <ReposName>
        <FirstReposName>{firstName}</FirstReposName> /
        <SecondReposName>{secondName}</SecondReposName>
      </ReposName>
    );
  }, []);

  const renderBtnInfo = useCallback(
    (array) => array.map(({ name, id }) => <Btn key={id}>{name}</Btn>),
    []
  );

  const queryMoreRepos = useCallback(() => {
    const pageInfo = data?.topic.repositories.pageInfo;
    if (pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: pageInfo.endCursor,
        },
      });
    }
    setBtnLoadName(true);
  }, [data]);

  const renderRepositories = useCallback(
    () =>
      data.topic.repositories.nodes.map(
        ({
          description,
          languages,
          name,
          nameWithOwner,
          id,
          openGraphImageUrl,
          stargazerCount,
        }) => {
          return (
            <ReposInfo key={id}>
              {openGraphImageUrl.includes("?s=400&v=4") ? null : (
                <Fragment>
                  <img src={openGraphImageUrl} alt={{ name }} />
                  <Divider />
                </Fragment>
              )}

              <Column
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#f6f8fa",
                  borderBottom: "1px solid #d0d7de",
                  marginBottom: "15px",
                }}
              >
                <Row
                  style={{
                    justifyContent: "space-between",
                  }}
                >
                  <Row style={{ alignItems: "center" }}>
                    <BookOutlinedIcon
                      htmlColor="#57606a"
                      fontSize="small"
                      sx={{ marginRight: "10px" }}
                    />
                    {makeNameRepos(nameWithOwner)}
                  </Row>
                  <ReposStar>
                    <StarOutlineOutlinedIcon
                      fontSize="small"
                      htmlColor="#57606a"
                      sx={{ marginRight: "10px" }}
                    />
                    <span>Star</span>
                    <div>{makeValueStarRepos(stargazerCount)}</div>
                  </ReposStar>
                </Row>
              </Column>
              <Column style={{ padding: "0 15px" }}>
                <Typography
                  sx={{ marginBottom: "15px", fontFamily: "Quicksand" }}
                >
                  {description}
                </Typography>
                <Row style={{ flexWrap: "wrap" }}>
                  {renderBtnInfo(languages.nodes)}
                </Row>
              </Column>
            </ReposInfo>
          );
        }
      ),
    [data]
  );

  if (loading || !apiData) {
    return (
      <CircularProgress
        sx={{ position: "fixed", left: "50vw", top: "50vh", color: "#24292f" }}
        size={50}
        thickness={2}
      />
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <TopicName>
        <Cap
          style={{
            margin: "auto",
            fontSize: "14px",
            width: "50px",
            height: "50px",
            marginRight: "20px",
            border: "1px solid #d8dee4",
          }}
        >
          <b>#</b>
        </Cap>
        <h1>{topicName}</h1>
      </TopicName>
      <Row style={{ marginBottom: "20px" }}>
        <TopicInfo>
          <p>{topicInfo}</p>
          {topicSrc !== null ? <img src={topicSrc} alt={topicName} /> : null}
        </TopicInfo>
        <Column>
          <h4 style={{ fontWeight: 500, marginBottom: "10px" }}>
            Related Topics
          </h4>
          <Row>{renderBtnInfo(data.topic.relatedTopics)}</Row>
        </Column>
      </Row>
      <Typography
        sx={{
          color: "#57606a",
          fontSize: "20px",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        Here are {setComma(data.topic.repositories.totalCount)} public
        repositories matching this topic...
      </Typography>
      <Column>{renderRepositories()}</Column>
      <BtnLoadMore onClick={() => queryMoreRepos()}>
        {btnLoadName ? "Loading more..." : "Load more..."}
      </BtnLoadMore>
    </Container>
  );
};
