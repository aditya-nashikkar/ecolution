import { QuestionOption } from './question-option';
import { Fact } from './fact';

export interface UserQuestion {
    question: string;
    options: Array<QuestionOption>;
    radioButtonName: string;
    factImage: string;
    selectedValue: string;
    fact: Fact;
}
