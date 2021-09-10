export const SEARCH_RESULT = 'SEARCH_RESULT';

export const getSearchResult = search => ({
  type: SEARCH_RESULT,
  payload: search
});
