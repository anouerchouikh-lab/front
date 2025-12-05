import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../ui/Input';
import { useDebounce } from '../../hooks/useDebounce';

interface CourseSearchProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

export const CourseSearch: React.FC<CourseSearchProps> = ({
    onSearch,
    placeholder = 'Search courses, instructors...',
}) => {
    const [query, setQuery] = React.useState('');
    const debouncedQuery = useDebounce(query, 300);

    React.useEffect(() => {
        onSearch(debouncedQuery);
    }, [debouncedQuery, onSearch]);

    return (
        <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 pointer-events-none" />
            <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="pl-12"
                aria-label="Search courses"
            />
        </div>
    );
};
