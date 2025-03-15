import React from "react";
import '../styles/GradientShadow.css'; 

const LearningHub = () => {
    const learning = [
        { 
            id: 1, 
            title: "Dealing with climate emergency and disaster risks", 
            description: "How can we make climate and risk knowledge accessible to those who need them the most? Loretta Hiebert Girardet of UNDRR", 
            link: "https://www.unsdglearn.org/podcast/dealing-with-climate-emergency-and-disaster-risks-how-can-we-make-climate-and-risk-knowledge-accessible-to-those-who-need-them-the-most/" 
        },
        { 
            id: 2, 
            title: "Public Policies for Social and Solidarity Economy", 
            description: "3 minutes, 3 messages: Public Policies for Social and Solidarity Economy", 
            link: "https://www.unsdglearn.org/microlearning/3-minutes-3-messages-public-policies-for-social-and-solidarity-economy/" 
        },
        { 
            id: 3, 
            title: "Big Data: What is it and how can it contribute to Sustainable Development", 
            description: "Big Data and how it contributes to achieving sustainable development.", 
            link: "https://www.unsdglearn.org/microlearning/big-data-what-is-it-and-how-can-it-contribute-to-sustainable-development/" 
        },
    ];

    const courses =[
        {
            id:1, 
            title:"Strengthening cybersecurity through effective CSIRT and SOC models", 
            description:"This 4.5-day course provides a comprehensive approach to building, modernising, and optimising Cyber Security Incident Response Teams (CSIRTs) and Security Operations Centers (SOCs).", 
            link:"https://www.unsdglearn.org/courses/strengthening-cybersecurity-through-effective-csirt-and-soc-models/"
        },
        {
            id:2,
            title:"Nature-based Solutions for Disaster and Climate Resilience",
            description:"What are ‘Nature-based solutions’, or NbS? How can they help build resilience to disasters and climate change impacts? Why is NbS relevant? How can I apply NbS in my work and everyday life",
            link:"https://www.unsdglearn.org/courses/nature-based-solutions-for-disaster-and-climate-resilience-2/"
        },
        {
            id:3,
            title:"Emerging technologies and digital innovation",
            description:"This course provides an overview of emerging technologies and digital innovation, and how they can be used to support the achievement of the SDGs.",
            link:"https://www.unsdglearn.org/courses/emerging-technologies-and-digital-innovation/"
        },
        {
            id:4,
            title:"Communication for Immunization",
            description:"This course provides an overview of the principles of communication and how they can be used to support immunization programmes.",
            link:"https://www.unsdglearn.org/courses/communication-for-immunization/"
        }
    ];

    const resources =[
        {
            id:1,
            title:"Climate Action: Uniting Business and Governments to Recover Better",
            description:"It is crucial that long-term solutions and recovery efforts define the company vision, policies and strategies for environmental responsibility and the climate emergency. This requires continued and urgent transition to net-zero greenhouse gas emissions well before 2050.",
            link:"https://www.unsdglearn.org/resources/climate-action-uniting-business-and-governments-to-recover-better/"
        },
        {
            id:2,
            title:"Advancing Gender in the Environment: Gender in Fisheries- A Sea of Opportunities",
            description: "Learn how fisheries are an important entry-point for women's social and economic empowerment",
            link:"https://www.unsdglearn.org/resources/advancing-gender-in-the-environment-gender-in-fisheries-a-sea-of-opportunities/"
        },
        {
            id:3,
            title:"SDG Help Desk's Story Telling Page",
            description:"The SDG Help Desk links its users to a list of firsthand accounts, detailing the impact SDG-focused initiatives have on persons, communities, and countries. These stories aim to educate and inspire and are provided by various contributing organizations.",
            link:"https://www.unsdglearn.org/resources/sdg-help-desks-story-telling-page/"
        }
    ]

    return (
        <div className="p-4">
            <div className="px-4 py-2">
            <h1 className="text-3xl font-bold mb-4">Learning Hub</h1>
            <h2 className="text-xl font-bold mb-2">Microlearning Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {learning.map((learn) => (
                    <a
                        key={learn.id}
                        href={learn.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border rounded-lg p-4 shadow-md cursor-pointer transform transition-transform duration-200 hover:shadow-lg hover:scale-105 gradient-border"
                    >
                        <h2 className="text-xl font-bold mb-2">{learn.title}</h2>
                        <p>{learn.description}</p>
                    </a>
                ))}
            </div>
            </div>
            <div className="px-4 py-2">
            <h2 className="text-xl font-bold mb-2">Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <a
                        key={course.id}
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border rounded-lg p-4 shadow-md cursor-pointer transform transition-transform duration-200 hover:shadow-lg hover:scale-105 gradient-border"
                    >
                        <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                        <p>{course.description}</p>
                    </a>
                ))}
            </div>
            <h2 className="text-xl font-bold mb-2">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {resources.map((resource) => (
                    <a
                        key={resource.id}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border rounded-lg p-4 shadow-md cursor-pointer transform transition-transform duration-200 hover:shadow-lg hover:scale-105 gradient-border"
                    >
                        <h2 className="text-xl font-bold mb-2">{resource.title}</h2>
                        <p>{resource.description}</p>
                    </a>
                ))}
            </div>
        </div>
        </div>
    );
};

export default LearningHub;
