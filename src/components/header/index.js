import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  styled,
  alpha,
  InputBase,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export const Header = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: "20px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#24292f", height: "62px" }}
    >
      <Toolbar>
        <Link to={"/topics/1"}>
          <GitHubIcon sx={{ mr: 2, fill: "white" }} fontSize="large" />
        </Link>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Like original GitHub
        </Typography>
        <Button
          color="inherit"
          sx={{
            border: "1px solid white",
            letterSpacing: "2px",
            fontSize: "12px",
            mr: "20px",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
