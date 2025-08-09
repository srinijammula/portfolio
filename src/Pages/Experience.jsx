'use client';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const journey = [
  {
    title: 'Software Engineer',
    company: 'Saayam For All',
    tech: 'React, Tailwind CSS, Python, Java',
    location: 'Remote',
    period: 'Jul 2025 - Present',
    icon: <BriefcaseIcon />,
    responsibilities: "Building and shipping features for a platform that connects people with verified help across critical needs. Designed and optimized backend services using Java and Python for scalable data access in a microservices architecture."
  }, 
  {
    title: "Software Engineer (RA)",
    company: "George Mason University",
    tech: 'Java, Javascript, Python',
    location: "Fairfax, VA, USA",
    icon: <BriefcaseIcon />,
    period: "Sep 2024 - Feb 2025",
    responsibilities:
        "Developed and optimized Geoweaver, an open-source NASA-funded project to build scientific workflows. Added status tracking, process name display, and improved workflow metadata across multiple UI panels. Resolved bugs related to table overflow, edge rendering, and improved history and monitor views. Removed unused Jupyter notebook dependencies and cleaned legacy code to streamline the frontend."
  },
  {
    title: "Masters in Computer Science",
    company: "George Mason University",
    location: "Fairfax, USA",
    icon: <GraduationCapIcon />,
    period: "Aug 2023 - May 2025",
    responsibilities: ""
  },
  {
    title: "Software Engineer Intern",
    company: "CHUBB",
    tech: 'Python, SQL (SSMS)',
    location: "Hyderabad, India",
    icon: <BriefcaseIcon />,
    period: "Aug 2022 - May 2023",
    responsibilities:
        "Analyzed and mapped data migration from legacy databases to Azure cloud. Automated 20% of the mapping process and XML parsing using Python. Completed full-time internship focused on the data engineering track, mastering ETL tools, SQL, and Python."
  },
  {
    title: "Web Application Developer",
    company: "T-KATAL",
    tech: 'React, NestJs, Firebase, Google Cloud Platform',
    location: "Remote",
    icon: <BriefcaseIcon />,
    period: "Dec 2021 - Feb 2022",
    responsibilities:
        "Developed web application using React, NestJS, Firebase, and Google Cloud Platform. Implemented features such as automating OTP validation, front-end design enhancements, and dynamic pageviews. Conducted research in hosting web applications on Google Cloud and Microsoft Azure and successfully deployed the application."
  },
  {
    title: "Bachelors in Computer Science and Business Systems",
    company: "VNR VJIET",
    location: "Hyderabad, India",
    icon: <GraduationCapIcon />,
    period: "Aug 2019 - May 2023",
    responsibilities: ""
  }
]


const Experience = () => {
  return (
    <section id="Experience">
    <div className='text-center lg:mb-8 mb-2'>
      <div className="inline-block relative group">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          Work Experience and Education
        </h2>
      </div>
      </div>

      <div className="relative">
        {/* faint gradient glow behind the line */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 blur-2xl bg-gradient-to-br from-[#6366f1]/20 via-transparent to-[#a855f7]/20" />

        <VerticalTimeline
          className="sj-timeline"
          // native prop only takes solid color; we'll override with CSS for gradient:
          lineColor="rgba(99,102,241,0.35)"
        >
          {journey.map((job, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentClassName="sj-timeline-card"
              contentStyle={{
                background: "rgba(2,6,23,0.7)",           // slate-950/70
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                boxShadow: "0 10px 40px rgba(120,119,198,0.25)"
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(99,102,241,0.45)" }}
              date={job.period}
              iconStyle={{
                background: "linear-gradient(135deg,#6366f1 0%,#a855f7 100%)",
                color: "#fff",
                boxShadow: "0 8px 24px rgba(120,119,198,0.35)"
              }}
              icon={job.icon}
            >
              <h3 className="vertical-timeline-element-title text-lg font-semibold">
                {job.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-sm text-gray-300">
                {job.company}
              </h4>
              <h4 className="vertical-timeline-element-subtitle text-sm">
                {job.tech}
              </h4>
              <p className="mt-2 text-gray-300/90">{job.responsibilities}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;