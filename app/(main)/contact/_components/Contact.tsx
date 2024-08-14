import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (

    <section className="mt-10 mx-[20px] md:mx-[40px] 2xl:mx-[80px] max-md:flex-wrap">
        <div className="flex justify-between gap-5 max-mmd:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[41%] max-mmd:w-full">
                        <h3 className="mt-20 text-[28px] font-medium">Contact Information</h3>
                    </div>
                    <div className="flex flex-col ml-5 w-auto max-mmd:ml-0 max-mmd:w-full">
                        <div className="flex flex-col self-stretch my-auto text-lg font-medium text-black max-md:mt-10">
                            <ContactForm/>
                            
                        </div>

                    </div>
                </div>
    </section>
        
  )
}

export default Contact