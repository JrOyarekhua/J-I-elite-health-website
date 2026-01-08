import {Program, ClinicianIndication} from "@/types";

/**
 * list of pograms used in the programs page
 */
export const PROGRAMS: Program[] = [
    {
        id: 'executive',
        title: 'The Executive Core Revival',
        tagline: 'For the woman who cannot afford downtime.',
        description: 'Eliminate back pain, build a stronger core, and carry yourself with confidence in the boardroom.',
        interventions: ['Deep Core Reconstruction', 'Reduce Tension & Postural Realignment', 'Improve Confidence & Body Comfort'],
        outcome: 'Outcome: Pain-free focus & confidence  High Level Performance.',
        whoFor: 'The CEO, Director, or Banker suffering from "Executive Spine", unresolved Diastasis Recti, or stress-induced pelvic tension.',
        story: {
          name: 'Amina, Banking Executive, Wuse II',
          quote: "I thought surgery was my only option. After the 2-week intensive, my core feels stronger, my pain is gone, and it feels good to be back in the gym."
        },
        image: {
          url: '/images/programs/executive_in_green.jpeg',
          desc: 'nigerian woman in green'
        }
      },
      {
        id: 'matriarch',
        title: "The Matriarch's Restoration",
        tagline: 'For dignity, inner peace, and confidence.',
        description: 'Treat personal problems like bladder leakage not as "old age," but as a treatable mechanical issue.',
        interventions: ['Pelvic Floor Lift', 'Dryness Training', 'Pre & Post Surgical Rehabilitation'],
        outcome: 'Outcome: Dignity, Confidence, and Freedom to Travel & Enjoy Life Fully.',
        whoFor: 'The mother, grandmother or senior society figure navigating prolapse, urgency, or anxiety during worship.',
        story: {
          name: 'Hajia B., Maitama',
          quote: "I was leaking urine during Salah and avoided travel. Dr. Ann showed me it was a mechanical issue. Now, I am dry and confident."
        },
        image: {
          url: '/images/programs/woman_in_closet.jpeg',
          desc: 'nigerian woman in pain in her closet'
        }
      },
      {
        id: 'birth',
        title: 'The Birth Ready Protocol',
        tagline: 'For a smoother, safer, empowered delivery.',
        description: 'Prepare your body with movement science, creating the space and path your baby needs for a smoother, safer, and more empowered delivery.',
        interventions: ['Pelvic Alignment Work', 'Labor & Delivery Preparation', 'Perineal Protection'],
        outcome: 'Outcome: An Empowered Delivery and Confident Postnatal Recovery.',
        whoFor: 'Pregnant women looking to resolve pregnancy-related pain while proactively preparing for a healthy and safe delivery.',
        story: {
          name: 'Dr. Toyin, Dermatologist',
          quote: "I felt mentally and emotionally prepared for labor after working with Dr. Nwabuebo, and was grateful to have an uncomplicated delivery."
        },
        image:{
          url: "/images/programs/woman_doing_squats.jpeg",
          desc: 'pregnant woman looking in mirror'
        }
      },
      {
        id: 'postpartum',
        title: 'The Postpartum Sanctuary',
        tagline: 'For the new mother seeking full recovery.',
        description: 'Your family cares for you and the baby, and we care for your physical recovery. We’re here to help heal the "mummy tummy", treat your birth scars, and back pain.',
        interventions: ['C-Section Scar Release', 'Pelvic Realignment', 'Intimacy Recovery'],
        outcome: 'Outcome: A healed core and physical freedom to enjoy motherhood.',
        whoFor: 'The new mother (C-section or Vaginal) who wants to "snap back" safely without injuring herself.',
        story: {
          name: 'E.K., New Mum',
          quote: "My pain vanished. I returned to work and resumed intimacy with my husband. I went on to have a second, pain-free pregnancy."
        },
        image: {
          url: '/images/programs/postpartum_woman.png',
          desc: 'happy mother holding her children'
        }
      },
      {
        id: 'fertility',
        title: 'Vitality & Fertility Optimization',
        tagline: 'Preparing the Body for new life.',
        description: 'Release pelvic adhesions and optimize blood flow to reproductive organs before conception or IVF.',
        interventions: ['Scar Tissue & Adhesion Release', 'Guided Movement for Optimized Flow', 'Nervous System Reset'],
        outcome: 'Outcome: A Body in Balance, Ready to Support New Life.',
        whoFor: 'Women preparing for conception or IVF who want to maximize success rates by removing mechanical barriers.',
        story: {
          name: 'Zainab, Architect, Asokoro',
          quote: "After two failed IVF cycles, I felt broken. Dr. Ann intensely treated my scars from all my fibroid surgeries, and by God’s grace, I am now in my second trimester."
        },
        image: {
          url: '/images/programs/woman_pre_pregnancy.jpeg',
          desc: 'a pregnant woman'
        }
      },
      {
        id: 'pain',
        title: 'Chronic Pelvic Pain Sanctuary',
        tagline: 'Where Your Pain Is Taken Seriously.',
        description: 'Stop the cycle of painkillers. We treat the mechanical root causes of chronic pelvic and abdominal pain.',
        interventions: ['Pain-Loop Interruption', 'Adhesion Breaking', 'Root Cause Assessment'],
        outcome: 'Outcome: Relief Without Reliance on Medications.',
        whoFor: 'Women suffering from Endometriosis, mysterious abdominal pain, or Vaginismus.',
        story: {
          name: 'P.K., The Pain Warrior',
          quote: "After 16 visits, my pain was 90% improved. I wasn’t afraid to move my body anymore, and I could travel and enjoy being with my family and friends"
        },
        image:{
          url: '/images/programs/ann_explaining.jpeg',
          desc: 'doctor explaining diagnoses to patient'
        }
      },
      
    
] as const

/**
 * list of clinican indications to be used in the clinican indication page 
 */
export const CLINICIAN_INDICATIONS: ClinicianIndication[] = [
  {
    category: 'Obstetrics & Maternal Health',
    details: 'Diastasis Recti, Pelvic Organ Prolapse, Pregnancy/Postpartum Pelvic Pain, Dyspareunia, Postpartum Back Pain, Sciatica, Urinary Incontinence.'
  },
  {
    category: 'Urogynecology',
    details: 'Stress & Urge Urinary Incontinence, Grade 1-2 Symptomatic Prolapse, Complex Dyspareunia, Overactive Bladder (OAB), Vulvodynia.'
  },
  {
    category: 'Urology',
    details: 'Interstitial Cystitis/Painful Bladder Syndrome, Chronic Prostatitis/CPPS, Post-Prostatectomy Incontinence.'
  },
  {
    category: 'Gastroenterology & Colo-rectal',
    details: 'Chronic Constipation, Dyschezia, Fecal Incontinence, Proctalgia Fugax, Levator Ani Syndrome, Pelvic Floor Dyssynergia.'
  },
  {
    category: 'Fertility',
    details: 'Mechanical Infertility (Adhesions), Endometriosis, Adenomyosis, Fibroid-related pelvic pain, Dysmenorrhea.'
  },
  {
    category: 'Orthopedics & Pain',
    details: 'Chronic Low Back Pain (CLBP), Myofascial Pain Syndrome, Coccydynia, Hip and Groin Pain.'
  }
] as const 


export const WHATSAPP_NUMBER = '17032093359'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

// helper to build a link with a prefilled message
export const getWhatsAppLink = (message: string = 'Hello! I would like to request a consultation') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;