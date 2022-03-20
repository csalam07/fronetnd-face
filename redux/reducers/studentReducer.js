import { STUDENT_TYPES } from '../actions/studentAction';
import { EditData, DeleteData } from '../actions/globalTypes';

const initialState = {
  loading: false,
  students: [],
  results: 0,
  page: 2,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_TYPES.CREATE_STUDENT:
      return {
        ...state,
        students: [action.payload, ...state.students],
      };
    case STUDENT_TYPES.LOADING_STUDENT:
      return {
        ...state,
        loading: action.payload,
      };
    case STUDENT_TYPES.GET_STUDENT:
      return {
        ...state,
        students: action.payload.students,
        result: action.payload.result,
        page: action.payload.page,
      };
    case STUDENT_TYPES.UPDATE_STUDENT:
      return {
        ...state,
        students: EditData(state.students, action.payload._id, action.payload),
      };
    case STUDENT_TYPES.DELETE_STUDENT:
      return {
        ...state,
        students: DeleteData(state.students, action.payload._id),
      };
    default:
      return state;
  }
};

export default studentReducer;
