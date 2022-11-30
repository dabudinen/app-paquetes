import React from 'react'

export default function FromInput(label, inputId, type="text" ) {
  return (
    <div className="col-md-6 mb-4">
      <div className="form-outline">
        <label className="form-label" htmlFor={inputId}>{label}</label>
        <input type={type} id={inputId} className="form-control form-control-lg" />
      </div>
    </div>
  )
}
