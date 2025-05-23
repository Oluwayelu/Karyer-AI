import { Assessment } from "@prisma/client";

export type Questions = {
  question: string;
  correctAnswer: string;
  explanation: string;
};

export type Industries = {
  id: string;
  name: string;
  subIndustries: string[];
};
