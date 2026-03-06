import React,{useState} from "react";
import { Typography,Button,Box } from "@mui/material";
import FormTextField from "../components/FormTextField";
import {useNavigate} from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    const[form,setform] = useState({
        email:"",
        password:""}
    );
    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit = () => {
        navigate("/profile");
    };
    const isFormValid = form.email.trim() !== "" && form.password.trim() !== "";
    return(
        <Box>
            <Typography variant="h5" fontWeight="bold">
                Signin to your
            </Typography>
            <Typography variant="h5" fontWeight="bold">
                PopX account
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
                Lorem ipsum dolor sit amet,
            </Typography>
            <Typography variant="body2" color="text.secondary">
                consectetur adipiscing elit.
            </Typography>
            <FormTextField
                name="email"
                id="email"
                label="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter email address"
            />
            <FormTextField
                name="password"
                id="password"
                label="Password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
            />
            <Button
                variant="contained"
                fullWidth
                sx={{ mt: 1 }}
                onClick={handleSubmit}
                disabled={!isFormValid}
            >
                Login
            </Button>
        </Box>  
    );


}