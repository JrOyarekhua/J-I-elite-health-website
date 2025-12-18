// this file contains the interfaces needed to create the strict types needed across the website

export interface Program {
    readonly id: string,
    readonly title: string,
    readonly tagline: string,
    readonly description: string,
    readonly interventions: string[],
    readonly outcome: string,
    readonly story: {
        readonly name: string,
        readonly quote: string
    }
}

export interface ClinicianIndication {
    readonly category: string,
    readonly details: string
}

// explicitly defines page route types in order to prevent broken links 
export type PageRoute =  'home' | 'programs' | 'founder' | 'clinicians' | 'concierge';