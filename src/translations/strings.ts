import { BASE_URL } from '@/env-constants';

export const strings = {
  // General
  global: {
    error: {
      httpCode: '404',
      backButton: 'Back to Home',
      title: 'Oops! Something went wrong.',
      description:
        "The page you're looking for doesn't exist or has been moved.",
    },
    metadata: {
      metadataBase: new URL(BASE_URL),
      title: 'Gabriel Magnan | Software Engineer',
      description:
        'Professional portfolio of Gabriel Magnan, a passionate software engineer specializing in web development and creating exceptional digital experiences.',
      keywords: [
        'Software Engineer',
        'Web Developer',
        'Full Stack Developer',
        'React',
        'Node.js',
        'TypeScript',
      ],
      authors: [{ name: 'Gabriel Magnan' }],
      creator: 'Gabriel Magnan',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: new URL(BASE_URL),
        title: 'Gabriel Magnan | Software Engineer',
        description:
          'Professional portfolio of Gabriel Magnan, a passionate software engineer specializing in web development.',
        siteName: 'Gabriel Magnan Portfolio',
        images: [
          {
            url: '/logo.png',
            width: 310,
            height: 310,
            alt: 'Gabriel Magnan - Software Engineer',
          },
        ],
      },
      alternates: {
        canonical: new URL(BASE_URL),
      },
    },
    nickname: 'GM',
    fullname: 'Gabriel Magnan',
    navbar: {
      title: 'Navigation Menu',
    },
    footer: {
      firstSectionTitle: 'Gabriel Magnan',
      firstSectionDescription:
        'Software engineer specializing in building exceptional digital experiences.',
      secondSectionTitle: 'Quick Links',
      thirdSectionTitle: 'Connect',
      copyright: () =>
        `© ${new Date().getFullYear()} Gabriel Magnan. All rights reserved.`,
    },
    sections: {
      about: 'About',
      portfolio: 'Portfolio',
      resume: 'Resume',
      contact: 'Contact',
    },
  },

  // Password
  password: {
    title: 'Protected Area',
    description: 'Please enter the password to continue',
    form: {
      password: {
        label: 'Password',
        placeholder: 'Enter password',
      },
    },
    submitButton: 'Access',
    submitLoading: 'Verifying...',
  },

  // About
  about: {
    title: "Hi, I'm Gabriel Magnan 👋",
    description:
      'A passionate Software Engineer specializing in building exceptional digital experiences.',
    background:
      'I am a full-stack engineer with <strong class="font-bold text-black dark:text-white">5 years of experience</strong> in developing scalable web applications. ' +
      ' My employment history scales across multiple settings; from working for a large enterprise, to creating my own' +
      ' company, and to most recently working in a fast-paced environment at a startup.' +
      ' My focus is centered around creating <strong class="font-bold text-black dark:text-white">modern solutions</strong>' +
      ' with <strong class="font-bold text-black dark:text-white">robust backend</strong> and <strong class="font-bold' +
      ' text-black dark:text-white">seamless user experience.</strong> ' +
      ' Most people would describe me as <strong class="font-bold text-black dark:text-white">professional, curious,' +
      ' logical, and ambitious</strong>. I collaborate efficiently with' +
      ' diverse teams, am recognised for my <strong class="font-bold text-black dark:text-white">strong coding' +
      ' skills.</strong>',
    firstSectionTitle: 'About Me',
    secondSectionTitle: 'Where to find me',
    profiles: {
      malt: {
        title: 'Malt',
        description: 'Hire me for freelance projects',
      },
      collective: {
        title: 'Collective',
        description: 'View my developer collective profile',
      },
      linkedin: {
        title: 'LinkedIn',
        description: 'Connect with me professionally',
      },
    },
  },

  // Resume
  resume: {
    metadata: {
      title: 'Resume | Gabriel Magnan',
      description:
        'View my professional experience, skills, and qualifications. Learn about my journey as a software engineer' +
        ' and technical expertise.',
      openGraph: {
        title: 'Resume | Gabriel Magnan',
        description:
          'View my professional experience, skills, and qualifications. Learn about my journey as a software engineer and technical expertise.',
      },
      alternates: {
        canonical: new URL(`${BASE_URL}/resume`),
      },
    },
    title: 'Resume',
    description: 'My professional journey and qualifications',
    downloadButton: 'Download full resume',
    experienceSection: 'Experience',
    educationSection: 'Education',
    languagesSection: 'Languages',
    hobbiesSection: 'Hobbies & Interests',
  },

  // Portfolio
  portfolio: {
    metadata: {
      title: 'Portfolio | Gabriel Magnan',
      description:
        'Explore my latest projects and technical achievements. View a showcase of web applications, software solutions, and development work.',
      openGraph: {
        title: 'Portfolio | Gabriel Magnan',
        description:
          'Explore my latest projects and technical achievements. View a showcase of web applications, software solutions, and development work.',
      },
    },
  },

  // Contact
  contact: {
    metadata: {
      title: 'Contact | Gabriel Magnan',
      description:
        'Get in touch with me for collaboration opportunities, project inquiries, or general questions about software development.',
      openGraph: {
        title: 'Contact | Gabriel Magnan',
        description:
          'Get in touch with me for collaboration opportunities, project inquiries, or general questions about software development.',
      },
      alternates: {
        canonical: new URL(`${BASE_URL}/contact`),
      },
    },
    title: 'Contact Me',
    description: 'Have a question or want to work together?',
    form: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
        error: 'Name must be at least 2 characters',
      },
      email: {
        label: 'Email',
        placeholder: 'Your email',
        error: 'Invalid email address',
      },
      message: {
        label: 'Message',
        placeholder: 'Your message...',
        error: 'Message must be at least 10 characters',
      },
    },
    submitButton: 'Send Message',
    submitLoading: 'Sending...',
    submitToast: {
      success: {
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      },
      error: {
        title: 'Error',
        description: 'Failed to send message',
      },
    },
  },
};
