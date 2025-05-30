import { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config.js';
import { Container, PostCard } from '../components/Index.js';
import Loading from '../components/Loading.jsx';

function MyPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        appwriteService.getMyPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="w-full py-8">
                    <Container>
                        <div className="flex flex-col gap-4 mx-auto">
                            {posts
                                .slice()
                                .reverse()
                                .map((post) => (
                                    <div
                                        key={post.$id}
                                        className="p-2 w-full md:w-1/2 mx-auto"
                                    >
                                        <PostCard {...post} />
                                    </div>
                                ))}
                        </div>
                    </Container>
                </div>
            )}
        </>
    );
}

export default MyPosts;