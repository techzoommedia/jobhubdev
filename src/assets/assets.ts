import logo from "./jobhubdevlogo.svg";
import company_icon from "./company_icon.svg";
import search_icon from "./search_icon.svg";
import location_icon from "./location_icon.svg";
import microsoft_logo from "./microsoft_logo.svg";
import walmart_logo from "./walmart_logo.svg";
import accenture_logo from "./accenture_logo.svg";
import cross_icon from "./X.svg";
import left_arrow_icon from "./left_arrow_icon.svg";
import right_arrow_icon from "./right_arrow_icon.svg";
import person_icon from "./person_icon.svg";
import money_icon from "./money_icon.svg";
import suitcase_icon from "./suitcase_icon.svg";
import file_upload_logo from "./file_upload_icon.svg";
import add_icon from "./add_icon.svg";
import email_icon from "./email_icon.svg";
import home_icon from "./home_icon.svg";
import lock_icon from "./lock_icon.svg";
import persontick_icon from "./person_icon.svg"

export const assets = {
  logo,
  search_icon,
  location_icon,
  microsoft_logo,
  walmart_logo,
  accenture_logo,
  cross_icon,
  company_icon,
  left_arrow_icon,
  right_arrow_icon,
  person_icon,
  money_icon,
  suitcase_icon, file_upload_logo, add_icon, email_icon, home_icon, lock_icon, persontick_icon
};

export const JobCategories = ["Programming", "Data Science", "Designing"];

export const JobLocations = ["Hyderabad", "Mumbai", "Bangalore"];

//Sample data for Manage Jobs Page

export const manageJobsData = [
  {
    _id: 1,
    title: "Full Stack Developer",
    date: "22 Aug 2024",
    location: "Hyderabad",
    applicants : 22
  },
  {
    _id: 2,
    title: "Data Scientist",
    date: "22 Aug 2024",
    location: "Bangalore",
    applicants : 22
  },  {
    _id: 3,
    title: "Data Scientist",
    date: "22 Aug 2024",
    location: "Bangalore",
    applicants : 22
  },  {
    _id: 4,
    title: "Data Scientist",
    date: "22 Aug 2024",
    location: "Bangalore",
    applicants : 22
  },  {
    _id: 5,
    title: "Data Scientist",
    date: "22 Aug 2024",
    location: "Bangalore",  applicants : 22
  },  {
    _id: 6,
    title: "Data Scientist",
    date: "22 Aug 2024",
    location: "Bangalore",
    applicants : 22
  },
];

//Sample Data for Profile Page
export const jobsApplied = [
  {
    jobId : 1,
    company: "Amazon",
    title: "Full Stack Developer",
    location: "Bangalore",
    date: "22 Aug 2024",
    status: "Pending",
    logo: company_icon,
  },
  {
    jobId : 2,
    company: "Flipkart",
    title: "Full Stack Developer",
    location: "Bangalore",
    date: "22 Aug 2024",
    status: "Pending",
    logo: company_icon,
  },
  {
    jobId : 3,
    company: "Google",
    title: "Full Stack Developer",
    location: "Bangalore",
    date: "22 Aug 2024",
    status: "Rejected",
    logo: company_icon,
  },
  {
    jobId : 4,
    company: "facebook",
    title: "Full Stack Developer",
    location: "Bangalore",
    date: "22 Aug 2024",
    status: "Accepted",
    logo: company_icon,
  }
  ,
  {
    jobId : 5,
    company: "TCS",
    title: "Full Stack Developer",
    location: "Bangalore",
    date: "22 Aug 2024",
    status: "Accepted",
    logo: company_icon,
  }
];

//Sample Data for View Applications
export const viewApplicatonsPageData = [
  {
    _id: 1,
    name: "Srikanth Telkalapally",
    jobTitle: "Full Stack Developer",
    date: 1729681667114,
    location: "Hyderabad",
  },
  {
    _id: 2,
    name: "Shiva",
    jobTitle: "Full Stack Developer",
    date: 1729681667114,
    location: "Hyderabad",
  },
  {
    _id: 3,
    name: "Prasanna",
    jobTitle: "Full Stack Developer",
    date: 1729681667114,
    location: "Hyderabad",
  },
  {
    _id: 4,
    name: "Vaishnavi",
    jobTitle: "Full Stack Developer",
    date: 1729681667114,
    location: "Hyderabad",
  },
];

export const jobsData = [
  {
    _id: "1",
    title: "Full Stack Developer",
    location: "bangalore",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
    <p> We are seeking a highly skilled full stack developer</p>
    <p>Job responsibilties are mostly related to frontend brother in the form of the resposibility</p>
    `,
  },
  {
    _id: "2",
    title: " Frontend Developer",
    location: "hyderabad",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
        <p> We are seeking a highly skilled full stack developer</p>
        <p>Job responsibilties are mostly related to frontend brother in the form of the resposibility</p>
        `,
  },
  {
    _id: "3",
    title: "Full Stack Developer",
    location: "bangalore",
    level: "Senior Level",
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
        <p> We are seeking a highly skilled full stack developer</p>
        `,
  },
  {
    _id: "4",
    title: "Full Stack Developer",
    location: "bangalore",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
        <p> We are seeking a highly skilled full stack developer</p>
        `,
  },
  {
    _id: "5",
    title: "Full Stack Developer",
    location: "bangalore",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
        <p> We are seeking a highly skilled full stack developer</p>
        `,
  },
  {
    _id: "6",
    title: "Full Stack Developer",
    location: "bangalore",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
        <p> We are seeking a highly skilled full stack developer</p>
        `,
  },
  {
    _id: "7",
    title: "Full Stack Developer",
    location: "bangalore",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
        <p> We are seeking a highly skilled full stack developer</p>
        `,
  },
  {
    _id: "8",
    title: "Full Stack Developer",
    location: "bangalore",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
        <p> We are seeking a highly skilled full stack developer</p>
        `,
  },
  {
    _id: "9",
    title: "Full Stack Developer",
    location: "bangalore",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
        <p> We are seeking a highly skilled full stack developer</p>
        `,
  },
  {
    _id: "10",
    title: "Full Stack Developer",
    location: "Bangalore",
    level: "Senior Level",
    salary: "90000",
    date: 1729681667114,
    companyId: {
      _id: "343423434354534e43sew4233433",
      name: "Microsoft",
      email: "microsoft@demo.com",
      image: company_icon,
    },
    description: `
    <h2>About the Role</h2>
    <p>We are looking for a highly experienced and passionate <strong>Senior Full Stack Developer</strong> to join our growing team in <strong>Bangalore</strong>. At Microsoft, you'll be at the forefront of innovation, working on complex, real-world problems that have a global impact. This role involves end-to-end development using modern technologies, and offers an opportunity to lead key technical initiatives within the company.</p>
  
    <h2>What You’ll Do</h2>
    <p>As a Full Stack Developer, you will play a critical role in building scalable, responsive, and high-performance web applications. You’ll work closely with product managers, designers, and other engineers to deliver seamless user experiences and powerful backend logic.</p>
    <ul>
      <li>Design and develop robust, scalable frontend applications using React or Angular.</li>
      <li>Build high-performance APIs and backend services using Node.js, Express, and MongoDB or SQL.</li>
      <li>Collaborate in an Agile environment with regular sprints and cross-functional team discussions.</li>
      <li>Contribute to architecture decisions and guide junior developers through best practices.</li>
      <li>Implement CI/CD pipelines and ensure code quality through automated testing and code reviews.</li>
    </ul>
  
    <h2>Who You Are</h2>
    <p>We’re looking for someone who doesn’t just write code — you solve problems. You’re analytical, detail-oriented, and eager to work with the latest technologies. You thrive in collaborative environments and are driven by building products that matter.</p>
    <ul>
      <li>5+ years of experience as a Full Stack Developer.</li>
      <li>Expertise in JavaScript/TypeScript, React.js or Angular, and Node.js.</li>
      <li>Strong understanding of RESTful APIs, microservices, and database systems.</li>
      <li>Experience working with cloud platforms like Azure or AWS is a plus.</li>
      <li>Excellent communication skills and a collaborative mindset.</li>
    </ul>
  
    <h2>Why Join Us</h2>
    <p>At Microsoft, you’ll work in a culture of innovation, inclusion, and impact. We invest in your growth, provide access to cutting-edge tools and technologies, and give you the autonomy to make a difference.</p>
    <ul>
      <li>Work on products that reach millions of users worldwide.</li>
      <li>Competitive salary and comprehensive benefits.</li>
      <li>Hybrid work flexibility and a culture that values work-life balance.</li>
      <li>Opportunities to attend conferences, upskill, and contribute to open-source.</li>
    </ul>
  
    <p><strong>Join us and help shape the future of technology — one line of code at a time.</strong></p>
  `  
  }  
];
