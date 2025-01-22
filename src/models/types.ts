// Define interfaces for data structures
export interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  schedule: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}