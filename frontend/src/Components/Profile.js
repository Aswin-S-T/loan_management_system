import React from 'react'

function Profile(props) {
  console.log('here data===============',props)
  return (
    <div className='p-4'>
      <h2>My Profile</h2>
      {/* <form>
        <p>First Name</p>
        <input type="text" className="form-control" />
        <p>Last Name</p>
        <input type="text" className="form-control" />
        <p>E-mail address</p>
        <input type="email" className="form-control" />
        <p>Region</p>
        <select className='form-control'>
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
          <option>option4</option>
        </select>
        <div className='BtnList mt-2'>
            <button className='nextBtn'>Next</button>
            <button className='cancelBtn'>Cancel</button>
        </div>
      </form> */}
    </div>
  );
}

export default Profile