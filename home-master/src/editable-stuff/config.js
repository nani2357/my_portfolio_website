import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Naveen",
  middleName: "",
  lastName: "Kadampally",
  message: " Empowering decisions with data, and shaping the future with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nani2357",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/naveen-kumar-kadampally/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nani.naveen.90/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/naveen.ka202/",
    },
    
    
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/20230608_150954.jpg"),
  imageSize: 375,
  message:
    "Hello! I'm Naveen, a dedicated Data Scientist currently pursuing my M.Sc. in Data Science from Chandigarh University. " +
    "My academic journey is complemented by a part-time online learning mode, allowing me to balance both my professional and educational aspirations.<br><br>" +
    "My professional experience as a Data Analyst and Data Scientist has equipped me with a profound understanding of Machine Learning, NLP, and Computer Vision. I'm adept at utilizing tools like Excel, Python, SQL, and Power BI to extract meaningful insights that influence business strategies." +
    "My portfolio boasts a series of successful data science projects, and I also possess a keen understanding of software testing.<br><br>" +
    "Currently, I'm contributing as a Volunteer Junior NLP Data Scientist at Soteria AI, Manchester, UK. This role not only aligns with my expertise but also resonates with my passion for community service.<br><br>" +
    "Outside of my professional and academic endeavors, I'm an advocate for open-source contributions. I believe in the power of collective knowledge and enjoy dedicating my free time to open-source projects.",
    
  resume: "https://drive.google.com/file/d/1iBF6DGOxNOd5mGvbzx2e_8E--W2fvHh8/view?usp=sharing",
  };

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Text Summarization",
			description: "Developed an illustrative NLP model for text summarization using pre-trained models, capable of condensing extensive content into concise summaries. The adaptable framework streamlines data comprehension, allowing for easy integration of various pre-trained models to make vast textual data more accessible and manageable.",
			icons: [
				{
					icon: faGlobe,
					link: "https://textsummarizationproject-nll8zoucuphmfb4nsg2nys.streamlit.app/",
				},
				{
					icon: faGithub,
					link: "https://github.com/nani2357/text_summarization_project",
				},
			]
		},
    {
			title: "Customer Personality Analysis & Predictive Segmentation",
			description: "Designed an illustrative Customer Personality Analysis (CPA) model based on real-world professional experiences. The project utilized sentiment analysis, clustering, and predictive modeling to segment and understand a company's varied customer base. By integrating association rules, it also provided targeted product recommendations. ",
			icons: [
				{
					icon: faGlobe,
					link: "https://customer-personality-analysis-clustering-navee2357.streamlit.app/",
				},
				{
					icon: faGithub,
					link: "https://github.com/nani2357/Customer_Personality_Analusis-Clustering/tree/main",
				},
			]
		},
    {
			title: "Green Concrete Strength Predication",
			description: "Designed a predictive model for Praneeth Groups to estimate the compressive strength of Green Concrete using recycled materials. This project, showcases the potential of sustainable construction materials like fly ash. The model aids in efficient decision-making, optimizing the blend of ingredients for desired strength, and promoting eco-friendly practices in the construction industry.",
			icons: [
				{
					icon: faGlobe,
					link: "https://greenconcretestrengthpredicationhybridmodel-byk4q5aacsc9tjzk78.streamlit.app/",
				},
				{
					icon: faGithub,
					link: "https://github.com/nani2357/Green_Concrete_Strength_Predication_HybridModel/tree/main",
				},
			]
		},
		{
			title: "Google Play Store Reviews Sentiment Analysis",
			description: "Scraped and analyzed Google Play Store reviews. Utilized pre-trained models, achieving an accuracy benchmark of 89%. This open-source personal project is currently in the process of being transformed into a web application. The insights derived aim to enhance app functionalities and elevate user experience based on genuine customer feedback. Future plans include the integration of an API for real-time feedback analysis.",
			icons: [
				{
					icon: faGlobe,
					link: "https://github.com/nani2357/Google_play_store_reviews_Sentimentiment_analysis_with_BERT",
				},
				{
					icon: faGithub,
					link: "https://github.com/nani2357/Google_play_store_reviews_Sentimentiment_analysis_with_BERT",
				},
			]
		},
		{
			title: "Depression Sentiment Analysis on Social Media Content",
			description: "Conducting sentiment analysis on social media content for Soteria Mental Health to gauge perceptions of depression. Utilizing advanced techniques and pre-trained models, we're enhancing sentiment detection accuracy. This ongoing project aids in strategic mental health interventions, offering clear insights into sentiment trends.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Soteria-Heroes/code-mental-health-studies/tree/master",
				},
			]
		},
    {
			title: "Open Source – Integrated Growth Analysis of Telangana Sate",
			description: "Currently collaborating on an open-source project with the Telangana State Government, focusing on growth analysis. I'm leveraging advanced time series models like ARIMA, Prophet, and LSTM to forecast revenue streams and district-specific investments. Additionally, I'm developing predictive models for e-Stamp challan issuance and vehicle preferences.I'm identifying anomalies in revenue data. Furthermore, I'm employing clustering techniques, to segment districts for strategic policymaking. ",
			icons: [
				
			]
		},
	],
}





// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "GitHub Repo",
  gitHubUsername: "nani2357", //i.e."johnDoe12Gh"
  reposLength: 8,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/20230608_150954.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/20230608_150954.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "SQL", value: 65 },
    { name: "Excel", value: 75 },
    { name: "PowerBI", value: 65 },
    { name: "ML/DL", value: 75 },
    { name: "NLP", value: 65 },
    { name: "Computer Vision", value: 55 },
    { name: "Salesforce", value: 40 },
  ],
  softSkills: [
    { name: "Data Preprocessing", value: 90 },
    { name: "Data Presentation", value: 90 },
    { name: "Statistical Analysis", value: 75 },
    { name: "Predictive Analytics", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Modeling", value: 80 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Hello there! I'm actively seeking entry-level roles in Data Science, Machine Learning, and Data Analysis. With a passion for extracting insights from data and a keen interest in the evolving landscape of machine learning, I'm eager to bring my skills to a dynamic team.If you're aware of any exciting opportunities, have any insights to share, or even if you'd just like to chat about the fascinating world of data, I'd love to hear from you. Drop me an email anytime! ",
  email: "naveenkadampally@gmail.com",
};
const education = {
  show: true,
  heading: "Education",
  data: [
    {
      institution: "Chandigarh University, India",
      course: "M.Sc. in DATA SCIENCE (Part-time – Online)",
      duration: "2023 - 2025",
      description: "Attained a solid foundation in commerce combined with computer . Engaged in a blend of theoretical coursework and practical projects, culminating in a holistic understanding of the intersection between commerce and technology"
    },
    {
      institution: "Osmania University, India",
      course: "B.com Commerce and Computers",
      duration: "2016 - 2019",
      description: "Learned about various aspects of computer science and worked on several projects."
    },
    {
      institution: "VNR VJIET, India",
      course: "Diploma in Civil Engineering",
      duration: "2012 - 2015",
      description: "Delved deep into the principles and applications of civil engineering, complemented by hands-on projects and practical sessions, laying a strong foundation for future academic and professional pursuits."
    },
    // ... add more education entries
  ],
};

const certifications = {
  show: true,
  heading: "Certifications",
  data: [
    {
      course: "Google Data Analytics",
      tutor: "Google Career Certificates",
      image: require('../editable-stuff/img.jpg')
    },
    {
      course: "Data Science Professional Certificate",
      tutor: "Andrew Ng",
      image: require('../editable-stuff/Data_Science.png')
    },
    {
      course: "TensorFlow Developer Professional Certificate",
      tutor: "Laurence Moroney",
      image: require('../editable-stuff/dlai.png')
    },
    {
      course: "Deep Learning Specialization",
      tutor: "Andrew Ng",
      image: require('../editable-stuff/dlai.png')
    },
    {
      course: "Salesforce Sales Operations",
      tutor: "Salesforce",
      image: require('../editable-stuff/sf.png')
    },
    {
      course: "ISTQB",
      tutor: "International Software Testing Qualifications Board",
      image: require('../editable-stuff/istqb.jpg')
    },
    // ... add more certification entries
  ],
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Volunteer Junior NLP Data Scientist',// Here Add Company Name
      company: 'Soteria AI, UK', // <-- Added company name
      //companylogo: require('../assets/img/dell.png'),
      date: 'JUN 2023 – Present',
      description: 'I am deeply involved in analyzing sentiment from social media content, particularly focusing on mental health topics like depression. Through advanced predictive modeling and data analysis, I aim to enhance mental health intervention strategies and promote broader awareness.', // <-- Added description

    },
    {
      role: 'Junior Data Analyst',
      company: 'Unified Softech, India', // <-- Added company name
      //companylogo: require('../assets/img/boeing.png'),
      date: 'Dec 2020 – Sep 2022',
      description: 'I have spearheaded data collection, cleaning, and exploratory analysis initiatives, uncovering pivotal insights to shape business strategies. My contributions span from conducting market basket and sentiment analyses to playing a crucial role in the development of an online shopping app, always emphasizing data-informed decision-making',
    },
    {
      role: 'Software Test Analyst',
      company: 'Unified Softech, India', // <-- Added company name
      //companylogo: require('../assets/img/boeing.png'),
      date: 'June 2019 – Nov 2020',
      description: 'I have been instrumental in ensuring software quality through manual, API, performance, and database testing. As a Scrum Master, I have championed Agile methodologies, overseeing daily stand-ups and sprints, while diligently tracking and resolving defects before product deployment',
    },
  ]
}

// Blog SECTION
//const blog = {
//  show: true,
//};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences,education, certifications};
