import { BASE_URL } from '@/env-constants';

export const strings = {
  // General
  global: {
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
    },
    sections: {
      about: 'About',
      portfolio: 'Portfolio',
      resume: 'Resume',
      contact: 'Contact',
    },
  },

  // Resume
  resume: {
    metadata: {
      title: 'Gabriel Magnan | Resume',
      description:
        'View my professional experience, skills, and qualifications. Learn about my journey as a software engineer' +
        ' and technical expertise.',
      openGraph: {
        title: 'Resume | Gabriel Magnan',
        description:
          'View my professional experience, skills, and qualifications. Learn about my journey as a software engineer and technical expertise.',
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

  // About
  about: {
    title: 'About Me',
    description:
      "I'm a passionate software developer with a love for creating innovative solutions. I enjoy tackling complex challenges and turning them into simple, beautiful, and intuitive designs.",
  },

  portfolio: {
    metadata: {
      title: 'Portfolio',
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
      title: 'Contact',
      description:
        'Get in touch with me for collaboration opportunities, project inquiries, or general questions about software development.',
      openGraph: {
        title: 'Contact | Gabriel Magnan',
        description:
          'Get in touch with me for collaboration opportunities, project inquiries, or general questions about software development.',
      },
    },
    title: 'Contact Me',
    description: 'Have a question or want to work together?',
    formName: 'Contact Form',
    formNamePlaceholder: 'Your name',
    formEmail: 'Email',
    formEmailPlaceholder: 'Your email',
    formMessage: 'Message',
    formMessagePlaceholder: 'Your message...',
    submitButton: 'Send Message',
  },
};
