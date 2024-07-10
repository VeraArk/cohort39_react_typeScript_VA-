
import {HTMLInputTypeAttribute} from 'react'


export interface InputProps {
  id: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  error?: string | undefined;
}


