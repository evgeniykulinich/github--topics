import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Divider, Pagination } from "@mui/material";

import { TopicsInfo } from "./info";
import { Wrapper, Card, Cap } from "../../components/containers";

export const Topics = () => {
  const { page } = useParams();
  const [data, setData] = useState();
  const history = useHistory();
  const parser = new DOMParser();

  useEffect(() => {
    fetch(`/topics/?page=${page}`)
      .then((res) => res.text())
      .then((html) => setData(html));
  }, [page]);

  const doc = parser.parseFromString(data, "text/html");
  const array = doc.querySelectorAll("div.py-4");
  const dataArray = Array.from(array);

  const arrayToRender = dataArray.map((html) => {
    const obj = {
      name: null,
      src: null,
      info: null,
    };

    obj.name = html
      .querySelector("a.flex-grow-0")
      .getAttribute("href")
      .slice(8);

    const srcImage = html.querySelector("img.rounded");
    obj.src = srcImage !== null ? srcImage.getAttribute("src") : null;

    obj.info = html.querySelector("p.f5").innerHTML;

    return obj;
  });

  const renderTopics = useCallback(
    () =>
      arrayToRender.map(({ name, info, src }) => {
        return (
          <Card key={name}>
            {src === null ? <Cap>#</Cap> : <img src={src} alt={name} />}
            <h3>{name}</h3>
            <p>{info}</p>
          </Card>
        );
      }),
    [data]
  );

  const onPageChange = useCallback((pg) => {
    history.push(`/topics/${pg}`);
  });

  return (
    <Fragment>
      <TopicsInfo />
      <Divider sx={{ mb: "20px" }} />
      <Pagination
        count={6}
        color="standard"
        onChange={(e, pg) => onPageChange(pg)}
        shape="rounded"
        variant="outlined"
        page={+page}
        sx={{ mb: "20px" }}
      />
      <Wrapper>{renderTopics()}</Wrapper>
    </Fragment>
  );
};
