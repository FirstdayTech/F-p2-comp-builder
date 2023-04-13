import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../contexts/global';

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Campo obrigatório'),
});

const LoginPage = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      user.set({
        auth: true,
        email: values.email,
      });
      navigate('/my-comps');
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <Container maxWidth="sm">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" my={4}>
            <img src={Logo} alt="Logo LoL" width="120" height="120" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box my={4}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="dense"
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Senha"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                margin="dense"
              />
              <Box display="flex" justifyContent="center" mt={4}>
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  size="large"
                >
                  Entrar
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
