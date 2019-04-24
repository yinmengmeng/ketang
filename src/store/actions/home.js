import * as Types from "../action-types";
export default {
    setCurrentLesson(type) {
        return {
            type: Types.SET_CURRENT_LESSON,
            lesson: type
        };
    }
};
