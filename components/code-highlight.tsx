'use client'
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ code, expand = true, language = "typescript" }: { code: string, expand?: boolean, language?: string }) => {
  const [isExpanded, setIsExpanded] = useState(expand);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='w-full'>
      <button onClick={handleToggle}>
        {isExpanded ? 'Code Collapse' : 'Code Expand'}
      </button>
      {isExpanded && (
        <div className='overflow-x-auto w-full min-h-[100px]'>
          <SyntaxHighlighter language={language} style={atomDark}>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default CodeDisplay;
