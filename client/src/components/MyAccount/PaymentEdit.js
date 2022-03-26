import React from "react";
import {
    AiOutlineHome,
    AiOutlineRight
} from "react-icons/ai";
import Sidebar from "./Sidebar";
function paymentEdit() {
  return (
    <div className="mx-10 ">
             <div className="flex items-center my-5">
          <AiOutlineHome className="text-myColor" />
          <AiOutlineRight className="mx-2" />
          <h1>My Account</h1>
          <AiOutlineRight className="mx-2" />
          <h6>Payment Edit</h6>
        </div>
      <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3"><Sidebar/></div>
          <div className="col-span-9"><div>
              <h4 className="font-semibold">Edit PaymentsMethods</h4>
          </div>
            <div>
                <from>
                    <div className="gird"></div>
                    
                </from>
            </div>
          </div>
      </div>
    </div>
  );
}

export default paymentEdit;
