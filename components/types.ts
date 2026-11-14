export type Question = {
  id: string;
  question: string;
  options: { text: string; isAnswer: boolean }[];
};
