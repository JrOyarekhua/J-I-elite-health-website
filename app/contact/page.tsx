'use client'

import { Button, Typography } from "@/src/components/ui";
import React from "react";
import { Lock, CheckCircle2, AlertCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { useContactForm } from "@/src/hooks/useContactForm";


// --- READ-ONLY DESIGN TOKENS ---
const STX = {
  input: `w-full p-3 transition-all outline-none border bg-[#FDFBF7] 
          placeholder:text-gray-400 border-gray-200 focus:border-accent
          invalid:not-placeholder-shown:border-red-500 
          invalid:not-placeholder-shown:bg-red-50`, // Native CSS validation
  label: "block text-sm font-medium text-main mb-2",
  container: "min-h-screen bg-[#FDFBF7] py-12 md:py-24 animate-in slide-in-from-bottom-5",
  card: "bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-accent",
  toggleActive: "bg-[#1A202C] text-white shadow-md",
  toggleInactive: "text-gray-500 hover:text-[#1A202C]"
} as const;

const Contact = () => {
    // Destructuring logic from our custom hook
    const { 
        formRef, 
        bookingTypeInput, 
        setBookingTypeInput, 
        isOther, 
        status, 
        submitForm, 
        handleGoalChange,
    } = useContactForm();
  
    return (
    <>
      <div className="min-h-screen bg-[#FDFBF7] py-12 md:py-24 animate-in slide-in-up">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <Typography variant="h4" color="text-[#C5A059]" className="mb-4">Concierge Booking</Typography>
            <Typography variant="h1" className="mb-4">Your Transformation Begins Here.</Typography>
            <Typography variant="body" className="text-gray-600">
              <strong>Fastest Way to Inquire:</strong> Connect directly with our Patient Concierge via WhatsApp or Phone for immediate assistance.
            </Typography>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 px-6">
          <a href="https://wa.me/17032093359?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-8 bg-[#25D366] text-white rounded shadow-lg hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1">
            <MessageCircle size={32} className="mb-4" />
            <span className="font-bold text-lg">WhatsApp Chat</span>
            <span className="text-xs opacity-90 mt-1">Response within 24 hours</span>
          </a>
          <a href="tel:+17032093359" className="flex flex-col items-center justify-center p-8 bg-[#1A202C] text-white rounded shadow-lg hover:bg-[#2d3748] transition-all transform hover:-translate-y-1">
            <Phone size={32} className="mb-4 text-[#C5A059]" />
            <span className="font-bold text-lg">Call Concierge</span>
            <span className="text-xs opacity-90 mt-1">Speak with a Care Professional</span>
          </a>
          <a href="mailto:annudofia@gmail.com?subject=Inquiry%20About%20Services" className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 text-[#1A202C] rounded shadow-sm hover:border-[#C5A059] transition-all transform hover:-translate-y-1">
            <Mail size={32} className="mb-4 text-[#C5A059]" />
            <span className="font-bold text-lg">Email Inquiry</span>
            <span className="text-xs text-gray-500 mt-1">Response within 24 hours</span>
          </a>
        </div>

        <div className={STX.container}>
            <div className="max-w-3xl mx-auto px-6">
              <div className="text-center mb-12">
                <Typography variant="h4" color="text-accent" className="mb-4">Concierge Booking</Typography>
                <Typography variant="h1" className="mb-4">Your Transformation Begins Here.</Typography>
              </div>

              <div className={STX.card}>
                <form ref={formRef} className="space-y-8" onSubmit={submitForm}>

                  {/* Booking Toggle */}
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 text-xs">Booking for:</label>
                    <div className="flex bg-[#FDFBF7] p-1 rounded-lg w-full md:w-fit border border-gray-200">
                      <button
                        type="button"
                        onClick={() => setBookingTypeInput('self')}
                        className={`flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-medium transition-all ${bookingTypeInput === 'self' ? STX.toggleActive : STX.toggleInactive}`}
                      > Myself </button>
                      <button
                        type="button"
                        onClick={() => setBookingTypeInput('proxy')}
                        className={`flex-1 md:flex-none px-6 py-2 rounded-md text-sm font-medium transition-all ${bookingTypeInput === 'proxy' ? STX.toggleActive : STX.toggleInactive}`}
                      > Someone Else </button>
                    </div>
                  </div>

                  {/* Core Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={STX.label}>Full Name</label>
                      <input name='fullName' type="text" required className={STX.input} placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <label className={STX.label}>Primary Goal</label>
                      <select
                        name='primaryGoal'
                        required
                        onChange={(e) => handleGoalChange(e.target.value)}
                        className={STX.input}
                      >
                        <option value="">Select a Priority...</option>
                        <option value="chronic_pain">Chronic Pain</option>
                        <option value="pelvic_health">Pelvic Health</option>
                        <option value="pregnancy">Pregnancy</option>
                        <option value="postportum">Postpartum</option>
                        <option value="back_pain">Back Pain</option>
                        <option value="fertility">Fertility</option>
                        <option value="sports_injury_recovery">Sports Injury & Recovery</option>
                        <option value='Other'>Other...</option>
                      </select>
                    </div>
                  </div>

                  {/* Proxy Section (Representative details) */}
                  <div className={`bg-gray-50 p-4 rounded border border-gray-200 animate-in fade-in ${bookingTypeInput === 'self' ? 'hidden' : ''}`}>
                    <label className={STX.label}>Representative Name & Role</label>
                    <input type="text" name="proxyDetails" defaultValue={''} className={STX.input} placeholder="e.g. Personal Assistant" />
                  </div>

            
                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={STX.label}>Email Address</label>
                      <input name="email" type="email" required className={STX.input} placeholder="name@company.com" />
                    </div>

                    {/* PHONE NUMBER OPTION */}
                  <div>
                    <label className={STX.label} htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" placeholder="+234 803 123 4567" defaultValue={""} className={STX.input} required name="phoneNumber" />
                  </div>
                  </div>

                  {/* Custom Goal Input (shown if 'Other' is selected) */}
                  <div className={`animate-in slide-in-from-top-2 ${!isOther ? 'hidden' : ''}`}>
                    <label className={STX.label}>Details</label>
                    <input name="customGoal" type="text" defaultValue="" className={STX.input} placeholder="Tell us more..." />
                  </div>

                  
                  {/* Action Bar */}
                  <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row items-center gap-6 justify-between">
                    <Button type="submit" variant="primary" className="w-full md:w-auto min-w-[200px]" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Processing...' : 'Request Consultation'}
                    </Button>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Lock size={14} />
                      <span>NDA Protocols. Strictly Confidential.</span>
                    </div>
                  </div>

                  {/* Status Display */}
                  <div className="min-h-[50px]">
                    {status === 'success' && (
                      <div className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded border border-green-200 animate-in fade-in">
                        <CheckCircle2 size={20} className="shrink-0" />
                        <p className="text-sm font-medium">Request received. Our concierge will be in touch shortly.</p>
                      </div>
                    )}
                    {status === 'error' && (
                      <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded border border-red-200 animate-in fade-in">
                        <AlertCircle size={20} className="shrink-0" />
                        <p className="text-sm font-medium">Something went wrong. Please check your connection.</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
    );
};

export default Contact;