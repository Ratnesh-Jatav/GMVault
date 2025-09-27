import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = import.meta.env.VITE_API_URL;

const Manager = ({ user }) => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: '', username: '', password: '' });
  const [passwordArray, setPasswordArray] = useState([]);

  // Fetch passwords from backend for this user
  useEffect(() => {
    if (!user) return;
    fetch(`${API_URL}/api/passwords?user=${encodeURIComponent(user)}`)
      .then(res => res.json())
      .then(data => setPasswordArray(data))
      .catch(() => setPasswordArray([]));
  }, [user]);

  const copyText = (text) => {
    toast('Copy to clipboard!', { position: 'top-right', autoClose: 5000, theme: 'dark' });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = passwordRef.current.type === 'password' ? 'text' : 'password';
    ref.current.src = ref.current.src.includes('eyecross') ? 'icons/eye.png' : 'icons/eyecross.png';
  };

  const savePassword = async () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      // Always create new password (no edit logic)
      const res = await fetch(`${API_URL}/api/passwords`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, user })
      });
      if (res.ok) {
        const updatedRes = await fetch(`${API_URL}/api/passwords?user=${encodeURIComponent(user)}`);
        const updatedData = await updatedRes.json();
        setPasswordArray(updatedData);
        setform({ site: '', username: '', password: '' });
        toast('Password saved!', { position: 'top-right', autoClose: 5000, theme: 'dark' });
      } else {
        toast('Error: Password not saved!');
      }
    } else {
      toast('Error: Password not saved!');
    }
  };

  const deletePassword = async (id) => {
    let c = confirm('Do you really want to delete this password?');
    if (c) {
      const res = await fetch(`${API_URL}/api/passwords/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user })
      });
      if (res.ok) {
        setPasswordArray(passwordArray.filter(item => item._id !== id));
        toast('Password deleted!', { position: 'top-right', autoClose: 5000, theme: 'dark' });
      }
    }
  };

  const editPassword = (id) => {
    const pw = passwordArray.find(i => i._id === id);
    setform({ site: pw.site, username: pw.username, password: pw.password });
    // No editId, just fill the form
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer />
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
      <div className="p-2 pt-7 md:p-0 md:mycontainer min-h-[80.2vh]">
        <h1 className='text-4xl text font-bold text-center'>
          <span className='text-green-700'>&lt;</span>
          <span className='text-lime-50'>GM</span>
          <span className='text-green-700'>Vault&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
        <div className="flex flex-col p-4 text-black gap-10 items-center 1">
          
          <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className="rounded-full border-green-500 w-full p-4 py-2" type="text" name='site' id='site' />
          <div className="flex flex-col md:flex-row w-xl justify-between gap-10 items-center">
            <input value={form.username} onChange={handleChange} placeholder='Enter username' className="rounded-full border-green-900 w-xl p-4 py-2" type="text" name='username' id='username' />
            <div className='relative'>
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Your Password' className="rounded-full border-green-900  p-4 py-2" type="password" name='password' id='pssword' />
              <span className='absolute right-[6px] top-[6px] cursor-pointer' onClick={showPassword}>
                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center items-center gap-4 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border-2 border-green-900'>
            <lord-icon src="https://cdn.lordicon.com/navborva.json" trigger="hover"></lord-icon>
            Save
          </button>
          
        </div>
        <div className='passwords'>
          <h2 className='font-bold text-xl py-4 text-lime-50'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords to show</div>}
          {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className='bg-green-900 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-200'>
              {passwordArray.map((item, index) => (
                <tr key={item._id}>
                  <td className='py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <a href={item.site} target='_blank' rel='noopener noreferrer'>{item.site}</a>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                        <lord-icon style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }} src="https://cdn.lordicon.com/lyrrgrsl.json" trigger="hover"></lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span>{item.username}</span>
                      <div className='flex items-center justify-center lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                        <lord-icon style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }} src="https://cdn.lordicon.com/lyrrgrsl.json" trigger="hover"></lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span>{item.password}</span>
                      <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                        <lord-icon style={{ width: '25px', height: '25px', paddingTop: '3px', paddingLeft: '3px' }} src="https://cdn.lordicon.com/lyrrgrsl.json" trigger="hover"></lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center'>
                    <div className='flex items-center justify-center'>
                      <span className='cursor-pointer mx-1' onClick={() => { editPassword(item._id) }}>
                        <lord-icon src="https://cdn.lordicon.com/exymduqj.json" trigger="hover" colors="primary:#000000,secondary:#000000" style={{ width: '25px', height: '25px' }}></lord-icon>
                      </span>
                      <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item._id) }}>
                        <lord-icon src="https://cdn.lordicon.com/skkahier.json" trigger="hover" style={{ width: '25px', height: '25px' }}></lord-icon>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
