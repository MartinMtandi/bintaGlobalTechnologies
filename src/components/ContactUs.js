import React, { useState, useEffect } from 'react'




function ContactUs() {

    const [state, setState] = useState({
        name:'',
        lastname:'',
        email:'',
        phonenumber:'',
        company:'',
        description:'',
        file: null,
        success: '',
    })


    useEffect(() => {
      
        const timer = setTimeout(() => {
           setState({...state,['success']:''})
            
          }, 7000);
    }, [state.success])


    const handleChange = (event) => {
   
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    }


  const handlesubmit = (e) => {
    e.preventDefault();
      
      const details = {
          name:state.name,
          lastname: state.lastname,
          email: state.email,
          phone: state.phone,
          description: state.description,
          file:state.file
      }



      console.log(details)

      fetch('https://bintaglobal.com/api/processForm.php', {
        method: 'POST', 
          
          body: JSON.stringify({
            name: state.name,
            lastname: state.lastname,
            email: state.email,
            phone: state.phone,
            description: state.description,
            file: state.file
          })

      }).then(response => response.json())
          .then(response => {
              if (response.state == 'success') {
                 
                  setState({
                      ...state,
                      ['success']: "yes",
                      ['name']: '',
                      ['lastname']: '',
                      ['email']: '',
                      ['phone']: '',
                      ['company']: '',
                      ['description']: '',
                      ['file']: null,
                  })
              }
          else
          setState({...state, ['success']: "no" })
              //console.log("jd")
          });

    }
    
    return (
        <div className="container mx-auto py-12 px-4" id="contact-us">

            <h1 className="text-gray-800 font-semibold md:text-4xl text-2xl text-center pt-12">Request a Quotation</h1>    
            
            {state.success == 'yes' &&
             <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <div class="flex">
           
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div>
                        <p class="text-sm">Your request has been sent.</p>
                    </div>
                </div></div>}

                {state.success == 'no' && <div role="alert">
                    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                      
                    </div>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                        <p>Failed to send please retry.</p>
                    </div>
                </div>}

            <form>
            <div className="mt-5">
               
                <div className="grid grid-cols-2 gap-4 mb-3">
               
                    <div>
                        <input className="border px-2 py-3 text-lg w-full" name='name' value={state.name} onChange={handleChange} placeholder="First Name" required/>
                    </div>
                    <div>
                        <input className="border px-2 py-3 text-lg w-full" name='lastname' value={state.lastname} onChange={handleChange} placeholder="Last Name" required/>
                    </div>
                </div>
                <div className="mb-3">
                    <input className="border px-2 py-3 text-lg w-full" type='email' name='email' value={state.email} onChange={handleChange} placeholder="Email" required/>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                        <input className="border px-2 py-3 text-lg w-full" name='phone' value={state.phone} onChange={handleChange} placeholder="Phone Number" />
                    </div>
                    <div>
                        <input className="border px-2 py-3 text-lg w-full" name='company' value={state.company} onChange={handleChange} placeholder="Company" />
                    </div>
                </div>
                <div className="w-full border border-gray-400 rounded p-2">
                    <p className="text-gray-500 text-lg py-2 mx-1">Describe your idea</p>
                    <textarea className="w-full resize-none px-2 text-gray-800 focus:outline-none" name='description' value={state.description} onChange={handleChange} rows="5" cols="50" required>
                    
                    </textarea>
                    <div className="flex items-center">
                        <div className="bg-grey-lighter mx-3">
                            <label className="flex items-center px-4 py-2 text-gray-100 bg-gray-700 rounded cursor-pointer">
                                <svg className="w-6 h-6 text-gray-100" fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                </svg>
                                <span className="text-base leading-normal mx-2">Attach File</span>
                                <input type='file' name='file' value={state.file} onChange={handleChange} className="hidden" />
                            </label>
                        </div>
                    </div>
                    </div>
                <div className="my-5 text-right">
                    <button className="px-12 py-2 rounded uppercase font-semibold text-white bg-red-600" onClick={handlesubmit} >Send Message</button>
                    
                    </div>
                    
                </div>
            </form>    
        </div>
    )
}

export default ContactUs
