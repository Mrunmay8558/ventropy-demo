export interface AIPersonaProps {
  name: string;
  role: string;
  capabilities: string[];
  setPlayAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface WaveAnimationProps {
  color?: string;
  count?: number;
}
