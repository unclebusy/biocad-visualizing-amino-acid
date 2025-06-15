import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SequenceDisplay from '../SequenceDisplay';

describe('SequenceDisplay', () => {
  const mockProps = {
    sequence1: 'ARNDCQEGHILKMFPSTWYV',
    sequence2: 'ARNDCQEGHILKMFPSTWYV',
    chunkSize: 5,
    onTextSelection: jest.fn(),
    containerRef: { current: null }
  };

  it('renders all characters of the sequence', () => {
    render(<SequenceDisplay {...mockProps} />);
    for (const char of mockProps.sequence1) {
      expect(screen.getAllByText(char)[0]).toBeInTheDocument();
    }
  });

  it('renders different background for mismatched characters', () => {
    const differentProps = {
      ...mockProps,
      sequence2: 'ARNDCQEGHILKMFPSTWYX'
    };
    render(<SequenceDisplay {...differentProps} />);
    // Последний символ отличается, проверим его стиль
    const lastChar = screen.getAllByText('V')[screen.getAllByText('V').length - 1];
    expect(lastChar).toHaveStyle('background-color: #67E4A6'); // цвет для V
    const mismatchedChar = screen.getByText('X');
    const bg = getComputedStyle(mismatchedChar).backgroundColor;
    expect(bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)').toBe(true);
  });
}); 