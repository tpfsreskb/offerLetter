import { Box, Typography, Stack, IconButton, DialogTitle } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";

const DialogHeader = ({ title, handleClose, isSplitNeeded }) => {
  let heading = title;
  let subHeading = "";
  if (isSplitNeeded && title.includes("-")) {
    const index = title.indexOf("-");
    heading = title.slice(0, index).trim();
    subHeading = title.slice(index + 1).trim();
  }

  return (
    <Stack
      direction="row"
      spacing={0.25}
      justifyContent="space-between"
      px={0.25}
      py={0.75}
      sx={{
        color: "white !important",
        background: "#02026e",
      }}
    >
      <Box px={1.5} pt={2} pb={0.5}>
        <Typography
          sx={{
            lineHeight: "28px",
            fontWeight: "700",
            letterSpacing: "2.5px",
            fontSize: "1.35rem",
          }}
          gutterBottom
        >
          {heading}
        </Typography>
        {subHeading && (
          <Typography sx={{ fontSize: "13px", fontWeight: 500, ml: 0.5 }}>
            {subHeading}
          </Typography>
        )}
      </Box>
      <Box sx={{ width: "50px", display: "flex", alignItems: "center" }}>
        <IconButton
          onClick={handleClose}
          sx={{
            color: "white",
            border: "3px solid #fff",
            borderRadius: "50%",
            fontSize: "16px",
            fontWeight: "bolder",
            position: "relative",
            "&:after": {
              content: "''",
              width: "10px",
              height: "10px",
              background: "#02026e",
              borderRadius: "4px",
              position: "absolute",
              right: ".5%",
              top: "0",
            },
            "&:hover": {
              transition: "all 0.5s ease",
              transform: "rotate(90deg)",
            },
          }}
        >
          <MdClose />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default DialogHeader;
