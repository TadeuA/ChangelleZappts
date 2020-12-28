import React, { memo } from "react";

function Salutation({ children }) {
  return (
    <>
      <h1 style={{ alignSelf: "flex-end" }}>Invision</h1>
      <h2 style={{ marginBottom: 87, marginTop: 73 }}>{children}</h2>
    </>
  );
}

export default memo(Salutation);
