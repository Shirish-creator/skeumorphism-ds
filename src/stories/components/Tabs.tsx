import React, { useState, ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface TabsProps {
  children: {
    preview: ReactNode;
    code: string; // Ensure code is passed as a string
  };
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [isCopied, setIsCopied] = useState<boolean>(false); // New state to track copy status

  const tabStyles = (isActive: boolean) => ({
    padding: '8px 16px',
    backgroundColor: isActive ? '#000' : '#eee',
    color: isActive ? '#fff' : '#000',
    border: 'none',
    cursor: 'pointer',
  });

  // Handle copying code to clipboard
  const handleCopyClick = async () => {
    const codeText = children.code; // Now we know it's a string
    try {
      await navigator.clipboard.writeText(codeText);
      setIsCopied(true); // Set copied state to true
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy code!', err);
    }
  };

  return (
    <div style={{ marginBottom: '16px', border: '2px solid #e8e4e4' }}>
      <div style={{ display: 'flex', gap: '0' }}>
        <button style={tabStyles(activeTab === 'preview')} onClick={() => setActiveTab('preview')}>
          Preview
        </button>
        <button style={tabStyles(activeTab === 'code')} onClick={() => setActiveTab('code')}>
          Code
        </button>
      </div>
      <div>
        {activeTab === 'preview' ? (
          <div style={{ margin: '32px 32px' }}>{children.preview}</div>
        ) : (
          <div style={{ position: 'relative' }}>
            <SyntaxHighlighter
              language="javascript" // Change to the appropriate language (e.g., "javascript", "typescript", etc.)
              style={vscDarkPlus} // Apply the VS Code Dark+ theme
              customStyle={{
                padding: '16px',
                border: '1px solid #444',
                whiteSpace: 'pre-wrap', // Preserve formatting
              }}
            >
              {children.code} {/* This will now render the code with syntax highlighting */}
            </SyntaxHighlighter>
            <button
              onClick={handleCopyClick}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '8px 16px',
                backgroundColor: '#dadada',
                color: 'black',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              {isCopied ? 'Copied!' : 'Copy'} {/* Change text based on state */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
