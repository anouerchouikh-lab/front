// User Types
export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    department: string;
    role: 'student' | 'instructor' | 'admin';
    points: number;
    rank: number;
    badges: Badge[];
}

// Course Types
export interface Course {
    id: string;
    code: string;
    title: string;
    description: string;
    instructor: string;
    department: string;
    semester: string;
    credits: number;
    capacity: number;
    progress: number;
    isOffline: boolean;
    isBookmarked: boolean;
    thumbnail?: string;
    materials: CourseMaterial[];
}

export interface CourseMaterial {
    id: string;
    title: string;
    type: 'pdf' | 'video' | 'slides' | 'document';
    url: string;
    size: string;
}

// Assignment Types
export interface Assignment {
    id: string;
    courseId: string;
    title: string;
    description: string;
    dueDate: Date;
    status: 'not-started' | 'in-progress' | 'submitted' | 'graded';
    type: 'individual' | 'group';
    maxScore: number;
    score?: number;
    submissions: Submission[];
    rubric: RubricCriteria[];
    peerReviews?: PeerReview[];
}

export interface Submission {
    id: string;
    assignmentId: string;
    userId: string;
    files: SubmissionFile[];
    submittedAt: Date;
    version: number;
    comments: Comment[];
}

export interface SubmissionFile {
    id: string;
    name: string;
    size: number;
    type: string;
    url: string;
}

export interface RubricCriteria {
    id: string;
    name: string;
    description: string;
    maxPoints: number;
    earnedPoints?: number;
}

export interface PeerReview {
    id: string;
    reviewerId: string;
    submissionId: string;
    rubricScores: { criteriaId: string; score: number }[];
    comments: string;
    submittedAt: Date;
}

export interface Comment {
    id: string;
    userId: string;
    userName: string;
    content: string;
    createdAt: Date;
}

// Session Types
export interface VirtualSession {
    id: string;
    courseId: string;
    title: string;
    startTime: Date;
    endTime: Date;
    status: 'scheduled' | 'live' | 'ended';
    participants: Participant[];
    isRecording: boolean;
    resources: SessionResource[];
}

export interface Participant {
    id: string;
    name: string;
    avatar?: string;
    isMicOn: boolean;
    isCameraOn: boolean;
    isHandRaised: boolean;
    role: 'host' | 'presenter' | 'participant';
}

export interface SessionResource {
    id: string;
    name: string;
    type: string;
    url: string;
    sharedAt: Date;
}

export interface ChatMessage {
    id: string;
    userId: string;
    userName: string;
    content: string;
    timestamp: Date;
    replyTo?: string;
}

export interface Poll {
    id: string;
    question: string;
    options: PollOption[];
    isActive: boolean;
    createdAt: Date;
}

export interface PollOption {
    id: string;
    text: string;
    votes: number;
}

// Competition Types
export interface Competition {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: 'upcoming' | 'active' | 'ended';
    participants: number;
    maxTeamSize: number;
    prize?: string;
    challenges: Challenge[];
    leaderboard: LeaderboardEntry[];
}

export interface Challenge {
    id: string;
    title: string;
    description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    points: number;
    testCases?: TestCase[];
}

export interface TestCase {
    input: string;
    expectedOutput: string;
    isHidden: boolean;
}

export interface LeaderboardEntry {
    rank: number;
    previousRank?: number;
    teamId: string;
    teamName: string;
    members: string[];
    score: number;
    lastSubmission: Date;
}

// Gamification Types
export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
    earnedAt?: Date;
    isLocked: boolean;
}

export interface PointActivity {
    id: string;
    userId: string;
    points: number;
    activity: string;
    timestamp: Date;
    category: 'course' | 'assignment' | 'competition' | 'participation';
}

export interface Rank {
    level: number;
    name: string;
    minPoints: number;
    maxPoints: number;
    color: string;
}

// Exam Types
export interface Exam {
    id: string;
    courseId: string;
    title: string;
    duration: number; // in minutes
    startTime: Date;
    endTime: Date;
    questions: Question[];
    isProctored: boolean;
    allowedAttempts: number;
}

export interface Question {
    id: string;
    type: 'mcq' | 'multiple-select' | 'text' | 'code' | 'essay';
    question: string;
    points: number;
    options?: QuestionOption[];
    answer?: string | string[];
    isFlagged: boolean;
    isAnswered: boolean;
}

export interface QuestionOption {
    id: string;
    text: string;
    isCorrect?: boolean;
}

export interface ExamAttempt {
    id: string;
    examId: string;
    userId: string;
    startedAt: Date;
    submittedAt?: Date;
    answers: ExamAnswer[];
    score?: number;
    autoSavedAt: Date;
}

export interface ExamAnswer {
    questionId: string;
    answer: string | string[];
    answeredAt: Date;
}
