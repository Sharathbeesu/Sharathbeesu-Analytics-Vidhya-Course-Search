import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  onFilterLevel: (level: string) => void;
  onFilterDuration: (duration: string) => void;
  selectedLevel: string;
  selectedDuration: string;
}

export const Filters: React.FC<FiltersProps> = ({
  onFilterLevel,
  onFilterDuration,
  selectedLevel,
  selectedDuration
}) => {
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const durations = ["All", "Short (1-3 weeks)", "Medium (4-6 weeks)", "Long (7+ weeks)"];

  return (
    <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 items-center">
      <div className="flex items-center gap-2">
        <Filter size={20} className="text-blue-600" />
        <span className="text-gray-700 font-medium">Filters:</span>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <select
          value={selectedLevel}
          onChange={(e) => onFilterLevel(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>

        <select
          value={selectedDuration}
          onChange={(e) => onFilterDuration(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          {durations.map(duration => (
            <option key={duration} value={duration}>{duration}</option>
          ))}
        </select>
      </div>
    </div>
  );
};