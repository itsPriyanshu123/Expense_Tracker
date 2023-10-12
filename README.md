# Expense_Tracker
for  tracking expense
import React, { useState, useEffect } from 'react';

function OTPInput() {
  const [otp, setOtp] = useState('');
  const [resendCount, setResendCount] = useState(0);
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [verificationResult, setVerificationResult] = useState('');

  const predefinedOTP = '123456';

  useEffect(() => {
    let timer;

    if (countdown > 0 && isResendDisabled) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }

    return () => clearTimeout(timer);
  }, [countdown, isResendDisabled]);

  const handleChange = (e) => {
    const input = e.target.value;

    if (/^\d+$/.test(input) && input.length <= 6) {
      setOtp(input);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Backspace') {
      setOtp(otp.slice(0, -1));
    }
  };

  const handleResendClick = () => {
    if (resendCount < 3) {
      setResendCount(resendCount + 1);
      setIsResendDisabled(true);
      setCountdown(30);
    }
  };

  const handleVerifyClick = () => {
    if (otp === predefinedOTP) {
      setVerificationResult('success');
    } else {
      setVerificationResult('failed');
    }
  };

  const isButtonEnabled = otp.length === 6;

  return (
    <div>
      <input
        type="text"
        value={otp}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        disabled={!isButtonEnabled}
        onClick={handleVerifyClick}
      >
        Verify
      </button>
      <p>
        <button
          onClick={handleResendClick}
          disabled={isResendDisabled || resendCount === 3}
        >
          {isResendDisabled ? `Resend in ${countdown} sec` : 'Resend OTP'}
        </button>
      </p>
      {verificationResult === 'success' && <SuccessComponent />}
      {verificationResult === 'failed' && <FailedComponent />}
    </div>
  );
}

function SuccessComponent() {
  return <div>Success! OTP is verified.</div>;
}

function FailedComponent() {
  return <div>Failed! OTP verification failed.</div>;
}

export default OTPInput;
