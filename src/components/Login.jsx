import React, {useState} from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Login() {
  const emailRegex = /^[a-zA-Z]+202[123]@vitbhopal\.ac\.in$/;
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '') {
      toast.error('Please enter a VIT email address');
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid VIT email address');
      return;
    }
    toast.success('Successfully logged in');
    navigate('/home', { state: { fromLogin: true } });
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2   ">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl dark:text-white">Sign in</h2>
        
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900 dark:text-gray-200"
                  > 
                    {' '}
                    Enter your VIT Email Address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  
                
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-gray-50 focus:ring-offset-2 transition duration-150 ease-in-out"
                    onClick={handleSubmit}
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
