import type { SuccessStoryType } from "../../types";

interface StoryCardProps {
  story: SuccessStoryType;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
      {/* Wrap the entire article in a link for redirection */}
      <a
        href={story.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{story.title}</h2>
          <div className="flex items-center mb-4">
            <img
              src={story.entrepreneur.avatar}
              alt={story.entrepreneur.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">{story.entrepreneur.name}</p>
              <p className="text-sm text-gray-500">
                {story.entrepreneur.business}
              </p>
            </div>
          </div>
          <p className="text-gray-600 mb-4">{story.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {story.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
