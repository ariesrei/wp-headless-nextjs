"use client";

import config from "@/config/config.json";
import { wpcf7ApiUrl, apiUrl, wpcf7Tag } from '@/app/config';

import { useState } from "react";

// const initialState = [
//     ''
// ];

const ContactForm = async () => {
    
    const { wpc7_form_id } = config.params;
    const formFields = await fetch(`${apiUrl}/next-wpcf7/${wpc7_form_id}`) 
    const formFields_response = await formFields.json();
   
    // console.log( formFields_response );
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const req = await fetch(`${wpcf7ApiUrl}/contact-forms/${wpc7_form_id}/feedback`, { method: 'POST', body: formData });
        const response = await req.json();

        console.log(response)
        
        // const [fields, setFields] = useState(formFields_response);

        if( response.invalid_fields && response.invalid_fields.length > 0 ) {
            
            // response.invalid_fields.map((x: any) => {
            //     formFields_response.map( (y: any, index: any) => {
            //         if( x.field === y.name ) { 
            //             formFields_response[index]['error_message']  = x.message;
            //             // setFields(x.field, y.name);
            //         }
            //     });
            // });
        }


        // setData(formFields_response);
        // console.log( formFields_response );
        // formFields_response.render
    }

    return (
        <>
        <form onSubmit={handleSubmit} >
        {formFields_response.map( (field: any, index: any) => (

                <div key={index}>
                <input type="hidden" name="_wpcf7_unit_tag" value={wpcf7Tag} />

                { field.type === 'text' && (
                    <>        
                    <div className="mb-6">      
                    <label htmlFor={field.name} className="form-label">{field.label} {field.required && (<span className="text-red-500">*</span>)}</label>
                    <input
                    id={field.name}
                    name={field.name}
                    className="form-input"
                    placeholder={field.placeholder}
                    type={field.type}
                    />
                        {field.error_message}

                    </div>
                    
                 
                    </>
                )}
                
                { field.type === 'email' && (
                    <>        
                    <div className="mb-6">
                        <label htmlFor={field.name} className="form-label">{field.label} {field.required && (<span className="text-red-500">*</span>)}</label>
                        <input
                        id={field.name}
                        name={field.name}
                        className="form-input"
                        placeholder={field.placeholder}
                        type={field.type}
                        />
                    </div>
                    </>
                )}

                { field.type === 'textarea' && (
                    <>
                    <div className="mb-6">
                        <label htmlFor="message" className="form-label">
                            {field.label} {field.required && (<span className="text-red-500">*</span>)}
                        </label>
                        <textarea
                        id={field.name}
                        name={field.name}
                        className="form-input"
                        placeholder={field.placeholder}
                        rows={8}
                        ></textarea>
                    </div>
                    </>
                )}

                { field.type === 'submit' && (
                    <>
                        <button type="submit" className="btn btn-primary">
                        {field.placeholder}
                        </button>
                    </>
                )}
            </div>
        ))}
        </form>
        </>
    );
}

export default ContactForm;