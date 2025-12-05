import type { Course, Assignment, Competition, User, Badge, PointActivity, Rank } from '../types';

// Mock Courses
export const mockCourses: Course[] = [
    {
        id: '1',
        code: 'CS101',
        title: 'Introduction to Computer Science',
        description: 'Learn the fundamentals of programming and computational thinking',
        instructor: 'Dr. Sarah Johnson',
        department: 'Computer Science',
        semester: 'Fall 2024',
        progress: 75,
        isOffline: true,
        isBookmarked: true,
        materials: [
            { id: '1', title: 'Week 1 Slides', type: 'slides', url: '#', size: '2.5 MB' },
            { id: '2', title: 'Lecture Recording', type: 'video', url: '#', size: '150 MB' },
        ],
    },
    {
        id: '2',
        code: 'MATH201',
        title: 'Linear Algebra',
        description: 'Vectors, matrices, and linear transformations',
        instructor: 'Prof. Michael Chen',
        department: 'Mathematics',
        semester: 'Fall 2024',
        progress: 45,
        isOffline: false,
        isBookmarked: false,
        materials: [],
    },
    {
        id: '3',
        code: 'PHYS150',
        title: 'Classical Mechanics',
        description: 'Newton\'s laws, energy, and momentum',
        instructor: 'Dr. Emily Rodriguez',
        department: 'Physics',
        semester: 'Fall 2024',
        progress: 90,
        isOffline: true,
        isBookmarked: true,
        materials: [],
    },
    {
        id: '4',
        code: 'CS250',
        title: 'Data Structures & Algorithms',
        description: 'Advanced programming concepts and algorithm design',
        instructor: 'Dr. James Wilson',
        department: 'Computer Science',
        semester: 'Fall 2024',
        progress: 60,
        isOffline: false,
        isBookmarked: true,
        materials: [],
    },
    {
        id: '5',
        code: 'ENG102',
        title: 'Technical Writing',
        description: 'Professional communication for engineers',
        instructor: 'Prof. Lisa Anderson',
        department: 'English',
        semester: 'Fall 2024',
        progress: 30,
        isOffline: false,
        isBookmarked: false,
        materials: [],
    },
    {
        id: '6',
        code: 'CS300',
        title: 'Database Systems',
        description: 'Relational databases, SQL, and data modeling',
        instructor: 'Dr. Robert Kim',
        department: 'Computer Science',
        semester: 'Spring 2024',
        progress: 100,
        isOffline: true,
        isBookmarked: false,
        materials: [],
    },
];

// Mock Assignments
export const mockAssignments: Assignment[] = [
    {
        id: '1',
        courseId: '1',
        title: 'Binary Search Tree Implementation',
        description: 'Implement a balanced BST with insert, delete, and search operations',
        dueDate: new Date('2024-12-15'),
        status: 'in-progress',
        type: 'individual',
        maxScore: 100,
        submissions: [],
        rubric: [
            { id: '1', name: 'Correctness', description: 'Code works as expected', maxPoints: 40 },
            { id: '2', name: 'Code Quality', description: 'Clean, readable code', maxPoints: 30 },
            { id: '3', name: 'Documentation', description: 'Well-documented', maxPoints: 30 },
        ],
    },
    {
        id: '2',
        courseId: '2',
        title: 'Matrix Operations Project',
        description: 'Group project on matrix multiplication optimization',
        dueDate: new Date('2024-12-20'),
        status: 'not-started',
        type: 'group',
        maxScore: 150,
        submissions: [],
        rubric: [],
    },
    {
        id: '3',
        courseId: '1',
        title: 'Algorithm Analysis Essay',
        description: 'Write a 5-page analysis of sorting algorithms',
        dueDate: new Date('2024-12-10'),
        status: 'submitted',
        type: 'individual',
        maxScore: 100,
        score: 85,
        submissions: [],
        rubric: [],
    },
];

// Mock Competitions
export const mockCompetitions: Competition[] = [
    {
        id: '1',
        title: 'Winter Coding Challenge 2024',
        description: 'Solve algorithmic problems and compete for prizes',
        startDate: new Date('2024-12-01'),
        endDate: new Date('2024-12-31'),
        status: 'active',
        participants: 156,
        maxTeamSize: 3,
        prize: '$5000 + Internship Opportunities',
        challenges: [
            {
                id: '1',
                title: 'Two Sum Problem',
                description: 'Find two numbers that add up to a target',
                difficulty: 'easy',
                points: 100,
            },
            {
                id: '2',
                title: 'Graph Traversal',
                description: 'Implement BFS and DFS algorithms',
                difficulty: 'medium',
                points: 250,
            },
        ],
        leaderboard: [
            {
                rank: 1,
                previousRank: 2,
                teamId: '1',
                teamName: 'Code Warriors',
                members: ['Alice', 'Bob', 'Charlie'],
                score: 2500,
                lastSubmission: new Date('2024-12-05'),
            },
            {
                rank: 2,
                previousRank: 1,
                teamId: '2',
                teamName: 'Algorithm Masters',
                members: ['David', 'Eve'],
                score: 2400,
                lastSubmission: new Date('2024-12-04'),
            },
        ],
    },
    {
        id: '2',
        title: 'AI Hackathon',
        description: 'Build innovative AI solutions',
        startDate: new Date('2025-01-15'),
        endDate: new Date('2025-01-17'),
        status: 'upcoming',
        participants: 89,
        maxTeamSize: 4,
        prize: '$10000',
        challenges: [],
        leaderboard: [],
    },
];

// Mock Current User
export const mockCurrentUser: User = {
    id: 'user1',
    name: 'Alex Student',
    email: 'alex@edusphere.edu',
    avatar: '',
    department: 'Computer Science',
    role: 'student',
    points: 3450,
    rank: 12,
    badges: [
        {
            id: '1',
            name: 'Early Bird',
            description: 'Submitted 5 assignments early',
            icon: '🐦',
            earnedAt: new Date('2024-11-01'),
            isLocked: false,
        },
        {
            id: '2',
            name: 'Code Master',
            description: 'Achieved 100% on 3 coding assignments',
            icon: '💻',
            earnedAt: new Date('2024-11-15'),
            isLocked: false,
        },
        {
            id: '3',
            name: 'Team Player',
            description: 'Completed 5 group projects',
            icon: '🤝',
            isLocked: true,
        },
    ],
};

// Mock Point Activities
export const mockPointActivities: PointActivity[] = [
    {
        id: '1',
        userId: 'user1',
        points: 100,
        activity: 'Completed CS101 Assignment 3',
        timestamp: new Date('2024-12-01'),
        category: 'assignment',
    },
    {
        id: '2',
        userId: 'user1',
        points: 50,
        activity: 'Attended Virtual Session',
        timestamp: new Date('2024-12-02'),
        category: 'participation',
    },
    {
        id: '3',
        userId: 'user1',
        points: 250,
        activity: 'Won Coding Challenge',
        timestamp: new Date('2024-12-03'),
        category: 'competition',
    },
];

// Mock Ranks
export const mockRanks: Rank[] = [
    { level: 1, name: 'Novice', minPoints: 0, maxPoints: 999, color: '#9CA3AF' },
    { level: 2, name: 'Apprentice', minPoints: 1000, maxPoints: 2499, color: '#60A5FA' },
    { level: 3, name: 'Scholar', minPoints: 2500, maxPoints: 4999, color: '#A78BFA' },
    { level: 4, name: 'Expert', minPoints: 5000, maxPoints: 9999, color: '#F59E0B' },
    { level: 5, name: 'Master', minPoints: 10000, maxPoints: Infinity, color: '#EF4444' },
];

// Mock Leaderboard Data
export const mockLeaderboard = [
    { rank: 1, previousRank: 1, userId: 'u1', name: 'Emma Wilson', avatar: '', department: 'Computer Science', points: 8750, weeklyPoints: 450 },
    { rank: 2, previousRank: 3, userId: 'u2', name: 'Liam Chen', avatar: '', department: 'Mathematics', points: 8200, weeklyPoints: 520 },
    { rank: 3, previousRank: 2, userId: 'u3', name: 'Sophia Rodriguez', avatar: '', department: 'Physics', points: 7980, weeklyPoints: 380 },
    { rank: 4, previousRank: 5, userId: 'u4', name: 'Noah Kim', avatar: '', department: 'Computer Science', points: 7650, weeklyPoints: 600 },
    { rank: 5, previousRank: 4, userId: 'u5', name: 'Olivia Taylor', avatar: '', department: 'Engineering', points: 7500, weeklyPoints: 420 },
    { rank: 12, previousRank: 14, userId: 'user1', name: 'Alex Student', avatar: '', department: 'Computer Science', points: 3450, weeklyPoints: 280 },
];
