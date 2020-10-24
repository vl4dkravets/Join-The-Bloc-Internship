import React from 'react';
import './styles/Form.css';

function Form({ description, handleDescriptionChange, location, handleLocationChange, onSubmit }) {
  return (
    <div class="s01">
      <form>
        <div className="inner-form">
          <div className="input-field first-wrap">
            <input id="search" className="form-control mr-sm-2"
              onChange={handleDescriptionChange}
              value={description.description}
              type="text"
              placeholder='Enter jobs description' />
          </div>
          <div className="input-field second-wrap">
            <input id="location"
              onChange={handleLocationChange}
              value={location.location}
              type="text"
              placeholder='Search by location' />
          </div>
          <div className="input-field third-wrap">
            <button className="btn-search" type="button" onClick={onSubmit} >Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;