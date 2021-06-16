import { QuestionOption } from './question-option';
import { Fact } from './fact';

export interface UserQuestion {
    question: string;
    options: Array<QuestionOption>
    factImage: string;
    fact: Fact;
}
