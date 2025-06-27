import { Quiz } from '../quizzes.types';

export const ep1PilotQuizzes: Quiz[] = [
  {
    id: 'ep1-pilot-basics',
    title: 'დაე იყოს ნათელი - საპილოტე ეპიზოდი',
    description: 'ქართული ტექ პოდკასტის პირველი ეპიზოდის შესახებ კითხვები.',
    categories: ['general', 'episode'],
    difficulty: 'easy',
    episodeLink: '/episodes/dae-iyos-nateli',
    estimatedTime: 3,
    questions: [
      {
        id: 'ep1-q1',
        question: 'რა არის Devtherapy-ს პირველი ეპიზოდის სახელი?',
        options: ['დაე იყოს ნათელი', 'ტექნიკური საწყისები', 'პროგრამირების ბაზარი', 'კოდის თერაპია'],
        correctAnswerIndex: 0,
        explanation: 'პირველი ეპიზოდი იწოდება "დაე იყოს ნათელი" და იყო საპილოტე ეპიზოდი.',
      },
      {
        id: 'ep1-q2',
        question: 'რომელ წელს გამოვიდა პირველი ეპიზოდი?',
        options: ['2023', '2024', '2025', '2022'],
        correctAnswerIndex: 1,
        explanation: 'პირველი ეპიზოდი გამოვიდა 2024 წლის ოქტომბერში.',
      },
      {
        id: 'ep1-q3',
        question: 'რა ფორმატის იყო პირველი ეპიზოდი?',
        options: ['სტუმრის ინტერვიუ', 'საპილოტე ეპიზოდი', 'ტექნიკური ღრმა ანალიზი', 'კითხვა-პასუხი'],
        correctAnswerIndex: 1,
        explanation: 'პირველი ეპიზოდი იყო საპილოტე ფორმატის, სადაც წარდგენილი იყო პოდკასტის კონცეფცია.',
      },
    ],
  },
];
