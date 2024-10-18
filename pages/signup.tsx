import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

const Signup = () => {
  const router = useRouter();
  const toast = useToast();

  const initialValues = {
    username: '', // Tambahkan ini
    businessName: '',
    pirtNumber: '',
    responsiblePerson: '',
    nik: '',
    businessAddress: '',
    netWorth: '',
    businessType: '',
    province: '',
    city: '',
    postalCode: '',
    phone: '',
    mobile: '',
    website: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username diperlukan'), // Tambahkan ini
    businessName: Yup.string().required('Nama kelompok usaha/perusahaan diperlukan'),
    pirtNumber: Yup.string().required('No. Sertifikat PIRT diperlukan'),
    responsiblePerson: Yup.string().required('Nama penanggung jawab diperlukan'),
    nik: Yup.string().matches(/^\d{16}$/, 'NIK harus 16 digit angka').required('NIK diperlukan'),
    businessAddress: Yup.string().required('Alamat usaha diperlukan'),
    netWorth: Yup.number().typeError('Kekayaan bersih harus berupa angka').required('Kekayaan bersih diperlukan'),
    businessType: Yup.string().required('Jenis usaha diperlukan'),
    province: Yup.string().required('Provinsi diperlukan'),
    city: Yup.string().required('Kota/Kabupaten diperlukan'),
    postalCode: Yup.string().matches(/^\d{5}$/, 'Kodepos harus 5 digit angka').required('Kodepos diperlukan'),
    phone: Yup.string().matches(/^\d+$/, 'No Telepon harus berupa angka').required('No Telepon diperlukan'),
    mobile: Yup.string().matches(/^\d+$/, 'No HP harus berupa angka').required('No HP diperlukan'),
    website: Yup.string().url('Website tidak valid'),
    email: Yup.string().email('Email tidak valid').required('Email diperlukan'),
    password: Yup.string().min(6, 'Password harus minimal 6 karakter').required('Password diperlukan'),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      toast({
        title: 'Registration successful.',
        description: 'You have successfully registered.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      router.push('/user');
    } else {
      toast({
        title: 'Registration failed.',
        description: 'An error occurred while registering.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxW="700" mx="auto" mt={20} mb={20} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg">
      <Heading as="h1" size="LG" textAlign="center" mb={6}>
        Registrasi
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {inputFields.map((field) => (
                <Field key={field.name} name={field.name}>
                  {({ field: formikField }) => (
                    <FormControl
                      isInvalid={!!errors[field.name] && touched[field.name]}
                    >
                      <FormLabel>{field.placeholder}</FormLabel>
                      <Input
                        {...formikField}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                      <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              ))}
              <Button type="submit" colorScheme="blue" width="full" mt={4}>
                Sign Up
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const inputFields = [
  { name: 'username', placeholder: 'Username', type: 'text' }, // Tambahkan ini
  { name: 'businessName', placeholder: 'Nama Kelompok Usaha/Perusahaan', type: 'text' },
  { name: 'pirtNumber', placeholder: 'No. Sertifikat PIRT', type: 'text' },
  { name: 'responsiblePerson', placeholder: 'Nama Penanggung Jawab', type: 'text' },
  { name: 'nik', placeholder: 'NIK (No.KTP Penanggung Jawab)', type: 'text' },
  { name: 'businessAddress', placeholder: 'Alamat Usaha', type: 'text' },
  { name: 'netWorth', placeholder: 'Kekayaan Bersih yang dimiliki', type: 'text' },
  { name: 'businessType', placeholder: 'Jenis Usaha', type: 'text' },
  { name: 'province', placeholder: 'Provinsi', type: 'text' },
  { name: 'city', placeholder: 'Kota/Kabupaten', type: 'text' },
  { name: 'postalCode', placeholder: 'Kodepos', type: 'text' },
  { name: 'phone', placeholder: 'No Telepon', type: 'tel' },
  { name: 'mobile', placeholder: 'No HP', type: 'tel' },
  { name: 'website', placeholder: 'Website', type: 'url' },
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'password', placeholder: 'Password', type: 'password' },
];

export default Signup;
