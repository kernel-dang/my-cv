import { Experience } from '../../model/experience';

export const experiences: Experience[] = [
  {
    companyName: 'Restaff',
    period: '5/2020 - 6/2024',
    projects: [
      {
        name: 'Wellbarrier',
        description:
          'Wellbarrier is a comprehensive well integrity management solution that spans the entire well life cycle. It ensures a clear and common understanding of risk among all stakeholders. Wellbarrier empowers engineers in the oil and gas field by enabling them to visualize, communicate, and document well structures efficiently. Managers can monitor well health using products like Risk Management, Well Barrier, Verification, and Monitoring. The project is base on multi-tenant architecture',
        teamSize: 43,
        role: 'As a Technical Advisor, I work closely with customers to break down requirements, ensure that the product aligns with reality, provide estimations, write documents, train new team members, and offer advice to overcome obstacles. As a Fullstack Developer, I adhere to SOLID principles when writing code and frequently tackle challenging problems.',
        technology:
          'ASP.NET Restful API, Azure, Dapper, SQL Server, React/Preact, D3.js, Snabdom, Vanilla JS',
      },
    ],
  },
  {
    companyName: 'KMS Technology',
    period: '6/2019 - 5/2020',
    projects: [
      {
        name: 'Cin7 - Thunderstorm',
        description: `Thunderstorm is a migration project for customer Cin7 which focus on migrating their database to new architecture. Because of scaling system for more tenants, the existing database can not adapt with this requirement. We investigate and propose solution to migrate database without effect to current system`,
        role: 'Backend Developer',
        teamSize: 12,
        technology: 'ASP.NET Core, Restful API, SqlKata, MySQL, AWS',
      },
      {
        name: 'Ezlife',
        description: `EZlife is a internal project to build a tool in order to manage human resource. The clients want to know how many headcount are not staffed into any project, or how many ones for each roles. We build a tool to visualize data on charts and integrate with other existing tools`,
        role: 'Backend developer',
        teamSize: 12,
        technology: 'Nodejs, GraphQL, Sequelize, Nextjs',
      },
      {
        name: 'CloudHMS',
        description: `CloudHMS is a startup company, provide cloud services for hospitality, from accommodation to experience and travel, with centralize system and provide extensions for OAT to integrate`,
        role: 'Backend Developer',
        technology: 'ASP.NET Core, Restful API, SqlKata, MySQL, AWS',
        teamSize: 12,
      },
      {
        name: 'Christina’s',
        description: `Christina’s a fully-integrated social travel platform ranked number 1 on Trip Advisor. Christina’s provides the best local experiences for travelers from around the world`,
        role: 'Fullstack developer',
        teamSize: 21,
        technology:
          'ReactJS, Python (Django), Nodejs, Postgress, Circle CI, Heroku',
      },
    ],
  },
  {
    companyName: 'FPT Software',
    period: '5/2017 - 4/2019',
    projects: [
      {
        name: 'Quality Control Tool',
        description: `This project is built to control quality of blood by receive analysis signals to statistic and visualize data on some kinds of chart to control the indexes of quality`,
        role: 'Team Leader, Full-stack Developer',
        teamSize: 8,
        technology: 'ASP.Net MVC, EF, jQuery, HTML, CSS, MSSQL',
      },
      {
        name: 'QTMediaCreator',
        description: ` Create, manage, and stream media content to remote server with multi device and cross platform`,
        role: `C++ Developer, Designer, BA`,
        teamSize: 3,
        technology: 'C++, ffmpeg, Qt framework',
      },
      {
        name: 'MR_Sequence',
        description: ` This project is a part of MRI system, it process to setting pulse sequences and pulsed field gradients, resulting in a particular image appearance`,
        role: 'C++ Developer, Tester',
        teamSize: 14,
        technology: 'C++, C# .NET, DCMTK, MSSQL',
      },
    ],
  },
  {
    companyName: 'Freelancer',
    period: '11/2018 - 5/2019',
    projects: [
      {
        name: 'BeRich',
        description: `Hybrid mobile application, used to manage income, expense, asset and debt, help user to control amount and clear finance in the future`,
        role: 'Fullstack Developer',
        teamSize: 2,
        technology: 'Angular, Ionic, ASP.NET Core',
      },
    ],
  },
  {
    companyName: 'Global Cyber Soft',
    period: '6/2016 - 1/2017',
    projects: [
      {
        name: 'Trainee in GCS as Bridge Software Engineer',
        description:
          'I was trained to become a BrSE with soft skills when working in japanese environment and culture',
      },
    ],
  },
  {
    companyName: 'Bachelor thesis',
    period: '1/2017 - 6/2017',
    projects: [
      {
        name: 'Detect Calcification over Mammography',
        description:
          'Apply image process technique to detect area of calcification of mammography. In addition, apply DICOM standard to integrate with medical system. OpenCV, DCMTK, QT framework is base technologies',
      },
    ],
  },
];
