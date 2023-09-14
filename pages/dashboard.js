import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const posts = [
    {
        id: 1,
        user: 'Thidas Kaveesha',
        image: require('../assets/cat.png'),
        likes: 100,
        comments: 20,
    },
    {
        id: 2,
        user: 'Lakmon Ralims',
        image: require('../assets/camera.png'),
        likes: 200,
        comments: 30,
    },
    {
        id: 3,
        user: 'Mahesh Mahesh',
        image: require('../assets/cat.png'),
        likes: 200,
        comments: 30,
    },
    {
        id: 4,
        user: 'Lamod Lamod',
        image: require('../assets/camera.png'),
        likes: 200,
        comments: 30,
    },
];

const Stories = [
    {
        id: 1,
        user: 'Malo Poko',
        image: require('../assets/login.png'),
    },
    {
        id: 2,
        user: 'Poko Poko',
        image: require('../assets/user.png'),
    },
    {
        id: 3,
        user: 'Bako Loko',
        image: require('../assets/cat.png'),
    },
    {
        id: 4,
        user: 'Jinga Mojito',
        image: require('../assets/user.png'),
    },
];

const Home = ({ navigation }) => (
    <ScrollView style={styles.container}>

        {/* Heading */}
        <View style={styles.header}>
            <Image
                source={require('../assets/user.png')}
                style={styles.profileImage}
            />
            <View style={styles.headText}>
                <Text style={styles.username}>Hola! Thidas Kaveesha</Text>
                <Text style={styles.greeting}>Good Morning</Text>
            </View>
        </View>

        {/* Stories */}
        <ScrollView horizontal={true} style={styles.storyContainer}>
            {Stories.map((story, id) => (
                <View key={id} style={styles.story}>
                    <Image
                        source={story.image}
                        style={styles.storyImage}
                    />
                    <Text style={styles.storyUsername}>{story.user}</Text>
                </View>
            ))}
        </ScrollView>

        {/* Posts */}
        {posts.map((post) => (
            <View key={post.id} style={styles.postContainer}>
                <Text style={styles.PostUsername}>{post.user}</Text>
                <Image source={post.image} style={styles.postImage} />
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Text style={styles.iconText}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.iconText}>Comment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.iconText}>Share</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.likes}>{post.likes} likes</Text>
                <Text style={styles.comments}>{post.comments} comments</Text>
            </View>
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    greeting: {
        fontSize: 14,
        marginLeft: 12,
        color: 'gray',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 12,
    },
    headText: {
        marginLeft: 12,
    },
    storyContainer: {
        marginTop: 16,
        padding: 8,
    },
    postContainer: {
        padding: 15,
        backgroundColor: '#DCDCDC',
        borderRadius: 12,
        margin: 25
    },
    postImage: {
        width: '100%',
        height: 300,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    iconText: {
        marginLeft: 4,
        fontWeight: 'bold',
    },
    likes: {
        marginLeft: 12,
        fontWeight: 'bold',
    },
    comments: {
        marginLeft: 12,
        color: 'gray',
    },
    storyContainer: {
        marginTop: 16,
        padding: 8,
    },
    story: {
        marginRight: 12,
    },
    storyImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#ff8500',
    },
    storyUsername: {
        marginTop: 4,
        textAlign: 'center',
        fontSize: 12,
    },
    PostUsername: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
    },
});

export default Home;