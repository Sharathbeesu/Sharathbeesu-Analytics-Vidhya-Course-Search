import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { CourseGrid } from './components/CourseGrid';
import { Filters } from './components/Filters';
import { useSearchCourses } from './hooks/useSearchCourses';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  
  const { data: searchResults = [], isLoading } = useSearchCourses(searchQuery);

  const filteredCourses = useMemo(() => {
    return searchResults.filter(course => {
      const levelMatch = selectedLevel === 'All' || course.level.includes(selectedLevel);
      
      let durationMatch = true;
      if (selectedDuration !== 'All') {
        const weeks = parseInt(course.duration);
        if (selectedDuration === 'Short (1-3 weeks)') {
          durationMatch = weeks <= 3;
        } else if (selectedDuration === 'Medium (4-6 weeks)') {
          durationMatch = weeks >= 4 && weeks <= 6;
        } else if (selectedDuration === 'Long (7+ weeks)') {
          durationMatch = weeks >= 7;
        }
      }

      return levelMatch && durationMatch;
    });
  }, [searchResults, selectedLevel, selectedDuration]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Search className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">
              Analytics Vidhya Course Search
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          <SearchBar onSearch={setSearchQuery} />
          <Filters
            onFilterLevel={setSelectedLevel}
            onFilterDuration={setSelectedDuration}
            selectedLevel={selectedLevel}
            selectedDuration={selectedDuration}
          />
          <CourseGrid courses={filteredCourses} loading={isLoading} />
        </div>
      </main>
    </div>
  );
}

export default App;