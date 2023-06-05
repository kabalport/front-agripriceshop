import React, { useState } from 'react';
import { Box, Button as MuiButton, Card, CardContent, TextField, Typography } from '@mui/material';

interface Post {
    id: number;
    title: string;
    content: string;
}

const initialPosts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
    // Add more initial posts if you want...
];

const CommunityPage: React.FC = () => {
    const [posts, setPosts] = useState(initialPosts);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');

    const handlePost = () => {
        if (newPostTitle && newPostContent) {
            // Add the new post to the top of the list
            const newPost: Post = { id: Date.now(), title: newPostTitle, content: newPostContent };
            setPosts([newPost, ...posts]);

            // Clear the form fields
            setNewPostTitle('');
            setNewPostContent('');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Typography variant="h3">Community Page</Typography>

            <TextField
                variant="outlined"
                label="New Post Title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
            />
            <TextField
                variant="outlined"
                label="New Post Content"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                multiline
                rows={4}
            />
            <MuiButton variant="contained" color="primary" onClick={handlePost}>Post</MuiButton>

            {posts.map((post) => (
                <Card key={post.id} sx={{ width: '80%', marginTop: '20px' }}>
                    <CardContent>
                        <Typography variant="h5">{post.title}</Typography>
                        <Typography variant="body2">{post.content}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default CommunityPage;
