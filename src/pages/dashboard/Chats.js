import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({ img, name, msg, time, unread, online }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 60,
        borderRadius: 1,
        borderColor: "#fff",
      }}
      p={2}
    >
      <Stack direction={"row"} spacing={2}>
        {online ? (
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar src={img} />
          </StyledBadge>
        ) : (
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar src={img} />
          </StyledBadge>
        )}
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
          <Stack spacing={2} alignItems={"center"}>
            <Typography variant="caption">{time}</Typography>
            <Badge color="primary" badgeContent={unread} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100vh",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MultiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        padding: 3,
      }}
    >
      <Stack spacing={2} sx={{ maxHeight: "100vh" }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h4">Chats</Typography>
          <IconButton>
            <CircleDashed size={32} />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <ArchiveBox size={24} />
          <Button>Archive</Button>
        </Stack>
        <Divider />
        <Stack flexGrow={1} height={"100%"} spacing={2} overflow={'scroll'}>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2">Pinned</Typography>
            {ChatList.filter((item) => item.pinned).map((item) => (
              <ChatElement
                img={item.img}
                name={item.name}
                msg={item.msg}
                time={item.time}
                unread={item.unread}
                online={item.online}
              />
            ))}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2">All Chats</Typography>
            {ChatList.filter((item) => !item.pinned).map((item) => (
              <ChatElement
                img={item.img}
                name={item.name}
                msg={item.msg}
                time={item.time}
                unread={item.unread}
                online={item.online}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
