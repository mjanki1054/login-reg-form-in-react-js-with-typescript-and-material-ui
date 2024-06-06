import { useState } from 'react';
import { Container, Grid, Button, TextField, Box } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import './App.css';

type FormValue = {
    name: string,
    email: string,
    password: string
}

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>();
    const onSubmit: SubmitHandler<FormValue> = (data) => {
        console.log("final data", data);
        alert(data.email);
    };

    return (
        <div className="bg-color">
            <Container fixed>
                <div className="form-wrapper">
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={12} lg={12} md={12}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box component="span" sx={{ p: 2, color: '#1d395d', textAlign: 'left' }}>
                                    <h1>Register</h1>
                                </Box>
                                <Box>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        placeholder="Enter Name"
                                        {...register("name", {
                                            required: "Name is required",
                                            pattern: {
                                                value: /^[A-Za-z\s]+$/,
                                                message: "Invalid Name: Only characters and spaces are allowed"
                                            }
                                        })}
                                        error={!!errors.name}
                                        helperText={errors.name ? errors.name.message : ''}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        placeholder="Enter Email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                message: "Invalid Email"
                                            }
                                        })}
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : ''}
                                        style={{ marginTop: '20px' }}
                                    />

                                    <TextField
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        placeholder="Password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 10,
                                                message: "Password should be at least 10 characters"
                                            }
                                        })}
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ''}
                                        style={{ marginTop: '20px' }}
                                    />

                                    <Button
                                        style={{ marginTop: '20px' }}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default RegisterForm;
