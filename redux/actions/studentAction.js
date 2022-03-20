import { GLOBALTYPES } from './globalTypes';
import { postDataAPI, putDataAPI, deleteDataAPI } from '../../utils/fetchData';

export const STUDENT_TYPES = {
  CREATE_STUDENT: 'CREATE_STUDENT',
  UPDATE_STUDENT: 'UPDATE_STUDENT',
  DELETE_STUDENT: 'DELETE_STUDENT',
  GET_STUDENT: 'GET_STUDENT',
};
export const addStudent = (content) => async (dispatch) => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });

    const res = await postDataAPI('student', content);

    dispatch({
      type: STUDENT_TYPES.CREATE_STUDENT,
      payload: { ...res.data.newStudent },
    });

    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateStudent = (content, url) => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { loading: true },
    });

    const res = await putDataAPI(`student/${url}`, content);

    dispatch({
      type: STUDENT_TYPES.UPDATE_STUDENT,
      payload: { ...res.data.updatedStudent },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = (url) => async (dispatch) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { loading: true },
    });

    const res = await deleteDataAPI(`student/${url}`);

    dispatch({
      type: STUDENT_TYPES.DELETE_STUDENT,
      payload: { ...res.data.deletedStudent },
    });
  } catch (error) {
    console.log(error);
  }
};
