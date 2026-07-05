export type JobContent = {
  slug: string;
  title: string;
  summary: string;
  type: string;
  location: string;
  team: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

export const JOBS: JobContent[] = [
  {
    slug: "senior-software-developer-angular",
    title: "Senior Software Developer (Angular + Backend)",
    summary:
      "Strong Angular focus with backend expertise; builds innovative web applications; thrives in a collaborative, fast-paced environment.",
    type: "Full-time",
    location: "Remote (US)",
    team: "Engineering",
    about: [
      "We're looking for a senior software developer with a strong Angular focus and solid backend expertise to build innovative web applications for our clients.",
      "You'll work closely with designers, product managers, and other engineers in a collaborative, fast-paced environment where ownership and craftsmanship matter.",
    ],
    responsibilities: [
      "Build and maintain innovative web applications with a strong Angular focus",
      "Contribute backend features and APIs",
      "Collaborate across design and delivery",
      "Write clean, tested code",
      "Participate in code reviews",
    ],
    requirements: [
      "Senior-level experience",
      "Strong Angular experience (RxJS, state management, component architecture)",
      "Solid backend expertise (Node, .NET, or Java)",
      "REST/API design experience",
      "Git proficiency",
      "Thrives in a collaborative, fast-paced environment",
    ],
    niceToHave: ["Cloud experience (AWS/Azure)", "CI/CD experience", "Testing framework experience"],
  },
  {
    slug: "devops-engineer-aws-azure",
    title: "DevOps Engineer (AWS/Azure)",
    summary: "Cloud infrastructure, automation, and CI/CD pipelines; hands-on with AWS and Azure.",
    type: "Full-time",
    location: "Remote (US)",
    team: "Infrastructure",
    about: [
      "We're looking for a DevOps engineer to manage cloud infrastructure, build automation, and keep CI/CD pipelines fast and reliable across AWS and Azure.",
      "You'll own the systems that let our engineering teams ship confidently — from networking to deployment automation.",
    ],
    responsibilities: [
      "Administer and manage AWS services (EC2, S3, ELB, VPC, IAM, NACL, SQS, SNS, SES, CloudWatch, CloudFormation, Lambda, Security Groups)",
      "Set up and manage route tables, internet gateways, and NAT gateways for secure, efficient VPC traffic",
      "Build and optimize CI/CD pipelines",
      "Automate infrastructure",
      "Manage and optimize AWS and Azure environments",
    ],
    requirements: [
      "Strong background in cloud infrastructure, automation, and CI/CD",
      "Hands-on AWS and Azure experience",
      "Infrastructure-as-code experience (Terraform/CloudFormation)",
      "Scripting proficiency",
      "Monitoring and observability experience",
    ],
    niceToHave: ["Kubernetes experience", "Security/compliance experience"],
  },
];

export function getJobBySlug(slug: string) {
  return JOBS.find((job) => job.slug === slug);
}
