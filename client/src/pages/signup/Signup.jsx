import React,{useState} from 'react'
import './signup.scss'
import newRequest from '../../utils/newRequest'
import upload from '../../utils/upload'
import {useNavigate} from 'react-router-dom'


function Signup(){
    const [file,setFile] = useState(null);
    const [user,setUser] = useState({
         username:"",
         email:"",
         password:"",
         img:"",
         country:"",
         desc:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser((prev) => {
            return { ...prev,[e.target.name]: e.target.value};
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        const url = upload(file);
        try{
            await newRequest.post("/auth/register",{
                ...user,
                img:url,
            });
            navigate("/")
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <div className="left">
                    <h1>Create a new account</h1>
                    <label htmlFor=''>Username</label>
                    <input name='username' type='text' placeholder='johndoe' onChange={handleChange}/>
                    <label htmlFor=''>Password</label>
                    <input name='password' type='password' onChange={handleChange} />
                    <label htmlFor=''>Profile Picture</label>
                    <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                    <label htmlFor=''>Country</label>
                    <input name='country' type='text' placeholder='USA' onChange={handleChange}/>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;