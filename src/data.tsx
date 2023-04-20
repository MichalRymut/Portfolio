import { type } from '@testing-library/user-event/dist/type'

export type TProjects = {
  [key: string]: TProject
}

export type TFeature = {
  id: string
  name: string
  mbPhoto: string
  ipPhoto?: string
}

export type TProject = {
  name: string
  description: string
  live: string
  header: string
  features: TFeature[]
  iPhonePreview?: boolean
  technologies?: TTechnology[]
}

export type TTechnology = {
  name: string
  logo?: string
  url: string
}

export const technologies: { [key: string]: TTechnology } = {
  Python: {
  name: 'Python',
  url: 'https://www.python.org/',
},
SQL: {
  name: 'SQL',
  url: 'https://www.mysql.com/',
},
VisualBasic: {
  name: 'Visual Basic',
  url: 'https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/aa242122(v=vs.60)',
},
iLogic: {
  name: 'iLogic',
  url: 'https://www.autodesk.com/autodesk-university/article/iLogic-Best-Practices-and-Fundamentals-for-Success',
},
Cplusplus: {
  name: 'C++',
  url: 'https://cplusplus.com/',
},
React: {
  name: 'React',
  url: 'https://react.dev/',
},
typeScript: {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
JS: {
    name: 'JavaScript',
    url: 'https://www.javascript.com/',
  },
CSS: {
    name: 'CSS',
    url: 'https://pl.wikipedia.org/wiki/CSS',
  },
html: {
    name: 'HTML',
    url: 'https://pl.wikipedia.org/wiki/HTML',
  },
SAP: {
    name: 'SAP',
    url: 'https://www.sap.com/',
  },
ABAP: {
    name: 'ABAP',
    url: 'https://pl.wikipedia.org/wiki/ABAP',
  },
inventor: {
  name: 'Autodesk Inventor',
  url: 'https://www.autodesk.pl/products/inventor/overview',
},
solid: {
  name: 'SolidWorks',
  url: 'https://www.solidworks.com/',
},
AutoCAD: {
  name: 'Autodesk AutoCAD',
  url: 'https://www.autodesk.pl/products/autocad/overview',
},
hub: {
  name: 'GitHub',
  url: 'https://github.com/',
},
}

export const projects: TProjects = {
  mirror: {
    name: 'Smart Mirror',
    description:
      'Smart Mirror is an interactive display that combines a mirror and a computer screen to provide a customizable and personalized experience. The mirror displays real-time information such as weather, news,  calendar events, and emails, as well as other customized information based on user preferences. The smart mirror can also be used to control other devices in the home, such as lighting, thermostats, and security systems. The modular design of the smart mirror allows users to customize the size, shape, and features of the mirror to fit their specific needs and preferences. Users can easily add or remove modules to the mirror, such as a camera, microphone, speakers, or additional sensors.',
    iPhonePreview: false,
    header: '',
    live: 'https://magicmirror.builders/',
    technologies: [
      technologies.JS,
      technologies.CSS,
      technologies.html,
      technologies.Python,
      technologies.hub,
    ],
    features: [
        {
        id: '1',
        name: 'Build the mirror in your own style, to fit your own place',
        mbPhoto: '../assets/mm_03.png',
      },
      {
        id: '2',
        name: 'Get all the information you need while checking yourself out',
        mbPhoto: '../assets/mm_01.png',
      },
      {
        id: '3',
        name: 'Customize modules for your needs',
        mbPhoto: '../assets/mm_02.png',
      },
      {
        id: '4',
        name: 'Control the mirror from your phone',
        mbPhoto: '../assets/mm_04.png',
      },
    ],
  },
  cdtool: {
    name: 'Copy Design Tool',
    description:
      'Design Tool for Autodesk Inventor is a powerful tool that allows users to safely copy assemblies or parts, while enabling the modification of iProperties for each element. Copied assemblies can be made from original parts, derived parts, or new copied parts. The Copy Design Tool also enables users to replace parts within an assembly with an identical copy of the same part, providing a safe way to replace instances or make backup copies without the risk of losing link references. With this tool, users can quickly create new revisions or spaces to work on old projects without the danger of corrupting original files. The Copy Design Tool is a valuable asset for Autodesk Inventor users, providing a safe and efficient way to copy and modify assemblies and parts without compromising the integrity of the original design.',
    header: 'Tasks management website',
    live: 'https://apps.autodesk.com/en',
    technologies: [
      technologies.Python,
      technologies.VisualBasic,
      technologies.iLogic,
      technologies.SQL,
      technologies.hub,
      technologies.inventor,      
    ],
    features: [
      {
        id: '1',
        name: 'Copy assemblies and parts while changing their names in a multiple ways.',
        mbPhoto: '../assets/cdt_01.png',
      },
      {
        id: '2',
        name: 'Make revisions, number parts and store safe copies of each project',
        mbPhoto: '../assets/cdt_02.png',
      },
      {
        id: '3',
        name: 'Add new or change existing iProperties of copied files',
        mbPhoto: '../assets/cdt_03.png',
      },
      {
        id: '4',
        name: 'Copy assemblies and parts while changing their names in a multiple ways.',
        mbPhoto: '../assets/cdt_01.png',
      },
      {
        id: '5',
        name: 'Make revisions, number parts and store safe copies of each project',
        mbPhoto: '../assets/cdt_02.png',
      },
      {
        id: '6',
        name: 'Add new or change existing iProperties of copied files',
        mbPhoto: '../assets/cdt_03.png',
      },
    ],
  },
  doccreate: {
    name: 'Documentation Managment System',
    description:
      'The Documentation Management System consisted of several different rules, applications, and objects that allowed for the management of the entire project, from the creation of the first parts, the creation of assemblies, the building of a library of standardized parts, the assignment of appropriate iProperties to parts, the assignment of appropriate names for elements according to a imposed scheme, the assignment of physical attributes, the automatic generation of documentation in the appropriate extensions and folder layouts. The most complex element of this system was the module "Create 4 View Drawing Of Model" which generated drawings and 2D files from 3D models.',
    header: 'Website to simulate logic gates systems',
    live: 'https://github.com/MichalRymut/Projects/tree/main/iLogic',
    technologies: [
      technologies.Python,
      technologies.Cplusplus,
      technologies.VisualBasic,
      technologies.iLogic,
      technologies.SQL,
      technologies.hub,
      technologies.inventor,
      technologies.AutoCAD,

    ],
    features: [
      {
        id: '1',
        name: 'Create 4 view 2D drawing from a 3D model and save it in a selected extension. ',
        mbPhoto: '../assets/dms_01.png',
      },
      {
        id: '2',
        name: 'Add iProperties to parts and assemblies, includin color, material and finish.',
        mbPhoto: '../assets/dms_02.png',
      },
      {
        id: '3',
        name: 'Generate and export documentation with appropriate extensions and folder layouts',
        mbPhoto: '../assets/dms_03.png',
      },
      {
        id: '4',
        name: 'Manage your entire project and more. To see more capabilities of this program, click Learn more.',
        mbPhoto: '../assets/dms_04.png',
      },
    ],
  },
}
