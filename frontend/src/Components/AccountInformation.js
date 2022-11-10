import React from 'react'

function AccountInformation() {
  return (
    <div>
      <div className="p-4">
        <h2>Accountant Information</h2>
        <form>
          <p>Accounting Firm</p>
          <input type="text" className="form-control" />
          <p>Accountant's Name</p>
          <input type="text" className="form-control" />
          <p>Accountant's Telephone Number</p>
          <input type="text" className="form-control" />
          <p>Accountant's Email Address</p>
          <input type="email" className="form-control" />

          <div className="BtnList mt-2">
            <button className="nextBtn">Submit</button>
            <button className="cancelBtn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountInformation