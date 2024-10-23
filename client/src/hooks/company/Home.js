import { useState } from "react";

export const useHomeHooks = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return {
    openFaq,
    setOpenFaq,
  }
}