export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  role: string;
  scale?: string;
  stakeholders: string;
  outcomes: string[];
  artifacts: "screenshots_placeholder" | "request_demo";
  approach: string[];
  impact: string[];
  safeNote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-it-secure-context",
    title: "Enterprise IT & Program Delivery in Secure Environments",
    context:
      "Enterprise IT operations and modernization in mission-critical settings requiring continuity, governance rigor, and leadership alignment.",
    role: "CIO-function enterprise leadership track (2021-2025), strategic planning leadership support (2025-Present)",
    stakeholders:
      "Command-level leadership, operational units, governance and procurement functions, technical teams.",
    outcomes: [
      "Improved service uptime and operational readiness.",
      "Scaled delivery across cross-functional command and technical teams.",
      "Accelerated delivery with governance controls."
    ],
    artifacts: "screenshots_placeholder",
    approach: [
      "Governance-by-design with risk-managed implementation cycles.",
      "Portfolio prioritization aligned to readiness and mission support.",
      "Cross-functional controls for policy and execution coherence."
    ],
    impact: [
      "Delivered and sustained 100+ applications across mission-support domains with security and quality controls.",
      "Improved execution discipline, planning transparency, and governance traceability.",
      "Strengthened alignment between operational demand and enterprise IT roadmaps."
    ],
    safeNote: "No classified or operationally sensitive details are disclosed."
  },
  {
    slug: "applied-ai-gis",
    title: "Applied AI/Computer Vision and GIS Decision Support",
    context:
      "Practical use of AI/CV and geospatial analytics for monitoring, anomaly detection patterns, and decision support.",
    role: "Technical and program leadership bridging analytics capability with operational deployment",
    stakeholders: "Operational analysts, leadership decision-makers, technical implementation teams.",
    outcomes: [
      "Improved situational awareness for decision support.",
      "Reduced analysis-to-action cycles in operational workflows.",
      "Strengthened adoption through policy-aligned implementation."
    ],
    artifacts: "request_demo",
    approach: [
      "Problem-led solution framing tied to real workflows.",
      "Model/application fit assessed against policy and operational constraints.",
      "Integration with existing governance and reporting structures."
    ],
    impact: [
      "Faster interpretation cycles for operational contexts.",
      "Improved situational awareness through actionable intelligence views.",
      "Better evidence-based planning using analytics and geospatial inputs."
    ],
    safeNote: "Applied in controlled and policy-compliant secure environments."
  }
];
