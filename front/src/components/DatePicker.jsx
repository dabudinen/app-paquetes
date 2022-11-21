import React from 'react'

export default function DatePicker() {
  return (
<section className="container">
  <h2 className="py-2">Datepicker in Bootstrap 5</h2>
  <form className="row">
    <label htmlFor="date" className="col-1 col-form-label">Date</label>
    <div className="col-5">
      <div className="input-group date" id="datepicker">
        <input type="text" className="form-control" id="date"/>
        <span className="input-group-append">
          <span className="input-group-text bg-light d-block">
          <i class="bi bi-calendar"></i>
          </span>
        </span>
      </div>
    </div>
  </form>
</section>
  )
}
