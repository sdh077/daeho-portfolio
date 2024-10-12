'use client'
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ code }: { code: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full'>
      <button onClick={handleToggle}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div className='overflow-x-auto w-full h-[400px]'>
          <SyntaxHighlighter language="typescript" style={atomDark}>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default CodeDisplay;
