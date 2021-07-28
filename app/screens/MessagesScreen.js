import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Screen from '../components/Screen.android';
import ListItem from '../components/ListItem.android';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/owner1.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/owner1.jpg")
    },
]

function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        image={item.image}
                        subtitle={item.description}
                        onPress={() => console.log("message selected", item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    >
                    </ListItem>}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages([
                    {
                        id: 2,
                        title: "T2",
                        description: "D2",
                        image: require("../assets/owner1.jpg")
                    },
                ])}
            >
            </FlatList>
        </Screen>
    );
}

export default MessagesScreen;