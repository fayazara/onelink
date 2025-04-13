export interface Link {
  label: string // label
  icon: string // icon
  url: string // URL
  id: string // ID
}

export interface Data {
  name: string // Name
  desc: string // Description
  image: string // Profile icon
  facebook: string // Facebook link
  twitter: string // Twitter link
  instagram: string // Instagram link
  github: string // GitHub link
  telegram: string // Telegram link
  linkedin: string // LinkedIn link
  youtube: string // YouTube Link
  bluesky: string // BlueSky Link
  devto: string // DevTo Link
  whatsapp: string // WhatsApp
  email: string // Email
  lnks: Link[] // Other links
}
