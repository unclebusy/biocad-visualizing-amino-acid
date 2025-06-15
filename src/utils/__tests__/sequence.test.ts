import { validateAminoAcidSequence } from '../sequence';

describe('validateAminoAcidSequence', () => {
  it('should validate correct amino acid sequence', () => {
    expect(validateAminoAcidSequence('ARNDCQEGHILKMFPSTWYV')).toBe(true);
  });

  it('should validate sequence with gaps', () => {
    expect(validateAminoAcidSequence('ARND-CQEG-HILK')).toBe(true);
  });

  it('should reject sequence with invalid characters', () => {
    expect(validateAminoAcidSequence('ARND123')).toBe(false);
  });

  it('should reject empty sequence', () => {
    expect(validateAminoAcidSequence('')).toBe(false);
  });

  it('should be case insensitive', () => {
    expect(validateAminoAcidSequence('arndcqeghilkmfpstwyv')).toBe(true);
  });
}); 