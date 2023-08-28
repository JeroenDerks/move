"use client";

import { useState } from "react";
import { Button } from "../Button";

export const ConfirmButton = ({ children }: { children: React.ReactNode }) => {
  const [confirm, setConfirm] = useState(false);

  return (
    <>
      {confirm ? (
        <Button type="submit" background="red">
          Sure?
        </Button>
      ) : (
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setConfirm(true);
          }}
        >
          {children}
        </Button>
      )}
    </>
  );
};
