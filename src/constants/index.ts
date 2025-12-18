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
        interventions: ['Deep Core Reconstruction', 'Spinal Decompression', 'Aesthetic Restoration'],
        outcome: 'Outcome: Pain-free focus & confidence in fitted couture.',
        story: {
          name: 'Ngozi, Banking Executive, Wuse II',
          quote: "I thought surgery was my only option. After the 2-week intensive, my core feels stronger, my pain is gone, and I am back in the gym without a single incision."
        }
      },
      {
        id: 'matriarch',
        title: "The Matriarch's Restoration",
        tagline: 'For dignity, inner peace, and confidence.',
        description: 'Treat personal problems like bladder leakage not as "old age," but as a treatable mechanical issue.',
        interventions: ['Pelvic Floor Lift', 'Dryness Training for Prayer', 'Surgical Prevention'],
        outcome: 'Outcome: Dignity during Salah and confidence to travel to London.',
        story: {
          name: 'Hajia B., Maitama',
          quote: "I was leaking urine during Salah and avoided travel. Dr. Ann showed me it was a mechanical issue. Now, I am dry and confident."
        }
      },
      {
        id: 'postpartum',
        title: 'The Postpartum Sanctuary',
        tagline: 'For the new mother seeking full recovery.',
        description: 'Your family cares for the baby; we care for your physical recovery. Heal the "mummy tummy" and back pain.',
        interventions: ['C-Section Scar Release', 'Pelvic Realignment', 'Intimacy Recovery'],
        outcome: 'Outcome: A healed core and physical freedom to enjoy motherhood.',
        story: {
          name: 'E.K., New Mum',
          quote: "My pain vanished. I returned to work and resumed intimacy with my husband. I went on to have a second, pain-free pregnancy."
        }
      },
      {
        id: 'fertility',
        title: 'Vitality & Fertility Optimization',
        tagline: 'Preparing the "Womb Space" for new life.',
        description: 'Release pelvic adhesions and optimize blood flow to reproductive organs before conception or IVF.',
        interventions: ['Visceral Mobilization', 'Hemodynamic Boost', 'Nervous System Down-Regulation'],
        outcome: 'Outcome: A receptive, relaxed body ready to receive life.',
        story: {
          name: 'Zainab, Architect, Asokoro',
          quote: "After two failed IVF cycles, I felt broken. J&I treated my stress and adhesions. I am now in my second trimester."
        }
      },
      {
        id: 'pain',
        title: 'Chronic Pain Sanctuary',
        tagline: 'The end of medical gaslighting.',
        description: 'Stop the cycle of painkillers. We treat the mechanical root causes of chronic pelvic and abdominal pain.',
        interventions: ['Pain-Loop Interruption', 'Adhesion Breaking', 'Diagnostic Correction'],
        outcome: 'Outcome: The end of undefined pain and "recurring infections."',
        story: {
          name: 'P.K., The Pain Warrior',
          quote: "After 6 visits, I reported zero pain. I didn't just return to running; I ran my fastest 10k ever."
        }
      },
      {
        id: 'birth',
        title: 'The Birth Ready Protocol',
        tagline: 'For a smoother, safer, empowered delivery.',
        description: 'Biomechanically engineer your pelvis to facilitate a natural birth or safer delivery.',
        interventions: ['Pelvic Bowl Balancing', 'Labor Biomechanics', 'Perineal Protection'],
        outcome: 'Outcome: An empowered delivery and faster snap-back.',
        story: {
          name: 'Dr. Toyin, Dermatologist',
          quote: "I achieved a successful, uncomplicated natural birth and returned for my 'Snap Back' check-up 3 weeks later."
        }
      }
    
] as const

/**
 * list of clinican indications to be used in the clinican indication page 
 */
export const CLINICIAN_INDICATION: ClinicianIndication[] = [
    {
        category: 'Obstetrics',
        details: 'Diastasis Recti >2cm, Hypertrophic Scarring, Postpartum Back Pain'
      },
      {
        category: 'Urogynecology',
        details: 'SUI/UUI, Grade 1-2 Prolapse (Symptomatic), Dyspareunia'
      },
      {
        category: 'Fertility',
        details: 'Mechanical Infertility (Adhesions), Visceral Mobilization needs'
      },
      {
        category: 'Orthopedics',
        details: 'Chronic Low Back Pain (CLBP) unresponsive to standard PT'
      }
    
] as const 