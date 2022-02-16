import { useState } from "react";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = {name, email, body};
        setIsLoading(true)
        
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            setIsLoading(false)
            // console.log("New Blog Added");
            navigate("/")
        })
    }
  return (
    <div className="container p-5 bg-dark rounded-lg">
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="form-floating mb-3">
          <input 
          type="text" 
          value={name}
          onChange={(e)=> setName(e.target.value)}
          className="form-control" />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          type="text" 
          className="form-control" />
          <label htmlFor="floatingPassword">Email</label>
        </div>
        <div className="form-floating">
          <textarea 
          value={body}
          onChange={(e)=> setBody(e.target.value)}
          className="form-control"></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        {!isLoading && <input className="btn-lg btn btn-white mt-3 bg-white" type="submit" value="Add new" />}
        {isLoading && <input disabled className="btn-lg btn btn-white mt-3 bg-white" type="submit" value="Adding..." />}
        
      </form>
    </div>
  );
};

export default Create;
