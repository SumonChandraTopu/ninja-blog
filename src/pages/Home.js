
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {error, isLoading, blogs} = useFetch("http://localhost:8000/blogs")
    
    return (
        <div>
            <h1>New Blog Lists</h1>
            {
                error && <div>{error}</div>
            }
            {
                isLoading && <div className="preload">Loading.......</div>
            }
            {
                
                blogs.map(blog => <BlogList blog={blog} key={blog.id} /> )
            }
        </div>
    );
};

export default Home;