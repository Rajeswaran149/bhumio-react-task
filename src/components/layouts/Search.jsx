import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
    return (
        <div>
            <Paper
                sx={{
                    p: "2px 4px",
                    m: "10px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                />
                <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
};
