import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Welcome() {
    const navigate = useNavigate();
    return(
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                pb:"10vh"
            }}
        >
            <Typography variant="h5" fontWeight="bold">
                Welcome to PopX
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
                Lorem ipsum dolor sit amet,
            </Typography>
            <Typography variant="body2" color="text.secondary">
                consectetur adipiscing elit.
            </Typography>
            <Button 
                variant="contained"
                fullWidth
                sx={{ 
                    mt:1,
                    textTransform: "none"
                 }}
                 onClick={() => {
                    navigate("/register");
                }}
            >
                Create Account
            </Button>
            <Button
                variant="contained"
                fullWidth
                sx={{
                    mt: 1,
                    textTransform: "none",
                    backgroundColor: "#B388FF",   // violet-300
                    "&:hover": {
                        backgroundColor: "#9F6BFF"
                    },
                    color: "black"
                }}
                onClick={() => {
                    navigate("/login");
                }}
            >
                Already Registered? Login
            </Button>
        </Box>
    );
}