// this file contains the interfaces needed to create the strict types needed across the website

export interface Program {
    readonly id: string,
    readonly title: string,
    readonly tagline: string,
    readonly description: string,
    readonly whoFor: string,
    readonly interventions: string[],
    readonly outcome: string,
    readonly story: {
        readonly name: string,
        readonly quote: string
    }
    readonly image: {
        readonly url: string,
        readonly desc: string
    }
}

export interface ClinicianIndication {
    readonly category: string,
    readonly details: string
}

// explicitly defines page route types in order to prevent broken links 
export type PageRoute =  'home' | 'programs' | 'founder' | 'clinicians' | 'contact' | 'method';

export interface formData {
    fullName: string,
    primaryGoal: string,
    proxyDetails?: string,
    contactOption: string,
    email: string,
    customGoal?: string,
    bookingType: string,
    phoneNumber: string
}
