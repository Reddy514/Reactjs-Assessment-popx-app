import { Box } from "@mui/material";

export default function Layout({ children }) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "grey.100"
            }}
        >
            <Box
                sx={{
                    width: 425,
                    minHeight: "100vh",
                    bgcolor: "background.paper",
                    px: 3,
                    py: 2,
                    boxShadow: 3
                }}
            >
                {children}
            </Box>
        </Box>
    );
}