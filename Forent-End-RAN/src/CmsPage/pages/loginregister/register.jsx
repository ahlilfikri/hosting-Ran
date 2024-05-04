import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// icon
import VisibilityIcon from '@mui/icons-material/Visibility';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match');
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:3700/user/register', { username, email, password });
            if(response.status === 201) {
                
                alert('Registration successfullll');
                
                window.location.href = '/login/cms';   
            }else{
                throw new Error('Register failed');
            } 
            
        } catch (err) {
            console.error(err);
            alert('Registration failed');
        }
    };

    const handleCopyPaste = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container-fluid cover-login-register" style={{width: '100vw', height: '100vh'}}>
                <div className="row " style={{height:'100%'}}>
                    <div className="col-6 m-auto"
                    style={{
                        paddingLeft:'100px',
                    }}
                    >

                        <h1 style={{
                            color:'white',
                            fontSize:'60px',
                            fontWeight:'bold',
                            }}>Welcome !</h1>
                        <p
                        style={{
                            color:'white',
                        }}
                        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nulla dignissimos accusantium laborum dolor facilis!</p>
                    
                    </div>
                    <div className="col-6 ">
                        <div className="box-login-db bg-light" style={{
                            maxWidth:'500px',
                            height:'fit-content',
                            padding:'20px',
                            paddingTop:'53px',
                            borderRadius:'30px',
                            margin:'auto',
                            marginTop:'200px',
                        }}>
                            <div className="pb-4">
                                <h3
                                style={{
                                    textAlign:'center',
                                    fontWeight:'bold',
                                    fontSize:'24px',
                                    marginBottom:'30px'
                                
                                }}
                                >Register</h3>
                                <form onSubmit={handleSubmit}>
                                    <div 
                                    style={{
                                        width:'fit-content',
                                        margin:'auto',
                                    }}
                                    >
                                        <div className="form-group mt-4 pb-3  " style={{width:'320px'}}>
                                            <label htmlFor="exampleInputUsername">Username</label>
                                            <input type="text" className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" style={{borderRadius:'30px'}} value={username} onChange={handleUsernameChange} />
                                        </div>
                                        <div className="form-group pb-3 " style={{width:'320px'}}>
                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{borderRadius:'30px'}} value={email} onChange={handleEmailChange} />
                                        </div>
                                        <div className="form-group pb-3" style={{width:'320px'}}>
                                            <label htmlFor="exampleInputPassword1">Password</label>
                                            <div className="input-group">
                                                <input type={showPassword ? 'text' : 'password'} className="form-control" id="exampleInputPassword1" value={password} onChange={handlePasswordChange} onPaste={handleCopyPaste} onCopy={handleCopyPaste} onCut={handleCopyPaste} style={{borderRadius:'30px'}} />
                                                <button type="button" className="btn btn-outline-secondary
                                                border-0
                                                " onClick={handleShowPassword}
                                                style={{
                                                    boxShadow:'none',
                                                    outline:'none',
                                                    background:'none',
                                                }}
                                                
                                                >
                                                    <VisibilityIcon />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-group pb-5" style={{width:'320px'}}>
                                            <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                                            <div className="input-group" 
                                            style={{
                                                width:'273px'
                                            }}
                                            >
                                                <input type={showPassword ? 'text' : 'password'} className="form-control" id="exampleInputConfirmPassword1" value={confirmPassword} onChange={handleConfirmPasswordChange} onPaste={handleCopyPaste} onCopy={handleCopyPaste} onCut={handleCopyPaste} style={{borderRadius:'30px',}} />
                                                
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <button type="submit" className="btn btn-primary" style={{
                                                width:'320px',
                                                padding:'10px 48px 10px 48px',
                                                borderRadius:'30px',
                                                textAlign:'center',
                                                }}>
                                                    <h3
                                                    style={{
                                                        fontWeight:'bold',
                                                        fontSize:'24px',
                                                        color:'white',
                                                        marginLeft:'30px'
                                                    }}
                                                    >
                                                        register
                                                    </h3>
                                                </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
