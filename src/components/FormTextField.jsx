import {TextField} from "@mui/material";
export default function FormTextField({
    id,
    label,
    required,
    value,
    onChange,
    ...props
}) {
    return (
        <TextField
            id={`outlined-${id}`}
            slotProps={{
                inputLabel:{
                    shrink:true
                }
            }}
            label={label}
            required={required}
            fullWidth
            margin="normal"
            color="primary"
            value={value}
            onChange={onChange}
            size="small"
            {...props}
            sx={{
                "& .MuiInputLabel-root": {
                    color: "primary.main"
                },
                "& .MuiInputLabel-root.Mui-focused": {
                    color: "primary.main"
                },
                "& .MuiFormLabel-asterisk": {
                    color: "red"
                }
            }}
        />
    );
}