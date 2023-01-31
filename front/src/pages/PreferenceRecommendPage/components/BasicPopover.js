import * as React from "react";
import { useState, useEffect } from "react";
import Popover from "@mui/material/Popover";
import Fab from "@mui/material/Fab";
import maple_dino from "../../../assets/icons/maple_dino.png";
import BasicSearch from "./BasicSearch";

function BasicPopover({
  codiPart,
  codiPartData,
  onInputValueChange,
  inputLabel,
  inputImage,
  inputId,
  inputCategory,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    if (event) {
      setAnchorEl(event.target);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Re-render BasicButton when inputImage changes
  }, [inputLabel]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Fab aria-label={codiPart}>
        {inputImage === "" ? (
          <img src={maple_dino} alt="" onClick={handleClick} />
        ) : (
          <img src={inputImage} alt="" onClick={handleClick} />
        )}
      </Fab>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <div
          style={{
            padding: "10px",
            width: "300px",
            height: "55px",
          }}>
          <BasicSearch
            codiPart={codiPart}
            codiPartData={codiPartData}
            onSearchChange={onInputValueChange}
            inputValue={inputLabel}
            inputImage={inputImage}
            inputId={inputId}
            inputCategory={inputCategory}
          />
        </div>
      </Popover>
    </div>
  );
}

export default BasicPopover;
