import React from 'react';
import { Clock, BookOpen, Tag } from 'lucide-react';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={course.imageUrl} 
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={16} />
            <span>{course.level}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.topics.map((topic, index) => (
            <span 
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
            >
              <Tag size={14} />
              {topic}
            </span>
          ))}
        </div>

        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Course
        </a>
      </div>
    </div>
  );
};