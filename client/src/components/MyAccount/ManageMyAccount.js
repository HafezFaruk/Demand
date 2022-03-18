import React from 'react';
import MyAccount from './MyAccount.js';
import MyAccountSidebar from './MyAccountSidebar.js';

const ManageMyAccount = () => {
    return (
      <div className="grid grid-cols-12 gap-4">
        <div className='col-span-3'>
          <MyAccountSidebar />
        </div>
        <div className='col-span-9'>
          <MyAccount />
        </div>
      </div>
    );
};

export default ManageMyAccount;