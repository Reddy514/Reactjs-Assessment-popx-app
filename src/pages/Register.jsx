import React ,{useState}from "react";
import { Typography, Button, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import FormTextField from "../components/FormTextField";
import { useNavigate } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        company: "",
        agency: "",
    });
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = () => {
        navigate("/login");
    };
const isFormValid = form.email.trim() !== "" && form.password.trim() !== "" && form.name.trim() !== "" && form.company.trim() !== "" && form.agency.trim() !== "";
 return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Box>
                <Typography variant="h5" fontWeight="bold">
                    Create your
                </Typography>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    PopX account
                </Typography>
                <FormTextField
                    name="name"
                    id="name"
                    label="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <FormTextField
                    name="phone"
                    id="phone"
                    label="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
                <FormTextField
                    name="email"
                    id="email"
                    label="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <FormTextField
                    name="password"
                    id="password"
                    label="Password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <FormTextField
                    name="company"
                    id="company"
                    label="Company Name"
                    value={form.company}
                    onChange={handleChange}
                />
                <FormControl sx={{ mt: 1 }}>
                    <Typography variant="body2" color="text.secondary" >
                        Are you an Agency?<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <RadioGroup
                        row
                        name="agency"
                        value={form.agency}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value="yes"
                            control={<Radio size="small" color="primary" />}
                            label="Yes"
                            sx={{ mr: 2 }}
                        />

                        <FormControlLabel
                            value="no"
                            control={<Radio size="small" color="primary" />}
                            label="No"
                            sx={{ mr: 2 }}
                        />
                    </RadioGroup>
                </FormControl>

            </Box>
            <Button
                variant="contained"
                fullWidth
                sx={{
                    mt: "auto",
                    textTransform: "none"
                }}
                onClick={handleSubmit}
                disabled={!isFormValid}
            >
                Create Account
            </Button>
        </Box>
    );
}