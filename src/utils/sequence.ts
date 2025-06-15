export const validateAminoAcidSequence = (sequence: string): boolean => {
  const validAminoAcids = /^[ARNDCQEGHILKMFPSTWYV-]+$/i;
  return validAminoAcids.test(sequence);
}; 