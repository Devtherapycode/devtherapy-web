export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'medium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'hard':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const getScoreBadge = (percentage: number) => {
  if (percentage === 100) return '🧠 Dev Genius';
  if (percentage >= 80) return '🌟 Code Master';
  if (percentage >= 60) return '⚡ Solid Debugger';
  if (percentage >= 40) return '📚 Keep Learning';
  return '💪 Keep Compiling';
};

export const getScoreMessage = (percentage: number) => {
  if (percentage === 100) return 'Perfect! 🎉';
  if (percentage >= 80) return 'Excellent! 🌟';
  if (percentage >= 60) return 'Good job! 👍';
  if (percentage >= 40) return 'Not bad! 📚';
  return 'Keep learning! 💪';
};

export const getScoreColor = (percentage: number) => {
  if (percentage >= 80) return 'text-green-400';
  if (percentage >= 60) return 'text-brand-mint';
  if (percentage >= 40) return 'text-yellow-500';
  return 'text-orange-500';
};

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
};

// Function to shuffle array and return new correct answer index
export const shuffleOptions = (options: string[], correctAnswerIndex: number): { shuffledOptions: string[]; shuffledCorrectAnswerIndex: number } => {
  const optionsWithIndex = options.map((option, index) => ({ option, index }));

  // Fisher-Yates shuffle
  for (let i = optionsWithIndex.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
  }

  const shuffledOptions = optionsWithIndex.map((item) => item.option);
  const shuffledCorrectAnswerIndex = optionsWithIndex.findIndex((item) => item.index === correctAnswerIndex);

  return { shuffledOptions, shuffledCorrectAnswerIndex };
};
