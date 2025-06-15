import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, InputAdornment, IconButton, Snackbar } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useForm, Controller } from 'react-hook-form';
import { FormInputs } from '../types/sequence';
import { CHAR_WIDTH } from '../constants/sequence';
import { validateAminoAcidSequence } from '../utils/sequence';
import SequenceDisplay from './SequenceDisplay';

const SequenceInputForm: React.FC = () => {
  const { control, handleSubmit, setValue, watch, formState: { errors }, setError, clearErrors } = useForm<FormInputs>({
    defaultValues: {
      sequence1: '',
      sequence2: ''
    }
  });

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [chunkSize, setChunkSize] = useState(16);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [showAlignment, setShowAlignment] = useState(false);

  const sequence1 = watch('sequence1');
  const sequence2 = watch('sequence2');

  useEffect(() => {
    if (!containerRef.current || !showAlignment) return;

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const newChunkSize = Math.floor(width / CHAR_WIDTH);
        setChunkSize(newChunkSize);
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [showAlignment]);

  useEffect(() => {
    if (sequence1 && sequence2) {
      if (sequence1.length !== sequence2.length) {
        setError('sequence1', { 
          type: 'manual', 
          message: 'Длина последовательностей должна быть одинаковой' 
        });
        setError('sequence2', { 
          type: 'manual', 
          message: 'Длина последовательностей должна быть одинаковой' 
        });
      } else {
        clearErrors(['sequence1', 'sequence2']);
      }
    }
  }, [sequence1, sequence2, setError, clearErrors]);

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      navigator.clipboard.writeText(selection.toString().trim())
        .then(() => {
          setShowCopyNotification(true);
          setTimeout(() => setShowCopyNotification(false), 1000);
        })
        .catch(err => console.error('Failed to copy text: ', err));
    }
  };

  const onSubmit = (data: FormInputs) => {
    if (data.sequence1.length !== data.sequence2.length) {
      return;
    }
    setShowAlignment(true);
  };

  return (
    <Box component="section" sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'center',
      flexGrow: 1
    }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'space-between',
        height: '100%'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '100%',
          alignItems: 'center',
          flexGrow: 1
        }}>
          <Box onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} sx={{ width: '100%' }}>
            <Controller
              name="sequence1"
              control={control}
              rules={{
                required: 'Это поле обязательно для заполнения',
                validate: (value) => {
                  if (!value) return true;
                  if (!validateAminoAcidSequence(value)) {
                    return 'Используйте только однобуквенные коды аминокислот (A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V) и символ -';
                  }
                  if (sequence2 && value.length !== sequence2.length) {
                    return 'Длина последовательностей должна быть одинаковой';
                  }
                  return true;
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.target.value.toUpperCase());
                    setShowAlignment(false);
                    clearErrors(['sequence1', 'sequence2']);
                  }}
                  label="Введите первую последовательность"
                  variant="outlined"
                  error={!!errors.sequence1}
                  helperText={errors.sequence1?.message}
                  placeholder="Например: VLSPADKTNIKASWEKIGSHG"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {field.value && isHovered1 && (
                          <IconButton
                            onClick={() => {
                              setValue('sequence1', '');
                              setShowAlignment(false);
                              clearErrors(['sequence1', 'sequence2']);
                            }}
                            edge="end"
                            size="small"
                          >
                            <ClearIcon fontSize="small" />
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFFFFF'
                    }
                  }}
                />
              )}
            />
          </Box>
          <Box onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} sx={{ width: '100%' }}>
            <Controller
              name="sequence2"
              control={control}
              rules={{
                required: 'Это поле обязательно для заполнения',
                validate: (value) => {
                  if (!value) return true;
                  if (!validateAminoAcidSequence(value)) {
                    return 'Используйте только однобуквенные коды аминокислот (A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V) и символ -';
                  }
                  if (sequence1 && value.length !== sequence1.length) {
                    return 'Длина последовательностей должна быть одинаковой';
                  }
                  return true;
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.target.value.toUpperCase());
                    setShowAlignment(false);
                    clearErrors(['sequence1', 'sequence2']);
                  }}
                  label="Введите вторую последовательность"
                  variant="outlined"
                  error={!!errors.sequence2}
                  helperText={errors.sequence2?.message}
                  placeholder="Например: SWEKIGSHGVLSPADKTNIKA"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {field.value && isHovered2 && (
                          <IconButton
                            onClick={() => {
                              setValue('sequence2', '');
                              setShowAlignment(false);
                              clearErrors(['sequence1', 'sequence2']);
                            }}
                            edge="end"
                            size="small"
                          >
                            <ClearIcon fontSize="small" />
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#FFFFFF'
                    }
                  }}
                />
              )}
            />
          </Box>
          {showAlignment && !errors.sequence1 && !errors.sequence2 && sequence1.length === sequence2.length && (
            <SequenceDisplay
              sequence1={sequence1}
              sequence2={sequence2}
              chunkSize={chunkSize}
              onTextSelection={handleTextSelection}
              containerRef={containerRef}
            />
          )}
        </Box>
        <Box sx={{
          display: 'flex',
          gap: 2,
          width: '100%',
          justifyContent: 'center'
        }}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: '#29C178',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#0067BB',
                color: '#FFFFFF'
              }
            }}
          >
            Выровнять
          </Button>
        </Box>
      </form>
      <Snackbar
        open={showCopyNotification}
        message="Последовательность скопирована"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: '#29C178',
            color: '#FFFFFF',
            justifyContent: 'center',
            textAlign: 'center',
            minWidth: '200px'
          }
        }}
      />
    </Box>
  );
};

export default SequenceInputForm; 