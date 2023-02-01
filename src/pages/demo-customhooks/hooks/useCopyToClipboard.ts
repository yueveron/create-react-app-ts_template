import { useState } from 'react';

const useCopyToClipboard = () => {
  const [isCopied, setCopied] = useState(false);
  //
  const handleCopy = (text: unknown) => {
    if (typeof text === 'string' || typeof text == 'number') {
      // copy logic code
      setCopied(!isCopied);
    } else {
      setCopied(false);
      console.error(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or number.`
      );
    }
  };
  return {
    isCopied,
    handleCopy,
  };
};
export default useCopyToClipboard;
