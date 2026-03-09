import { useState } from "react";

function SecretMessage() {
  const [show, setShow] = useState(false);

  return (
    <div style={{marginTop:30}}>
      <button
        onClick={() => setShow(true)}
        style={{
          padding:"10px 20px",
          borderRadius:10,
          border:"none",
          background:"#ff4d6d",
          color:"white",
          cursor:"pointer"
        }}
      >
        افتحي الرساله (:
      </button>

      {show && (
        <div style={{
          marginTop:20,
          background:"#111",
          color:"#0f0",
          padding:20,
          borderRadius:10,
          fontFamily:"monospace"
        }}>
{`const سر_سعادتي = "You ❤️";`}
        </div>
      )}
    </div>
  );
}

export default SecretMessage;