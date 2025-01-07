export type QuestionType = {
    id: number;
    user_name: string;
    user_phone: string;
    user_question: string;
};

export type QuestionDataType = {
    status: boolean;
    data: QuestionType | null;
    message: string;
};
