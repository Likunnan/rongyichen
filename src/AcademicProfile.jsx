import React, { useState } from 'react';
import { User, Mail, MapPin, FileText, Calendar, Briefcase, Award, Github, Twitter, Download, BookOpen, Info, Film, Share2, Globe, BookOpen as Book, PieChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AcademicProfile = () => {
  const [activeTab, setActiveTab] = useState('about');
  // 添加一个状态来处理图片加载错误
  const [imgError, setImgError] = useState(false);

  // 个人信息数据
  const profileData = {
    name: "Rongyi Chen",
    title: "M.A. Student in Computational Communication (Expected 2026)",
    institution: "Center for Intelligent Media & Communication Research, Central South University",
    email: "rongyi@csu.edu.cn",
    bio: "I'm a researcher focusing on computational communication, with particular interests in multimodal social media analytics, human-computer interaction, and collaborative systems. My work aims to bridge technology and communication studies to understand how digital platforms shape information diffusion and public sentiment.",
    researchAreas: ["Computational Communication", "Multimodal Social Media Diffusion and Sentiment Analytics", "Human-computer interaction(HCI)", "Computer-Supported Cooperative Work(CSCW)"],
    socialMedia: [
      { name: "Google Scholar", icon: Award, url: "https://scholar.google.com/citations?user=aFi4Wd0AAAAJ&hl=en" },
      { name: "RedNote", icon: BookOpen, url: "https://www.xiaohongshu.com/user/profile/6633970e000000000303278d" },
      { name: "Twitter", icon: Twitter, url: "https://twitter.com/rongyichen" },
      { name: "GitHub", icon: Github, url: "https://github.com/rongyichen" },
      { name: "Download CV", icon: Download, url: "/files/rongyi_chen_cv.pdf" }
    ]
  };

  // 最新消息数据
  const newsData = {
    academic: [
      {
        date: "2025-05-20",
        title: "🏆 AEJMC MCS Second Place Faculty Paper Award! ",
        content: "My co-authored paper has been accepted to the Mass Communication and Society Division session at the 2025 AEJMC 108th Annual Conference (as first author). I will be presenting at the MCS Top Refereed Research Paper Session."
      },
      {
        date: "2024-02-28",
        title: "Research Grant Approved",
        content: "Successfully secured a National Science Foundation grant for the project 'Multimodal Learning Theory and Methods'."
      }
    ],
    nonAcademic: [
      {
        date: "2024-01-10",
        title: "Journal Editorial Appointment",
        content: "Appointed as Associate Editor for IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)."
      },
      {
        date: "2023-12-05",
        title: "Campus Event Organization",
        content: "Organized and hosted an interdisciplinary research workshop that attracted participants from multiple departments."
      }
    ]
  };

  // 研究成果数据
  const researchData = {
    preprints: [
      {
        year: "2024",
        title: "Large Language Models in Communication Research: Applications and Implications",
        authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang",
        repository: "arXiv",
        id: "2401.12345"
      },

    ],
    publications: [
      {
        year: "2024",
        title: "Exploring Influencers' and Users' Experiences in Douyin's Virtual Reality Live-Streaming",
        authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Menghan Yin, Xianzhe Fan, Zihe Ran, Qing Xiao",
        journal: "Proceedings of the 30th ACM Symposium on Virtual Reality Software and Technology",
        doi: "10.1145/3641825.3689519"
      },
      {
        year: "2024",
        title: "“The power of the civilian hero”: Effective strategies for local media coverage in response to information epidemics",
        authors: "Chuchu Zhao, Rongyi Chen*",
        journal: "Local journalism, global challenges: News deserts, infodemic and the vastness in between (pp. 171-200); LabCom Books. ISBN 978-989-654-970-1",
        doi: "https://ecrea.eu/page-18206/13312675"
      },
      {
        year: "2024",
        title: "Migrant youth aged 16 to 19 during social crises: Stress, deviant behavior, and identification with mainstream society",
        authors: "Hua Zhong, Qing Xiao, Rongyi Chen, Jingjia Xiao",
        journal: "Huxiang Law Review (Huxiangfaxuepinglun",
        doi: "10.20034/j.cnki.hxfxpl.2024.04.000"
      }
    ],
    conferences: [
      {
        year: "2025",
        title: "When Memes Become Mean: Discrimination Recognition and Group Norms in Adolescent Bullying",
        authors: "Rongyi Chen, Qing Xiao, Shike Lin, Menghan Yin, Jingjia Xiao, Hua Zhong, Bingbing Zhang",
        conference: "2025 Association for Education in Journalism and Mass Communication (AEJMC) 108th Annual Conference",
        location: "San Francisco, USA",
        award: "Second Place Faculty Paper Award, Mass Communication and Society Division" // 添加奖项信息
      },
      {
        year: "2025",
        title: "Responsible LLMs in Persuasive Health Message: Comparing Language Biases in General LLMs and Healthcare LLMs",
        authors: "Rongyi Chen, Honghua Pan, Ni Yuan, Yalong Xiao, Jie Feng",
        conference: " 2025 the 75th Annual Conference of the International Communication Association (ICA)",
        location: "Denver, USA"
      },
      {
        year: "2025",
        title: "The Artists and Their Poor: Economic Inequality in China's Post-Pandemic Art Subsidy Policies",
        authors: "Jingjia Xiao, Qing Xiao, Rongyi Chen",
        conference: "2025 the 75th Annual Conference of the International Communication Association (ICA)",
        location: "Denver, USA"
      },
      {
        year: "2025",
        title: "How AI Constructs Disaster Narratives: A Comparative Analysis of LLMs in Multimodal Disaster News Production",
        authors: "Rui Zhang, Rongyi Chen",
        conference: "2025 International Association for Media and Communication Research (IAMCR) Annual Conference",
        location: "Singapore"
      },
      {
        year: "2025",
        title: "An Emerging Platform Entertainment Model in China:Algorithms Regulation and the Composite Interaction ofLive Streaming and Short Videos",
        authors: "Rongyi Chen, Chuyi Guo",
        conference: "Preconference of the 75th Annual Conference of the International Communication Association (ICA) 2025: Debating Creator Culture",
        location: "Singapore"
      },
      {
        year: "2024",
        title: "“Have you seen the lovers in the game? Are they like us?” Online Games and Game-Mediated Romantic Relationships",
        authors: "Jingrong Xu, Rongyi Chen, Haoran Dai",
        conference: "2024 National Communication Association (NCA) 110th Annual Convention",
        location: "New Orleans, USA"
      },
      {
        year: "2024",
        title: "Gresham's Law in Language Education: How Short Video buzzwords Reshapes Adolescents' Expression Habits and Semantic Understanding Capabilities",
        authors: "Rongyi Chen, Shike Lin, Haoran Dai",
        conference: "2024 International Association for Media and Communication Research (IAMCR) Annual Conference",
        location: "Christchurch, New Zealand"
      },
      {
        year: "2024",
        title: "The illusion of pluralistic andneutrality: How Twitter social bots show their opinionin Chinese political issue",
        authors: "Rongyi Chen, Qing Xiao, Haoran Dai",
        conference: "2024 the 10th ECREA European Communication Conference (ECC)",
        location: "Ljubljana, Slovenia"
      },
      {
        year: "2024",
        title: "Urban voice: LLM-based public opinion visualization for human-centered urban planning",
        authors: "Rongyi Chen, Jingjia Xiao, Zilu Wang, Qing Xiao",
        conference: "2024 International Conference of Social Computing (ICSC 2024)",
        location: "Guangzhou, China"
      },
      {
        year: "2023",
        title: "Focus on Supporting Roles in TikTok's Live-streaming E-commerce: How Do Assistant Anchors Affect Audiences' Purchase Intention?",
        authors: "Rongyi Chen, Shike Lin, Huiying Zhang",
        conference: "2023 TikTok Creators and Digital Economies Symposium",
        location: "London, UK"
      },
      {
        year: "2023",
        title: "Distorted emotional labor: an ethnography of a commercial live-streaming assistant anchor group",
        authors: "Rongyi Chen, Shike Lin",
        conference: "2023 International Association for Media and Communication Research (IAMCR) Annual Conference",
        location: "Lyon, France"
      }
    ]
  };

  // 作品集数据
  const portfolioData = [
    {
      title: "Social Media Data Visualization",
      description: "A visualization system for sentiment analysis of trending events on Weibo, showing public emotional trends.",
      image: "/api/placeholder/400/240",
      url: "https://example.com/social-viz"
    },
    {
      title: "Interactive Data Report",
      description: "A data journalism report on urban transportation issues, featuring interactive charts and user engagement elements.",
      image: "/api/placeholder/400/240",
      url: "https://example.com/data-report"
    },
    {
      title: "Short Video Content Analysis Tool",
      description: "A tool that automatically analyzes content features, sentiment tendencies, and propagation paths of popular Douyin videos.",
      image: "/api/placeholder/400/240",
      url: "https://example.com/video-analysis"
    }
  ];

  // 个人项目数据
  const projectsData = {
    shortVideo: [
      {
        title: "Douyin User Behavior Research",
        description: "Analysis of the relationship between user interaction behaviors and content recommendation mechanisms on Douyin platform.",
        tech: ["Python", "Data Mining", "Statistical Analysis"]
      },
      {
        title: "Live Streaming Interaction Pattern Analysis",
        description: "Research on user interaction patterns in different types of live streaming rooms, including tipping behaviors and comment features.",
        tech: ["Content Analysis", "Social Network Analysis"]
      }
    ],
    socialMedia: [
      {
        title: "Weibo Public Opinion Evolution Model",
        description: "Construction of a computational model for the evolution of public opinion on Weibo platform, predicting emotional trends of hot events.",
        tech: ["Sentiment Analysis", "Time Series Modeling"]
      },
      {
        title: "Xiaohongshu Effectiveness Evaluation",
        description: "Development of assessment tools to analyze the relationship between the spread effects of Xiaohongshu notes and user purchase intentions.",
        tech: ["Text Mining", "Effectiveness Assessment"]
      }
    ],
    computationalSocial: [
      {
        title: "Youth Digital Literacy Research",
        description: "Survey analysis of Chinese adolescents' digital literacy levels and their influencing factors, proposing educational recommendations.",
        tech: ["Questionnaire Survey", "Structural Equation Modeling"]
      }
    ],
    mediaEducation: [
      {
        title: "Cultivating Adolescents' Digital Literacy and Value Orientation in a Media Convergence Environment (National Social Science Funding: 19BXW087)",
        description: "Advisor: Professor Kai Zhang.",
        tech: ["RA", "Advisor: Professor Kai Zhang"]
      }
    ],
    other: [
      {
        title: "Urban Community Communication Research",
        description: "Analysis of information dissemination characteristics and resident participation patterns in community WeChat groups.",
        tech: ["Social Survey", "Communication Theory"]
      }
    ]
  };

  // 行业经验数据
  const industryData = [
    {
      period: "2025 - Present",
      title: "AI Product Manager Intern",
      organization: "Mango TV, Intelligent Research Center",
      description: "Working on multimodal interaction projects, focusing on user experience design in mixed reality environments."
    },
    {
      period: "2022 - 2023",
      title: "Data Analyst Intern",
      organization: "ByteDance, Douyin Algorithm Team",
      description: "Analyzed user behavior data to improve content recommendation algorithms. Conducted A/B tests to evaluate model improvements."
    },
    {
      period: "2021 - 2022",
      title: "UX Research Assistant",
      organization: "Tencent, WeChat User Experience Lab",
      description: "Assisted in designing and conducting user experience studies. Produced research reports and recommendations for product improvements."
    }
  ];

  // 处理图片加载错误
  const handleImageError = () => {
    console.log("Image failed to load");
    setImgError(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#212529]">
      {/* 头部信息区 */}
      <header className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white rounded-xl shadow-md p-6">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
              {imgError ? (
                <User size={48} className="text-blue-500" />
              ) : (
                <img 
                  src="/rongyichen/images/IMG_1783.jpg" 
                  alt={profileData.name} 
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{profileData.name}</h1>
            <p className="text-lg text-blue-700 mb-3">{profileData.title}</p>
            
            <div className="flex items-center mb-4">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                <MapPin size={14} className="text-blue-600" />
              </div>
              <p className="text-gray-600">{profileData.institution}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {profileData.researchAreas?.map((area, index) => (
                <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
            
            {/* 社交媒体链接 */}
            <div className="flex flex-wrap gap-4 mt-4">
              {/* 邮箱图标 - 带自定义悬浮提示 */}
              <div className="relative group">
                <a 
                  href={`mailto:${profileData.email}`}
                  className="w-8 h-8 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
                >
                  <Mail size={16} className="text-blue-600 group-hover:text-blue-800" />
                </a>
                {/* 悬浮提示 */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                  {profileData.email}
                </div>
              </div>
              
              {/* 其他社交媒体链接 */}
              {profileData.socialMedia?.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
                    title={social.name}
                  >
                    <IconComponent size={16} className="text-blue-600 group-hover:text-blue-800" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* 导航栏 */}
      <nav className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Info className="mr-2" size={18} />
              About Me
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'news' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Calendar className="mr-2" size={18} />
              News
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'research' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <FileText className="mr-2" size={18} />
              Research
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Award className="mr-2" size={18} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'portfolio' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Film className="mr-2" size={18} />
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('industry')}
              className={`px-6 py-4 font-medium flex items-center whitespace-nowrap ${activeTab === 'industry' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
            >
              <Briefcase className="mr-2" size={18} />
              Professional Experience
            </button>
          </div>
        </div>
      </nav>

      {/* 内容区 */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <AnimatePresence mode="wait">
          {/* 个人简介区 */}
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {profileData.bio}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Research Interests</h3>
                    <ul className="space-y-2">
                      {profileData.researchAreas.map((area, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-700">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-800 font-medium">M.A. in Computational Communication</p>
                        <p className="text-gray-600">Central South University, 2023-2026</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">B.A. in Communication</p>
                        <p className="text-gray-600">Double B.A. in Broadcasting & Hosting Arts</p>
                        <p className="text-gray-600 mt-1">Minors in Human-Centered Design</p>
                        <p className="text-gray-600 mt-1">Minors in Computational Communication</p>
                        <p className="text-gray-600 mt-1">Communication University of China, 2019-2023</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">International Communication Certificate</p>
                        <p className="text-gray-600 mt-1">University of Missouri-Columbia, 2019-2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Extra Training</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-800 font-medium">Data and Policy Summer Scholar Program</p>
                        <p className="text-gray-600">Data Analytics & Programming in R, University of Chicago, 2023</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Computational Social Science Specialization</p>
                        <p className="text-gray-600">Social Network Analysis & Computer Simulations, University of California, Davis, 2024</p>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Digital Humanities at Oxford Summer School</p>
                        <p className="text-gray-600">St Anne's College, University of Oxford, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Awards</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🏆</span>
                        <div>
                          <p className="text-gray-800 font-medium">Best Paper Award & Outstanding Student Award</p>
                          <p className="text-gray-600">School of Humanities, Central South University, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🎖️</span>
                        <div>
                          <p className="text-gray-800 font-medium">First Prize for Outstanding Radio and Television Programs</p>
                          <p className="text-gray-600">Hunan Province Radio and Television Association, 2024</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🏆</span>
                        <div>
                          <p className="text-gray-800 font-medium">Outstanding Undergraduate's Thesis Award</p>
                          <p className="text-gray-600">Communication University of China, 2023</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="text-xl mr-2 mt-0.5">🎖️</span>
                        <div>
                          <p className="text-gray-800 font-medium">Best Filming and Production Award</p>
                          <p className="text-gray-600">Hebei Radio and Television Station, 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 最新消息区 */}
          {activeTab === 'news' && (
            <motion.div
              key="news"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 学术消息 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Academic News</h3>
                  <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                    
                    {newsData.academic.map((news, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="relative pl-16 mb-8"
                      >
                        <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        
                        <div className="text-sm text-gray-500 mb-1">{news.date}</div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">{news.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">{news.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* 非学术消息 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">General News</h3>
                  <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                    
                    {newsData.nonAcademic.map((news, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="relative pl-16 mb-8"
                      >
                        <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        
                        <div className="text-sm text-gray-500 mb-1">{news.date}</div>
                        <h4 className="text-lg font-semibold mb-2 text-gray-800">{news.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">{news.content}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 研究成果区 */}
          {activeTab === 'research' && (
            <motion.div
              key="research"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-12">
                {/* Preprints - 放在最上面 */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Preprints</h3>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <ul className="space-y-6">
                      {researchData.preprints.map((preprint, index) => (
                        <li key={index} className="border-b border-gray-100 pb-5 last:border-b-0 last:pb-0">
                          <div className="flex flex-wrap justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-gray-800 mb-1">{preprint.title}</h4>
                            <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{preprint.year}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{preprint.authors}</p>
                          <div className="flex items-center text-sm text-blue-600">
                            <Book size={14} className="mr-1" />
                            <a 
                              href={`https://${preprint.repository.toLowerCase()}.org/${preprint.id}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {preprint.repository}: {preprint.id}
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Publications */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Publications</h3>
                  
                  {/* 按年份分组 */}
                  {Array.from(new Set(researchData.publications.map(paper => paper.year))).map((year, yearIndex) => (
                    <div key={yearIndex} className="mb-8">
                      <div className="flex items-center mb-4">
                        <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                        <h4 className="text-lg font-semibold text-gray-800">{year}</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6">
                        {researchData.publications
                          .filter(paper => paper.year === year)
                          .map((paper, paperIndex) => (
                            <motion.div
                              key={paperIndex}
                              whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                              className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                            >
                              <h5 className="font-semibold mb-2 text-gray-800">{paper.title}</h5>
                              <p className="text-sm text-gray-600 mb-3">
                                {paper.authors.split(',').map((author, i) => {
                                  // Trim whitespace from the author name
                                  const trimmedAuthor = author.trim();
                                  // Check if the author name starts with the profile name (to catch cases with asterisks)
                                  const isYou = trimmedAuthor.startsWith(profileData.name);
                                  
                                  return (
                                    <span key={i} className={isYou ? 'font-bold bg-yellow-100 px-1' : ''}>
                                      {author}{i < paper.authors.split(',').length - 1 ? ', ' : ''}
                                    </span>
                                  );
                                })}
                              </p>
                              <p className="text-sm italic text-gray-500 mb-3">{paper.journal}</p>
                              <a 
                                href={paper.doi.startsWith('http') ? paper.doi : `https://doi.org/${paper.doi}`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline flex items-center"
                              >
                                <FileText size={14} className="mr-1" />
                                DOI: {paper.doi.includes('/') ? paper.doi.split('/').pop() : paper.doi}
                              </a>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Conference */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Conference Presentations</h3>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    <ul className="space-y-6">
                      {researchData.conferences.map((conf, index) => (
                        <li key={index} className="border-b border-gray-100 pb-5 last:border-b-0 last:pb-0">
                          {conf.award && (
                            <div className="mb-2 flex items-center">
                              <span className="text-yellow-600 mr-1">🏆</span>
                              <span className="text-sm font-bold text-yellow-600">{conf.award}</span>
                            </div>
                          )}
                          <div className="flex flex-wrap justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-gray-800 mb-1 flex-1 mr-2">{conf.title}</h4>
                            <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{conf.year}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{conf.authors}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Globe size={14} className="mr-1 text-blue-500" />
                            <span>{conf.conference}, {conf.location}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 项目区 */}
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Short Video and Live Streaming */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Short Video and Live Streaming</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.shortVideo.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                    >
                      <h4 className="font-semibold mb-2 text-gray-800">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Social Media Content Analysis */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Social Media Content Analysis</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.socialMedia.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                    >
                      <h4 className="font-semibold mb-2 text-gray-800">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
<span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Computational Social Science */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Computational Social Science</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.computationalSocial.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                    >
                      <h4 className="font-semibold mb-2 text-gray-800">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Media Education */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Media Education</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.mediaEducation.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                    >
                      <h4 className="font-semibold mb-2 text-gray-800">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Social Survey & Others */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-2 h-8 bg-blue-500 rounded mr-3"></div>
                  <h3 className="text-xl font-semibold text-gray-800">Social Survey & Others</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projectsData.other.map((project, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, boxShadow: '0 6px 12px rgba(0,0,0,0.1)' }}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                    >
                      <h4 className="font-semibold mb-2 text-gray-800">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 作品集区 */}
          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                  >
                    <div className="h-40 bg-gray-100 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                      
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        <Share2 size={14} className="mr-1" />
                        View Project
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 行业经验区 */}
          {activeTab === 'industry' && (
            <motion.div
              key="industry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                {/* 时间线 */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-blue-100"></div>
                
                {industryData.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="relative pl-14 mb-10"
                  >
                    <div className="absolute left-0 top-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Briefcase size={14} className="text-blue-600" />
                    </div>
                    
                    <div className="inline-block bg-blue-50 px-3 py-1 rounded-full text-blue-700 text-xs mb-1">
                      {item.period}
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                    <h4 className="text-sm font-medium mb-2 text-blue-600">{item.organization}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 页脚 */}
      <footer className="bg-[#eceff1] border-t border-[#cfd8dc] py-6">
        <div className="container mx-auto px-4 text-center text-sm text-[#607d8b]">
          <p>Created by <a href="https://space.coze.cn" className="text-[#1976d2] hover:underline">Rongyi</a> | Last updated: May 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default AcademicProfile;