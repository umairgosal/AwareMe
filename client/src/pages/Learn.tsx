import { BookOpen, FileText, Video } from "lucide-react";
import React from "react";
import { FilterSection } from "../components/learn/FilterSection";
import { useFilters } from "../hooks/useFilters";
import type { Resource } from "../types";

const LANGUAGE_OPTIONS = [
  { value: "english", label: "English" },
  { value: "urdu", label: "اردو" },
  { value: "punjabi", label: "پنجابی" },
];

const TYPE_OPTIONS = [
  { value: "video", label: "Videos" },
  { value: "article", label: "Articles" },
  { value: "course", label: "Courses" },
];

const LEVEL_OPTIONS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export function Learn() {
  const { filters, toggleFilter, clearFilters } = useFilters();
  const [resources] = React.useState<Resource[]>([
    // English Beginner Resources
    {
      id: "1",
      title: "Digital Marketing Essentials",
      type: "video",
      language: "english",
      difficulty: "beginner",
      url: "#",
      description:
        "Learn the basics of digital marketing to grow your online presence.",
      link: "https://www.youtube.com/watch?v=bixR-KIJKYM",
    },
    {
      id: "2",
      title: "Launching a Dropshipping Venture",
      type: "article",
      language: "english",
      difficulty: "beginner",
      url: "#",
      description:
        "Understand the essentials of launching a successful dropshipping store.",
      link: "https://www.oberlo.com/blog/how-to-start-a-dropshipping-business",
    },
    {
      id: "3",
      title: "Freelancing Fundamentals",
      type: "course",
      language: "english",
      difficulty: "beginner",
      url: "#",
      description:
        "Step-by-step guide to becoming a successful freelancer in the digital economy.",
      link: "https://www.udemy.com/course/freelancing-certified-professional/?utm_source=bing&utm_medium=udemyads&utm_campaign=BG-Search_DSA_Beta_Prof_la.EN_cc.ROW-English&campaigntype=Search&portfolio=Bing-ROW-English&language=EN&product=Course&test=&audience=DSA&topic=&priority=Beta&utm_content=deal4584&utm_term=_._ag_1327112923142317_._ad__._kw_Marketing+en_._de_c_._dm__._pl__._ti_dat-2334744222699532%3Aloc-144_._li_144_._pd__._&matchtype=b&msclkid=c3dd198389601e3058177eddfcfa9903&couponCode=2021PM25",
    },

    // Urdu Intermediate Resources
    {
      id: "4",
      title: "SEO Tactics for Growth",
      type: "video",
      language: "urdu",
      difficulty: "intermediate",
      url: "#",
      description:
        "Learn search engine optimization techniques to increase website traffic.",
      link: "https://www.youtube.com/watch?v=9mhLbcs96xc",
    },
    {
      id: "5",
      title: "Boosting Business with Social Media",
      type: "video",
      language: "urdu",
      difficulty: "intermediate",
      url: "#",
      description:
        "Effective strategies to boost your business through social media platforms.",
      link: "https://muft.pk/course/social-media-management-course-for-beginners-in-urdu-by-azadchaiwala",
    },
    {
      id: "6",
      title: "Content Marketing Insights",
      type: "course",
      language: "english",
      difficulty: "intermediate",
      url: "#",
      description:
        "Master content marketing and learn how to create engaging content.",
      link: "https://www.udemy.com/course/learn-digital-marketing-course/?utm_source=bing&utm_medium=udemyads&utm_campaign=BG-Search_Keyword_Beta_Prof_la.EN_cc.ROW-English&campaigntype=Search&portfolio=Bing-ROW-English&language=EN&product=Course&test=&audience=Keyword&topic=Digital_Marketing&priority=Beta&utm_content=deal4584&utm_term=_._ag_1313918783733617_._ad__._kw_Digital+Marketing+learn+Tutorial_._de_c_._dm__._pl__._ti_kwd-82121042542427%3Aloc-144_._li_144_._pd__._&matchtype=b&msclkid=3a30762413561834aa32117a65666507&couponCode=2021PM25",
    },

    // Punjabi Advanced Resources
    {
      id: "7",
      title: "Business Scaling Strategies",
      type: "video",
      language: "punjabi",
      difficulty: "advanced",
      url: "#",
      description:
        "Techniques and strategies for scaling your business to the next level.",
      link: "https://www.youtube.com/watch?v=TeC2k900ZgI",
    },
    {
      id: "8",
      title: "E-commerce Data Insights",
      type: "video",
      language: "punjabi",
      difficulty: "advanced",
      url: "#",
      description:
        "Learn how to analyze data to improve your e-commerce performance.",
      link: "https://www.youtube.com/watch?v=ykz2g_-ysv0",
    },
    {
      id: "9",
      title: "Optimizing Marketing Funnels",
      type: "course",
      language: "english",
      difficulty: "advanced",
      url: "#",
      description:
        "Deep dive into creating and optimizing advanced marketing funnels.",
      link: "https://www.youtube.com/watch?v=2iMIDYYieKs",
    },

    // Sindhi Beginner Resources
    {
      id: "10",
      title: "Computer Basics for Beginners",
      type: "video",
      language: "sindhi",
      difficulty: "beginner",
      url: "#",
      description: "Learn the fundamentals of computer system",
      link: "https://www.youtube.com/watch?v=SrEk2TYBQZ4",
    },
    {
      id: "11",
      title: "Beginner's Blogging Guide",
      type: "article",
      language: "english",
      difficulty: "beginner",
      url: "#",
      description:
        "A beginner-friendly guide to launching and monetizing a blog.",
      link: "https://blog.hubspot.com/marketing/how-to-start-a-blog",
    },
    {
      id: "12",
      title: "CIT Basics",
      type: "course",
      language: "sindhi",
      difficulty: "beginner",
      url: "#",
      description: "Learn more about CIT.",
      link: "https://www.youtube.com/watch?v=H8nxN9CWpCQ",
    },

    // English Advanced Resources
    {
      id: "13",
      title: "AI in E-commerce Trends",
      type: "video",
      language: "english",
      difficulty: "advanced",
      url: "#",
      description:
        "Discover how AI is revolutionizing the e-commerce landscape.",
      link: "https://www.youtube.com/watch?v=jzlRhXk9Y_s",
    },
    {
      id: "14",
      title: "Global Market Entry Strategies",
      type: "article",
      language: "english",
      difficulty: "advanced",
      url: "#",
      description:
        "Guide to taking your business to global markets effectively.",
      link: "https://www.forbes.com/councils/forbesbusinesscouncil/2021/05/11/going-global-how-to-make-international-expansion-a-success/",
    },
    {
      id: "15",
      title: "Data-Driven Marketing Masterclass",
      type: "course",
      language: "english",
      difficulty: "advanced",
      url: "https://www.coursera.org/specializations/datascienceformarketing?msockid=0b90f7273dad609518f1e5103ca461f5",
      description:
        "Learn advanced data-driven marketing techniques for scaling your business.",
      link: "https://www.coursera.org/specializations/datascienceformarketing?msockid=0b90f7273dad609518f1e5103ca461f5",
    },
  ]);

  const filteredResources = resources.filter((resource) => {
    const languageMatch =
      filters.languages.length === 0 ||
      filters.languages.includes(resource.language);
    const typeMatch =
      filters.types.length === 0 || filters.types.includes(resource.type);
    const levelMatch =
      filters.levels.length === 0 ||
      filters.levels.includes(resource.difficulty);
    return languageMatch && typeMatch && levelMatch;
  });

  const getIcon = (type: Resource["type"]) => {
    switch (type) {
      case "video":
        return <Video className="text-cyan-600" size={24} />;
      case "article":
        return <FileText className="text-cyan-600" size={24} />;
      case "course":
        return <BookOpen className="text-cyan-600" size={24} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar for Filters */}
      <aside className="w-1/4 bg-cyan-100 p-4 rounded-lg">
        <div className="mb-6">
          <h1 className="font-bold text-2xl flex justify-center mb-4">
            Filter Courses
          </h1>
          <h2 className="text-lg font-semibold mb-2">Filter by Language</h2>
          <FilterSection
            title="Filter by Language"
            options={LANGUAGE_OPTIONS}
            selectedValues={filters.languages}
            onChange={(value) => toggleFilter("languages", value)}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Filter by Type</h2>
          <FilterSection
            title="Filter by Type"
            options={TYPE_OPTIONS}
            selectedValues={filters.types}
            onChange={(value) => toggleFilter("types", value)}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Filter by Level</h2>
          <FilterSection
            title="Filter by Level"
            options={LEVEL_OPTIONS}
            selectedValues={filters.levels}
            onChange={(value) => toggleFilter("levels", value)}
          />
        </div>

        {(filters.languages.length > 0 ||
          filters.types.length > 0 ||
          filters.levels.length > 0) && (
          <button
            onClick={clearFilters}
            className="text-sm text-cyan-600 hover:text-cyan-700"
          >
            Clear all filters
          </button>
        )}
      </aside>

      {/* Main Content */}
      <main className="w-3/4 ml-8 bg-cyan-100 p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-8">Learning Resources</h1>
        {filteredResources.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No resources match your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white"
              >
                <div className="flex items-center mb-4">
                  {getIcon(resource.type)}
                  <span className="ml-2 text-sm text-gray-500 capitalize">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2"> 
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700"
                  >
                    {resource.title}
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-cyan-400 text-cyan-800 px-2 py-1 rounded">
                    {resource.language}
                  </span>
                  <span className="text-sm bg-gray-400 text-gray-800 px-2 py-1 rounded">
                    {resource.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
