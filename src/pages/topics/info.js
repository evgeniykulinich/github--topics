import { Container, Typography } from "@mui/material";

export const TopicsInfo = () => {
  return (
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
  );
};
