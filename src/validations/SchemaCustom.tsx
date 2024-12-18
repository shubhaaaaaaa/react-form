import * as yup from 'yup';

export const SchemaCustom = yup.object().shape({

    address: yup.string()
                .matches(/^[A-Za-z0-9-]+$/, 'Address cannot contain speacial characters'),

    condition: yup.bool()
                    .oneOf([true], 'Please tick the box'),
    
    dob: yup.date()
            .max(new Date(), 'Date of birth cannot be in the future')
            .test('dob', 'You need to be at least 16 to fill form', (value) => {
                if (!value) return false;
              
                const today = new Date();
                const birthDate = new Date(value);
              
                const age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                const dayDiff = today.getDate() - birthDate.getDate();
              
                if (age > 16) {
                        return true
                    }
                if (age === 16) {
                        if (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)) {
                                return true; 
                            }
                    }
                    return false
                
              })
            .required('Date of birth is required'),
    
    education: yup.string()
        .required(),
    
    email: yup.string()
            .email()
            .required('Email is required'),
    
    fname: yup.string()
        .required('First name is required')
        .matches(/^[A-Za-z]+$/, 'Name can only have alphabets'),
    
    gender: yup.string()
                .required('Choose a gender'),
    
    interests: yup.array()
                .min(1,'Select atleast one interest'),
    
    lname: yup.string()
                .matches(/^[A-Za-z]+$/, 'Name can only have alphabets'),

    number: yup.string()
            .matches(/^98[0-9]{8}$/, 'Begin with 98 and should be 10 digits long'),
    
    rating: yup.number()
            .required('Choose your level of English'),

    username: yup.string()
                .required('Username is required')
                .min(6, 'Must be 6 characters or more'),
    
    password: yup.string()
                .required('No password provided.')
                .min(8, 'Password is too short - should be 8 chars minimum.')
                .matches(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/, 'Password requires a number, one uppercase and one lowercase letter'),

    repassword: yup.string()
                .oneOf([yup.ref('password')], 'Passwords must match'),    
});