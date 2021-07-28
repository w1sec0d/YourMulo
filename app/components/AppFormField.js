import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
    return (
        <>
            <AppTextInput
                {...otherProps}
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
            />
            <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
        </>
    );
}

export default AppFormField;