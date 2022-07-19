import { faLock, faRightToBracket, faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import React, { useState } from 'react'

function LoginForm() {

  const [passwordShown, setPasswordShown] = useState(false);
  

  const formik = useFormik({
    initialValues: {
        'loginUsername': '',
        'loginPassword': '',
    },
    onSubmit: values => {
        console.log(JSON.stringify(values));
    }
})

  return (
    <div className='bg-white mt-48 lg:w-3/12 md:w-4/12 w-6/12 h-auto rounded-md drop-shadow-lg py-4'>
      <div>
        <h1 className='text-slate-800 text-3xl font-bold mb-6'>PNSMS</h1>
        <div className=''>
          <form className='grid auto-rows-auto justify-items-center' onSubmit={formik.handleSubmit}>
            <div className='grid grid-cols-10 border rounded-md text-slate-800 border-slate-200 items-center mb-3 w-10/12'>
              <label className='px-2 border-r border-slate-200' htmlFor='loginUsername'><FontAwesomeIcon icon={faUserNinja} className='text-slate-800'/></label>
              <input type='text' name='loginUsername' id='loginUsername' value={formik.values.loginUsername} onChange={formik.handleChange} className='col-span-9 border-none focus:ring-0' placeholder='Enter your username' />
            </div>
            <div className='grid grid-cols-10 border rounded-md border-slate-200 text-slate-800 items-center mb-3 w-10/12'>
              <label className='px-2 border-r border-slate-200' htmlFor='loginPassword'><FontAwesomeIcon icon={faLock} /></label>
              <input type='password' name='loginPassword' id='loginPassword'  value={formik.values.loginPassword} onChange={formik.handleChange} className='col-span-9 border-none focus:ring-0' placeholder='Enter your password' />
            </div>
            <button className='mt-2 bg-violet-300 text-slate-800 font-semibold px-4 py-2 rounded-md shadow-md' type='submit'><FontAwesomeIcon icon={faRightToBracket} className='mr-2 text-slate-600'/>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm