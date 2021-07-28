import React from 'react';
import { StyleSheet, Image } from 'react-native';

import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import Screen from '../components/Screen.android';

import { Formik } from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen() {
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.icon}
            />

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <>
                        <AppFormField
                            icon="email"
                            keyboardType={"email-address"}
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            placeholder="Email"
                            name="email"
                        />
                        <AppFormField
                            icon="lock"
                            secureTextEntry
                            autoCorrect={false}
                            placeholder="Password"
                            name="password"
                        />
                        <SubmitButton title="login" />
                    </>
                )}
            </Formik>

        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 15
    },
    icon: {
        width: 200,
        height: 200,

    }
})
export default LoginScreen;