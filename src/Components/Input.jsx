

export default function Input({type='',isRequired=true,id='',onchangeEvent=null,label=''}){

    return (
        <div className="d-flex flex-column w-100">
            <label className="form-label text-capitalize" htmlFor={id}>{label}</label>
            <input
             type={type} 
             id={id}
             name={id}
             onChange={onchangeEvent}
             className='form-control'
             required={isRequired}
             />
        </div>
    )
}