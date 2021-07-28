import React, { useState } from 'react';
import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen.android';

const categories = [
    {
        label: "MTB",
        value: 1,
        icon: "image-filter-hdr"
    },
    {
        label: "Route",
        value: 2,
        icon: "road"
    },
    {
        label: "Other",
        value: 4,
        icon: "asterisk"
    }
]

function FormScreen() {
    const [category, setCategory] = useState()
    const [icon, setIcon] = useState("apps")
    return (
        <Screen>
            <AppPicker
                defaultIcon="apps"
                selectedItem={category}
                onSelectItem={(item) => {
                    setCategory(item);
                    item.icon ? setIcon(item.icon) : console.log()
                }}
                placeholder="Category"
                icon={icon}
                items={categories}
            />
            <AppTextInput placeholder="Email" icon="email" keyboardType="email-address"></AppTextInput>
        </Screen >
    );
};
export default FormScreen
