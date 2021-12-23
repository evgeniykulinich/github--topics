import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Divider, Card } from "@mui/material";

export const Topics = () => {
  const [data, setData] = useState();
  const { page } = useParams();

  // useEffect(() => {
  //   fetch(`https://github.com/topics?page=${page}`)
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, [page]);

  return (
    <Fragment>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          textAlign: "center",
          height: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#f6f8fa",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "24px", fontWeight: "500" }}>
          Topics
        </Typography>
        <Typography variant="body1" sx={{ color: "#57606a" }}>
          Browse popular topics on GitHub.
        </Typography>
      </Container>
      <Divider sx={{ mb: "20px" }} />
      <Grid container sx={{ padding: "0 40px" }} spacing={{ xs: 5, md: 4 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "200px", textAlign: "center" }}>xs=2</Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};
