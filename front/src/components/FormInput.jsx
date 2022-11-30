import React from 'react'
// label, inputId, 
export default function FormInput({label, inputId, type, optionalClass}) {
  return (
    <div className={optionalClass}>
      <input type={type} id={inputId} name={inputId} className="form-control" />
      <label className="form-label" htmlFor={inputId}>{label}</label>
    </div>
  )
}
FormInput.defaultProps = {
  type:"text", 
  optionalClass:"form-floating mb-4"
}