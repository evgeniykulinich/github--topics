import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Divider, Pagination } from "@mui/material";

import { TopicsInfo } from "./info";
import { Wrapper, LinkCard, Cap } from "../../components/containers";

export const Topics = () => {
  const { page } = useParams();
  const history = useHistory();
  const [data, setData] = useState();
  const parser = new DOMParser();

  useEffect(() => {
    fetch(`/topics/?page=${page}`)
      .then((res) => res.text())
      .then((text) => setData(text));
  }, [page]);

  const doc = parser.parseFromString(data, "text/html");
  const array = doc.querySelectorAll("div.py-4");
  const dataArray = Array.from(array);

  const arrayToRender = useMemo(
    () =>
      dataArray.map((html) => {
        const obj = {
          name: null,
          valueForFetch: null,
          src: null,
          info: null,
        };

        obj.name = html.querySelector("p.f3.lh-condensed.mb-0.mt-1").innerHTML;
        obj.valueForFetch = html
          .querySelector("a.flex-grow-0")
          .getAttribute("href")
          .slice(8);
        obj.src = html.querySelector("img.rounded")?.getAttribute("src");
        obj.info = html.querySelector("p.f5").innerHTML;

        return obj;
      }),
    [data]
  );

  const renderTopics = useCallback(
    () =>
      arrayToRender.map(({ name, valueForFetch, info, src }) => {
        return (
          <LinkCard key={name} to={`/topic/${valueForFetch}`}>
            {src === undefined ? <Cap>#</Cap> : <img src={src} alt={name} />}
            <h3>{name}</h3>
            <p>{info}</p>
          </LinkCard>
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
        color="primary"
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
