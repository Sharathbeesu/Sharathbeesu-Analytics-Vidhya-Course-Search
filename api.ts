import { Course } from '../types/course';
import { courses } from '../data/courses';

export const searchCourses = async (query: string): Promise<Course[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  if (!query) return [];

  const searchTerms = query.toLowerCase().split(' ');
  
  return courses.filter(course => {
    const searchableText = `
      ${course.title} 
      ${course.description} 
      ${course.topics.join(' ')} 
      ${course.level}
    `.toLowerCase();

    return searchTerms.every(term => searchableText.includes(term));
  });
};