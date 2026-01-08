import { useState, useRef } from 'react';
import {formData as formType} from '@/types';
import { getWhatsAppLink } from '@/src/constants';
import axios from 'axios';

const getFormValue = (formData: FormData, key: keyof formType): string => {
  const value = formData.get(key);
  if (typeof value !== "string") {
    throw new Error(`Expected string for ${key}, got ${value}`);
  }
  return value;
};

export const useContactForm = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [bookingTypeInput, setBookingTypeInput] = useState<'self' | 'proxy'>('self');
  const [isOther, setIsOther] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message,setMessage] = useState("Hello! I would love to book a consultation")
  

  const handleGoalChange = (value: string) => {
    setIsOther(value === 'Other');
  };


  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Collects all data from inputs with 'name' attributes
    const formData = new FormData(e.currentTarget);
    
    const data: formType = { 
      fullName: getFormValue(formData, 'fullName'),
      email: getFormValue(formData, 'email'),
      contactOption: getFormValue(formData, 'contactOption'), // change to use state if needed in the future 
      primaryGoal: getFormValue(formData, 'primaryGoal'),
      proxyDetails: getFormValue(formData, 'proxyDetails'),
      customGoal: getFormValue(formData,'customGoal'),
      phoneNumber: getFormValue(formData,'phoneNumber'),
      bookingType: bookingTypeInput
    };


    try {
    
      // api call to backend to resend (add when client responds) 
      await axios.post('/api/contact',data)
      setStatus('success');
      
      // Native reset for HTML inputs + manual reset for React UI toggles
      formRef.current?.reset();
      setIsOther(false);
      setBookingTypeInput('self');


      // build email 

      setTimeout(() => setStatus('idle'), 5000);

    } catch (err) {
      setStatus('error');
    }
  };

  return {
    formRef,
    bookingTypeInput,
    setBookingTypeInput,
    isOther,
    setIsOther,
    status,
    submitForm,
    handleGoalChange,
    message,
    setMessage
  };
};