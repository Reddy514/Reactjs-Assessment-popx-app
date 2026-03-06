import { Box, Typography, Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Profile() {
    return(
        <Box>
            <Typography variant="h5" fontWeight="bold" mb={2}>
                Account Settings
            </Typography>
            <Box display="flex" alignItems="center" gap={2}>
                <Box position="relative">
                    <AccountCircleIcon
                        sx={{ width: 60, height: 60 }}
                    />
                    <IconButton
                        size="small"
                        sx={{
                            position: "absolute",
                            bottom: -2,
                            right: -2,
                            backgroundColor: "primary.main",
                            color: "white",
                            width: 22,
                            height: 22,
                            "&:hover": { backgroundColor: "primary.dark" }
                        }}
                    >
                        <CameraAltIcon sx={{ width: 14, height: 14 }} />        
                    </IconButton>
            </Box>  
                <Box>
                    <Typography fontWeight="bold">
                        Marry Doe
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Marry@gmail.com
                    </Typography>
                </Box>
            </Box>
            <Typography
                variant="body2"
                color="text.secondary"
                mt={3}
            >
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
                Dolore Magna Aliquyam Erat. Sed Diam.
            </Typography>
        </Box>
    );
}