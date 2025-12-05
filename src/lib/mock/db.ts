import type { User, Course, PointActivity, Badge } from '../../types';

const SIMULATED_DELAY = 400;

export const delay = (ms = SIMULATED_DELAY) => new Promise(resolve => setTimeout(resolve, ms));

class MockDB {
    private getStorage(key: string) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    private setStorage(key: string, data: any[]) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // --- Users ---
    get users(): User[] {
        let users = this.getStorage('users');
        if (users.length === 0) {
            // Seed Admin
            const adminUser: User = {
                id: '1',
                name: 'Admin User',
                email: 'admin@edusphere.com',
                department: 'Administration',
                role: 'admin',
                points: 1000,
                rank: 1,
                badges: [],
                avatar: ''
            };
            users = [adminUser];
            this.setStorage('users', users);
        }
        return users;
    }

    saveUser(user: User) {
        const users = this.users;
        const index = users.findIndex(u => u.id === user.id);
        if (index >= 0) {
            users[index] = user;
        } else {
            users.push(user);
        }
        this.setStorage('users', users);
        return user;
    }

    findUserByEmail(email: string) {
        return this.users.find(u => u.email === email);
    }

    // --- Courses ---
    get courses(): Course[] {
        let courses = this.getStorage('courses');
        if (courses.length === 0) {
            // Seed Courses
            const seedCourses: Course[] = [
                {
                    id: 'c1',
                    title: 'Advanced React Patterns',
                    code: 'CS412',
                    description: 'Deep dive into React performance and architecture.',
                    department: 'Computer Science',
                    semester: 'Fall 2024',
                    credits: 3,
                    capacity: 30,
                    progress: 0,
                    instructor: 'Dr. Smith',
                    isOffline: false,
                    isBookmarked: false,
                    materials: []
                },
                {
                    id: 'c2',
                    title: 'Data Structures',
                    code: 'CS201',
                    description: 'Fundamental data structures and algorithms.',
                    department: 'Computer Science',
                    semester: 'Fall 2024',
                    credits: 4,
                    capacity: 50,
                    progress: 0,
                    instructor: 'Prof. Johnson',
                    isOffline: false,
                    isBookmarked: false,
                    materials: []
                }
            ];
            courses = seedCourses;
            this.setStorage('courses', courses);
        }
        return courses;
    }

    saveCourse(course: Course) {
        const courses = this.courses;
        const index = courses.findIndex(c => c.id === course.id);
        if (index >= 0) {
            courses[index] = course;
        } else {
            courses.push(course);
        }
        this.setStorage('courses', courses);
        return course;
    }

    // --- Gamification ---
    get pointActivities(): PointActivity[] {
        return this.getStorage('pointActivities');
    }

    addPointActivity(activity: PointActivity) {
        const activities = this.pointActivities;
        activities.unshift(activity);
        this.setStorage('pointActivities', activities);
    }
}

export const db = new MockDB();
