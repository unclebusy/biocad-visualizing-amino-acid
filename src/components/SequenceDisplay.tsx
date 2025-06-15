import React, { RefObject } from 'react';
import { Box, Typography } from '@mui/material';
import { aminoAcidColors } from '../constants/sequence';

interface SequenceDisplayProps {
  sequence1: string;
  sequence2: string;
  chunkSize: number;
  onTextSelection: () => void;
  containerRef: RefObject<HTMLDivElement>;
}

const renderSequenceChars = (
  sequence: string,
  compareWithSequence?: string
) => {
  return sequence.split('').map((char, index) => {
    let backgroundColor = 'transparent';
    const upperChar = char.toUpperCase();

    if (compareWithSequence === undefined) {
      backgroundColor = upperChar in aminoAcidColors ? aminoAcidColors[upperChar as keyof typeof aminoAcidColors] : 'transparent';
    } else {
      if (index < compareWithSequence.length && upperChar !== compareWithSequence[index].toUpperCase()) {
        backgroundColor = upperChar in aminoAcidColors ? aminoAcidColors[upperChar as keyof typeof aminoAcidColors] : 'transparent';
      }
    }

    return (
      <span
        key={index}
        style={{
          display: "inline",
          padding: "0 7px",
          lineHeight: "20px",
          fontSize: "14px",
          fontFamily: "monospace",
          borderRadius: "2px",
          backgroundColor: backgroundColor,
        }}
      >
        {char}
      </span>
    );
  });
};

const renderChunkedSequences = (seq1: string, seq2: string, chunkSize: number) => {
  const chunks = [];
  const maxLength = Math.max(seq1.length, seq2.length);

  for (let i = 0; i < maxLength; i += chunkSize) {
    const chunk1 = seq1.slice(i, i + chunkSize);
    const chunk2 = seq2.slice(i, i + chunkSize);

    chunks.push(
      <Box key={i} sx={{ width: '100%', textAlign: 'left', my: 0.5 }}>
        <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
          {renderSequenceChars(chunk1)}
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'monospace' }}>
          {renderSequenceChars(chunk2, chunk1)}
        </Typography>
      </Box>
    );
  }
  return chunks;
};

const SequenceDisplay: React.FC<SequenceDisplayProps> = ({
  sequence1,
  sequence2,
  chunkSize,
  onTextSelection,
  containerRef
}) => {
  return (
    <Box ref={containerRef} sx={{
      mt: 1,
      p: 2,
      backgroundColor: '#FFFFFF',
      border: '1px solid #C4C4C4',
      borderRadius: '8px',
      width: '100%',
      textAlign: 'left',
      whiteSpace: 'nowrap',
      overflowX: 'auto'
    }} onMouseUp={onTextSelection}>
      {renderChunkedSequences(sequence1, sequence2, chunkSize)}
    </Box>
  );
};

export default SequenceDisplay; 