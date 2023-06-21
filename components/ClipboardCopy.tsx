// Inspired by https://blog.logrocket.com/implementing-copy-clipboard-react-clipboard-api/

import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
export default function ClipboardCopy( {copyText}:any ) {
    const [isCopied, setIsCopied] = useState(false);

    // This is the function we wrote earlier
    async function copyTextToClipboard(text:any) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            {/* Bind our handler function to the onClick button property */}
            <button className='icon-container' onClick={handleCopyClick}>
                <MdContentCopy className="w-8 h-8" />
            </button>
        </div>
    );
}