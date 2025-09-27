import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showRegister, setShowRegister] = useState(false);
    const [registerMsg, setRegisterMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message || 'Login failed');
                setLoading(false);
                return;
            }
            if (onLogin) onLogin(data.username);
        } catch (err) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setRegisterMsg('');
        setError('');
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message || 'Registration failed');
                setLoading(false);
                return;
            }
            setRegisterMsg('Account created! You can now log in.');
            setShowRegister(false);
        } catch (err) {
            setError('Network error');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            
            <form onSubmit={showRegister ? handleRegister : handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                
                <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">{showRegister ? 'Create Account' : <div className='div1'>
            <span><h1 className="text-2xl font-bold mb-6">Welcome To GMVault</h1></span> 

                    <div className=" font-bold text-2xl flex w-full pl-11 ">
                        <img className='ml-20 h-20 border-2	border-x-lime-500 rounded-full' src="/icons/Logo.jpg" alt="Plase Connect With the " />
                    </div>

                    <div className='div2 '>

                        <span className='text-green-700 ml-18 pl-4 '>&lt;</span>
                        <span>GM</span>
                        <span className='text-green-700'>VAULT&gt;</span>
                       

                    </div>
                </div>}</h2>
                {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
                {registerMsg && <div className="mb-4 text-green-600 text-sm">{registerMsg}</div>}
                <div className="mb-4">
                    <label className="block text-slate-700 mb-2" htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        autoComplete="username"
                        disabled={loading}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-slate-700 mb-2" htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        disabled={loading}
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors mb-2 flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                            </svg>
                            Connecting...
                        </>
                    ) : showRegister ? 'Create Account' : 'Login'}
                </button>
                <div className="p-8 text-center">
                            <p className="text-lg">Your secure password manager. Store, manage, and protect your passwords with ease.</p>
                        </div>
                <div className="text-center">
                    {showRegister ? (
                        <span className="text-sm">Already have an account?{' '}
                            <button type="button" className="text-green-700 underline" onClick={() => { setShowRegister(false); setError(''); setRegisterMsg(''); }}>Login</button>
                        </span>
                    ) : (
                        <span className="text-sm">Don't have an account?{' '}
                            <button type="button" className="text-green-700 underline" onClick={() => { setShowRegister(true); setError(''); setRegisterMsg(''); }}>Create Account</button>
                        </span>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;
