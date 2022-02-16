import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(true)
    
    useEffect( () => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Could not find any data of this resource.")
            }
            return res.json();
        })
        .then(data =>{ 
            setBlogs(data)
            setIsLoading(false)
            setError(false)
        })
        .catch(err => {
            setError(err.message)
            setIsLoading(false)
        })
    },[url])
    return {blogs, isLoading, error};
};

export default useFetch;