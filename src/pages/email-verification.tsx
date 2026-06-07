import axios from "axios";
import { useEffect, useState } from "react";

function EmailVerification() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // read tokenId from url query params
  const urlParams = new URLSearchParams(window.location.search);
  const tokenId = urlParams.get("tokenId");

  if (!tokenId) {
    return <div>Invalid token</div>;
  }

  const handleEmailVerification = async () => {
    try{
      const backendUrl = "http://localhost:5000/api/users/verify-email";
      await axios.post(backendUrl, { tokenId });
      setSuccess(true);
    }catch(error) {
      console.error("Error verifying email:", error);
      setSuccess(false);

    }finally{
      setLoading(false);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleEmailVerification();
  }, [tokenId]);

  // function to handle email verification
  

  return (
    <div>
      {loading ? (
        <p>Verifying your email...</p>
      ) : success ? (
        <p>Your email has been successfully verified!</p>
      ) : (
        <p>Failed to verify your email. Please try again.</p>
      )}
    </div>
  );
  
}

export default EmailVerification;