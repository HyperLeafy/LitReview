import React from 'react'


const Loginpage:React.FC = () => {
  return (
    <>
        <div className='flex min-h-full flex-col justify-center'>

            {/* Topbar  */}
            <section className='relative top-0 flex h-fit bg-[#031019] w-screen'>
                <div className='text-[2.5rem] p-3 font-serif text-white'>
                    <h1>Lit<span className='text-emerald-500'>Review</span></h1>
                </div>
            </section>

            <section className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-[8rem] text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>


            {/* Login or Register form  */}
            <div className='mt-10 flex justify-center border-black sm:px-15'>
                <form className='space-y-6 sm:w-[90%] lg:w-[28rem] ' action='' method='POST'>
                    <div >
                        <label htmlFor='email' className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                        <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="text-sm">
                            <a href='/' className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                        </div>
                        <div className="mt-2">
                        <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>

                </form>
            </div>

            </section>
            {/* */}
        </div>
    </>
  )
}

export default Loginpage;
