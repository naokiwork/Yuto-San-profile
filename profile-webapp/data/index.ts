export interface Project {
  id: string;
  title: string;
  description: string;
  imageAlt: string;
  imageUrl?: string;
  tech: string[]; // Technologies used
  links: { label: string; href: string }[]; // External links
  tags: string[]; // For filtering projects (e.g., "Research", "Web", "Tools")
  alt: string; // Alt text for project image
}

export interface Repo {
  id: string;
  name: string;
  description?: string;
  language?: string;
  stars?: number;
  forks?: number;
  url: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Preprint';
  links: { label: string; href: string }[];
  tags: string[];
}

export interface ResearchFocus {
  title: string;
  claim: string;
  keywords: string[];
  linkHref: string;
  icon: string; // Icon name as string
}

export const profile = {
  name: 'Yuto Asai',
  title: 'Control Engineer',
  affiliation: 'XYZ University',
  bio: 'Bridging the gap between theoretical control engineering and practical robotic and aerospace applications. My work focuses on developing robust and adaptive control systems for complex dynamic systems.',
  socials: {
    github: 'https://github.com/naokiwork',
    linkedin: 'https://www.linkedin.com/in/yuto-asai',
    email: 'yuto.asai@example.com',
  },
  researchFocus: [
    {
      title: 'Adaptive Control Systems',
      claim: 'Designing self-tuning controllers for systems with unknown or changing dynamics.',
      keywords: ['Model Reference', 'Parameter Estimation', 'Robustness'],
      linkHref: '#research',
      icon: 'FaMicrochip',
    },
    {
      title: 'Robotics & Autonomous Systems',
      claim: 'Developing intelligent control strategies for navigation, manipulation, and human-robot interaction.',
      keywords: ['SLAM', 'Path Planning', 'Reinforcement Learning'],
      linkHref: '#research',
      icon: 'FaRobot',
    },
    {
      title: 'Aerospace Guidance & Control',
      claim: 'Implementing precise control algorithms for spacecraft, drones, and aerial vehicles.',
      keywords: ['Attitude Control', 'Trajectory Optimization', 'Flight Dynamics'],
      linkHref: '#research',
      icon: 'FaRocket',
    },
  ] as ResearchFocus[],
};

export const projects: Project[] = [
  {
    id: 'drone-nav',
    title: 'Autonomous Drone Navigation',
    description: 'A robust control system for autonomous drone navigation in complex environments.',
    imageAlt: 'Drone navigating a complex environment',
    imageUrl: '/images/project-drone.webp',
    alt: 'Autonomous drone navigation project',
    tech: ['ROS', 'C++', 'PX4', 'Gazebo', 'Kalman Filter'],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'Read Story', href: '#' },
    ],
    tags: ['Research', 'Robotics'],
  },
  {
    id: 'predictive-maintenance',
    title: 'AI-powered Predictive Maintenance',
    description: 'Developed a real-time predictive maintenance system for industrial robots using machine learning.',
    imageAlt: 'Industrial robot arm',
    imageUrl: '/images/project-robot.webp',
    alt: 'Industrial robot predictive maintenance',
    tech: ['Python', 'TensorFlow', 'MQTT', 'Docker', 'Predictive Analytics'],
    links: [
      { label: 'Read Story', href: '#' },
    ],
    tags: ['AI/ML', 'Industry'],
  },
  {
    id: 'spacecraft-control',
    title: 'Neural Adaptive Spacecraft Control',
    description: 'Designed and implemented a neural network-based adaptive controller for spacecraft attitude control.',
    imageAlt: 'Satellite in orbit',
    imageUrl: '/images/project-satellite.webp',
    alt: 'Spacecraft attitude control project',
    tech: ['MATLAB', 'Simulink', 'Neural Networks', 'Adaptive Control', 'Spacecraft Dynamics'],
    links: [
      { label: 'Paper', href: '#' },
      { label: 'Appendix', href: '#' },
    ],
    tags: ['Research', 'Aerospace'],
  },
  {
    id: 'control-dashboard',
    title: 'Web-based Control Visualization',
    description: 'Implemented a web-based visualization tool for control system simulations and data analysis.',
    imageAlt: 'Web dashboard showing data visualization',
    imageUrl: '/images/project-dashboard.webp',
    alt: 'Control system visualization web tool',
    tech: ['React', 'D3.js', 'Node.js', 'TypeScript', 'WebSockets'],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
    tags: ['Web', 'Tools'],
  },
  {
    id: 'mpc-framework',
    title: 'Python MPC Framework',
    description: 'Open-source framework for model predictive control (MPC) with Python interfaces.',
    imageAlt: 'Code editor showing Python script',
    imageUrl: '/images/project-mpc.webp',
    alt: 'Model Predictive Control framework project',
    tech: ['Python', 'CVXPY', 'Optimization', 'Control Theory'],
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'Documentation', href: '#' },
    ],
    tags: ['Open-Source', 'Tools'],
  },
  {
    id: 'autonomous-vehicle',
    title: 'Autonomous Vehicle Perception',
    description: 'Developed a real-time object detection and tracking system for autonomous vehicles using computer vision.',
    imageAlt: 'Autonomous car driving on a road',
    imageUrl: '/images/project-vehicle.webp',
    alt: 'Autonomous vehicle object detection project',
    tech: ['Python', 'OpenCV', 'YOLO', 'TensorRT', 'Embedded Systems'],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'Research Paper', href: '#' },
    ],
    tags: ['AI/ML', 'Robotics'],
  },
];

export const repos: Repo[] = [
  {
    id: 'control-toolbox',
    name: 'control-toolbox',
    description: 'A collection of useful control algorithms and utilities.',
    language: 'Python',
    stars: 120,
    forks: 30,
    url: 'https://github.com/naokiwork/control-toolbox',
  },
  {
    id: 'drone-sim',
    name: 'drone-sim',
    description: 'Gazebo simulation environment for drone control experiments.',
    language: 'C++',
    stars: 85,
    forks: 15,
    url: 'https://github.com/naokiwork/drone-sim',
  },
  {
    id: 'ml-for-control',
    name: 'ml-for-control',
    description: 'Examples and tutorials for applying machine learning to control problems.',
    language: 'Python',
    stars: 200,
    forks: 50,
    url: 'https://github.com/naokiwork/ml-for-control',
  },
  {
    id: 'aerospace-models',
    name: 'aerospace-models',
    description: 'Mathematical models of spacecraft and aircraft dynamics.',
    language: 'MATLAB',
    stars: 60,
    forks: 10,
    url: 'https://github.com/naokiwork/aerospace-models',
  },
];

export const publicationsData: Publication[] = [
  {
    id: 'pub1',
    title: 'Adaptive Control of Quadrotor UAVs using Neural Networks',
    authors: ['Y. Asai', 'J. Smith', 'A. Lee'],
    venue: 'Journal of Aerospace Engineering',
    year: 2025,
    type: 'Journal',
    links: [{ label: 'Paper', href: '#' }, { label: 'Abstract', href: '#' }],
    tags: ['Adaptive Control', 'UAV', 'Neural Networks'],
  },
  {
    id: 'pub2',
    title: 'Model Predictive Control for Robotic Manipulators with Constraints',
    authors: ['Y. Asai', 'K. Tanaka'],
    venue: 'IEEE International Conference on Robotics and Automation',
    year: 2024,
    type: 'Conference',
    links: [{ label: 'Paper', href: '#' }, { label: 'Code', href: '#' }],
    tags: ['MPC', 'Robotics', 'Constraints'],
  },
  {
    id: 'pub3',
    title: 'Robust State Estimation for Autonomous Systems using Extended Kalman Filters',
    authors: ['M. Davis', 'Y. Asai'],
    venue: 'Sensors Journal',
    year: 2024,
    type: 'Journal',
    links: [{ label: 'Paper', href: '#' }],
    tags: ['Kalman Filter', 'State Estimation', 'Autonomous Systems'],
  },
  {
    id: 'pub4',
    title: 'Safe Reinforcement Learning for Human-Robot Collaboration',
    authors: ['L. Chen', 'Y. Asai', 'P. Wang'],
    venue: 'arXiv Preprint',
    year: 2023,
    type: 'Preprint',
    links: [{ label: 'Paper', href: '#' }],
    tags: ['Reinforcement Learning', 'Human-Robot Interaction', 'Safety'],
  },
];
