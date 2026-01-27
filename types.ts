import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Stat {
  value: string;
  label: string;
}

export interface RiskProfile {
  id: string;
  name: string;
  type: 'Student' | 'Loan' | 'Enterprise';
  amountDue: number;
  daysOverdue: number;
  paymentHistory: 'Good' | 'Fair' | 'Poor';
  lastContact: string;
}

export interface GeminiRiskAnalysis {
  riskScore: number;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  prediction: string;
  interventionStrategy: string;
  draftedMessage: string;
}