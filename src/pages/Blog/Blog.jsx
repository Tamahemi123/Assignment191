

const Blog = () => {
    // Sample blog post data
    const blogPosts = [
        {
            id: 1,
            title: 'Introduction to our Products',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
            author: 'John Doe',
            date: '2022-01-15',
        },
        {
            id: 2,
            title: 'Tips for Shopping Online',
            content: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui...',
            author: 'Jane Smith',
            date: '2022-02-03',
        },
        // Add more blog posts as needed
    ];

    return (
        <div>
            <h2>Blog</h2>
            {blogPosts.length === 0 ? (
                <p>No blog posts available.</p>
            ) : (
                <div>
                    {blogPosts.map(post => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <p>By {post.author} on {post.date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blog;
