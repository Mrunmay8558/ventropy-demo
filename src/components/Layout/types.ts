export interface NavbarProps {
  logo: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}

export interface FooterProps {
  logo: string;
  description: string;
  quickLinks: Array<{
    text: string;
    href: string;
  }>;
  socialLinks: Array<{
    icon: React.ComponentType;
    href: string;
  }>;
}