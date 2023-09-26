import React from "react";

const CheckoutWizard = ({ activeStep = 0 }) => {
  return (
    <div className="mb-5 flex flex-wrap">
      {["Login", "Shipping Address", "Payment Method", "Place Order"].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2 text-center 
          ${
            index <= activeStep
              ? "border-yellow-500 text-yellow-500}"
              : "border-gray-500 text-gray-500"
          } 
            `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
};

export default CheckoutWizard;
